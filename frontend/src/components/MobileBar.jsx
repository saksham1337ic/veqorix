import { Link, useLocation } from "react-router-dom";
import { Phone, FileText } from "lucide-react";
import { SITE } from "@/data/site";

export const MobileBar = () => {
  const { pathname } = useLocation();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-[#E2E0D8] bg-white/95 p-2 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }} data-testid="mobile-sticky-bar">
      {SITE.phoneIsPlaceholder ? (
        <button type="button" disabled className="flex h-14 items-center justify-center gap-2 rounded-lg bg-[#1D3A5F] text-white opacity-70" data-testid="mobile-sticky-call-btn">
          <Phone className="h-5 w-5" /><span className="text-left"><span className="block font-bold">Call</span><span className="block text-xs">Coming soon</span></span>
        </button>
      ) : (
        <a href={`tel:${SITE.phoneTel}`} className="flex h-14 items-center justify-center gap-2 rounded-lg bg-[#1D3A5F] text-lg font-bold text-white active:scale-[0.98]" data-testid="mobile-sticky-call-btn">
          <Phone className="h-5 w-5" /> Call
        </a>
      )}
      <Link to={pathname === "/quote" ? "/quote#form" : "/quote"} className="flex h-14 items-center justify-center gap-2 rounded-lg bg-[#D94814] text-lg font-bold text-white active:scale-[0.98]" data-testid="mobile-sticky-quote-btn">
        <FileText className="h-5 w-5" /> Get a free quote
      </Link>
    </div>
  );
};
