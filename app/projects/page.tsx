import { siteConfig } from "@/site.config";
import { getProjects, projectPlatforms } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { ProjectFilter } from "@/components/content/project-filter";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Projects",
  description: `Projects by ${siteConfig.name}: web apps, Android apps and machine learning.`,
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjects();
  // Only offer filters for project types that actually exist.
  const platforms = projectPlatforms.filter((platform) =>
    projects.some((project) => project.platform === platform),
  );

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        intro="I have worked on a wide range of projects, from web apps to Android apps and machine learning. Here are some of my projects."
      />
      <Section aria-label="All projects" flushTop>
        <ProjectFilter projects={projects} platforms={platforms} />
      </Section>
    </>
  );
}
