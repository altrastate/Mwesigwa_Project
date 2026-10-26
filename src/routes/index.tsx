import { createFileRoute } from "@tanstack/react-router";
import { HandCoins, Package, HandHeart, Handshake, Heart, ShieldCheck, Users, ArrowRight, MapPin } from "lucide-react";
import hero from "@/assets/hero.jpg";
import supplies from "@/assets/supplies.jpg";
import education from "@/assets/education.jpg";
import community from "@/assets/community.jpg";
import { Btn, Card, Container, CtaBand, Eyebrow, MapPlaceholder, Section, SectionHeading } from "@/components/site/ui";
import { seo } from "@/lib/seo";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => seo("Every Child Deserves Hope", "Mukama Mwesigwa Ministries works to help vulnerable children and restore communities in Jinja, Uganda. Discover how you can help."),
  component: Home,
});

const ways = [
  { icon: HandCoins, title: "Financial Donations", text: "Help support essential needs and ministry programmes through financial contributions.", cta: "Donate Now", to: "/donate" },
  { icon: Package, title: "Material Support", text: "Offer useful items such as clothing, school supplies, food, bedding, and other requested essentials.", cta: "Give Supplies", to: "/get-involved", hash: "material" },
  { icon: HandHeart, title: "Volunteer", text: "Share your time, skills, and experience to support approved ministry activities.", cta: "Become a Volunteer", to: "/get-involved", hash: "volunteer" },
  { icon: Handshake, title: "Partnerships", text: "Work with us through community initiatives, professional services, and organizational partnerships.", cta: "Partner With Us", to: "/get-involved", hash: "partner" },
];

const work = [
  { img: community, cap: "Supporting Children in Our Community" },
  { img: supplies, cap: "Sharing Essential Supplies" },
  { img: hero, cap: "Creating Moments of Hope" },
  { img: education, cap: "Growing Together Through Community" },
];

function Home() {
  return (
    <>
      <section className="bg-ivory">
        <Container className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <Eyebrow>Jinja, Uganda</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Every Child Deserves <em className="text-amber not-italic">Hope.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Together, we can help create a future filled with care, opportunity, and dignity for vulnerable children in our communities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn to="/donate"><Heart className="h-4 w-4" aria-hidden /> Make a Donation</Btn>
              <Btn to="/about" variant="outline">Discover Our Mission</Btn>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2rem] border-2 border-amber/50 lg:block" aria-hidden />
            <img
              src={hero}
              alt="Children reading books together under a tree"
              width={1280}
              height={1536}
              fetchPriority="high"
              className="relative aspect-[5/6] w-full rounded-[2rem] object-cover shadow-soft"
            />
            <p className="mt-2 text-right text-xs text-muted-foreground">Illustrative image</p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading eyebrow="Welcome" title="Welcome to Mukama Mwesigwa Ministries" />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>We believe that every child deserves care, dignity, and the opportunity to grow. Through community-focused support and the kindness of people who care, we seek to make a meaningful difference in the lives of vulnerable children in Uganda.</p>
            <p>Our mission is simple: to help vulnerable children and restore communities by inviting people to stand alongside children in need.</p>
            <Btn to="/about" variant="outline">About Us <ArrowRight className="h-4 w-4" aria-hidden /></Btn>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading center eyebrow="Get involved" title="Ways to Make a Difference" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w) => (
            <Card key={w.title} className="flex flex-col">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary"><w.icon className="h-6 w-6" aria-hidden /></span>
              <h3 className="mt-5 text-xl font-semibold">{w.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              <Btn to={w.to} hash={w.hash} variant="outline" className="mt-6 self-start">{w.cta}</Btn>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="green">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-primary-foreground md:text-5xl">Restoring Communities, One Child at a Time</h2>
            <blockquote className="mt-8 border-l-2 border-amber pl-6 font-serif text-xl italic leading-relaxed text-primary-foreground/90">
              We are on a mission to help restore communities across Uganda — inviting each person to care for one child as a parent would, and to make a real change in that child's life.
            </blockquote>
            <p className="mt-6 text-primary-foreground/75">A call to compassion and personal care — not a formal placement or adoption programme.</p>
          </div>
          <div className="grid gap-4">
            {[
              { i: Heart, t: "Compassion", d: "Responding to need with genuine kindness and care." },
              { i: ShieldCheck, t: "Dignity", d: "Honouring every child's worth, privacy and safety." },
              { i: Users, t: "Community", d: "Believing lasting change grows when people act together." },
            ].map((v) => (
              <div key={v.t} className="flex gap-5 rounded-2xl bg-primary-foreground/5 p-6 ring-1 ring-primary-foreground/10">
                <v.i className="h-7 w-7 shrink-0 text-amber" aria-hidden />
                <div>
                  <h3 className="text-xl font-semibold text-primary-foreground">{v.t}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/75">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our work in action" title="Moments of Care and Community" intro="Illustrative images — to be replaced with ministry-approved photography." />
          <Btn to="/gallery" variant="outline">View Our Gallery <ArrowRight className="h-4 w-4" aria-hidden /></Btn>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {work.map((w) => (
            <figure key={w.cap} className="group overflow-hidden rounded-2xl bg-card shadow-sm">
              <img src={w.img} alt={w.cap} loading="lazy" width={1280} height={960} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="p-5 font-serif text-lg text-primary">{w.cap}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img src={supplies} alt="Volunteers sorting donated supplies" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
          <div>
            <SectionHeading eyebrow="How you can help" title="Your Kindness Can Make a Difference" intro="Every supporter has something to give. Whatever your gift, it can help the ministry respond to children's needs." />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Financial donations", "Supplies and essentials", "Professional skills", "Volunteering time", "Partnerships"].map((x) => (
                <li key={x} className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 text-sm font-medium shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-amber" aria-hidden /> {x}
                </li>
              ))}
            </ul>
            <Btn to="/get-involved" className="mt-8">Explore Ways to Help</Btn>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Location" title="Find Us in Jinja, Uganda" />
            <p className="mt-5 flex gap-3 text-lg text-muted-foreground"><MapPin className="mt-1 h-5 w-5 shrink-0 text-amber" aria-hidden />{site.locationNote}</p>
            <Btn to="/contact" className="mt-8">Contact Us for Directions</Btn>
          </div>
          <MapPlaceholder />
        </div>
      </Section>

      <CtaBand title="Be Part of the Hope" text="Every meaningful act of kindness can help create new possibilities. Discover how you can support the ministry and the community it serves.">
        <Btn to="/donate" variant="amber">Donate to Support</Btn>
        <Btn to="/get-involved" variant="ghost-light">Get Involved</Btn>
      </CtaBand>
    </>
  );
}
