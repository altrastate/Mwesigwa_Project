import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { DemoForm } from "@/components/site/DemoForm";
import { PageHero, Section } from "@/components/site/ui";
import { site } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Us", "Get in touch with Mukama Mwesigwa Ministries about donations, support, volunteering, partnerships or visits."),
  component: Contact,
});

function Contact() {
  const cards = [
    { i: Phone, t: "Telephone", v: site.phone ?? "To be confirmed" },
    { i: Mail, t: "Email", v: site.email ?? "To be confirmed" },
    { i: MapPin, t: "Location", v: site.location },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd Love to Hear From You" intro="Send a message about donations, support, volunteering, partnerships or arranging a visit." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-4">
            {cards.map((c) => (
              <div key={c.t} className="flex gap-4 rounded-2xl border bg-card p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-primary"><c.i className="h-5 w-5" aria-hidden /></span>
                <div><p className="text-sm text-muted-foreground">{c.t}</p><p className="font-semibold text-primary">{c.v}</p></div>
              </div>
            ))}
            <a href={site.instagram} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl bg-primary p-6 text-primary-foreground hover:bg-primary/90">
              <Instagram className="h-6 w-6 text-amber" aria-hidden />
              <div><p className="text-sm text-primary-foreground/70">Follow on Instagram</p><p className="font-semibold">@mukamamwesigwaministries</p></div>
            </a>
          </div>
          <DemoForm id="contact" submitLabel="Send Message" successTitle="Thank you for your message" intro="This form is not yet connected to the ministry's inbox." successText="This is a demonstration — your message has not been delivered. Once the website is connected to the ministry's official inbox, messages will reach the team directly." fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Telephone", type: "tel" },
            { name: "category", label: "Enquiry category", type: "select", required: true, options: ["General Enquiry", "Donations", "Material Support", "Volunteering", "Partnerships", "Visiting the Ministry", "Other"] },
            { name: "subject", label: "Subject", required: true, full: true },
            { name: "message", label: "Message", type: "textarea", required: true },
            { name: "consent", label: "I agree that my details may be used to respond to this enquiry, as described in the Privacy Policy.", type: "checkbox", required: true },
          ]} />
        </div>
      </Section>
    </>
  );
}
