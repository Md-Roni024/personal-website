import { getInterests } from "@/lib/content";
import { SplitSection } from "./split-section";

/** Personal interests. Deliberately softer than the technical sections: serif titles, no tags or metadata. */
export function BeyondCode() {
  const { beyondCode } = getInterests();
  return (
    <SplitSection
      id="beyond-code"
      eyebrow="Beyond code"
      title="Outside of work"
    >
      <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
        {beyondCode.map((item) => (
          <li key={item.title}>
            <h3 className="font-serif text-2xl italic">{item.title}</h3>
            {item.description && (
              <p className="mt-3 text-muted">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}
