import type { EducationEntry } from "@/lib/content";
import { TagList } from "@/components/ui/tag";
import { Timeline, TimelineItem } from "./timeline";

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
    <Timeline>
      {entries.map((entry) => (
        <TimelineItem
          key={`${entry.institution}-${entry.degree}`}
          date={`${entry.start}${entry.end ? ` – ${entry.end}` : ""}`}
        >
          <h3 className="text-lg font-semibold">{entry.institution}</h3>
          <p className="mt-1 font-medium text-accent italic">
            {entry.degree}
            {entry.department && ` · ${entry.department}`}
          </p>
          {entry.summary && (
            <p className="mt-3 text-sm text-muted">{entry.summary}</p>
          )}
          {variant === "full" &&
            entry.coursework &&
            entry.coursework.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold tracking-wide text-subtle uppercase">
                  Relevant coursework
                </p>
                <TagList className="mt-2" tags={entry.coursework} />
              </div>
            )}
        </TimelineItem>
      ))}
    </Timeline>
  );
}
