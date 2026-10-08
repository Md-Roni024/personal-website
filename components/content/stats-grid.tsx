import { Award, Briefcase, Code2, FolderGit2 } from "lucide-react";
import {
  getCertifications,
  getExperience,
  getExpertise,
  getProjects,
} from "@/lib/content";
import { cn } from "@/lib/utils";

/** Headline numbers, all counted from content so they stay accurate as content changes. */
export async function StatsGrid({ className }: { className?: string }) {
  const projects = await getProjects();
  const technologies = new Set(
    getExpertise().flatMap((category) => category.items),
  );
  const stats = [
    {
      icon: FolderGit2,
      value: projects.length,
      label: "Projects",
      detail: "Web, Android & machine learning",
    },
    {
      icon: Code2,
      value: technologies.size,
      label: "Technologies",
      detail: "Frontend, backend, databases & ML",
    },
    {
      icon: Award,
      value: getCertifications().length,
      label: "Certificates",
      detail: "Courses & competitions",
    },
    {
      icon: Briefcase,
      value: getExperience().length,
      label: "Experiences",
      detail: "Industry roles & attachment",
    },
  ];

  return (
    <ul className={cn("grid grid-cols-2 gap-4 sm:gap-6", className)}>
      {stats.map(({ icon: Icon, value, label, detail }) => (
        <li
          key={label}
          className="reveal group relative card-hover overflow-hidden card p-5 sm:p-6"
        >
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 size-28 rounded-full bg-brand opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25"
          />
          <Icon aria-hidden="true" className="size-6 text-accent" />
          <div className="mt-4">
            <p className="text-brand text-4xl font-bold sm:text-5xl">{value}</p>
            <p className="mt-2 font-semibold text-white">{label}</p>
            <p className="mt-1 text-xs/relaxed text-muted sm:text-sm">
              {detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
