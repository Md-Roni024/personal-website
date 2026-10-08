import { ContactLinks } from "@/components/content/contact-links";
import { HomeSection } from "./home-section";

export function Contact() {
  return (
    <HomeSection
      id="contact"
      eyebrow="Contact"
      title="Get in Touch"
      intro="Email, profiles and resume."
      tone="band"
    >
      <ContactLinks />
    </HomeSection>
  );
}
