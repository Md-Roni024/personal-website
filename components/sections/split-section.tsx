import type { ReactNode } from "react";
import { Eyebrow, Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";

type SplitSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  /** Optional "see more" link shown under the heading. */
  more?: { href: string; label: string };
  children: ReactNode;
};

/** Homepage section: heading column on the left (lg+), content on the right. Stacks on smaller screens. */
export function SplitSection({
  id,
  eyebrow,
  title,
  intro,
  more,
  children,
}: SplitSectionProps) {
  const headingId = `${id}-heading`;
  return (
    <Section id={id} aria-labelledby={headingId} divided>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <header className="lg:col-span-4">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2
            id={headingId}
            className="font-serif text-3xl/tight tracking-tight sm:text-4xl/tight"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-sm text-muted">{intro}</p>}
          {more && (
            <p className="mt-6 text-sm">
              <TextLink href={more.href}>{more.label}</TextLink>
            </p>
          )}
        </header>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </Section>
  );
}
