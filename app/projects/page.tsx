import { siteConfig } from "@/site.config";
import { getProjects, projectCategories } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { ProjectGrid } from "@/components/content/project-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "Projects",
  description: `Selected projects by ${siteConfig.name}: professional, academic, personal and experimental work.`,
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

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work"
        intro="A small set of projects I'm proud of, grouped by the context they were built in."
      >
        {groups.length > 1 && (
          <nav aria-label="Project categories" className="mt-10">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {groups.map(({ category, projects }) => (
                <li key={category}>
                  <a
                    href={`#${slugify(category)}`}
                    className="text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {category}{" "}
                    <span className="font-mono text-xs text-subtle">
                      {projects.length}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </PageHeader>

      {groups.map(({ category, projects }, index) => (
        <Section
          key={category}
          id={slugify(category)}
          aria-labelledby={`${slugify(category)}-heading`}
          divided={index > 0}
          flushTop={index === 0}
          className="scroll-mt-8"
        >
          <SectionHeading
            id={`${slugify(category)}-heading`}
            title={category}
            className="mb-10"
          />
          <ProjectGrid projects={projects} showCategory={false} />
        </Section>
      ))}
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
