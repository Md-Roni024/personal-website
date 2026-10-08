import type { EducationEntry } from "@/lib/content";
import { TagList } from "@/components/ui/tag";

type EducationListProps = {
  entries: readonly EducationEntry[];
  /** `full` adds coursework (Academic page). */
  variant?: "compact" | "full";
};

export function EducationList({
  entries,
  variant = "compact",
}: EducationListProps) {
  return (
    <ul className="space-y-10">
      {entries.map((entry) => (
        <li
          key={`${entry.institution}-${entry.degree}`}
          className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-6"
        >
          <p className="font-mono text-sm text-subtle">
            {entry.start}
            {entry.end && ` – ${entry.end}`}
          </p>
          <div>
            <h3
              className={
                variant === "full" ? "text-xl font-semibold" : "font-semibold"
              }
            >
              {entry.degree}
            </h3>
            <p className="mt-1 text-muted">
              {entry.institution}
              {entry.department && ` · ${entry.department}`}
            </p>
            {entry.summary && (
              <p className="mt-3 max-w-reading text-muted">{entry.summary}</p>
            )}
            {variant === "full" &&
              entry.coursework &&
              entry.coursework.length > 0 && (
                <div className="mt-5">
                  <p className="text-sm font-semibold">Relevant coursework</p>
                  <TagList className="mt-2" tags={entry.coursework} />
                </div>
              )}
          </div>
        </li>
      ))}
    </ul>
  );
}
