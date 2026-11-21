import { Seo } from "@/components/Seo";
import { SectionHead, FinalCta, Placeholder } from "@/components/Blocks";
import { Laptop, UserRound, Zap } from "lucide-react";

const HOW = [
  { icon: Laptop, t: "Remote team", d: "We work remotely with small businesses across industries in Canada and the USA. Calls, texts and email, whatever suits you." },
  { icon: UserRound, t: "One point of contact", d: "You deal with one person who knows your business. No ticket systems, no getting passed around." },
  { icon: Zap, t: "Fast communication", d: "We reply quickly and keep it short. You'll always know what we're working on and why." },
];

export default function AboutPage() {
  return (
    <>
      <Seo title="About Veqorix | Websites & Marketing for Small Businesses"
        description="Websites, marketing and AI-assisted customer communication for small businesses across industries in Canada and the USA. One point of contact, plain talk." path="/about" />
      <section className="border-b border-[#E2E0D8] py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <p className="eyebrow rise">About</p>
          <h1 className="rise rise-1 mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" data-testid="about-title">Practical online help for small businesses</h1>
          <p className="rise rise-2 mt-6 text-lg leading-relaxed text-[#495560] sm:text-xl" data-testid="about-intro">Veqorix helps small businesses across industries with websites, digital marketing and AI-assisted customer communication. Whether your customers are local or online, we start with what you offer and what you want to achieve. We work directly with owners and keep the conversation straightforward.</p>
        </div>
      </section>
      <section className="py-20" data-testid="about-how">
        <div className="container-x">
          <SectionHead eyebrow="How we work" title="Straightforward, start to finish" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {HOW.map(({ icon: I, t, d }) => (
              <div key={t} className="rounded-xl border-2 border-[#E2E0D8] bg-white p-6"><I className="h-8 w-8 text-[#D94814]" /><h3 className="mt-4 font-display text-xl font-bold">{t}</h3><p className="mt-2 text-[#495560]">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-[#E2E0D8] bg-[#F4F3EF] py-20" data-testid="about-team">
        <div className="container-x">
          <SectionHead eyebrow="The team" title="Who you'll work with" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => <Placeholder key={n} testId={`team-placeholder-${n}`}>PLACEHOLDER — add team photo, name and role</Placeholder>)}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
