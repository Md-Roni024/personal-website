import { getInterests } from "@/lib/content";
import { BeyondCodeList } from "@/components/content/interest-list";
import { SplitSection } from "./split-section";

export function BeyondCode() {
  return (
    <SplitSection
      id="beyond-code"
      eyebrow="Beyond code"
      title="Outside of work"
      more={{ href: "/interests#beyond-code", label: "More beyond code" }}
    >
      <BeyondCodeList items={getInterests().beyondCode} />
    </SplitSection>
  );
}
