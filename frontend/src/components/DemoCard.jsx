import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { DemoPreview } from "@/components/DemoPreview";

export const DemoCard = ({ trade, live = true }) => (
  <article className="group flex flex-col overflow-hidden rounded-xl border-2 border-[#E2E0D8] bg-white transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-[#C5C0B3]" data-testid={`demo-card-${trade.slug}`}>
    <div className="flex items-center gap-1.5 border-b border-[#E2E0D8] bg-[#F4F3EF] px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#C5C0B3]" /><span className="h-2.5 w-2.5 rounded-full bg-[#C5C0B3]" /><span className="h-2.5 w-2.5 rounded-full bg-[#C5C0B3]" />
      <span className="ml-2 truncate font-mono text-xs text-[#6E7D8A]">{trade.demo.replace("https://", "")}</span>
    </div>
    <DemoPreview trade={trade} live={live} />
    <div className="flex flex-1 flex-col p-5">
      <h3 className="font-display text-xl font-bold">{trade.name}</h3>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <a href={trade.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1" data-testid={`demo-live-btn-${trade.slug}`}>
          See live demo <ExternalLink className="h-4 w-4" />
        </a>
        <Link to={`/industries/${trade.slug}`} className="btn-outline flex-1" data-testid={`demo-trade-link-${trade.slug}`}>For {trade.short}</Link>
      </div>
    </div>
  </article>
);
