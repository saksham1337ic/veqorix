import { Link } from "react-router-dom";
import { ArrowRight, PhoneOff, Clock, EyeOff, UserRound, MessageCircle, MapPinned, Wrench } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SectionHead, CtaButtons, FinalCta, Faq } from "@/components/Blocks";
import { DemoCard } from "@/components/DemoCard";
import { PackageGrid } from "@/components/Packages";
import { Results, Testimonials } from "@/components/Results";
import { SERVICES } from "@/data/services";
import { TRADES } from "@/data/trades";
import { HOME_FAQ } from "@/data/site";

const PROBLEMS = [
  { icon: PhoneOff, t: "The right customers aren't finding you", d: "People need a clear reason to choose your business. A weak online presence makes that harder." },
  { icon: EyeOff, t: "Your website is old, slow or missing", d: "A confusing website can leave visitors unsure what you offer or how to take the next step." },
  { icon: Clock, t: "You don't have time for marketing", d: "Running the business comes first. Content, ads and customer questions keep piling up." },
];

const STEPS = [
  { t: "Tell us about your business", d: "Share your audience, goals and what you need help with. The quote form takes about two minutes." },
  { t: "Get a clear plan and price", d: "We tell you what we'd do, what it costs and how long it takes. No pressure." },
  { t: "We get to work", d: "We handle the agreed website, marketing or communication setup. You review it with us." },
  { t: "Know what's working", d: "For ongoing services, get a plain-English report on progress toward the goals we agreed." },
];

const WHY = [
  { icon: Wrench, t: "Shaped around your business", d: "We start with your customers and goals, then recommend the services that fit. Not every business needs the same plan." },
  { icon: UserRound, t: "One point of contact", d: "One person who knows your business. No getting passed around." },
  { icon: MessageCircle, t: "Plain talk, fast replies", d: "No jargon. We explain what we're doing, why it matters and what we need from you." },
  { icon: MapPinned, t: "Canada and the USA", d: "We work remotely with small businesses across industries, serving local and online customers." },
];

const Hero = () => (
  <section className="relative overflow-hidden border-b border-[#E2E0D8]" data-testid="home-hero">
    <div className="container-x grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
      <div>
        <p className="eyebrow rise">For small businesses in Canada and the USA</p>
        <h1 className="rise rise-1 mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl" data-testid="home-title">
          A clearer website. <span className="text-[#D94814]">Marketing with purpose.</span>
        </h1>
        <p className="rise rise-2 mt-6 max-w-xl text-lg leading-relaxed text-[#495560] sm:text-xl" data-testid="home-intro">
          Websites, Google Ads, social media and AI-assisted customer communication for small businesses across industries. Local or online, we start with your customers and your goals.
        </p>
        <div className="rise rise-3 mt-8"><CtaButtons /></div>
        <a href="#services" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1D3A5F] underline underline-offset-4 hover:text-[#D94814]" data-testid="hero-services-link">
          Find the help you need <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="rise rise-2 relative">
        <div className="absolute -right-6 -top-6 hidden h-full w-full rounded-2xl bg-[#E89B10]/20 lg:block" />
        <div className="relative rounded-xl border-2 border-[#E2E0D8] bg-white p-6 sm:p-8" data-testid="hero-service-overview">
          <p className="eyebrow">Start with what you need</p>
          <h2 className="mt-3 font-display text-2xl font-bold">Practical help, without the jargon</h2>
          <div className="mt-6 divide-y divide-[#E2E0D8]">
            {SERVICES.filter((s) => s.primary).map(({ slug, name, blurb, icon: Icon }) => (
              <Link key={slug} to={`/${slug}`} className="group flex items-start gap-4 py-5 transition-colors hover:text-[#D94814]" data-testid={`hero-service-${slug}`}>
                <Icon className="mt-1 h-6 w-6 shrink-0 text-[#D94814]" />
                <div><h3 className="font-display text-lg font-bold">{name}</h3><p className="mt-1 text-[#495560]">{blurb}</p></div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0" />
              </Link>
            ))}
          </div>
          <Link to="/samples" className="mt-5 inline-flex min-h-12 items-center gap-2 font-semibold text-[#1D3A5F] underline underline-offset-4" data-testid="hero-samples-link">Browse example websites <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="py-20 sm:py-24" data-testid="home-problem">
    <div className="container-x">
      <SectionHead eyebrow="The problem" title="You're great at the work. Getting found is the hard part." />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {PROBLEMS.map(({ icon: I, t, d }) => (
          <div key={t} className="rounded-xl border-2 border-[#E2E0D8] bg-white p-6">
            <I className="h-8 w-8 text-[#D94814]" />
            <h3 className="mt-4 font-display text-xl font-bold">{t}</h3>
            <p className="mt-2 text-[#495560]">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  const main = SERVICES.filter((s) => s.primary);
  const more = SERVICES.filter((s) => !s.primary);
  return (
    <section id="services" className="scroll-mt-24 border-y border-[#E2E0D8] bg-[#F4F3EF] py-20 sm:py-24" data-testid="home-services">
      <div className="container-x">
        <SectionHead eyebrow="What we do" title="Be understood. Reach customers. Stay in touch." sub="Start with a clear website, relevant advertising or a consistent social presence. Add local-search or AI-assisted communication support when it fits your business." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {main.map(({ slug, name, blurb, icon: I }) => (
            <Link key={slug} to={`/${slug}`} className="group rounded-xl border-2 border-[#E2E0D8] bg-white p-7 transition-[border-color,transform] hover:-translate-y-1 hover:border-[#D94814]" data-testid={`service-card-${slug}`}>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#181E24] text-[#E89B10]"><I className="h-7 w-7" /></span>
              <h3 className="mt-5 font-display text-2xl font-black">{name}</h3>
              <p className="mt-2 text-lg text-[#495560]">{blurb}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#D94814]">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {more.map(({ slug, name, blurb, icon: I }) => (
            <Link key={slug} to={`/${slug}`} className="flex gap-4 rounded-xl border border-[#E2E0D8] bg-white/70 p-5 transition-colors hover:border-[#C5C0B3] hover:bg-white" data-testid={`service-card-${slug}`}>
              <I className="mt-1 h-6 w-6 shrink-0 text-[#1D3A5F]" />
              <div><h3 className="font-display text-lg font-bold">{name}</h3><p className="mt-1 text-[15px] text-[#495560]">{blurb}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trades = () => (
  <section className="py-20 sm:py-24" data-testid="home-trades">
    <div className="container-x">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHead eyebrow="Example websites" title="Explore nine contractor demos" sub="Made-up businesses, real working websites. These examples show our website approach—not client work or the full range of businesses we serve." />
        <Link to="/samples" className="btn-outline shrink-0" data-testid="home-all-samples-btn">See all samples</Link>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TRADES.map((t) => <DemoCard key={t.slug} trade={t} live={false} />)}
      </div>
    </div>
  </section>
);

const How = () => (
  <section className="border-y border-[#E2E0D8] bg-white py-20 sm:py-24" data-testid="home-how">
    <div className="container-x">
      <SectionHead eyebrow="How it works" title="A clear plan, from first conversation onward" />
      <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s.t} className="border-t-4 border-[#D94814] pt-5">
            <span className="font-display text-4xl font-black text-[#C5C0B3]">0{i + 1}</span>
            <h3 className="mt-2 font-display text-xl font-bold">{s.t}</h3>
            <p className="mt-2 text-[#495560]">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const Why = () => (
  <section className="py-20 sm:py-24" data-testid="home-why">
    <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
      <SectionHead eyebrow="Why Veqorix" title="Clear advice. Practical work. One person to talk to." />
      <div className="grid gap-5 sm:grid-cols-2">
        {WHY.map(({ icon: I, t, d }) => (
          <div key={t}><I className="h-7 w-7 text-[#D94814]" /><h3 className="mt-3 font-display text-xl font-bold">{t}</h3><p className="mt-2 text-[#495560]">{d}</p></div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Seo title="Veqorix | Websites & Marketing for Small Businesses"
        description="Websites, Google Ads, social media and AI-assisted customer communication for small businesses across industries in Canada and the USA. Get a free quote." path="/" />
      <Hero />
      <Problem />
      <Services />
      <How />
      <section className="bg-[#F4F3EF] py-20 sm:py-24" data-testid="home-packages">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Packages" title="Pick a starting point" sub="Every business is different, so every quote is too. Tell us what you need and we'll send a clear price." />
            <Link to="/packages" className="btn-outline shrink-0" data-testid="home-compare-packages-btn">Compare packages</Link>
          </div>
          <div className="mt-10"><PackageGrid /></div>
        </div>
      </section>
      <Why />
      <Results />
      <Trades />
      <Testimonials />
      <section className="border-t border-[#E2E0D8] py-20 sm:py-24" data-testid="home-faq">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <SectionHead eyebrow="Questions" title="Common questions" />
          <Faq items={HOME_FAQ} testId="home-faq-list" />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
