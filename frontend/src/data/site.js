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
    summary: "A clear, professional website that helps customers understand your offering and take the next step.",
    includes: ["Custom website for your business", "Works great on phones", "Contact and quote forms, with tap-to-call where useful", "Optional care plan: hosting, updates, small edits"],
  },
  {
    id: "get-found",
    name: "Get Found",
    billing: "Monthly",
    price: null,
    summary: "Local visibility for eligible businesses that meet customers in person.",
    includes: ["Everything in Website", "Google Business Profile setup and management for eligible businesses", "Local SEO for your actual locations or service area", "Monthly report in plain English"],
  },
  {
    id: "get-calls",
    name: "Get Calls",
    billing: "Monthly",
    price: null,
    summary: "Google Ads for businesses where relevant phone inquiries are a priority.",
    includes: ["Everything in Website", "Google Ads set up and managed", "Ads aimed at your audience, offering and market", "Monthly report in plain English"],
    featured: true,
  },
  {
    id: "grow",
    name: "Grow",
    billing: "Monthly",
    price: null,
    summary: "A website, Google Ads and social media for businesses ready for ongoing marketing.",
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
  { q: "I'm not technical. How much work is this for me?", a: "We start with a short conversation about your business and customers. You share your business details and available content; we handle the agreed writing, design and setup, with your approval." },
  { q: "How much does it cost?", a: "It depends on your goals and the work involved. Fill in the quote form and we'll send you a clear price. No pressure, no obligation." },
  { q: "Do I own my website?", a: "Yes. Your domain, your content and your photos are yours." },
  { q: "Do you work with businesses in Canada and the USA?", a: "Yes. We work remotely with small businesses across industries in both countries, including local and online businesses. Home-service contractors are welcome too." },
  { q: "Who will I be talking to?", a: "One point of contact who knows your account. You won't get passed around." },
  { q: "Are the sample websites your only industries?", a: "No. The nine sample sites are contractor demos for made-up businesses, not client work or a complete list of who we serve. Browse them for ideas, then tell us what your business needs." },
  { q: "Do I need every service?", a: "No. We recommend help based on your goals. Local SEO is for eligible businesses serving local customers; call handling makes sense only if calls are part of your business." },
];
