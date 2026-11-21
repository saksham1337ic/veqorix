import { Link } from "react-router-dom";
import { ArrowRight, Phone, Check } from "lucide-react";
import { SITE } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Eyebrow = ({ children }) => <p className="eyebrow">{children}</p>;

export const SectionHead = ({ eyebrow, title, sub, light }) => (
  <div className="max-w-2xl">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className={`mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-[#12171A]"}`}>{title}</h2>
    {sub && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-stone-300" : "text-[#495560]"}`}>{sub}</p>}
  </div>
);

export const Placeholder = ({ children = "PLACEHOLDER — add real content", testId }) => (
  <div className="rounded-xl border-2 border-dashed border-[#E89B10] bg-[#FFF8EB] p-6 font-mono text-sm font-semibold text-[#8A5A00]" data-testid={testId}>
    {children}
  </div>
);

export const CheckList = ({ items, testId }) => (
  <ul className="space-y-3" data-testid={testId}>
    {items.map((i) => (
      <li key={i} className="flex gap-3 text-lg text-[#12171A]">
        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF7F1] text-[#167245]"><Check className="h-4 w-4" strokeWidth={3} /></span>
        {i}
      </li>
    ))}
  </ul>
);

export const CtaButtons = ({ trade, light }) => (
  <div className="flex flex-col gap-3 sm:flex-row">
    <Link to={trade ? `/quote?trade=${trade}` : "/quote"} className="btn-primary btn-lg" data-testid={light ? "final-cta-quote-btn" : "cta-quote-btn"}>
      Get a free quote <ArrowRight className="h-5 w-5" />
    </Link>
    {SITE.phoneIsPlaceholder ? (
      <button type="button" disabled className={`${light ? "btn-outline-light" : "btn-outline"} btn-lg cursor-not-allowed opacity-70`} data-testid={light ? "final-cta-call-btn" : "cta-call-btn"}>
        <Phone className="h-5 w-5" /> Call — coming soon
      </button>
    ) : (
      <a href={`tel:${SITE.phoneTel}`} className={light ? "btn-outline-light btn-lg" : "btn-outline btn-lg"} data-testid={light ? "final-cta-call-btn" : "cta-call-btn"}>
        <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
      </a>
    )}
  </div>
);

export const FinalCta = ({ title = "Let's talk about your business", sub = "Tell us what you need. We'll send a clear quote, usually within one business day.", trade }) => (
  <section className="bg-[#181E24] py-20 sm:py-24" data-testid="final-cta">
    <div className="container-x">
      <h2 className="max-w-2xl font-display text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-4 max-w-xl text-lg text-stone-300">{sub}</p>
      <div className="mt-8"><CtaButtons trade={trade} light /></div>
    </div>
  </section>
);

export const Faq = ({ items, testId = "faq" }) => (
  <Accordion type="single" collapsible className="divide-y divide-[#E2E0D8] border-y border-[#E2E0D8]" data-testid={testId}>
    {items.map((f, i) => (
      <AccordionItem key={f.q} value={`q${i}`} className="border-0">
        <AccordionTrigger className="py-5 text-left font-display text-lg font-bold hover:no-underline" data-testid={`${testId}-q-${i}`}>{f.q}</AccordionTrigger>
        <AccordionContent className="pb-5 text-lg leading-relaxed text-[#495560]">{f.a}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
