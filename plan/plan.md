# Veqorix.com — Main Marketing Site

A plain-spoken marketing site for Veqorix, which builds websites and gets customers for small home-service businesses in Canada and the USA.
It explains the six services and four packages, shows the 9 live trade demo sites and the real anonymized campaign results, and turns visitors into quote requests.

## Who it's for
- Busy owner-operators of small trade businesses (roofing, masonry, HVAC, plumbing, electrical, landscaping, snow removal, cleaning, painting, pest control). They're not technical and mostly browse on a phone.
- The Veqorix owner, who gets every quote request by email.

## Core features and experience
- **Homepage**: hero, the problem, what we do (all 6 services, with Websites, Google Ads and Social Media first), "See it for your trade" (9 demo cards), how it works, packages, why Veqorix, results, FAQ and a final call to action.
- **6 service pages** (Websites, Google Ads, Social Media, Local SEO / Google Business Profile, AI Receptionist, AI Chat Assistant). Each has a plain-language hero, what you get, how it works, who it's for, pricing ("Get a free quote"), 3–4 FAQs and a call to action.
- **9 industry pages** (`/industries/[trade]`). Each has a trade-specific headline, 2–3 pain points, what that trade's site includes, a live embedded preview of that trade's demo with an "Open live demo" button, the four packages and a call to action that pre-fills the trade on the quote form.
- **Packages page**: Website, Get Found, Get Calls and Grow side by side, plus the feature comparison table from the brief. Every price reads "Get a free quote" and links to the form. All prices live in one data file and are empty for now, so a real number can go in later without editing page copy.
- **Samples page**: all 9 demos in a gallery with live embedded previews, trade names and "See live demo" buttons that open the real site.
- **Results section**: the real, anonymized numbers from the brief, used exactly as written (66.7K followers, +41.3K in 5 months, 20+ creators / 76M views, ~78M total views, the multi-channel dealership strategy, ongoing Meta and Google Ads management). No client names, logos or handles.
- **"What clients say"**: a clearly marked placeholder ("PLACEHOLDER — add a real testimonial"), kept separate from Results.
- **About page**: who we are and how we work (remote team, one point of contact, fast communication), with a placeholder for team photos and names.
- **Quote form** (`/quote`) with all the fields from the brief. It has a hidden anti-spam field, pre-fills the trade from `?trade=slug`, and shows a thank-you message after sending. Each request is saved and emailed to contact@veqorix.com from your Hostinger mailbox. `/contact` redirects here.
- **Always-visible mobile bar** with "Call" and "Get a free quote". The call button uses a placeholder number until you supply the real one, which goes in one place.
- **Privacy and Terms** pages marked "TEMPLATE — review before publishing", plus a friendly 404 page.
- **Custom Veqorix logo** (wordmark and icon) that matches the brand, also used as the favicon and social-share image.
- **Search basics**: a title and description for each page aimed at searches like "website for HVAC company", plus share tags, sitemap.xml, robots.txt, canonical links and Organization info with no address or reviews.

## User flow
1. A trade owner lands on the homepage or an industry page from search or a cold email.
2. They scroll through the services, look at their trade's live demo, check packages and see the results.
3. They tap "Get a free quote" (always visible on mobile), fill in the form and see a thank-you message.
4. Veqorix gets an email with all the details and replies to the owner directly.

## UI/UX feel
- Friendly, direct, local and confident, like a helpful contractor rather than a tech company. No emoji and no hype words.
- Large readable text, high contrast and big tap targets, made for a 40-something owner on a phone.
- Short sections, concrete wording and clear calls to action on every screen.

## Implementation phases
**Phase 1 — MVP (built now)**
- Every page in the sitemap: home, 6 services, 9 industries, packages, samples, about, quote, contact redirect, privacy, terms and 404.
- Working quote form with email to contact@veqorix.com, the logo, the mobile call/quote bar, the single price source and the search basics above.

**Phase 2**
- Add the real prices, phone number, testimonials and team photos as you supply them.
- Speed and accessibility tuning toward a 90+ mobile Lighthouse score, plus pre-rendered pages so search engines read each page's text directly.
- Connect veqorix.com through Cloudflare DNS.

**Phase 3**
- Website visit and quote-request tracking (for example, Google Analytics conversions).
- An AI chat assistant on veqorix.com itself, to show off that service.
- A blog or trade guides for local SEO content.

## Assumptions
- Quote emails go to contact@veqorix.com, sent from that same Hostinger mailbox. Replying to an email goes straight to the visitor. You will enter the mailbox password, or an app password, in a secure prompt during the build. hello@veqorix.com stays the email shown publicly on the site, as the brief says.
- No private leads page or login. Requests are emailed and also kept on file as a backup.
- The phone number is a clearly marked placeholder until you supply it.
- Demo previews are live embeds. If a demo site refuses to be embedded, or the embed won't load, that card falls back to a screenshot and still has the "See live demo" button.
- A logo is designed for Veqorix. You can swap it out if you have your own later.
- The feature comparison table follows the suggested matrix in the brief.
- Industry pain points, service FAQs and other page copy are written fresh in the brand voice. Nothing invents statistics, reviews, ratings or client names, and nothing mentions Sinnovation, DMARK or other outside brands.
- US/Canadian English throughout.
- The site is served from Emergent hosting. The exact DNS records for Cloudflare are confirmed at go-live, and the demo sites stay on Vercel untouched.
