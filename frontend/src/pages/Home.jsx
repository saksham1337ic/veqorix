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
  { icon: PhoneOff, t: "Your phone isn't ringing enough", d: "People search for your trade every day. If they don't find you, they call someone else." },
  { icon: EyeOff, t: "Your website is old, slow or missing", d: "Most people look on their phone. A site that's hard to use there sends them away." },
  { icon: Clock, t: "You don't have time for marketing", d: "You're on the job all day. Posting, ads and updates keep getting pushed to next week." },
];

const STEPS = [
  { t: "Tell us about your business", d: "Fill in the quote form or call. It takes about two minutes." },
  { t: "Get a clear plan and price", d: "We tell you what we'd do, what it costs and how long it takes. No pressure." },
  { t: "We build it and run it", d: "We handle the writing, design, ads and posts. You check in when you want." },
  { t: "You get more calls", d: "You get a simple monthly report so you know what's working." },
];

const WHY = [
  { icon: Wrench, t: "Built for trades", d: "We work with home-service businesses. We know what your customers need to see before they call." },
  { icon: UserRound, t: "One point of contact", d: "One person who knows your business. No getting passed around." },
  { icon: MessageCircle, t: "Plain talk, fast replies", d: "No jargon. We answer quickly and explain things the way you'd explain a job to a customer." },
  { icon: MapPinned, t: "Canada and the USA", d: "We work remotely with trade businesses across both countries." },
];

const Hero = () => (
  <section className="relative overflow-hidden border-b border-[#E2E0D8]" data-testid="home-hero">
    <div className="container-x grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
      <div>
        <p className="eyebrow rise">For home-service businesses in Canada and the USA</p>
        <h1 className="rise rise-1 mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          We build your website and <span className="text-[#D94814]">get you customers.</span>
        </h1>
        <p className="rise rise-2 mt-6 max-w-xl text-lg leading-relaxed text-[#495560] sm:text-xl">
          Fast websites, Google Ads and social media for roofers, plumbers, HVAC techs, electricians, landscapers and more. You do the work. We keep the calls coming.
        </p>
        <div className="rise rise-3 mt-8"><CtaButtons /></div>
        <Link to="/samples" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1D3A5F] underline underline-offset-4 hover:text-[#D94814]" data-testid="hero-samples-link">
          See a sample site for your trade <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="rise rise-2 relative">
        <div className="absolute -right-6 -top-6 hidden h-full w-full rounded-2xl bg-[#E89B10]/20 lg:block" />
        <div className="relative rotate-0 lg:-rotate-1"><DemoCard trade={TRADES[1]} /></div>
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
    <section className="border-y border-[#E2E0D8] bg-[#F4F3EF] py-20 sm:py-24" data-testid="home-services">
      <div className="container-x">
        <SectionHead eyebrow="What we do" title="Three things that bring in work, plus a few helpers" />
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
        <SectionHead eyebrow="See it for your trade" title="Live sample sites for nine trades" sub="Each one is a real, working website for a made-up business. Open yours and tap around on your phone." />
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
      <SectionHead eyebrow="How it works" title="Simple, from first call to more calls" />
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
      <SectionHead eyebrow="Why Veqorix" title="Like hiring a good sub. Shows up, does the job, tells you straight." />
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
      <Seo title="Veqorix | Websites & Google Ads for Contractors and Home-Service Businesses"
        description="We build fast websites and get customers for roofers, plumbers, HVAC, electricians, landscapers and other trades in Canada and the USA. Get a free quote." path="/" />
      <Hero />
      <Problem />
      <Services />
      <Trades />
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
