import { Seo } from "@/components/Seo";
import { SectionHead, FinalCta } from "@/components/Blocks";
import { PackageGrid, ComparisonTable } from "@/components/Packages";

export default function PackagesPage() {
  return (
    <>
      <Seo title="Website & Marketing Packages for Small Businesses | Veqorix"
        description="Compare Website, Get Found, Get Calls and Grow. Website and marketing packages for small businesses, tailored to your goals. Get a free quote." path="/packages" />
      <section className="border-b border-[#E2E0D8] py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <p className="eyebrow rise">Packages</p>
          <h1 className="rise rise-1 mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Four packages. One clear quote.</h1>
          <p className="rise rise-2 mt-6 text-lg leading-relaxed text-[#495560] sm:text-xl" data-testid="packages-intro">Choose a starting point that fits your goals: a useful website, local visibility, more relevant calls, or ongoing marketing. Get Found suits eligible local businesses; Get Calls suits businesses where phone inquiries matter. You don't need every service. We'll agree on the right scope and a clear price.</p>
        </div>
      </section>
      <section className="py-16"><div className="container-x"><PackageGrid /></div></section>
      <section className="pb-20" data-testid="packages-compare">
        <div className="container-x">
          <SectionHead eyebrow="Side by side" title="What's in each package" />
          <div className="mt-8"><ComparisonTable /></div>
        </div>
      </section>
      <FinalCta title="Not sure which one fits?" sub="Tell us about your business and we'll recommend the right package. No pressure." />
    </>
  );
}
