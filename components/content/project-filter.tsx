"use client";

import { useState } from "react";
import type { Project, ProjectPlatform } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

type ProjectFilterProps = {
  projects: readonly Project[];
  platforms: readonly ProjectPlatform[];
};

/** Filter buttons (All / Web / Android / ML, as on the reference site) above the project grid. */
export function ProjectFilter({ projects, platforms }: ProjectFilterProps) {
  const [active, setActive] = useState<ProjectPlatform | "All">("All");
  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.platform === active);
  const options = ["All", ...platforms] as const;

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by type"
        className="mx-auto mb-12 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-2xl border border-primary/60 bg-surface p-1.5"
      >
        {options.map((option) => {
          const count =
            option === "All"
              ? projects.length
              : projects.filter((project) => project.platform === option)
                  .length;
          const selected = active === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(option)}
              className={cn(
                "inline-flex min-h-10 items-center gap-2 rounded-xl px-4 text-sm font-semibold transition-all duration-300",
                selected
                  ? "bg-brand text-white shadow-[0_8px_24px_-10px_rgb(132_0_255/0.8)]"
                  : "text-muted hover:bg-primary/15 hover:text-white",
              )}
            >
              {option}
              <span
                className={cn(
                  "rounded-md px-1.5 text-xs",
                  selected ? "bg-white/20" : "bg-primary/15 text-accent",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} {active === "All" ? "" : active} projects
      </p>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li
            key={project.slug}
            className="animate-[fade-in_300ms_ease-out_both]"
          >
            <ProjectCard project={project} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </>
  );
}
