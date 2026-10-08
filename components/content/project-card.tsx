import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";
import { TagList } from "@/components/ui/tag";

type ProjectCardProps = {
  project: Project;
  /** Show the category label (hide it when the list is already grouped by category). */
  showCategory?: boolean;
  headingLevel?: "h2" | "h3";
};

/** Project card (reference-site style): cover image, tags, title, date, summary. The whole card is clickable. */
export function ProjectCard({
  project,
  showCategory = false,
  headingLevel = "h3",
}: ProjectCardProps) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full card-hover flex-col overflow-hidden card">
      {project.image ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-white">
          <Image
            src={project.image}
            alt=""
            fill
            // Remote project images are mostly SVG logos; serve them as-is.
            unoptimized={project.image.startsWith("http")}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        // No image: a brand-gradient panel with the project's initials keeps the grid even.
        <div
          aria-hidden="true"
          className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-brand"
        >
          <span className="text-5xl font-bold tracking-tight text-white/90 transition-transform duration-500 group-hover:scale-110">
            {initials(project.title)}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <TagList tags={project.technologies.slice(0, 5)} />
        <Heading className="mt-4 text-xl/snug font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors duration-200 group-hover:text-accent after:absolute after:inset-0"
          >
            {project.title}
          </Link>
        </Heading>
        <p className="mt-1 text-sm text-subtle">
          {showCategory && `${project.category} · `}
          {project.year}
        </p>
        <p className="mt-3 line-clamp-3 text-sm/relaxed text-muted">
          {project.summary}
        </p>
      </div>
    </article>
  );
}

export function ProjectGrid({
  projects,
  ...cardProps
}: { projects: readonly Project[] } & Omit<ProjectCardProps, "project">) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.slug} className="reveal">
          <ProjectCard project={project} {...cardProps} />
        </li>
      ))}
    </ul>
  );
}

function initials(title: string) {
  return title
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}
