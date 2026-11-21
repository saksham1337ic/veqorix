import asyncio
import logging
import os
import smtplib
import ssl
import uuid
from contextlib import suppress
from datetime import datetime, timezone
from email.message import EmailMessage
from pathlib import Path
from typing import List, Literal, Optional

from dotenv import load_dotenv
from fastapi import APIRouter, FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, ConfigDict, EmailStr, Field, model_validator
from pymongo import DESCENDING, IndexModel
from starlette.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

client = AsyncIOMotorClient(os.environ["MONGO_URL"])
db = client[os.environ["DB_NAME"]]

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

INDEXES: dict[str, list[IndexModel]] = {
    "quotes": [IndexModel([("created_at", DESCENDING)], name="created_at_desc")],
}


async def ensure_indexes() -> None:
    for collection, models in INDEXES.items():
        for model in models:
            try:
                await db[collection].create_indexes([model])
            except Exception as exc:
                logger.error("ensure_indexes(%s.%s): %s", collection, model.document["name"], exc)


TRADES = {
    "roofing-masonry": "Roofing & Masonry", "hvac": "HVAC", "plumbing": "Plumbing", "electrical": "Electrical",
    "landscaping": "Landscaping", "snow-removal": "Snow Removal", "cleaning": "Cleaning", "painting": "Painting",
    "pest-control": "Pest Control", "other": "Other",
}
NEEDS = {
    "website": "Website", "google-ads": "Google Ads", "social-media": "Social media", "local-seo": "Local SEO",
    "ai-receptionist": "AI receptionist", "ai-chat-assistant": "AI chat assistant", "not-sure": "Not sure",
}

Trade = Literal[tuple(TRADES)]  # type: ignore[valid-type]
Need = Literal[tuple(NEEDS)]  # type: ignore[valid-type]


class QuoteIn(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True, extra="ignore")
    name: str = Field(min_length=1, max_length=120)
    business_name: str = Field(min_length=1, max_length=150)
    trade: Trade
    city: str = Field(min_length=1, max_length=150)
    country: Literal["Canada", "USA", "Other"]
    website: Optional[str] = Field(default=None, max_length=300)
    needs: List[Need] = Field(default_factory=list, max_length=10)
    contact_method: Literal["phone", "email", "text"]
    phone: Optional[str] = Field(default=None, max_length=40)
    email: EmailStr
    message: Optional[str] = Field(default=None, max_length=5000)
    company_fax: Optional[str] = None  # honeypot

    @model_validator(mode="after")
    def phone_when_needed(self):
        if self.contact_method != "email" and not self.phone and not self.company_fax:
            raise ValueError("Please add a phone number so we can call or text you.")
        return self


class QuoteOut(BaseModel):
    ok: bool
    message: str


def build_email(q: QuoteIn, quote_id: str) -> EmailMessage:
    needs = ", ".join(NEEDS[n] for n in q.needs) or "-"
    msg = EmailMessage()
    msg["Subject"] = f"New quote request: {q.business_name} ({TRADES[q.trade]}, {q.city})"
    msg["From"] = f"Veqorix Website <{os.environ['MAIL_FROM']}>"
    msg["To"] = os.environ["QUOTE_NOTIFY_TO"]
    msg["Reply-To"] = str(q.email)
    msg.set_content(
        f"New quote request from veqorix.com\n\n"
        f"Name: {q.name}\nBusiness: {q.business_name}\nTrade: {TRADES[q.trade]}\n"
        f"City/Region: {q.city}\nCountry: {q.country}\nCurrent website: {q.website or '-'}\n"
        f"Needs: {needs}\nBest way to reach: {q.contact_method}\n"
        f"Phone: {q.phone or '-'}\nEmail: {q.email}\n\nMessage:\n{q.message or '-'}\n\n"
        f"Reference: {quote_id}\n"
    )
    return msg


def send_email(msg: EmailMessage) -> None:
    host, port = os.environ["SMTP_HOST"], int(os.environ["SMTP_PORT"])
    ctx = ssl.create_default_context()
    if port == 465:
        with smtplib.SMTP_SSL(host, port, timeout=20, context=ctx) as s:
            s.login(os.environ["SMTP_USER"], os.environ["SMTP_PASSWORD"])
            s.send_message(msg)
    else:
        with smtplib.SMTP(host, port, timeout=20) as s:
            s.starttls(context=ctx)
            s.login(os.environ["SMTP_USER"], os.environ["SMTP_PASSWORD"])
            s.send_message(msg)


app = FastAPI()
api_router = APIRouter(prefix="/api")


@api_router.get("/")
async def root():
    return {"message": "Veqorix API"}


@api_router.post("/quotes", response_model=QuoteOut, status_code=201)
async def create_quote(q: QuoteIn):
    ok = QuoteOut(ok=True, message="Quote request received")
    if q.company_fax:
        logger.info("Honeypot triggered; quote discarded")
        return ok

    quote_id = str(uuid.uuid4())
    doc = q.model_dump(mode="json", exclude={"company_fax"})
    doc.update(id=quote_id, created_at=datetime.now(timezone.utc).isoformat(), email_status="pending")
    await db.quotes.insert_one(doc)

    status = "sent"
    if not os.environ.get("SMTP_PASSWORD"):
        status = "not_configured"
        logger.warning("SMTP_PASSWORD missing; quote %s saved but not emailed", quote_id)
    else:
        try:
            await asyncio.to_thread(send_email, build_email(q, quote_id))
        except Exception as exc:
            status = "failed"
            logger.error("Quote %s email failed: %s", quote_id, type(exc).__name__)
    await db.quotes.update_one({"id": quote_id}, {"$set": {"email_status": status}})
    return ok


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def start_index_build():
    app.state.index_task = asyncio.create_task(ensure_indexes())


@app.on_event("shutdown")
async def shutdown_db_client():
    app.state.index_task.cancel()
    with suppress(asyncio.CancelledError):
        await app.state.index_task
    client.close()
