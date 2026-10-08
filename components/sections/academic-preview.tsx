import { getAcademicInterests, getEducation } from "@/lib/content";
import { EducationList } from "@/components/content/education-list";
import { TagList } from "@/components/ui/tag";
import { SplitSection } from "./split-section";

export function AcademicPreview() {
  const academicInterests = getAcademicInterests();
  return (
    <SplitSection
      id="academic"
      eyebrow="Academic"
      title="Education"
      more={{ href: "/academic", label: "Academic profile" }}
    >
      <EducationList entries={getEducation()} />
      {academicInterests.length > 0 && (
        <div className="mt-10 border-t border-border pt-6 sm:pl-38">
          <h3 className="text-sm font-semibold">Academic interests</h3>
          <TagList className="mt-3" tags={academicInterests} />
        </div>
      )}
    </SplitSection>
  );
}
