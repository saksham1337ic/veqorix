import { Seo } from "@/components/Seo";
import { SITE } from "@/data/site";

const Legal = ({ title, path, sections }) => (
  <>
    <Seo title={`${title} | Veqorix`} description={`${title} for veqorix.com.`} path={path} />
    <section className="py-14 sm:py-20">
      <div className="container-x max-w-3xl">
        <p className="rounded-lg border-2 border-dashed border-[#E89B10] bg-[#FFF8EB] p-4 font-mono text-sm font-bold text-[#8A5A00]" data-testid="legal-template-banner">
          TEMPLATE — review before publishing. This is generic placeholder text, not legal advice.
        </p>
        <h1 className="mt-8 font-display text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-3 text-[#6E7D8A]">Last updated: PLACEHOLDER — add date</p>
        <div className="mt-10 space-y-8">
          {sections.map(([h, p]) => (
            <div key={h}><h2 className="font-display text-xl font-bold">{h}</h2><p className="mt-2 text-lg leading-relaxed text-[#495560]">{p}</p></div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export const PrivacyPage = () => (
  <Legal title="Privacy Policy" path="/privacy" sections={[
    ["What we collect", "When you fill in our quote form, we collect the details you give us, such as your name, business name, business type / industry, location, phone number, email and message."],
    ["How we use it", "We use your details to reply to your request, send you a quote and talk with you about our services. We do not sell your information."],
    ["How we store it", "Your request is stored privately so we can follow up. When email notifications are configured, it is also sent to our business mailbox."],
    ["Your choices", `You can ask us to see, correct or delete your information at any time by emailing ${SITE.email}.`],
    ["Contact", `Questions about this policy? Email ${SITE.email}.`],
  ]} />
);

export const TermsPage = () => (
  <Legal title="Terms of Use" path="/terms" sections={[
    ["Using this site", "This website gives general information about Veqorix and our services. By using it, you agree to these terms."],
    ["Quotes", "Any quote we send is an estimate based on the information you give us. Final scope and pricing are set out in a separate written agreement."],
    ["Sample sites", "The sample websites linked from this site are for demonstration only and feature made-up businesses."],
    ["No guarantees", "We work hard to get results, but we can't guarantee a specific number of calls, leads or sales."],
    ["Contact", `Questions about these terms? Email ${SITE.email}.`],
  ]} />
);
