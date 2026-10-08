import AboutContent from "@/content/about.mdx";
import { siteConfig } from "@/site.config";
import { getProfile } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { ExpertiseGrid } from "@/components/content/expertise-grid";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "About",
  description: `About ${siteConfig.name}: background, approach, interests and direction.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About me"
        intro={getProfile().headline}
      />

      <Container>
        <div className="max-w-reading [&>h2:first-child]:mt-0">
          <AboutContent />
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.cvPath}>View CV</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Get in touch
          </ButtonLink>
        </div>
      </Container>

      <Section id="expertise" aria-labelledby="expertise-heading" divided>
        <SectionHeading
          id="expertise-heading"
          eyebrow="Expertise"
          title="What I work with"
          className="mb-12"
        />
        <ExpertiseGrid />
      </Section>
    </>
  );
}
