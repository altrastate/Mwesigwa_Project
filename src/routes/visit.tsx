import { createFileRoute } from "@tanstack/react-router";
import { MapPin, CalendarCheck, ShieldCheck } from "lucide-react";
import { Btn, Card, MapPlaceholder, PageHero, Section } from "@/components/site/ui";
import { site } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/visit")({
  head: () => seo("Visit Us", "Arrange a visit or meeting with Mukama Mwesigwa Ministries in the Jinja area of Uganda."),
  component: Visit,
});

function Visit() {
  return (
    <>
      <PageHero eyebrow="Visit us" title="We Welcome Your Enquiries" intro="Whether you'd like to meet the team, discuss a partnership or learn more about the ministry, we'd be glad to hear from you." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {site.mapEmbedUrl ? (
            <iframe title="Ministry location" src={site.mapEmbedUrl} className="aspect-[4/3] w-full rounded-3xl border" loading="lazy" />
          ) : (
            <MapPlaceholder />
          )}
          <div className="space-y-5">
            <Card>
              <MapPin className="h-6 w-6 text-amber" aria-hidden />
              <h2 className="mt-3 text-2xl font-semibold">Location</h2>
              <p className="mt-2 text-muted-foreground">{site.address ?? site.locationNote}</p>
            </Card>
            <Card>
              <CalendarCheck className="h-6 w-6 text-amber" aria-hidden />
              <h2 className="mt-3 text-2xl font-semibold">Visiting arrangements</h2>
              <p className="mt-2 text-muted-foreground">Please arrange appointments in advance so the team can welcome you properly. Visiting times will be confirmed when you get in touch.</p>
            </Card>
            <Card>
              <ShieldCheck className="h-6 w-6 text-amber" aria-hidden />
              <h2 className="mt-3 text-2xl font-semibold">Respecting children</h2>
              <p className="mt-2 text-muted-foreground">Visits follow the ministry's safeguarding expectations. Please read our <a href="/safeguarding" className="text-primary underline">safeguarding principles</a>.</p>
            </Card>
            <Btn to="/contact" className="w-full justify-center">Contact Us to Arrange a Visit</Btn>
          </div>
        </div>
      </Section>
    </>
  );
}
