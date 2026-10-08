import { siteConfig } from "@/site.config";
import { getInterests } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import {
  BeyondCodeList,
  ExploringList,
  InterestList,
} from "@/components/content/interest-list";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Research & Interests",
  description: `What ${siteConfig.name} works on, is exploring, and wants to explore next, plus interests beyond code.`,
  path: "/interests",
});

export default function InterestsPage() {
  const { currentWork, exploring, future, beyondCode } = getInterests();
  return (
    <>
      <PageHeader
        eyebrow="Research & interests"
        title="What I'm exploring"
        intro="What I work on today, what I'm learning now, and where I would like to go next."
      />

      <Section aria-label="Current work and future interests" flushTop>
        <div className="grid gap-14 md:grid-cols-2 md:gap-10">
          <InterestList
            heading="Current work"
            items={currentWork}
            headingLevel="h2"
          />
          <InterestList
            heading="Future interests"
            items={future}
            headingLevel="h2"
          />
        </div>
      </Section>

      <Section aria-labelledby="exploring-heading" divided>
        <SectionHeading
          id="exploring-heading"
          eyebrow="Now"
          title="Currently exploring"
          className="mb-8"
        />
        <ExploringList topics={exploring} />
      </Section>

      <Section id="beyond-code" aria-labelledby="beyond-code-heading" divided>
        <SectionHeading
          id="beyond-code-heading"
          eyebrow="Beyond code"
          title="Outside of work"
          className="mb-12"
        />
        <BeyondCodeList items={beyondCode} />
      </Section>
    </>
  );
}
