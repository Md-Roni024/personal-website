import { getEducation } from "@/lib/content";
import { EducationList } from "@/components/content/education-list";
import { HomeSection } from "./home-section";

export function AcademicPreview() {
  return (
    <HomeSection
      id="education"
      eyebrow="Education"
      title="Education"
      more={{ href: "/academic", label: "Academic profile" }}
    >
      <EducationList entries={getEducation()} />
    </HomeSection>
  );
}
