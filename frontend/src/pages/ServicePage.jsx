import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { SectionHead, CheckList, CtaButtons, FinalCta, Faq, Eyebrow } from "@/components/Blocks";
import { serviceBySlug, SERVICES } from "@/data/services";
import { priceLabel } from "@/data/site";

export default function ServicePage({ slug }) {
  const s = serviceBySlug(slug);
  const Icon = s.icon;
  return (
    <>
      <Seo title={s.seoTitle} description={s.seoDesc} path={`/${s.slug}`} />
      <section className="border-b border-[#E2E0D8] py-14 sm:py-20" data-testid={`service-hero-${s.slug}`}>
        <div className="container-x max-w-4xl">
          <span className="rise inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#181E24] text-[#E89B10]"><Icon className="h-7 w-7" /></span>
          <p className="eyebrow rise rise-1 mt-6">{s.name}</p>
          <h1 className="rise rise-1 mt-3 font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl" data-testid="service-title">{s.hero}</h1>
          <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-[#495560] sm:text-xl">{s.heroSub}</p>
          <div className="rise rise-3 mt-8"><CtaButtons /></div>
        </div>
      </section>
      <section className="py-20" data-testid="service-get">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div><SectionHead eyebrow="What you get" title="What's included" /><div className="mt-8"><CheckList items={s.get} testId="service-get-list" /></div></div>
          <div>
            <SectionHead eyebrow="How it works" title="Three simple steps" />
            <ol className="mt-8 space-y-6">
              {s.steps.map((st, i) => (
                <li key={st} className="flex gap-4"><span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D94814] font-display font-black text-white">{i + 1}</span><p className="pt-1.5 text-lg">{st}</p></li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="border-y border-[#E2E0D8] bg-[#F4F3EF] py-16" data-testid="service-for-who">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div><Eyebrow>Who it's for</Eyebrow><p className="mt-3 font-display text-2xl font-bold leading-snug">{s.forWho}</p></div>
          <div className="rounded-xl border-2 border-[#E2E0D8] bg-white p-6" data-testid="service-pricing">
            <Eyebrow>Pricing</Eyebrow>
            <Link to="/quote" className="mt-3 block font-display text-3xl font-black text-[#D94814] underline underline-offset-4" data-testid="service-price-link">{priceLabel(null)}</Link>
            <p className="mt-2 text-[#495560]">Pricing depends on your goals and the work involved. Tell us about your business and we'll send a clear price.</p>
          </div>
        </div>
      </section>
      <section className="py-20" data-testid="service-faq">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <SectionHead eyebrow="Questions" title={`${s.name} questions`} />
          <Faq items={s.faq} testId="service-faq-list" />
        </div>
      </section>
      <section className="pb-20">
        <div className="container-x">
          <p className="font-semibold text-[#6E7D8A]">Other services</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {SERVICES.filter((o) => o.slug !== s.slug).map((o) => (
              <Link key={o.slug} to={`/${o.slug}`} className="rounded-full border border-[#C5C0B3] bg-white px-4 py-2 font-semibold hover:border-[#12171A]" data-testid={`other-service-${o.slug}`}>{o.name}</Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
