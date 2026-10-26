import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Heart, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { navLinks, site } from "@/content/site";
import logo from "@/assets/Mwesigwa_Logo.png";
import { Btn } from "./ui";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span
        className={`relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full ${light ? "bg-ivory" : "bg-background"}`}
      >
        <img src={logo} alt="" aria-hidden="true" className="absolute left-1/2 top-0 h-[70px] w-[70px] max-w-none -translate-x-1/2" />
      </span>
      <span className="leading-tight">
        <span className={`block font-serif text-lg font-semibold ${light ? "text-primary-foreground" : "text-primary"}`}>
          Mukama Mwesigwa
        </span>
        <span className={`block text-[11px] uppercase tracking-[0.2em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          Ministries
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Wordmark />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Btn to="/donate" variant="amber" className="ml-3">
            <Heart className="h-4 w-4" aria-hidden /> Donate
          </Btn>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <Btn to="/donate" variant="amber" className="px-4 py-2">Donate</Btn>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-md text-primary hover:bg-secondary"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-background px-5 pb-6 lg:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b py-4 text-base font-medium text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Btn to="/donate" variant="primary" className="mt-5 w-full justify-center" >
            <Heart className="h-4 w-4" aria-hidden /> Make a Donation
          </Btn>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark light />
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">{site.mission}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-amber hover:underline"
          >
            <Instagram className="h-4 w-4" aria-hidden /> @mukamamwesigwaministries
          </a>
        </div>
        <FooterCol
          title="Explore"
          links={[
            ["/about", "About Us"],
            ["/programmes", "Our Programmes"],
            ["/stories", "Our Stories"],
            ["/gallery", "Gallery"],
            ["/visit", "Visit Us"],
          ]}
        />
        <FooterCol
          title="Get Involved"
          links={[
            ["/donate", "Donate"],
            ["/get-involved", "Offer Material Support"],
            ["/get-involved", "Volunteer With Us"],
            ["/get-involved", "Partner With Us"],
            ["/contact", "Contact"],
          ]}
        />
        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-amber">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" aria-hidden /> {site.location}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" aria-hidden /> {site.phone ?? "Telephone to be confirmed"}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0" aria-hidden /> {site.email ?? "Email to be confirmed"}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-primary-foreground/65 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="hover:text-primary-foreground">Privacy Policy</Link>
            <Link to="/safeguarding" className="hover:text-primary-foreground">Child Safeguarding</Link>
            <Link to="/donation-information" className="hover:text-primary-foreground">Donation Information</Link>
          </div>
          <p>Website demo by {site.builtBy}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-amber">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map(([to, label]) => (
          <li key={label}>
            <Link to={to} className="text-primary-foreground/80 hover:text-primary-foreground">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
