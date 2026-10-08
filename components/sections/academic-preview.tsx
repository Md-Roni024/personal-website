import { getAcademicInterests, getEducation } from "@/lib/content";
import { TagList } from "@/components/ui/tag";
import { SplitSection } from "./split-section";

export function AcademicPreview() {
  const education = getEducation();
  const academicInterests = getAcademicInterests();
  return (
    <SplitSection
      id="academic"
      eyebrow="Academic"
      title="Education"
      more={{ href: "/academic", label: "Academic profile" }}
    >
      <ul className="space-y-8">
        {education.map((entry) => (
          <li
            key={`${entry.institution}-${entry.degree}`}
            className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-6"
          >
            <p className="font-mono text-sm text-subtle">
              {entry.start}
              {entry.end && ` – ${entry.end}`}
            </p>
            <div>
              <h3 className="font-semibold">{entry.degree}</h3>
              <p className="mt-1 text-muted">
                {entry.institution}
                {entry.department && ` · ${entry.department}`}
              </p>
              {entry.summary && (
                <p className="mt-2 max-w-reading text-muted">{entry.summary}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      {academicInterests.length > 0 && (
        <div className="mt-10 border-t border-border pt-6 sm:pl-38">
          <h3 className="text-sm font-semibold">Academic interests</h3>
          <TagList className="mt-3" tags={academicInterests} />
        </div>
      )}
    </SplitSection>
  );
}
