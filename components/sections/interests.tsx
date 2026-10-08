import { getInterests } from "@/lib/content";
import {
  ExploringList,
  InterestList,
} from "@/components/content/interest-list";
import { SplitSection } from "./split-section";

export function Interests() {
  const { currentWork, exploring, future } = getInterests();
  return (
    <SplitSection
      id="interests"
      eyebrow="Research & interests"
      title="What I'm exploring"
      more={{ href: "/interests", label: "Research & interests" }}
    >
      <div className="grid gap-12 sm:grid-cols-2 sm:gap-8">
        <InterestList heading="Current work" items={currentWork} />
        <InterestList heading="Future interests" items={future} />
      </div>
      <div className="mt-12 border-t border-border pt-6">
        <h3 className="mb-4 font-mono text-xs tracking-widest text-subtle uppercase">
          Currently exploring
        </h3>
        <ExploringList topics={exploring} />
      </div>
    </SplitSection>
  );
}
