import { Seo } from "@/components/Seo";
import { FinalCta } from "@/components/Blocks";
import { DemoCard } from "@/components/DemoCard";
import { TRADES } from "@/data/trades";

export default function SamplesPage() {
  return (
    <>
      <Seo title="Example Websites | Contractor Demos | Veqorix"
        description="Browse nine live contractor demo websites for ideas. Veqorix creates websites for small businesses across industries, not just the trades shown here." path="/samples" />
      <section className="border-b border-[#E2E0D8] py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <p className="eyebrow rise">Samples</p>
          <h1 className="rise rise-1 mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" data-testid="samples-title">Example websites. Ideas for your business.</h1>
          <p className="rise rise-2 mt-6 text-lg leading-relaxed text-[#495560] sm:text-xl" data-testid="samples-disclaimer">These nine contractor demos are built for made-up businesses, not client work. Explore the layouts and customer journeys for ideas. They're examples of our website approach, not a complete list of the businesses we serve.</p>
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
