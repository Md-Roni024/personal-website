import type { ExperienceEntry } from "@/lib/content";
import { TagList } from "@/components/ui/tag";

type ExperienceListProps = {
  entries: readonly ExperienceEntry[];
  /** `full` adds location and highlights (Experience page); `compact` is for previews. */
  variant?: "compact" | "full";
};

export function ExperienceList({
  entries,
  variant = "compact",
}: ExperienceListProps) {
  const full = variant === "full";
  return (
    <ol className="divide-y divide-border border-y border-border">
      {entries.map((entry) => (
        <li
          key={`${entry.organization}-${entry.role}-${entry.start}`}
          className={`grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-6 ${full ? "py-10" : "py-6"}`}
        >
          <p className="font-mono text-sm text-subtle">
            {entry.start} – {entry.end ?? "Present"}
          </p>
          <div>
            <h3 className={full ? "text-xl font-semibold" : "font-semibold"}>
              {entry.role}
              <span className="font-normal text-muted">
                {" "}
                · {entry.organization}
              </span>
            </h3>
            {full && entry.location && (
              <p className="mt-1 text-sm text-subtle">{entry.location}</p>
            )}
            <p className="mt-3 max-w-reading text-muted">{entry.summary}</p>
            {full && entry.highlights && entry.highlights.length > 0 && (
              <ul className="mt-4 max-w-reading list-disc space-y-1.5 pl-5 marker:text-subtle">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            {entry.technologies && (
              <TagList className="mt-4" tags={entry.technologies} />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
