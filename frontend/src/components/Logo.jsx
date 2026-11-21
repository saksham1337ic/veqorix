export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="12" fill="#181E24" />
    <path d="M12 18h11l9 20 9-20h11L37 48h-10z" fill="#D94814" />
    <rect x="28" y="12" width="8" height="5" rx="1" fill="#E89B10" />
  </svg>
);

export const Logo = ({ light = false }) => (
  <span className="inline-flex items-center gap-2.5">
    <LogoMark />
    <span className={`font-display text-2xl font-black tracking-tight ${light ? "text-white" : "text-[#12171A]"}`}>
      Veqorix
    </span>
  </span>
);
