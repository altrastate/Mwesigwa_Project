import type { ReactNode } from "react";
import { Notice, PageHero, Section } from "./ui";

export function PolicyPage({ eyebrow, title, intro, notice, sections, footer }: { eyebrow: string; title: string; intro: string; notice: string; sections: [string, ReactNode][]; footer?: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Notice>{notice}</Notice>
          <div className="mt-10 space-y-10">
            {sections.map(([h, body], i) => (
              <section key={h}>
                <h2 className="text-2xl font-semibold"><span className="mr-3 text-amber">{String(i + 1).padStart(2, "0")}</span>{h}</h2>
                <div className="mt-3 leading-relaxed text-muted-foreground">{body}</div>
              </section>
            ))}
          </div>
          {footer && <div className="mt-12">{footer}</div>}
        </div>
      </Section>
    </>
  );
}
