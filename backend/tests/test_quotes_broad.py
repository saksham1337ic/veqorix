# Veqorix quote API: broad free-text industry, validation, honeypot, persistence, privacy, build_email
import os
import sys
import uuid
from pathlib import Path

import pytest
import requests
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv(Path("/app/frontend/.env"))
load_dotenv(Path("/app/backend/.env"))
BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/")
mongo = MongoClient(os.environ["MONGO_URL"])[os.environ["DB_NAME"]]
TAG = f"TEST_{uuid.uuid4().hex[:8]}"
CREATED = []


def payload(**kw):
    base = dict(name=f"{TAG} Tester", business_name=f"{TAG} Online Tutoring Studio", trade="Online tutoring studio",
                city="Toronto, ON", country="Canada", website="", needs=["website"], contact_method="email",
                phone="", email="tester@example.com", message="Line one\nLine two", company_fax="")
    base.update(kw)
    return base


def post(p):
    return requests.post(f"{BASE_URL}/api/quotes", json=p, timeout=20)


@pytest.fixture(scope="module", autouse=True)
def cleanup():
    before = {d["id"]: d for d in mongo.quotes.find({}, {"_id": 0}) if "id" in d}
    yield
    for bn in CREATED:
        mongo.quotes.delete_many({"business_name": bn})
    after = {d["id"]: d for d in mongo.quotes.find({}, {"_id": 0}) if "id" in d}
    for k, v in before.items():
        assert after.get(k) == v, f"pre-existing record {k} changed"


def test_root():
    r = requests.get(f"{BASE_URL}/api/", timeout=10)
    assert r.status_code == 200 and r.json()["message"] == "Veqorix API"


def test_create_non_contractor_persisted():
    bn = f"{TAG} Online Tutoring Studio"
    CREATED.append(bn)
    r = post(payload(needs=["website", "google-ads", "social-media", "local-seo", "ai-receptionist", "ai-chat-assistant", "not-sure"]))
    assert r.status_code == 201, r.text
    assert r.json() == {"ok": True, "message": "Quote request received"}
    doc = mongo.quotes.find_one({"business_name": bn}, {"_id": 0})
    assert doc and doc["trade"] == "Online tutoring studio"
    assert doc["email"] == "tester@example.com" and doc["contact_method"] == "email"
    assert len(doc["needs"]) == 7 and doc["message"] == "Line one\nLine two"
    assert doc["email_status"] == "not_configured"
    assert "company_fax" not in doc and isinstance(doc["id"], str)


def test_trade_max_150():
    bn = f"{TAG} Max150"
    CREATED.append(bn)
    assert post(payload(business_name=bn, trade="x" * 150)).status_code == 201
    assert post(payload(business_name=bn, trade="x" * 151)).status_code == 422


@pytest.mark.parametrize("bad", [
    {"trade": ""}, {"trade": "   "}, {"email": "not-an-email"}, {"name": ""},
    {"contact_method": "phone", "phone": ""}, {"contact_method": "text", "phone": "  "},
    {"needs": ["seo-magic"]}, {"country": "Mexico"},
])
def test_validation_rejects(bad):
    bn = f"{TAG} Invalid"
    CREATED.append(bn)
    r = post(payload(business_name=bn, **bad))
    assert r.status_code == 422, r.text
    assert mongo.quotes.count_documents({"business_name": bn}) == 0


def test_phone_and_text_with_phone_ok():
    bn = f"{TAG} Phone"
    CREATED.append(bn)
    for m in ("phone", "text"):
        assert post(payload(business_name=bn, contact_method=m, phone="416-000-0000")).status_code == 201
    assert mongo.quotes.count_documents({"business_name": bn}) == 2


def test_honeypot_discarded():
    bn = f"{TAG} Bot"
    CREATED.append(bn)
    r = post(payload(business_name=bn, company_fax="spam", contact_method="phone", phone=""))
    assert r.status_code == 201 and r.json()["ok"] is True
    assert mongo.quotes.count_documents({"business_name": bn}) == 0


def test_no_private_list_route():
    assert requests.get(f"{BASE_URL}/api/quotes", timeout=10).status_code in (404, 405)
    assert requests.get(f"{BASE_URL}/api/quotes/abc", timeout=10).status_code in (404, 405)


def test_build_email_headers_and_body():
    sys.path.insert(0, "/app/backend")
    import server
    q = server.QuoteIn(**payload(business_name="Acme\nInjected: x", trade="Artisan bakery & cafe"))
    msg = server.build_email(q, "ref-1")
    assert "contact@veqorix.com" in msg["From"]
    assert msg["To"] == "contact@veqorix.com"
    assert msg["Reply-To"] == "tester@example.com"
    assert "\n" not in msg["Subject"]
    body = msg.get_content()
    assert "Business type / industry: Artisan bakery & cafe" in body
    assert "Reference: ref-1" in body
