import { getExpertise } from "@/lib/content";
import { SplitSection } from "./split-section";

export function Expertise() {
  const categories = getExpertise();
  return (
    <SplitSection id="expertise" eyebrow="Expertise" title="What I work with">
      <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category.name}>
            <dt className="font-semibold">{category.name}</dt>
            <dd className="mt-3">
              <ul className="space-y-1.5 text-muted">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </SplitSection>
  );
}
