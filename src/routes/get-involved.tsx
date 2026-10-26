import { createFileRoute } from "@tanstack/react-router";
import { Package, HandHeart, Handshake, Home, Check } from "lucide-react";
import supplies from "@/assets/supplies.jpg";
import { DemoForm } from "@/components/site/DemoForm";
import { Notice, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/get-involved")({
  head: () => seo("Get Involved", "Offer material support, volunteer, partner or offer services to Mukama Mwesigwa Ministries in Jinja, Uganda."),
  component: GetInvolved,
});

const notSent = "Thank you for offering to help. This is a demonstration form and your submission has not been sent to the ministry. Once the website is connected to its official contact system, the team will be able to review offers and coordinate arrangements.";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-muted-foreground"><Check className="mt-0.5 h-5 w-5 shrink-0 text-amber" aria-hidden />{i}</li>
      ))}
    </ul>
  );
}

function Block({ id, icon: Icon, eyebrow, title, intro, items, children, note }: { id: string; icon: typeof Package; eyebrow: string; title: string; intro: string; items?: string[]; children: React.ReactNode; note?: string }) {
  return (
    <div id={id} className="scroll-mt-28 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary"><Icon className="h-6 w-6" aria-hidden /></span>
        <div className="mt-5"><SectionHeading eyebrow={eyebrow} title={title} intro={intro} /></div>
        {items && <Bullets items={items} />}
        {note && <Notice className="mt-6">{note}</Notice>}
      </div>
      {children}
    </div>
  );
}

function GetInvolved() {
  return (
    <>
      <PageHero eyebrow="Get involved" title="There Are Many Ways to Help" intro="Individuals, churches, businesses and organisations can all play a part — through supplies, time, skills, services and partnership." image={supplies} />
      <Section>
        <Block id="material" icon={Package} eyebrow="A. Material support" title="Offer Material Support" intro="Supporters may offer useful items such as:" items={["Clothing and suitable footwear", "School supplies", "Food and household essentials", "Bedding", "Hygiene supplies", "Furniture or equipment", "Other items requested by the ministry"]}>
          <DemoForm id="material" submitLabel="Submit Offer" successTitle="Thank you for offering to help" successText={notSent} fields={[
            { name: "name", label: "Full name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Telephone or WhatsApp", type: "tel" },
            { name: "place", label: "Country or town", required: true },
            { name: "itemType", label: "Type of item", type: "select", required: true, options: ["Clothing / footwear", "School supplies", "Food / household", "Bedding", "Hygiene supplies", "Furniture / equipment", "Other"] },
            { name: "quantity", label: "Quantity" },
            { name: "description", label: "Description", type: "textarea", required: true },
            { name: "condition", label: "Condition", type: "select", options: ["New", "Good, used", "Fair, used"] },
            { name: "delivery", label: "Delivery or collection", type: "select", options: ["I can deliver", "Collection needed", "Not sure"] },
            { name: "contactMethod", label: "Preferred contact method", type: "select", options: ["Email", "Phone", "WhatsApp"] },
            { name: "consent", label: "I consent to be contacted about this offer.", type: "checkbox", required: true },
          ]} />
        </Block>
      </Section>
      <Section tone="ivory">
        <Block id="volunteer" icon={HandHeart} eyebrow="B. Volunteer" title="Volunteer With Us" intro="Share your time and skills to support approved ministry activities." note="All volunteering arrangements are subject to ministry review and appropriate safeguarding checks. Submitting an enquiry does not guarantee a placement.">
          <DemoForm id="volunteer" submitLabel="Send Volunteer Enquiry" successTitle="Thank you for your interest" successText="This is a demonstration form and your enquiry has not been sent to the ministry. Once connected, the team will review enquiries and respond where suitable." fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Contact number", type: "tel" },
            { name: "availability", label: "Availability", type: "select", required: true, options: ["Weekdays", "Weekends", "A few hours a month", "Short-term visit", "Remote support"] },
            { name: "interest", label: "General area of interest", type: "select", options: ["Community activities", "Education support", "Logistics", "Fundraising", "Professional skills", "Other"] },
            { name: "skills", label: "Relevant skills or experience", type: "textarea", required: true },
            { name: "motivation", label: "Why would you like to volunteer?", type: "textarea", required: true },
          ]} />
        </Block>
      </Section>
      <Section>
        <Block id="partner" icon={Handshake} eyebrow="C. Services & partnerships" title="Offer Services or Partnerships" intro="Organisations and professionals may enquire about providing:" items={["Education-related support", "Transport or logistics", "Professional services", "Community outreach", "Fundraising partnerships", "Equipment or supplies"]}>
          <DemoForm id="partner" submitLabel="Send Partnership Enquiry" successTitle="Thank you for reaching out" successText="This is a demonstration form and your enquiry has not been sent to the ministry. Once connected, partnership enquiries will reach the ministry's team." fields={[
            { name: "name", label: "Contact name", required: true },
            { name: "org", label: "Organisation", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Telephone", type: "tel" },
            { name: "type", label: "Type of support", type: "select", required: true, full: true, options: ["Education-related support", "Transport or logistics", "Professional services", "Community outreach", "Fundraising partnership", "Equipment or supplies", "Other"] },
            { name: "details", label: "Tell us about your proposal", type: "textarea", required: true },
          ]} />
        </Block>
      </Section>
      <Section tone="ivory">
        <Block id="accommodation" icon={Home} eyebrow="D. Property & accommodation" title="Accommodation or Property Offers" intro="Some supporters may wish to offer property or accommodation for legitimate ministry operations or approved volunteer needs." note="Any offer involving children or child placement requires a separate, professionally assessed safeguarding process. The ministry does not arrange informal adoption, foster placement, direct access to children, or unvetted accommodation.">
          <DemoForm id="accommodation" submitLabel="Send Property Enquiry" successTitle="Thank you for your offer" successText="This is a demonstration form and your offer has not been sent to the ministry. Any arrangements would be subject to careful review." fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "location", label: "Property location", required: true },
            { name: "kind", label: "Type of offer", type: "select", options: ["Office or storage space", "Event venue", "Volunteer accommodation", "Other"] },
            { name: "details", label: "Details", type: "textarea", required: true },
            { name: "ack", label: "I understand all offers are subject to ministry review and safeguarding requirements.", type: "checkbox", required: true },
          ]} />
        </Block>
      </Section>
    </>
  );
}
