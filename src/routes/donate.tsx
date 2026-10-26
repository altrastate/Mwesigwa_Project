import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Heart, Loader2, Lock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Btn, Confirmation, Notice, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { formatAmount, isValidEmail, suggestedAmounts, validateAmount, type Currency } from "@/lib/donation";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/donate")({
  head: () => seo("Donate", "Support Mukama Mwesigwa Ministries and help the ministry respond to the needs of vulnerable children in Jinja, Uganda."),
  component: Donate,
});

const purposes = ["Where needed most", "Essential supplies", "Education-related support", "Community programmes"];
const inputCls = "mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40 aria-[invalid=true]:border-destructive";

const faqs = [
  ["How can I donate?", "Online payments are not yet active. Please contact the ministry through its official channels to discuss the available ways to contribute."],
  ["Can I support a particular programme?", "You can indicate a preferred purpose. The ministry will confirm how designated gifts can be directed once its donation processes are finalised."],
  ["Can I donate from outside Uganda?", "International support is welcome. Contact the ministry to confirm suitable payment options for your country."],
  ["How will I receive confirmation?", "Once a payment provider is connected, donors will receive confirmation from that provider and the ministry. No confirmations are issued by this demo."],
  ["How can I ask about the use of my contribution?", "Please reach out through the Contact page. The ministry is committed to answering questions about how support is used."],
];

function Donate() {
  const [currency, setCurrency] = useState<Currency>("UGX");
  const [amount, setAmount] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState<"one-time" | "monthly">("one-time");
  const [purpose, setPurpose] = useState<string>("Where needed most");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState(false);
  const [errors, setErrors] = useState<{ amount?: string; name?: string; email?: string }>({});
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  function submit(e: FormEvent) {
    e.preventDefault();
    const errs: { amount?: string; name?: string; email?: string } = {};
    const amtErr = validateAmount(custom || amount);
    if (amtErr) errs.amount = amtErr;
    if (!name.trim()) errs.name = "Please enter your name.";
    if (!isValidEmail(email)) errs.email = "Please enter a valid email address.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setState("loading");
    setTimeout(() => setState("done"), 800);
  }

  return (
    <>
      <PageHero eyebrow="Donate" title="Your Support Can Make a Difference" intro="Your generosity can help the ministry respond to needs in the community. Choose how you would like to contribute and learn how to complete your donation." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {state === "done" ? (
            <Confirmation title="Thank you for your generosity" onReset={() => setState("idle")}>
              <p>This is a website demonstration. Online payments have not yet been activated. Please contact the ministry through its verified official channels to discuss contributing.</p>
              <Link to="/contact" className="mt-4 inline-block font-semibold text-primary underline">Contact the ministry</Link>
            </Confirmation>
          ) : (
            <form onSubmit={submit} noValidate className="rounded-3xl border bg-card p-6 shadow-soft md:p-10">
              <Notice className="mb-8"><strong>Demo only.</strong> No payment will be taken and no card details are collected.</Notice>

              <fieldset>
                <legend className="text-sm font-semibold">Currency</legend>
                <div className="mt-2 inline-flex rounded-full bg-muted p-1">
                  {(["UGX", "USD"] as Currency[]).map((c) => (
                    <button key={c} type="button" aria-pressed={currency === c} onClick={() => { setCurrency(c); setAmount(null); }} className={cn("rounded-full px-5 py-2 text-sm font-semibold", currency === c ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>{c}</button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-7">
                <legend className="text-sm font-semibold">Amount <span className="font-normal text-muted-foreground">(suggested amounts are illustrative)</span></legend>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {suggestedAmounts[currency].map((a) => (
                    <button key={a} type="button" aria-pressed={amount === a && !custom} onClick={() => { setAmount(a); setCustom(""); }} className={cn("rounded-xl border-2 px-4 py-4 text-base font-semibold transition", amount === a && !custom ? "border-primary bg-secondary text-primary" : "border-border hover:border-amber")}>{formatAmount(a, currency)}</button>
                  ))}
                  <input aria-label="Custom amount" inputMode="numeric" placeholder="Other amount" value={custom} onChange={(e) => setCustom(e.target.value.replace(/[^\d.,]/g, ""))} className="rounded-xl border-2 border-border px-4 py-4 text-base font-semibold outline-none focus:border-primary" />
                </div>
                {errors.amount && <p className="mt-2 text-sm text-destructive">{errors.amount}</p>}
              </fieldset>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <fieldset>
                  <legend className="text-sm font-semibold">Frequency</legend>
                  <div className="mt-2 flex gap-2">
                    {(["one-time", "monthly"] as const).map((f) => (
                      <button key={f} type="button" aria-pressed={freq === f} onClick={() => setFreq(f)} className={cn("flex-1 rounded-lg border px-4 py-3 text-sm font-medium capitalize", freq === f ? "border-primary bg-secondary text-primary" : "")}>{f}</button>
                    ))}
                  </div>
                </fieldset>
                <div>
                  <label htmlFor="purpose" className="text-sm font-semibold">Purpose</label>
                  <select id="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} className={inputCls}>
                    {purposes.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="name" className="text-sm font-semibold">Your name *</label>
                  <input id="name" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={!!errors.name} className={inputCls} />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold">Email address *</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} className={inputCls} />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="msg" className="text-sm font-semibold">Message <span className="font-normal text-muted-foreground">(optional)</span></label>
                  <textarea id="msg" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className={inputCls} />
                </div>
                <label className="flex items-start gap-3 text-sm md:col-span-2">
                  <input type="checkbox" checked={updates} onChange={(e) => setUpdates(e.target.checked)} className="mt-0.5 h-5 w-5 accent-primary" />
                  I'd like to receive occasional ministry updates (optional).
                </label>
              </div>

              <Btn type="submit" variant="amber" className="mt-8 w-full justify-center py-4 text-base" disabled={state === "loading"}>
                {state === "loading" ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : <Heart className="h-5 w-5" aria-hidden />}
                Continue {(custom || amount) ? `with ${formatAmount(Number(String(custom || amount).replace(/,/g, "")) || 0, currency)}${freq === "monthly" ? " / month" : ""}` : ""}
              </Btn>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><Lock className="h-3 w-3" aria-hidden /> A secure payment provider will be connected before launch.</p>
            </form>
          )}
          <aside className="space-y-6">
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
              <h2 className="text-2xl font-semibold text-primary-foreground">Why your gift matters</h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/80">Contributions help the ministry respond to the needs of vulnerable children and families in the Jinja area — through essentials, learning support and community care.</p>
            </div>
            <div className="rounded-3xl bg-ivory p-8">
              <h3 className="text-xl font-semibold">Prefer to give in another way?</h3>
              <p className="mt-3 text-sm text-muted-foreground">You can also offer supplies, skills or time.</p>
              <Btn to="/get-involved" variant="outline" className="mt-5">Other ways to help</Btn>
              <Link to="/donation-information" className="mt-4 block text-sm font-medium text-primary underline">Read donation information</Link>
            </div>
          </aside>
        </div>
      </Section>
      <Section tone="ivory">
        <SectionHeading center eyebrow="Questions" title="Donation FAQs" />
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl rounded-2xl bg-card px-6">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q ?? ""} value={q ?? ""}>
              <AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
