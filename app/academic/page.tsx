import { siteConfig } from "@/site.config";
import {
  getAcademicInterests,
  getCertifications,
  getEducation,
  getProjects,
} from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { CertificationList } from "@/components/content/certification-list";
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
  const certifications = getCertifications();

  return (
    <>
      <PageHeader
        eyebrow="Academic"
        title="Academic profile"
        intro="Education, certificates and academic work."
      />

      <Section aria-labelledby="education-heading" flushTop>
        <SectionHeading
          id="education-heading"
          title="Education"
          className="mb-12"
        />
        <EducationList entries={getEducation()} variant="full" />
      </Section>

      {certifications.length > 0 && (
        <Section
          id="certificates"
          aria-labelledby="certificates-heading"
          tone="tint"
          className="scroll-mt-20"
        >
          <SectionHeading
            id="certificates-heading"
            title="Certificates & Achievements"
            className="mb-12"
          />
          <CertificationList items={certifications} />
        </Section>
      )}

      {academicProjects.length > 0 && (
        <Section aria-labelledby="academic-projects-heading">
          <SectionHeading
            id="academic-projects-heading"
            title="Academic & research projects"
            className="mb-12"
          />
          <ProjectGrid projects={academicProjects} />
        </Section>
      )}

      {academicInterests.length > 0 && (
        <Section aria-labelledby="academic-interests-heading">
          <SectionHeading
            id="academic-interests-heading"
            title="Academic interests"
            className="mb-8"
          />
          <ul className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
            {academicInterests.map((interest) => (
              <li key={interest} className="card px-5 py-4 text-center">
                {interest}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-muted">
            See also{" "}
            <TextLink href="/interests">research &amp; interests</TextLink>.
          </p>
        </Section>
      )}
    </>
  );
}
