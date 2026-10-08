import { getExperience } from "@/lib/content";
import { ExperienceList } from "@/components/content/experience-list";
import { SplitSection } from "./split-section";

const PREVIEW_COUNT = 3;

export function ExperiencePreview() {
  return (
    <SplitSection
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      more={{ href: "/experience", label: "Full experience" }}
    >
      <ExperienceList entries={getExperience().slice(0, PREVIEW_COUNT)} />
    </SplitSection>
  );
}
