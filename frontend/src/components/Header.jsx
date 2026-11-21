import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SITE } from "@/data/site";

const NAV = [
  { to: "/websites", label: "Websites" },
  { to: "/google-ads", label: "Google Ads" },
  { to: "/social-media", label: "Social Media" },
  { to: "/samples", label: "Samples" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E0D8] bg-[#FBFBFA]/95 backdrop-blur-xl" data-testid="site-header">
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link to="/" aria-label="Veqorix home" data-testid="header-logo-link"><Logo /></Link>
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} data-testid={`nav-${n.to.slice(1)}`}
              className={({ isActive }) => `rounded-md px-3 py-2 text-[15px] font-semibold transition-colors hover:text-[#D94814] ${isActive ? "text-[#D94814]" : "text-[#12171A]"}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 font-semibold text-[#1D3A5F] hover:text-[#D94814]" data-testid="header-call-link">
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </a>
          <Link to="/quote" className="btn-primary" data-testid="header-quote-btn">Get a free quote</Link>
        </div>
        <button className="lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#E2E0D8] bg-white"
          onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} data-testid="mobile-menu-toggle">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-[#E2E0D8] bg-white pb-6" aria-label="Mobile" data-testid="mobile-menu">
          <div className="container-x flex flex-col pt-2">
            {[...NAV, { to: "/local-seo", label: "Local SEO" }, { to: "/ai-receptionist", label: "AI Receptionist" }, { to: "/ai-chat-assistant", label: "AI Chat Assistant" }].map((n) => (
              <Link key={n.to} to={n.to} className="border-b border-[#F4F3EF] py-4 text-lg font-semibold" data-testid={`mobile-nav-${n.to.slice(1)}`}>{n.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
