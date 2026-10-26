import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Users, HandHeart, Eye, Baby } from "lucide-react";
import community from "@/assets/community.jpg";
import education from "@/assets/education.jpg";
import { Btn, Card, CtaBand, Notice, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "Learn about Mukama Mwesigwa Ministries, its mission, vision and values for vulnerable children and communities in Uganda."),
  component: About,
});

const values = [
  { i: Heart, t: "Compassion", d: "Meeting need with kindness, patience and care." },
  { i: ShieldCheck, t: "Dignity", d: "Respecting every child and family as people of worth." },
  { i: Users, t: "Community", d: "Working alongside local people, not apart from them." },
  { i: HandHeart, t: "Faithfulness", d: "Serving consistently and keeping our commitments." },
  { i: Eye, t: "Transparency", d: "Being open about how support is received and used." },
  { i: Baby, t: "Child Protection", d: "Placing children's safety and wellbeing first." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="A Mission Rooted in Compassion" intro="Working toward a future where vulnerable children and communities receive care, dignity, and opportunity." image={community} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our story" title="Caring for Children, Restoring Communities" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>Mukama Mwesigwa Ministries is a grassroots ministry based in Jinja, Uganda. Its heart is simple: to help vulnerable children and to see communities restored.</p>
              <p>The ministry invites ordinary people — neighbours, churches, friends near and far — to step forward and care for a child in need, believing that small, consistent acts of kindness can change a life.</p>
            </div>
            <Notice className="mt-6">The ministry's full official story — including its founding and history — will be added here once provided and approved.</Notice>
          </div>
          <img src={education} alt="A teacher helping children with their schoolwork" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
        </div>
      </Section>
      <Section tone="ivory">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber">Mission</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-primary">To support vulnerable children and contribute to stronger, more caring communities through practical assistance, compassion, and collective action.</p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber">Vision</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-primary">A community where every child has the opportunity to grow with dignity, care, and hope for the future.</p>
          </Card>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">Proposed wording — awaiting ministry approval.</p>
      </Section>
      <Section>
        <SectionHeading center eyebrow="What guides us" title="Our Core Values" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <Card key={v.t}>
              <v.i className="h-7 w-7 text-amber" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="ivory">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading center eyebrow="Our approach" title="Practical, Community-Centred Care" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Support may include essential items, community activities, education-related assistance, partnerships and other programmes as confirmed by the ministry. Every activity is shaped by the needs of the community and a commitment to children's safety and dignity.</p>
          <Btn to="/get-involved" className="mt-8">Discover How You Can Help</Btn>
        </div>
      </Section>
      <CtaBand title="Walk With Us" text="Whether you give, volunteer or partner, you can be part of this mission.">
        <Btn to="/donate" variant="amber">Donate to Support</Btn>
        <Btn to="/contact" variant="ghost-light">Contact the Ministry</Btn>
      </CtaBand>
    </>
  );
}
