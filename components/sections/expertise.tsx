import { ExpertiseGrid } from "@/components/content/expertise-grid";
import { HomeSection } from "./home-section";

export function Expertise() {
  return (
    <HomeSection
      id="skills"
      eyebrow="Skills"
      title="Skills"
      intro="Here are some of the skills I have been working with."
      tone="tint"
    >
      <ExpertiseGrid />
    </HomeSection>
  );
}
