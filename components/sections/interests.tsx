import { getInterests } from "@/lib/content";
import {
  ExploringList,
  InterestList,
} from "@/components/content/interest-list";
import { HomeSection } from "./home-section";

export function Interests() {
  const { currentWork, exploring, future } = getInterests();
  return (
    <HomeSection
      id="interests"
      eyebrow="Research & interests"
      title="What I'm Exploring"
      more={{ href: "/interests", label: "Research & interests" }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <InterestList heading="Current work" items={currentWork} />
        <InterestList heading="Future interests" items={future} />
      </div>
      <h3 className="reveal mt-14 mb-6 text-center text-xl font-semibold">
        Currently exploring
      </h3>
      <ExploringList topics={exploring} />
    </HomeSection>
  );
}
