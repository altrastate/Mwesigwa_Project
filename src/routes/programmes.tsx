import { createFileRoute } from "@tanstack/react-router";
import supplies from "@/assets/supplies.jpg";
import education from "@/assets/education.jpg";
import community from "@/assets/community.jpg";
import hero from "@/assets/hero.jpg";
import { Btn, CtaBand, Notice, PageHero, Section } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/programmes")({
  head: () => seo("Our Programmes", "Explore the proposed programme areas through which Mukama Mwesigwa Ministries seeks to support vulnerable children in Jinja, Uganda."),
  component: Programmes,
});

// Proposed categories — require ministry confirmation before launch.
const programmes = [
  { img: supplies, t: "Essential Needs and Material Assistance", d: "Gathering and sharing practical items — clothing, bedding, hygiene supplies and household essentials — with children and families facing hardship.", p: "To help meet everyday needs so children can live with greater comfort and dignity." },
  { img: education, t: "Education and Learning Support", d: "Encouraging learning through school supplies and education-related assistance, as resources and partnerships allow.", p: "To help children stay curious, engaged and equipped to learn." },
  { img: community, t: "Community Outreach", d: "Gatherings and activities that bring neighbours together around the wellbeing of children.", p: "To strengthen the caring networks that surround every child." },
  { img: hero, t: "Volunteer and Partner Engagement", d: "Connecting individuals, churches and organisations with appropriate, safeguarded ways to help.", p: "To multiply care through the gifts and skills of many people." },
];

function Programmes() {
  return (
    <>
      <PageHero eyebrow="Our programmes" title="Ways We Seek to Support Children" intro="These programme areas describe the kinds of activities through which the ministry hopes to serve vulnerable children and their communities." />
      <Section>
        <Notice className="mb-12">Proposed programme categories — details will be updated once the ministry confirms its current activities.</Notice>
        <div className="space-y-16">
          {programmes.map((p, i) => (
            <article key={p.t} className="grid gap-8 md:grid-cols-2 md:items-center">
              <img src={p.img} alt={p.t} loading="lazy" width={1280} height={960} className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-soft ${i % 2 ? "md:order-2" : ""}`} />
              <div>
                <p className="font-serif text-5xl text-amber/60">0{i + 1}</p>
                <h2 className="mt-2 text-3xl font-semibold">{p.t}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.d}</p>
                <p className="mt-4 rounded-xl bg-ivory p-4 text-sm"><strong className="text-primary">Purpose: </strong>{p.p}</p>
                <Btn to="/contact" variant="outline" className="mt-6">Enquire About This Programme</Btn>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand title="Help These Programmes Grow" text="Your time, skills, gifts and partnership can make each of these areas possible.">
        <Btn to="/get-involved" variant="amber">Get Involved</Btn>
      </CtaBand>
    </>
  );
}
