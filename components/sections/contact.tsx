import { ContactLinks } from "@/components/content/contact-links";
import { SplitSection } from "./split-section";

export function Contact() {
  return (
    <SplitSection
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      intro="The best way to reach me is by email."
    >
      <ContactLinks />
    </SplitSection>
  );
}
