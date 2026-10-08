import { siteConfig } from "@/site.config";
import { getProjects, projectCategories } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { ProjectGrid } from "@/components/content/project-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Projects",
  description: `Projects by ${siteConfig.name}: web apps, Android apps and machine learning.`,
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getProjects();
  // Group by category in a fixed order; empty categories are not shown.
  const groups = projectCategories
    .map((category) => ({
      category,
      projects: projects.filter((project) => project.category === category),
    }))
    .filter((group) => group.projects.length > 0);
  const grouped = groups.length > 1;

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        intro="I have worked on a wide range of projects, from web apps to Android apps and machine learning. Here are some of my projects."
      >
        {grouped && (
          <nav aria-label="Project categories" className="mt-10">
            <ul className="flex flex-wrap justify-center gap-3 text-sm">
              {groups.map(({ category, projects }) => (
                <li key={category}>
                  <a
                    href={`#${slugify(category)}`}
                    className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-primary"
                  >
                    {category}
                    <span className="text-xs text-accent">
                      {projects.length}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </PageHeader>

      {grouped ? (
        groups.map(({ category, projects }, index) => (
          <Section
            key={category}
            id={slugify(category)}
            aria-labelledby={`${slugify(category)}-heading`}
            flushTop={index === 0}
            className="scroll-mt-24"
          >
            <SectionHeading
              id={`${slugify(category)}-heading`}
              title={category}
              className="mb-12"
            />
            <ProjectGrid projects={projects} />
          </Section>
        ))
      ) : (
        <Section aria-label="All projects" flushTop>
          <ProjectGrid projects={projects} />
        </Section>
      )}
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
