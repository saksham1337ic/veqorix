import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { DemoPreview } from "@/components/DemoPreview";

export const DemoCard = ({ trade, live = true }) => (
  <article className="group flex flex-col overflow-hidden rounded-xl border-2 border-[#E2E0D8] bg-white transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-[#C5C0B3]" data-testid={`demo-card-${trade.slug}`}>
    <div className="flex items-center justify-between gap-2 border-b border-[#E2E0D8] bg-[#F4F3EF] px-3 py-2">
      <span className="font-mono text-xs font-semibold text-[#495560]" data-testid={`demo-label-${trade.slug}`}>Contractor demo · Not client work</span>
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
