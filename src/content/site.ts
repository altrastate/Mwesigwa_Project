/**
 * Central content configuration for Mukama Mwesigwa Ministries.
 * Every value marked `null` or with `TO CONFIRM` must be supplied by the
 * ministry before launch. Do not invent these details.
 */
export const site = {
  name: "Mukama Mwesigwa Ministries",
  location: "Jinja, Uganda",
  locationNote:
    "Located in the Jinja area of Uganda. Please contact the ministry to confirm the exact location and arrange your visit.",
  instagram: "https://www.instagram.com/mukamamwesigwaministries/",
  phone: null as string | null, // TO CONFIRM
  email: null as string | null, // TO CONFIRM
  address: null as string | null, // TO CONFIRM
  mapEmbedUrl: null as string | null, // TO CONFIRM: verified Google Maps embed URL
  safeguardingContact: null as string | null, // TO CONFIRM
  mission:
    "Helping vulnerable children and restoring communities in Uganda by encouraging people to support children in need.",
  builtBy: "Altrastate Technologies Ltd. — Digital Excellence",
};

export const launchChecklist = [
  "Official logo and brand assets",
  "Official telephone / WhatsApp number",
  "Official email address",
  "Approved physical address and map location",
  "Founder details and the ministry's official story",
  "Registration status and number (if applicable)",
  "Approval of mission, vision and values wording",
  "Confirmation of which programmes are actually running",
  "Ministry-approved photographs and videos (all current images are illustrative stock)",
  "Real stories with appropriate consent",
  "Payment provider, bank and mobile-money details",
  "Approved safeguarding policy and designated reporting contact",
  "Reviewed privacy policy",
  "Connection of forms to the ministry's official inbox or system",
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programmes", label: "Our Programmes" },
  { to: "/stories", label: "Our Stories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;
