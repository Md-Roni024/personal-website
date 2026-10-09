import type { InterestItem } from "@/lib/content";

type InterestListProps = {
  heading: string;
  items: readonly InterestItem[];
  /** `h3` inside homepage sections, `h2` as a top-level block on a page. */
  headingLevel?: "h2" | "h3";
};

/** A titled card listing interest items. */
export function InterestList({
  heading,
  items,
  headingLevel = "h3",
}: InterestListProps) {
  const Heading = headingLevel;
  return (
    <div className="reveal h-full card p-7">
      <Heading className="text-xl font-semibold text-accent">{heading}</Heading>
      <ul className="mt-5 space-y-5">
        {items.map((item) => (
          <li key={item.title} className="border-l-2 border-primary/60 pl-4">
            <p className="font-semibold text-heading">{item.title}</p>
            {item.description && (
              <p className="mt-1 text-sm text-muted">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Chips for the lightweight "Currently exploring" topics. */
export function ExploringList({ topics }: { topics: readonly string[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {topics.map((topic) => (
        <li
          key={topic}
          className="reveal rounded-full border border-primary/60 bg-primary/10 px-5 py-2 font-medium text-heading"
        >
          {topic}
        </li>
      ))}
    </ul>
  );
}

/** Personal interests as cards. */
export function BeyondCodeList({
  items,
  headingLevel = "h3",
}: {
  items: readonly InterestItem[];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <ul className="grid gap-6 sm:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="reveal card-hover card p-6 text-center">
          <Heading className="text-lg font-semibold text-heading">
            {item.title}
          </Heading>
          {item.description && (
            <p className="mt-3 text-sm text-muted">{item.description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
