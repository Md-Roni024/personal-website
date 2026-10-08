import { siteConfig } from "@/site.config";
import { getAcademicInterests, getEducation, getProjects } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { EducationList } from "@/components/content/education-list";
import { ProjectGrid } from "@/components/content/project-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";

export const metadata = createMetadata({
  title: "Academic",
  description: `Education, academic projects and research interests of ${siteConfig.name}.`,
  path: "/academic",
});

// Future sections (publications, thesis, conference papers) get added here once there is real content for them.
export default async function AcademicPage() {
  const academicProjects = (await getProjects()).filter(
    (project) =>
      project.category === "Academic" || project.category === "Research",
  );
  const academicInterests = getAcademicInterests();

  return (
    <>
      <PageHeader
        eyebrow="Academic"
        title="Academic profile"
        intro="Education, academic work and the areas I would like to study further."
      />

      <Section aria-labelledby="education-heading" flushTop>
        <SectionHeading
          id="education-heading"
          title="Education"
          className="mb-10"
        />
        <EducationList entries={getEducation()} variant="full" />
      </Section>

      {academicProjects.length > 0 && (
        <Section aria-labelledby="academic-projects-heading" divided>
          <SectionHeading
            id="academic-projects-heading"
            title="Academic & research projects"
            className="mb-10"
          />
          <ProjectGrid projects={academicProjects} />
        </Section>
      )}

      {academicInterests.length > 0 && (
        <Section aria-labelledby="academic-interests-heading" divided>
          <SectionHeading
            id="academic-interests-heading"
            title="Academic interests"
            className="mb-8"
          />
          <ul className="grid max-w-reading gap-3 sm:grid-cols-2">
            {academicInterests.map((interest) => (
              <li key={interest} className="border-t border-border pt-3">
                {interest}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-muted">
            See also{" "}
            <TextLink href="/interests">research &amp; interests</TextLink>.
          </p>
        </Section>
      )}
    </>
  );
}
