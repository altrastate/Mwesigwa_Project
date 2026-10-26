import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PenLine, X } from "lucide-react";
import community from "@/assets/community.jpg";
import supplies from "@/assets/supplies.jpg";
import education from "@/assets/education.jpg";
import { Btn, Notice, PageHero, Section } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/stories")({
  head: () => seo("Our Stories", "Community updates and stories of hope from Mukama Mwesigwa Ministries in Jinja, Uganda."),
  component: Stories,
});

// Illustrative, general articles — replace with approved real stories.
const stories = [
  { img: community, t: "The Power of Community Support", s: "When neighbours come together around children, care becomes something shared by everyone.", body: "Lasting change rarely comes from one person alone. It grows when families, churches and neighbours decide that the wellbeing of children is a shared responsibility. This reflection explores why community lies at the heart of the ministry's mission." },
  { img: supplies, t: "Small Acts of Kindness, Meaningful Change", s: "A school book, a warm blanket, a listening ear — small gifts can carry great meaning.", body: "Not every act of support needs to be large. Practical, thoughtful gifts offered with respect can help a child feel seen and valued. This piece reflects on the quiet power of everyday kindness." },
  { img: education, t: "Working Together for a Brighter Future", s: "How supporters near and far can join hands with local communities.", body: "Partnership means listening first and acting together. This article considers how local and international supporters can work alongside communities in ways that honour dignity and build hope." },
];

function Stories() {
  const [open, setOpen] = useState<(typeof stories)[number] | null>(null);
  const featured = stories[0]!;
  const rest = stories.slice(1);
  return (
    <>
      <PageHero eyebrow="Our stories" title="Stories of Hope and Community" intro="Reflections and updates on the ministry's mission. Real stories will be shared here with appropriate consent." />
      <Section>
        <Notice className="mb-10">The articles below are illustrative examples. They will be replaced with verified stories approved by the ministry. Dates will be added once confirmed.</Notice>
        <article className="grid overflow-hidden rounded-3xl bg-ivory lg:grid-cols-2">
          <img src={featured.img} alt="" loading="lazy" width={1280} height={960} className="h-full min-h-72 w-full object-cover" />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber">Featured</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{featured.t}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{featured.s}</p>
            <Btn variant="primary" className="mt-6 self-start" onClick={() => setOpen(featured)}>Read Story</Btn>
          </div>
        </article>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {rest.map((s) => (
            <article key={s.t} className="group overflow-hidden rounded-2xl border bg-card shadow-sm">
              <img src={s.img} alt="" loading="lazy" width={1280} height={960} className="aspect-[3/2] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.s}</p>
                <button onClick={() => setOpen(s)} className="mt-4 text-sm font-semibold text-primary underline-offset-4 hover:underline">Read Story →</button>
              </div>
            </article>
          ))}
          <div className="grid place-items-center rounded-2xl border-2 border-dashed p-8 text-center">
            <div>
              <PenLine className="mx-auto h-8 w-8 text-amber" aria-hidden />
              <h3 className="mt-3 text-xl font-semibold">Your first verified story</h3>
              <p className="mt-2 text-sm text-muted-foreground">This space is ready for the ministry's first approved community update.</p>
            </div>
          </div>
        </div>
      </Section>
      {open && (
        <div role="dialog" aria-modal="true" aria-label={open.t} className="fixed inset-0 z-50 grid place-items-center bg-foreground/60 p-4" onClick={() => setOpen(null)}>
          <div className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl bg-card" onClick={(e) => e.stopPropagation()}>
            <img src={open.img} alt="" className="aspect-[2/1] w-full object-cover" />
            <div className="p-8">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-3xl font-semibold">{open.t}</h2>
                <button autoFocus aria-label="Close story" onClick={() => setOpen(null)} className="rounded-full p-2 hover:bg-muted"><X /></button>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{open.body}</p>
              <p className="mt-6 text-xs text-muted-foreground">Illustrative article — to be replaced with an approved story.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
