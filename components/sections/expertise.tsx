import { ExpertiseGrid } from "@/components/content/expertise-grid";
import { SplitSection } from "./split-section";

export function Expertise() {
  return (
    <SplitSection
      id="expertise"
      eyebrow="Expertise"
      title="What I work with"
      more={{ href: "/about#expertise", label: "More about how I work" }}
    >
      <ExpertiseGrid />
    </SplitSection>
  );
}
