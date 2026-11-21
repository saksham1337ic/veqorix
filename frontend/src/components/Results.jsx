import { RESULTS, RESULTS_WORK } from "@/data/site";
import { SectionHead, Placeholder } from "@/components/Blocks";

export const Results = () => (
  <section id="results" className="bg-[#181E24] py-20 sm:py-28" data-testid="results-section">
    <div className="container-x">
      <SectionHead light eyebrow="Real results" title="The marketing side is run by someone who has done it at scale"
        sub="Real numbers from paid social, influencer and ad campaigns we've run. Client names are kept private." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RESULTS.map((r, i) => (
          <div key={r.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-6" data-testid={`result-stat-${i}`}>
            <p className="font-display text-5xl font-black text-[#E89B10]">{r.value}</p>
            <p className="mt-3 font-display text-lg font-bold text-white">{r.label}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-stone-300">{r.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {RESULTS_WORK.map((w, i) => (
          <div key={w.title} className="rounded-xl border border-white/10 p-6" data-testid={`result-work-${i}`}>
            <h3 className="font-display text-lg font-bold text-white">{w.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-stone-300">{w.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Testimonials = () => (
  <section className="py-20" data-testid="testimonials-section">
    <div className="container-x">
      <SectionHead eyebrow="Testimonials to come" title="Space for genuine client feedback" />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Placeholder testId="testimonial-placeholder-1">PLACEHOLDER — add a real testimonial</Placeholder>
        <Placeholder testId="testimonial-placeholder-2">PLACEHOLDER — add a real testimonial</Placeholder>
      </div>
    </div>
  </section>
);
