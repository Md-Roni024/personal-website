import { getExperience } from "@/lib/content";
import { TagList } from "@/components/ui/tag";
import { SplitSection } from "./split-section";

const PREVIEW_COUNT = 3;

export function ExperiencePreview() {
  const entries = getExperience().slice(0, PREVIEW_COUNT);
  return (
    <SplitSection
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      more={{ href: "/experience", label: "Full experience" }}
    >
      <ol className="divide-y divide-border border-y border-border">
        {entries.map((entry) => (
          <li
            key={`${entry.organization}-${entry.start}`}
            className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6"
          >
            <p className="font-mono text-sm text-subtle">
              {entry.start} – {entry.end ?? "Present"}
            </p>
            <div>
              <h3 className="font-semibold">
                {entry.role}
                <span className="font-normal text-muted">
                  {" "}
                  · {entry.organization}
                </span>
              </h3>
              <p className="mt-2 max-w-reading text-muted">{entry.summary}</p>
              {entry.technologies && (
                <TagList className="mt-3" tags={entry.technologies} />
              )}
            </div>
          </li>
        ))}
      </ol>
    </SplitSection>
  );
}
