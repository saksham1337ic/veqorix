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
  const [screenshot, setScreenshot] = useState(false);

  useEffect(() => {
    loaded.current = false;
    setFailed(false);
    setScreenshot(false);
  }, [trade.slug]);

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
  }, [inView, live, trade.slug]);

  return (
    <>
      <div ref={box} className="relative w-full overflow-hidden bg-[#F4F3EF]" style={{ aspectRatio: `${FRAME_W}/${FRAME_H}` }} data-testid={`demo-preview-${trade.slug}`}>
        <img src={`/demos/${trade.slug}.jpg`} alt={`${trade.name} sample website preview`} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top" data-testid={`demo-screenshot-${trade.slug}`} />
        {live && inView && !failed && !screenshot && (
          <iframe key={trade.slug} src={trade.demo} title={`${trade.name} live demo`} width={FRAME_W} height={FRAME_H} loading="lazy"
            tabIndex={interactive ? 0 : -1} aria-hidden={!interactive} data-testid={`demo-iframe-${trade.slug}`}
            onLoad={() => { loaded.current = true; }} onError={() => setFailed(true)}
            className={`absolute left-0 top-0 border-0 bg-white ${interactive ? "" : "pointer-events-none"}`}
            style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale})`, transformOrigin: "0 0" }} />
        )}
      </div>
      {live && (
        <div className="border-t border-[#E2E0D8] bg-[#F4F3EF] px-3 text-sm">
          {failed ? <p className="py-3 text-[#495560]" data-testid={`demo-fallback-${trade.slug}`}>Live preview unavailable. Showing a screenshot.</p> : (
            <button type="button" className="min-h-12 text-left font-semibold text-[#1D3A5F] underline underline-offset-4" onClick={() => setScreenshot((v) => !v)} data-testid={`demo-preview-toggle-${trade.slug}`}>
              {screenshot ? "Try live preview" : "Preview not showing? View screenshot"}
            </button>
          )}
        </div>
      )}
    </>
  );
};
