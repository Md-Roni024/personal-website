import { siteConfig } from "@/site.config";
import { getExperience } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { ExperienceList } from "@/components/content/experience-list";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { TextLink } from "@/components/ui/text-link";

export const metadata = createMetadata({
  title: "Experience",
  description: `Professional experience of ${siteConfig.name}.`,
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked"
        intro="Roles, responsibilities and the work I contributed to, most recent first."
      />
      <Container className="pb-16 sm:pb-24">
        <ExperienceList entries={getExperience()} variant="full" />
        <p className="mt-12 text-center text-sm text-muted">
          A condensed version is available in my{" "}
          <TextLink href={siteConfig.cvPath}>CV</TextLink>.
        </p>
      </Container>
    </>
  );
}
