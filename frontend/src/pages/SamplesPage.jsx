import { Seo } from "@/components/Seo";
import { FinalCta } from "@/components/Blocks";
import { DemoCard } from "@/components/DemoCard";
import { TRADES } from "@/data/trades";

export default function SamplesPage() {
  return (
    <>
      <Seo title="Sample Websites for Contractors & Trades | Veqorix"
        description="See live sample websites for roofing, HVAC, plumbing, electrical, landscaping, snow removal, cleaning, painting and pest control businesses." path="/samples" />
      <section className="border-b border-[#E2E0D8] py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <p className="eyebrow rise">Samples</p>
          <h1 className="rise rise-1 mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">See what your new site could look like</h1>
          <p className="rise rise-2 mt-6 text-lg leading-relaxed text-[#495560] sm:text-xl">Nine live sample sites, one for each trade. Each is built for a made-up business so you can tap around and see how it works.</p>
        </div>
      </section>
      <section className="py-16" data-testid="samples-gallery">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRADES.map((t) => <DemoCard key={t.slug} trade={t} />)}
        </div>
      </section>
      <FinalCta title="Want one like this for your business?" />
    </>
  );
}
