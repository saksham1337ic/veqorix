import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32" data-testid="not-found-page">
      <Seo title="Page not found | Veqorix" description="This page doesn't exist." path="/404" noindex />
      <div className="container-x max-w-2xl">
        <p className="font-display text-7xl font-black text-[#C5C0B3]">404</p>
        <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">Wrong address.</h1>
        <p className="mt-4 text-lg text-[#495560]">This page doesn't exist, or it moved. Here are a few places to go instead.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-primary btn-lg" data-testid="not-found-home-btn">Back to home</Link>
          <Link to="/samples" className="btn-outline btn-lg" data-testid="not-found-samples-btn">See samples</Link>
          <Link to="/quote" className="btn-outline btn-lg" data-testid="not-found-quote-btn">Get a free quote</Link>
        </div>
      </div>
    </section>
  );
}
