import { getInterests } from "@/lib/content";
import { BeyondCodeList } from "@/components/content/interest-list";
import { HomeSection } from "./home-section";

export function BeyondCode() {
  return (
    <HomeSection
      id="beyond-code"
      eyebrow="Beyond code"
      title="Outside of Work"
      tone="tint"
      more={{ href: "/interests#beyond-code", label: "More beyond code" }}
    >
      <BeyondCodeList items={getInterests().beyondCode} />
    </HomeSection>
  );
}
