import type { InterestItem } from "@/lib/content";

type InterestListProps = {
  heading: string;
  items: readonly InterestItem[];
  /** `h3` inside homepage sections, `h2` as a top-level block on a page. */
  headingLevel?: "h2" | "h3";
};

export function InterestList({
  heading,
  items,
  headingLevel = "h3",
}: InterestListProps) {
  const Heading = headingLevel;
  return (
    <div>
      <Heading className="font-mono text-xs tracking-widest text-subtle uppercase">
        {heading}
      </Heading>
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

/** Large serif list for the lightweight "Currently exploring" topics. */
export function ExploringList({ topics }: { topics: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2 font-serif text-xl">
      {topics.map((topic) => (
        <li key={topic}>{topic}</li>
      ))}
    </ul>
  );
}

/** Personal interests: serif italic titles, no tags or metadata. */
export function BeyondCodeList({
  items,
  headingLevel = "h3",
}: {
  items: readonly InterestItem[];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
      {items.map((item) => (
        <li key={item.title}>
          <Heading className="font-serif text-2xl italic">{item.title}</Heading>
          {item.description && (
            <p className="mt-3 text-muted">{item.description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
