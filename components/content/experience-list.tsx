import { MapPin } from "lucide-react";
import type { ExperienceEntry } from "@/lib/content";
import { TagList } from "@/components/ui/tag";
import { Timeline, TimelineItem } from "./timeline";

type ExperienceListProps = {
  entries: readonly ExperienceEntry[];
  /** `full` shows every highlight (Experience page); `compact` shows the first two (homepage). */
  variant?: "compact" | "full";
};

export function ExperienceList({
  entries,
  variant = "compact",
}: ExperienceListProps) {
  return (
    <Timeline>
      {entries.map((entry) => {
        const highlights =
          variant === "full" ? entry.highlights : entry.highlights?.slice(0, 2);
        return (
          <TimelineItem
            key={`${entry.organization}-${entry.start}`}
            date={`${entry.start} – ${entry.end ?? "Present"}`}
          >
            <h3 className="text-xl font-semibold">
              {entry.role ?? entry.organization}
            </h3>
            {entry.role && (
              <p className="mt-1 font-medium text-accent">
                {entry.organization}
              </p>
            )}
            {entry.location && (
              <p className="mt-2 flex items-center gap-1.5 text-sm text-subtle">
                <MapPin aria-hidden="true" className="size-3.5" />
                {entry.location}
              </p>
            )}
            {entry.summary && (
              <p className="mt-4 text-muted">{entry.summary}</p>
            )}
            {highlights && highlights.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm/relaxed text-muted">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            {entry.technologies && (
              <TagList className="mt-5" tags={entry.technologies} />
            )}
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
