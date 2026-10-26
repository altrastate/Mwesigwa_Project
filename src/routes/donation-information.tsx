import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";
import { Btn } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/donation-information")({
  head: () => seo("Donation Information", "How donations to Mukama Mwesigwa Ministries are intended to work, and how to ask questions about contributions."),
  component: () => (
    <PolicyPage
      eyebrow="Donation information"
      title="Giving With Confidence"
      intro="What to expect when supporting the ministry."
      notice="Online donations will be activated once the ministry approves its payment arrangements. Bank and mobile-money details will be published only after verification."
      sections={[
        ["Types of support", "The ministry intends to welcome financial gifts, material items, volunteering, professional services and partnerships."],
        ["Payment methods", "Please contact the ministry to enquire about currently available ways to give, from within Uganda or abroad."],
        ["Confirmations and receipts", "Once a payment provider is integrated, donors will receive confirmation of their gift from the provider and acknowledgement from the ministry."],
        ["Questions about contributions", "You are welcome to ask how contributions are used. Please reach out through the Contact page."],
        ["Activation", "The production donation process will be switched on after the ministry approves its payment arrangements."],
      ]}
      footer={<div className="flex flex-wrap gap-3"><Btn to="/donate">Go to Donate</Btn><Btn to="/contact" variant="outline">Ask a Question</Btn></div>}
    />
  ),
});
