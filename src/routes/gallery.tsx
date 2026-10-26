import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, PlayCircle, X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import supplies from "@/assets/supplies.jpg";
import education from "@/assets/education.jpg";
import community from "@/assets/community.jpg";
import { Notice, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => seo("Gallery", "Photographs and videos celebrating community and care, from Mukama Mwesigwa Ministries in Jinja, Uganda."),
  component: Gallery,
});

const cats = ["All", "Community Activities", "Education", "Outreach", "Events"] as const;
const images = [
  { src: community, cap: "Joy in community", cat: "Community Activities", tall: false },
  { src: hero, cap: "Reading together", cat: "Education", tall: true },
  { src: supplies, cap: "Preparing supplies", cat: "Outreach", tall: false },
  { src: education, cap: "Learning support", cat: "Education", tall: false },
  { src: community, cap: "Afternoon gathering", cat: "Events", tall: true },
  { src: supplies, cap: "Volunteers at work", cat: "Community Activities", tall: false },
];

function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [idx, setIdx] = useState<number | null>(null);
  const list = cat === "All" ? images : images.filter((i) => i.cat === cat);
  const move = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (idx === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [idx, move]);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments of Care and Community" intro="A glimpse of the kind of community life the ministry hopes to nurture." />
      <Section>
        <Notice className="mb-8">All images shown are illustrative and do not depict the ministry or its beneficiaries. They will be replaced with ministry-approved media.</Notice>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
          {cats.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={cn("rounded-full px-5 py-2 text-sm font-medium transition", cat === c ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-secondary")}>{c}</button>
          ))}
        </div>
        {list.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">No photographs in this category yet.</p>
        ) : (
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {list.map((img, i) => (
              <button key={i} onClick={() => setIdx(i)} className="group mb-5 block w-full overflow-hidden rounded-2xl text-left" aria-label={`Open image: ${img.cap}`}>
                <img src={img.src} alt={img.cap} loading="lazy" width={1280} height={960} className={cn("w-full object-cover transition-transform duration-500 group-hover:scale-105", img.tall ? "aspect-[3/4]" : "aspect-[4/3]")} />
                <span className="block bg-card px-4 py-3 text-sm"><span className="font-medium text-primary">{img.cap}</span> <span className="text-muted-foreground">· {img.cat}</span></span>
              </button>
            ))}
          </div>
        )}
      </Section>
      <Section tone="ivory">
        <SectionHeading eyebrow="Videos" title="Video Stories" intro="Ministry videos will appear here once provided." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {["Ministry introduction video", "Community activities highlight"].map((v) => (
            <div key={v} className="grid aspect-video place-items-center rounded-2xl bg-primary text-center text-primary-foreground">
              <div>
                <PlayCircle className="mx-auto h-14 w-14 text-amber" aria-hidden />
                <p className="mt-3 font-serif text-xl text-primary-foreground">{v}</p>
                <p className="mt-1 text-sm text-primary-foreground/70">Coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {idx !== null && list[idx] && (
        <div role="dialog" aria-modal="true" aria-label={list[idx].cap} className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4" onClick={() => setIdx(null)}>
          <button autoFocus aria-label="Close" onClick={() => setIdx(null)} className="absolute right-4 top-4 rounded-full bg-background/10 p-3 text-background hover:bg-background/20"><X /></button>
          <button aria-label="Previous image" onClick={(e) => { e.stopPropagation(); move(-1); }} className="absolute left-3 rounded-full bg-background/10 p-3 text-background hover:bg-background/20"><ChevronLeft /></button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img src={list[idx].src} alt={list[idx].cap} className="max-h-[80vh] rounded-xl object-contain" />
            <figcaption className="mt-3 text-center text-background">{list[idx].cap} <span className="opacity-60">({idx + 1}/{list.length})</span></figcaption>
          </figure>
          <button aria-label="Next image" onClick={(e) => { e.stopPropagation(); move(1); }} className="absolute right-3 rounded-full bg-background/10 p-3 text-background hover:bg-background/20"><ChevronRight /></button>
        </div>
      )}
    </>
  );
}
