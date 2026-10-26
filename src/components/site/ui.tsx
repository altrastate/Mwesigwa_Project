import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Info, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "amber" | "outline" | "ghost-light";
const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
  amber: "bg-amber text-amber-foreground hover:bg-amber/90",
  outline: "border border-primary/30 text-primary hover:bg-secondary",
  "ghost-light": "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
};
const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0";

export function Btn({
  to,
  hash,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  to?: string;
  hash?: string | undefined;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = cn(base, variants[variant], className);
  if (to)
    return (
      <Link to={to} {...(hash ? { hash } : {})} className={cls}>
        {children}
      </Link>
    );
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto max-w-7xl px-5", className)}>{children}</div>;
}

export function Section({
  className,
  children,
  tone = "white",
  id,
}: {
  className?: string;
  children: ReactNode;
  tone?: "white" | "ivory" | "green";
  id?: string;
}) {
  const t = { white: "bg-background", ivory: "bg-ivory", green: "bg-primary text-primary-foreground" }[tone];
  return (
    <section id={id} className={cn("py-20 md:py-24", t, className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-semibold uppercase tracking-[0.2em] text-amber", className)}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <img
            src={image}
            alt=""
            width={1280}
            height={960}
            className="hidden aspect-[4/3] w-full rounded-3xl object-cover shadow-soft lg:block"
          />
        )}
      </Container>
    </section>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-2xl border bg-card p-7 shadow-sm transition-shadow hover:shadow-soft", className)}>
      {children}
    </div>
  );
}

export function Notice({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      role="note"
      className={cn("flex gap-3 rounded-xl border border-amber/40 bg-amber/10 p-4 text-sm leading-relaxed text-foreground", className)}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden />
      <div>{children}</div>
    </div>
  );
}

export function Confirmation({ title, children, onReset }: { title: string; children: ReactNode; onReset?: () => void }) {
  return (
    <div role="status" aria-live="polite" className="rounded-2xl border bg-card p-8 text-center shadow-soft">
      <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <div className="mx-auto mt-3 max-w-md text-muted-foreground">{children}</div>
      {onReset && (
        <Btn variant="outline" className="mt-6" onClick={onReset} type="button">
          Start again
        </Btn>
      )}
    </div>
  );
}

export function CtaBand({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <Container className="text-center">
        <h2 className="text-3xl font-semibold text-primary-foreground md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
      </Container>
    </section>
  );
}

export function MapPlaceholder() {
  return (
    <div
      className="relative grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-3xl border bg-secondary"
      aria-label="Map placeholder — exact location to be confirmed"
      role="img"
    >
      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="currentColor" className="text-primary" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="relative max-w-xs rounded-2xl bg-card p-6 text-center shadow-soft">
        <p className="font-serif text-xl text-primary">Jinja, Uganda</p>
        <p className="mt-2 text-sm text-muted-foreground">Map will appear here once the ministry confirms its exact location.</p>
      </div>
    </div>
  );
}
