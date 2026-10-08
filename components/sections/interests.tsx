import { getInterests, type InterestItem } from "@/lib/content";
import { SplitSection } from "./split-section";

function InterestList({
  heading,
  items,
}: {
  heading: string;
  items: readonly InterestItem[];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs tracking-widest text-subtle uppercase">
        {heading}
      </h3>
      <ul className="mt-5 space-y-5">
        {items.map((item) => (
          <li key={item.title}>
            <p className="font-semibold">{item.title}</p>
            {item.description && (
              <p className="mt-1 text-muted">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

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
        <h3 className="font-mono text-xs tracking-widest text-subtle uppercase">
          Currently exploring
        </h3>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-serif text-xl">
          {exploring.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </SplitSection>
  );
}
