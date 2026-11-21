import { useParams, Link } from "react-router-dom";
import { ExternalLink, AlertTriangle } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SectionHead, CheckList, CtaButtons, FinalCta } from "@/components/Blocks";
import { DemoPreview } from "@/components/DemoPreview";
import { PackageGrid } from "@/components/Packages";
import { tradeBySlug, TRADES } from "@/data/trades";
import NotFound from "@/pages/NotFound";

export default function IndustryPage() {
  const { slug } = useParams();
  const t = tradeBySlug(slug);
  if (!t) return <NotFound />;
  const lc = t.short === "HVAC" ? "HVAC" : t.short.toLowerCase();
  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDesc} path={`/industries/${t.slug}`} />
      <section className="border-b border-[#E2E0D8] py-14 sm:py-20" data-testid={`industry-hero-${t.slug}`}>
        <div className="container-x max-w-4xl">
          <p className="eyebrow rise">Websites for {t.name}</p>
          <h1 className="rise rise-1 mt-3 font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl" data-testid="industry-title">{t.headline}</h1>
          <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-[#495560] sm:text-xl">{t.intro}</p>
          <div className="rise rise-3 mt-8"><CtaButtons trade={t.slug} /></div>
        </div>
      </section>
      <section className="py-20" data-testid="industry-pains">
        <div className="container-x">
          <SectionHead eyebrow="Sound familiar?" title={`What gets in the way for ${lc} businesses`} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.pains.map((p, i) => (
              <div key={i} className="rounded-xl border-2 border-[#E2E0D8] bg-white p-6" data-testid={`industry-pain-${i}`}>
                <AlertTriangle className="h-7 w-7 text-[#E89B10]" />
                <p className="mt-4 text-lg">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[#E2E0D8] bg-[#F4F3EF] py-20" data-testid="industry-demo">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHead eyebrow="What your site includes" title={`Built for how people hire ${lc} pros`} />
            <div className="mt-8"><CheckList items={t.includes} testId="industry-includes" /></div>
          </div>
          <div>
            <div className="overflow-hidden rounded-xl border-2 border-[#C5C0B3] bg-white shadow-xl">
              <div className="flex items-center gap-1.5 border-b border-[#E2E0D8] bg-[#F4F3EF] px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C5C0B3]" /><span className="h-2.5 w-2.5 rounded-full bg-[#C5C0B3]" /><span className="h-2.5 w-2.5 rounded-full bg-[#C5C0B3]" />
                <span className="ml-2 truncate font-mono text-xs text-[#6E7D8A]">{t.demo.replace("https://", "")}</span>
              </div>
              <DemoPreview trade={t} interactive />
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={t.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-lg" data-testid="industry-open-demo-btn">Open live demo <ExternalLink className="h-5 w-5" /></a>
              <p className="text-[15px] text-[#495560]">This is a sample site for a made-up {lc} business.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" data-testid="industry-packages">
        <div className="container-x">
          <SectionHead eyebrow="Packages" title="Choose how much help you want" />
          <div className="mt-10"><PackageGrid trade={t.slug} /></div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-x">
          <p className="font-semibold text-[#6E7D8A]">Other trades</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TRADES.filter((o) => o.slug !== t.slug).map((o) => (
              <Link key={o.slug} to={`/industries/${o.slug}`} className="rounded-full border border-[#C5C0B3] bg-white px-4 py-2 font-semibold hover:border-[#12171A]" data-testid={`other-trade-${o.slug}`}>{o.name}</Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title={`Ready for more ${lc} calls?`} trade={t.slug} />
    </>
  );
}
