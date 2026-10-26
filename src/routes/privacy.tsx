import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy Policy", "Draft privacy policy explaining how Mukama Mwesigwa Ministries may handle information shared through its website."),
  component: () => (
    <PolicyPage
      eyebrow="Privacy policy"
      title="Your Privacy Matters"
      intro="How information shared through this website may be handled."
      notice="Draft policy — requires review against the ministry's actual operations and applicable Ugandan data-protection requirements. This demo does not collect or store any information."
      sections={[
        ["Information collected", "When forms are connected, the website may collect names, contact details, enquiry content, donation preferences, volunteer details and offers of support."],
        ["Why it is collected", "To respond to enquiries, coordinate support, process donations through approved providers and keep supporters informed where they have agreed."],
        ["How it may be used", "Information will only be used for the purpose it was shared and will not be sold."],
        ["Data retention", "Information should be kept only as long as necessary and then securely deleted."],
        ["Access restrictions", "Access should be limited to authorised ministry personnel who need it."],
        ["Third-party services", "Payment providers, email services or hosting providers may process information on the ministry's behalf under their own privacy terms."],
        ["Cookies and analytics", "This demo does not use tracking cookies. If analytics are added, this section will be updated."],
        ["Privacy enquiries", "Please use the Contact page for any privacy questions until a dedicated contact is confirmed."],
      ]}
    />
  ),
});
