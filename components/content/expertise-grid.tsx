import { getExpertise } from "@/lib/content";

/** Expertise grouped by category. Deliberately no ratings or percentage bars. */
export function ExpertiseGrid() {
  return (
    <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {getExpertise().map((category) => (
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
  );
}
