import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { TRADES } from "@/data/trades";

const Col = ({ title, children }) => (
  <div>
    <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#E89B10]">{title}</h2>
    <ul className="mt-4 space-y-3 text-[15px] text-stone-300">{children}</ul>
  </div>
);

export const Footer = () => (
  <footer className="bg-[#181E24] pb-28 pt-16 text-white lg:pb-12" data-testid="site-footer">
    <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <Logo light />
        <p className="mt-4 max-w-xs text-stone-300">Websites and customers for home-service businesses in Canada and the USA.</p>
        <a href={`mailto:${SITE.email}`} className="mt-4 block font-semibold text-white hover:text-[#E89B10]" data-testid="footer-email">{SITE.email}</a>
        <a href={`tel:${SITE.phoneTel}`} className="mt-1 block font-semibold text-white hover:text-[#E89B10]" data-testid="footer-phone">{SITE.phoneDisplay}</a>
      </div>
      <Col title="Services">
        {SERVICES.map((s) => <li key={s.slug}><Link to={`/${s.slug}`} className="hover:text-white" data-testid={`footer-service-${s.slug}`}>{s.name}</Link></li>)}
      </Col>
      <Col title="Trades">
        {TRADES.map((t) => <li key={t.slug}><Link to={`/industries/${t.slug}`} className="hover:text-white" data-testid={`footer-trade-${t.slug}`}>{t.name}</Link></li>)}
      </Col>
      <Col title="Company">
        {[["/packages", "Packages"], ["/samples", "Samples"], ["/about", "About"], ["/quote", "Get a free quote"], ["/privacy", "Privacy"], ["/terms", "Terms"]].map(([to, l]) => (
          <li key={to}><Link to={to} className="hover:text-white" data-testid={`footer-link-${to.slice(1)}`}>{l}</Link></li>
        ))}
      </Col>
    </div>
    <p className="container-x mt-14 border-t border-white/10 pt-6 text-sm text-stone-400">© {new Date().getFullYear()} Veqorix. All rights reserved.</p>
  </footer>
);
