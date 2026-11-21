# Veqorix — Product requirements and implementation record

## Approved scope
Veqorix.com is a marketing website offering websites, digital marketing, and AI-assisted customer communication to non-technical small-business owners across industries in the USA and Canada, including local and online businesses. Contractors remain welcome but are not the exclusive audience. The owner receives quote requests and follows up directly.

The original contractor-oriented MVP from veq.md included a homepage, six service pages, nine industry pages with live demo previews, four packages and comparison, samples, about, quote form, contact redirect, not-found, privacy and terms. The approved revision broadens general messaging without inventing expertise, clients, results, testimonials, services or industry examples. Preserve existing brand, routes, external demos and real campaign contexts. Only Phase 1 is authorized now; user requested budget-conscious work within 15 credits, but no guaranteed credit cap is available.

## Phase 1 acceptance criteria
- Lead with Websites, Google Ads and Social Media; retain Local SEO & Google Business Profile, AI Receptionist and AI Chat Assistant.
- General copy and metadata speak to small businesses and varied customer goals. Local SEO is explicitly for eligible local businesses; no ranking, revenue or lead guarantees.
- AI services are offered services, not operating integrations on this website.
- All nine industry routes retain trade-specific copy, SEO, inclusions, demo URLs and quote-prefill links. External demo sites are untouched.
- Clearly identify contractor demos as fictional businesses and not client work or the full service audience. Preserve screenshots as alternatives to embedding.
- Preserve supplied figures and contexts: 66.7K followers for consumer electronics across 1,795 posts; +41.3K in five months across five campaigns; 20+ creators / 76M views; approximately 78M combined views; premium dealership strategy and ongoing advertising management. No client names/logos/handles.
- Keep Website, Get Found, Get Calls and Grow, existing comparison, and free-quote price placeholders. Clarify package fit rather than assuming local search/calls for everyone.
- Keep remote-team approach, one point of contact, communication expectations, explicitly labeled testimonial/team placeholders and legal templates.
- Keep branding, sharing identity, mobile quote access and Call option; never show a fictional phone number as callable.
- Quote form has an editable Business type / industry text field, business/contact/location/website information, all six service choices plus Not sure, preferred contact method, optional notes and honeypot.
- Industry prefill remains editable; package context remains editable in project notes. Existing MongoDB records remain intact.
- Save privately before confirming receipt; show retry on saving failure. Never claim notification delivery based on saving.
- Hostinger sender and recipient are contact@veqorix.com, visitor email is Reply-To. Public email is hello@veqorix.com.
- Page metadata, canonicals, organization data, sitemap and robots are retained, without invented address/ratings.

## Architecture
React with React Router, Tailwind, shadcn; FastAPI + Motor/MongoDB; Hostinger SMTP using smtplib. API is POST /api/quotes (plural, despite earlier handoff summary). Frontend uses REACT_APP_BACKEND_URL. Backend uses MONGO_URL and unchanged DB_NAME.
- Frontend data: src/data/site.js, services.js, trades.js
- Shared UI: src/components/{Blocks,Header,Footer,MobileBar,DemoCard,DemoPreview,Packages,Results,Seo,Layout}.jsx
- Pages: src/pages/{Home,ServicePage,IndustryPage,PackagesPage,SamplesPage,AboutPage,QuotePage,LegalPages,NotFound}.jsx
- backend/server.py validates, saves and attempts notification; email_status is pending/sent/failed/not_configured.
- Preserve internal `trade` field for quote storage, now a bounded free-text string instead of Literal list. Existing records are not migrated or altered.
- Package query parameters prefill editable project notes (existing behavior).
- No accounts, private dashboard, payments, uploads or new client systems are included.

## Current implementation (2026-02)
- Updated general-page messaging, service explanations/FAQs and package audience guidance.
- Homepage prioritizes services and places the nine contractor examples after supplied results.
- Inclusive editable business-type input with human-readable trade prefills and updated SMTP content.
- Explicit form error feedback, save-only confirmation, email-status persistence preserved.
- Placeholder phone actions disabled and labeled coming soon; public email and quote access remain working.
- Existing demo screenshots retained; screenshot toggle added for cross-origin embedding failures, which browsers cannot reliably detect automatically.
- Search/share copy and social image updated while preserving logo, colors, canonical addresses, sitemap and all routes.
- Original design_guidelines.json is a historical draft; its invented copy/prices/phone numbers/results are NOT authoritative. Follow this PRD and the user's approved plan, keeping existing styles.
- Comprehensive frontend/backend verification pending; see test_result.md and forthcoming test_reports.

## Known dependency / launch gate
SMTP_PASSWORD is missing. User explicitly chose Continue with saved requests and declined the secure prompt for this revision. Notifications are INACTIVE, not mocked; requests are genuinely stored in MongoDB. Public lead collection requires securely supplied Hostinger mailbox credentials and verified delivery, supported mailbox/DNS settings. Do not claim launch readiness or email delivery. No retry worker or dashboard exists; do not imply automatic retries.

## Independently testable completion steps
1. General pages and metadata: verify six services, four packages and broader copy; retain all nine trade routes/content.
2. Quote submission: submit a non-contractor business, check private persisted data; verify editable trade/package prefills, required fields, phone/email selection, failure handling and honeypot.
3. Preservation checks: compare result figures/context, demos and screenshot toggles, legal/placeholders, mobile navigation/quote access and disabled fake phone links.
4. Integration contract: inspect SMTP From/To/Reply-To without sending; report delivery untested due to missing password.

## Prioritized backlog (not part of this revision)
### P0 — Before public lead collection
- Supply SMTP_PASSWORD securely and verify Hostinger notifications end to end.
- Owner review and approval of site copy and legal templates.
### P1 — Phase 2 credibility and polish
- Approved prices, real phone number, genuine testimonials and team photos when supplied.
- Mobile speed/accessibility tuning toward 90+ Lighthouse target (not guaranteed).
- Pre-render public pages so full content is directly readable by search engines.
- Connect veqorix.com via existing Cloudflare setup.
### P2 — Phase 3 ongoing growth
- Website-visit and quote-request tracking.
- Operational AI chat assistant on Veqorix itself.
- Blog or business guides for the broader audience.
No refactoring or new industry pages/demo sites is required now.
