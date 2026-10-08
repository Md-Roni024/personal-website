import Link from "next/link";
import { getFeaturedProjects } from "@/lib/content";
import { Eyebrow } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { SplitSection } from "./split-section";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();
  return (
    <SplitSection
      id="projects"
      eyebrow="Selected work"
      title="Featured projects"
      more={{ href: "/projects", label: "All projects" }}
    >
      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className="border-t border-border pt-5">
            <article className="group relative">
              <Eyebrow>
                {project.category} · {project.year}
              </Eyebrow>
              <h3 className="mt-3 font-serif text-2xl/tight">
                {/* The stretched ::after makes the whole block clickable while keeping one link per project. */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="transition-colors duration-200 group-hover:text-accent after:absolute after:inset-0"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-3 text-muted">{project.summary}</p>
              <TagList className="mt-4" tags={project.technologies} />
            </article>
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}
