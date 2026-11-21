import { useEffect, useRef, useState } from "react";

const FRAME_W = 1280;
const FRAME_H = 800;

// Live, scaled iframe of a demo site; the screenshot sits underneath as placeholder and fallback.
export const DemoPreview = ({ trade, interactive = false, live = true }) => {
  const box = useRef(null);
  const loaded = useRef(false);
  const [scale, setScale] = useState(0.25);
  const [inView, setInView] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = box.current;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / FRAME_W));
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { rootMargin: "200px" });
    io.observe(el);
    return () => { ro.disconnect(); io.disconnect(); };
  }, []);

  useEffect(() => {
    if (!inView || !live) return;
    const t = setTimeout(() => { if (!loaded.current) setFailed(true); }, 15000);
    return () => clearTimeout(t);
  }, [inView, live]);

  return (
    <div ref={box} className="relative w-full overflow-hidden bg-[#F4F3EF]" style={{ aspectRatio: `${FRAME_W}/${FRAME_H}` }} data-testid={`demo-preview-${trade.slug}`}>
      <img src={`/demos/${trade.slug}.jpg`} alt={`${trade.name} sample website preview`} loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top" onError={(e) => { e.currentTarget.style.display = "none"; }} />
      {live && inView && !failed && (
        <iframe src={trade.demo} title={`${trade.name} live demo`} width={FRAME_W} height={FRAME_H} loading="lazy"
          tabIndex={interactive ? 0 : -1} aria-hidden={!interactive}
          onLoad={() => { loaded.current = true; }}
          className={`absolute left-0 top-0 border-0 bg-white ${interactive ? "" : "pointer-events-none"}`}
          style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale})`, transformOrigin: "0 0" }} />
      )}
    </div>
  );
};
