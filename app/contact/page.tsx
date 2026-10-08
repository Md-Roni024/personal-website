import { siteConfig } from "@/site.config";
import { createMetadata } from "@/lib/metadata";
import { ContactLinks } from "@/components/content/contact-links";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = createMetadata({
  title: "Contact",
  description: `How to get in touch with ${siteConfig.name}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Email, profiles and resume."
      />
      <Container className="pb-16 sm:pb-24">
        <ContactLinks />
      </Container>
    </>
  );
}
