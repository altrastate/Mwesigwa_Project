import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/PolicyPage";
import { Btn } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/safeguarding")({
  head: () => seo("Child Safeguarding", "The proposed child safeguarding principles of Mukama Mwesigwa Ministries: dignity, safety, consent and responsible conduct."),
  component: () => (
    <PolicyPage
      eyebrow="Child safeguarding"
      title="Protecting Every Child's Dignity and Safety"
      intro="Children's wellbeing comes first in everything the ministry does."
      notice="Proposed website content — this page requires formal review and approval by the ministry. It does not represent an approved safeguarding policy or certification."
      sections={[
        ["Dignity and safety", "Every child should be treated with respect and protected from harm, exploitation and neglect."],
        ["Responsible photography and publication", "Images and stories should only be shared in ways that protect children's identity and dignity. Children's names and private details are never published."],
        ["Appropriate consent", "Consent from children (where appropriate) and their guardians should be sought before any image or story is used."],
        ["Respectful interactions", "Volunteers, visitors and partners are expected to behave appropriately and never be alone with children without suitable arrangements."],
        ["Confidential handling of information", "Sensitive information about children and families should be stored securely and shared only when necessary."],
        ["Safe volunteering and visiting", "Volunteering and visits are subject to review and appropriate safeguarding checks."],
        ["Reporting concerns", "Concerns should be reported through authorised channels. Until a designated safeguarding contact is published here, please contact the ministry through its verified official channels."],
      ]}
      footer={<Btn to="/contact">Contact the Ministry</Btn>}
    />
  ),
});
