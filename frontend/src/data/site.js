// Single source of truth for contact details, packages and prices.
export const SITE = {
  name: "Veqorix",
  url: "https://veqorix.com",
  email: "hello@veqorix.com",
  // PLACEHOLDER — replace with the real phone number (display + tel: format).
  phoneDisplay: "(555) 000-0000",
  phoneTel: "+15550000000",
  phoneIsPlaceholder: true,
};

// Prices are intentionally null. Put a real number here (e.g. "$1,500") and it shows everywhere.
export const PACKAGES = [
  {
    id: "website",
    name: "Website",
    billing: "One-time build + optional monthly care plan",
    price: null,
    carePrice: null,
    summary: "A fast, professional website that gets you calls and quote requests.",
    includes: ["Custom website for your business", "Works great on phones", "Tap-to-call and quote form", "Optional care plan: hosting, updates, small edits"],
  },
  {
    id: "get-found",
    name: "Get Found",
    billing: "Monthly",
    price: null,
    summary: "Show up when people nearby search for what you do.",
    includes: ["Everything in Website", "Google Business Profile set up and managed", "Local SEO for your service area", "Monthly report in plain English"],
  },
  {
    id: "get-calls",
    name: "Get Calls",
    billing: "Monthly",
    price: null,
    summary: "Google Ads that put your phone number in front of people ready to hire.",
    includes: ["Everything in Website", "Google Ads set up and managed", "Ads aimed at your towns and services", "Monthly report in plain English"],
    featured: true,
  },
  {
    id: "grow",
    name: "Grow",
    billing: "Monthly",
    price: null,
    summary: "Website, Google Ads and social media, all handled for you.",
    includes: ["Everything in Get Calls", "Social media posts and short videos", "A monthly content plan", "Monthly report in plain English"],
  },
];

export const COMPARISON = [
  { feature: "Custom website", values: ["yes", "yes", "yes", "yes"] },
  { feature: "Mobile-friendly, fast design", values: ["yes", "yes", "yes", "yes"] },
  { feature: "Monthly hosting & care plan", values: ["optional", "yes", "yes", "yes"] },
  { feature: "Google Business Profile & local SEO", values: ["no", "yes", "no", "no"] },
  { feature: "Google Ads management", values: ["no", "no", "yes", "yes"] },
  { feature: "Social media content & posting", values: ["no", "no", "no", "yes"] },
  { feature: "Monthly performance reports", values: ["no", "yes", "yes", "yes"] },
];

export const priceLabel = (price) => price || "Get a free quote";

export const RESULTS = [
  {
    value: "66.7K",
    label: "Instagram followers, built from scratch",
    detail: "For a consumer electronics brand, across 1,795 posts.",
  },
  {
    value: "+41.3K",
    label: "New followers in 5 months",
    detail: "One 5-month stretch for the same brand, across 5 campaigns: product launches and giveaways.",
  },
  {
    value: "76M",
    label: "Views from 20+ creators",
    detail: "An influencer campaign for a product launch, with 20+ creators.",
  },
  {
    value: "~78M",
    label: "Total campaign views",
    detail: "Combined views across all creator collaborations.",
  },
];

export const RESULTS_WORK = [
  {
    title: "Multi-channel ad strategy for a premium automotive dealership",
    detail: "Google Search, Display, YouTube, Meta lead-gen ads and LinkedIn, with competitor benchmarking and buyer-persona targeting.",
  },
  {
    title: "Ongoing Meta Ads and Google Ads management for a current client",
    detail: "Ad-set and asset-group level tuning: every ad ranked best to worst by performance, device-level reporting and auction-insight tracking.",
  },
  {
    title: "Social accounts managed for brands in consumer tech and automotive",
    detail: "Day-to-day posting and growth for brands in both categories.",
  },
];

export const HOME_FAQ = [
  { q: "I'm not technical. How much work is this for me?", a: "Very little. We have one call to learn about your business, you send a few photos of your work, and we do the rest: writing, design, setup and launch." },
  { q: "How much does it cost?", a: "It depends on what you need and how big your service area is. Fill in the quote form and we'll send you a clear price. No pressure, no obligation." },
  { q: "Do I own my website?", a: "Yes. Your domain, your content and your photos are yours." },
  { q: "Do you work with businesses in Canada and the USA?", a: "Yes. We work remotely with trade businesses across both countries." },
  { q: "Who will I be talking to?", a: "One point of contact who knows your account. You won't get passed around." },
  { q: "Can I see what my site would look like?", a: "Yes. We have a live sample site for nine trades. Open the one for your trade and click around." },
];
