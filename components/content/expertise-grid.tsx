import { getExpertise } from "@/lib/content";

/** Skills grouped by category, as cards of chips (reference-site style). No ratings or percentage bars. */
export function ExpertiseGrid() {
  return (
    <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
      {getExpertise().map((category) => (
        <li
          key={category.name}
          className="reveal w-full card-hover card px-7 py-6 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
        >
          <h3 className="text-center text-2xl font-semibold text-accent">
            {category.name}
          </h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {category.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border-strong px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-primary hover:bg-primary/20"
              >
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
