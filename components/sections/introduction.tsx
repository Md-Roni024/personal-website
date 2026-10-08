import { getProfile } from "@/lib/content";
import { SplitSection } from "./split-section";

export function Introduction() {
  const { introduction, currentFocus } = getProfile();
  return (
    <SplitSection
      id="introduction"
      eyebrow="Introduction"
      title="In brief"
      more={{ href: "/about", label: "More about me" }}
    >
      <div className="max-w-reading space-y-5 text-lg/relaxed">
        {introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-14 font-mono text-xs tracking-widest text-subtle uppercase">
        Current focus
      </h3>
      <ul className="mt-6 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {currentFocus.map((item) => (
          <li key={item.title} className="border-t border-border pt-4">
            <p className="font-semibold">{item.title}</p>
            <p className="mt-2 text-sm/relaxed text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}
