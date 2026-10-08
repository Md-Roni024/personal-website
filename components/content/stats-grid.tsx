import {
  getCertifications,
  getExperience,
  getExpertise,
  getProjects,
} from "@/lib/content";
import { cn } from "@/lib/utils";

/** Headline numbers in one panel, all counted from content so they stay accurate as content changes. */
export async function StatsGrid({ className }: { className?: string }) {
  const projects = await getProjects();
  const technologies = new Set(
    getExpertise().flatMap((category) => category.items),
  );
  const stats = [
    { value: projects.length, label: "Projects" },
    { value: technologies.size, label: "Technologies" },
    { value: getExperience().length, label: "Roles" },
    { value: getCertifications().length, label: "Certificates & awards" },
  ];

  return (
    <dl
      className={cn(
        "reveal grid grid-cols-2 overflow-hidden card [&>div:nth-child(-n+2)]:border-b [&>div:nth-child(odd)]:border-r",
        className,
      )}
    >
      {stats.map(({ value, label }) => (
        // dt before dd for valid markup; flex-col-reverse shows the number first.
        <div
          key={label}
          className="flex flex-col-reverse items-center justify-center border-border px-4 py-8 text-center"
        >
          <dt className="mt-2 text-sm text-muted">{label}</dt>
          <dd className="text-brand text-4xl font-bold sm:text-5xl">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
