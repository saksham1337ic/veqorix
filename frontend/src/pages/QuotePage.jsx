import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Seo } from "@/components/Seo";
import { TRADES } from "@/data/trades";
import { PACKAGES, SITE } from "@/data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const NEEDS = [["website", "Website"], ["google-ads", "Google Ads"], ["social-media", "Social media"], ["local-seo", "Local SEO"], ["ai-receptionist", "AI receptionist"], ["ai-chat-assistant", "AI chat assistant"], ["not-sure", "Not sure"]];
const CONTACT = [["phone", "Phone call"], ["email", "Email"], ["text", "Text"]];

const Field = ({ id, label, optional, children }) => (
  <div>
    <label htmlFor={id} className="field-label">{label}{optional && <span className="font-normal text-[#6E7D8A]"> (optional)</span>}</label>
    {children}
  </div>
);

const Choice = ({ type, name, value, checked, onChange, label, testId }) => (
  <label className={`flex min-h-[52px] cursor-pointer items-center gap-3 rounded-lg border-2 px-4 font-semibold transition-colors ${checked ? "border-[#1D3A5F] bg-[#1D3A5F]/5" : "border-[#C5C0B3] bg-white hover:border-[#12171A]"}`}>
    <input type={type} name={name} value={value} checked={checked} onChange={onChange} className="h-5 w-5 accent-[#1D3A5F]" data-testid={testId} />
    {label}
  </label>
);

const ThankYou = ({ name }) => (
  <div className="rounded-xl border-2 border-[#167245] bg-[#EDF7F1] p-8" data-testid="quote-thank-you">
    <CheckCircle2 className="h-12 w-12 text-[#167245]" />
    <h2 className="mt-4 font-display text-3xl font-black">Thanks{name ? `, ${name.split(" ")[0]}` : ""}. We got it.</h2>
    <p className="mt-3 text-lg text-[#12171A]">We'll look over your details and get back to you, usually within one business day. If it's urgent, email <a href={`mailto:${SITE.email}`} className="font-semibold underline">{SITE.email}</a>.</p>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <Link to="/samples" className="btn-outline" data-testid="thank-you-samples-btn">Browse sample sites</Link>
      <Link to="/" className="btn-outline" data-testid="thank-you-home-btn">Back to home</Link>
    </div>
  </div>
);

export default function QuotePage() {
  const [params] = useSearchParams();
  const initialTrade = TRADES.some((t) => t.slug === params.get("trade")) ? params.get("trade") : "";
  const pkg = PACKAGES.find((p) => p.id === params.get("package"));
  const [f, setF] = useState({ name: "", business_name: "", trade: initialTrade, city: "", country: "", website: "", needs: [], contact_method: "phone", phone: "", email: "", message: pkg ? `I'm interested in the ${pkg.name} package.` : "", company_fax: "" });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const toggleNeed = (v) => setF((s) => ({ ...s, needs: s.needs.includes(v) ? s.needs.filter((n) => n !== v) : [...s.needs, v] }));
  const phoneRequired = f.contact_method !== "email";

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await axios.post(`${API}/quotes`, f);
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      const d = err.response?.data?.detail;
      toast.error(typeof d === "string" ? d : "Please check the form and try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Seo title="Get a Free Quote | Veqorix" description="Tell us about your trade business and get a free quote for a website, Google Ads, social media or local SEO." path="/quote" />
      <section className="py-12 sm:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow">Free quote</p>
            <h1 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">Tell us about your business</h1>
            <p className="mt-5 text-lg leading-relaxed text-[#495560]">It takes about two minutes. We'll reply with a clear plan and price, usually within one business day. No pressure, no obligation.</p>
          </div>
          <div id="form">
            {done ? <ThankYou name={f.name} /> : (
              <form onSubmit={submit} className="space-y-6 rounded-xl border-2 border-[#E2E0D8] bg-white p-5 sm:p-8" data-testid="quote-form" noValidate={false}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Your name"><input id="name" required maxLength={120} autoComplete="name" className="field-input" value={f.name} onChange={set("name")} data-testid="quote-name-input" /></Field>
                  <Field id="business_name" label="Business name"><input id="business_name" required maxLength={150} autoComplete="organization" className="field-input" value={f.business_name} onChange={set("business_name")} data-testid="quote-business-input" /></Field>
                  <Field id="trade" label="Trade">
                    <select id="trade" required className="field-input" value={f.trade} onChange={set("trade")} data-testid="quote-trade-select">
                      <option value="">Choose your trade</option>
                      {TRADES.map((t) => <option key={t.slug} value={t.slug}>{t.name}</option>)}
                      <option value="other">Other</option>
                    </select>
                  </Field>
                  <Field id="city" label="City / region"><input id="city" required maxLength={150} placeholder="e.g. Calgary, AB" className="field-input" value={f.city} onChange={set("city")} data-testid="quote-city-input" /></Field>
                  <Field id="country" label="Country">
                    <select id="country" required className="field-input" value={f.country} onChange={set("country")} data-testid="quote-country-select">
                      <option value="">Choose a country</option><option>Canada</option><option>USA</option><option>Other</option>
                    </select>
                  </Field>
                  <Field id="website" label="Current website" optional><input id="website" maxLength={300} placeholder="yourbusiness.com" className="field-input" value={f.website} onChange={set("website")} data-testid="quote-website-input" /></Field>
                </div>
                <fieldset>
                  <legend className="field-label">What do you need?</legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {NEEDS.map(([v, l]) => <Choice key={v} type="checkbox" name="needs" value={v} checked={f.needs.includes(v)} onChange={() => toggleNeed(v)} label={l} testId={`quote-need-${v}`} />)}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="field-label">Best way to reach you</legend>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {CONTACT.map(([v, l]) => <Choice key={v} type="radio" name="contact_method" value={v} checked={f.contact_method === v} onChange={set("contact_method")} label={l} testId={`quote-contact-${v}`} />)}
                  </div>
                </fieldset>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="phone" label="Phone" optional={!phoneRequired}><input id="phone" type="tel" required={phoneRequired} maxLength={40} autoComplete="tel" className="field-input" value={f.phone} onChange={set("phone")} data-testid="quote-phone-input" /></Field>
                  <Field id="email" label="Email"><input id="email" type="email" required maxLength={200} autoComplete="email" className="field-input" value={f.email} onChange={set("email")} data-testid="quote-email-input" /></Field>
                </div>
                <Field id="message" label="Message" optional>
                  <textarea id="message" rows={4} maxLength={5000} placeholder="Anything we should know? Services, towns you cover, goals..." className="field-input py-3" value={f.message} onChange={set("message")} data-testid="quote-message-input" />
                </Field>
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="company_fax">Leave this field empty</label>
                  <input id="company_fax" tabIndex={-1} autoComplete="off" value={f.company_fax} onChange={set("company_fax")} data-testid="quote-honeypot-input" />
                </div>
                <button type="submit" disabled={busy} className="btn-primary btn-lg w-full disabled:opacity-70" data-testid="quote-submit-btn">
                  {busy ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</> : "Send my quote request"}
                </button>
                <p className="text-sm text-[#6E7D8A]">We only use your details to reply to you. See our <Link to="/privacy" className="underline">privacy policy</Link>.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
