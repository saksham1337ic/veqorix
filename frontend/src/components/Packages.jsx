import { Link } from "react-router-dom";
import { Check, Minus } from "lucide-react";
import { PACKAGES, COMPARISON, priceLabel } from "@/data/site";

const PriceLine = ({ price, trade, id }) => {
  const href = `/quote?package=${id}${trade ? `&trade=${trade}` : ""}`;
  return price
    ? <p className="font-display text-3xl font-black" data-testid={`package-price-${id}`}>{price}</p>
    : <Link to={href} className="font-display text-2xl font-black text-[#D94814] underline decoration-2 underline-offset-4 hover:text-[#BD3A0C]" data-testid={`package-price-${id}`}>{priceLabel(price)}</Link>;
};

export const PackageGrid = ({ trade }) => (
  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4" data-testid="packages-grid">
    {PACKAGES.map((p) => (
      <div key={p.id} className={`relative flex flex-col rounded-xl border-2 bg-white p-6 ${p.featured ? "border-[#D94814]" : "border-[#E2E0D8]"}`} data-testid={`package-card-${p.id}`}>
        <h3 className="font-display text-2xl font-black">{p.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#6E7D8A]">{p.billing}</p>
        <p className="mt-4 text-[#495560]">{p.summary}</p>
        <div className="mt-5"><PriceLine price={p.price} trade={trade} id={p.id} /></div>
        {p.id === "website" && <p className="mt-1 text-sm text-[#6E7D8A]">Care plan: {priceLabel(p.carePrice)}</p>}
        <ul className="mt-6 flex-1 space-y-3">
          {p.includes.map((i) => (
            <li key={i} className="flex gap-2.5 text-[15px]"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#167245]" strokeWidth={3} />{i}</li>
          ))}
        </ul>
        <Link to={`/quote?package=${p.id}${trade ? `&trade=${trade}` : ""}`} className={`${p.featured ? "btn-primary" : "btn-outline"} mt-6 w-full`} data-testid={`package-quote-btn-${p.id}`}>Get a free quote</Link>
      </div>
    ))}
  </div>
);

const Cell = ({ v }) => {
  if (v === "yes") return <Check className="mx-auto h-6 w-6 text-[#167245]" strokeWidth={3} aria-label="Included" />;
  if (v === "optional") return <span className="text-sm font-semibold text-[#8A5A00]">Optional</span>;
  return <Minus className="mx-auto h-5 w-5 text-[#C5C0B3]" aria-label="Not included" />;
};

export const ComparisonTable = () => (
  <div className="overflow-x-auto rounded-xl border-2 border-[#E2E0D8] bg-white" data-testid="comparison-table">
    <table className="w-full min-w-[640px] text-left">
      <thead>
        <tr className="border-b-2 border-[#E2E0D8] bg-[#F4F3EF]">
          <th scope="col" className="p-4 font-display text-base font-bold">Feature</th>
          {PACKAGES.map((p) => <th key={p.id} scope="col" className="p-4 text-center font-display text-base font-bold">{p.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {COMPARISON.map((row) => (
          <tr key={row.feature} className="border-b border-[#F4F3EF] last:border-0">
            <th scope="row" className="p-4 text-[15px] font-semibold">{row.feature}</th>
            {row.values.map((v, i) => <td key={i} className="p-4 text-center"><Cell v={v} /></td>)}
          </tr>
        ))}
        <tr className="bg-[#F4F3EF]">
          <th scope="row" className="p-4 text-[15px] font-semibold">Price</th>
          {PACKAGES.map((p) => (
            <td key={p.id} className="p-4 text-center">
              <Link to={`/quote?package=${p.id}`} className="text-[15px] font-bold text-[#D94814] underline underline-offset-4" data-testid={`table-price-${p.id}`}>{priceLabel(p.price)}</Link>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);
