import Link from "next/link";
import type { Project } from "@/lib/content";
import { Eyebrow } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";

type ProjectCardProps = {
  project: Project;
  /** Hide the category label when the surrounding list is already grouped by category. */
  showCategory?: boolean;
  headingLevel?: "h2" | "h3";
};

/** Open, rule-topped project block. The title link is stretched so the whole block is clickable. */
export function ProjectCard({
  project,
  showCategory = true,
  headingLevel = "h3",
}: ProjectCardProps) {
  const Heading = headingLevel;
  return (
    <article className="group relative border-t border-border pt-5">
      <Eyebrow>
        {showCategory ? `${project.category} · ${project.year}` : project.year}
      </Eyebrow>
      <Heading className="mt-3 font-serif text-2xl/tight">
        <Link
          href={`/projects/${project.slug}`}
          className="transition-colors duration-200 group-hover:text-accent after:absolute after:inset-0"
        >
          {project.title}
        </Link>
      </Heading>
      <p className="mt-3 text-muted">{project.summary}</p>
      <TagList className="mt-4" tags={project.technologies} />
    </article>
  );
}

export function ProjectGrid({
  projects,
  ...cardProps
}: { projects: readonly Project[] } & Omit<ProjectCardProps, "project">) {
  return (
    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} {...cardProps} />
        </li>
      ))}
    </ul>
  );
}
