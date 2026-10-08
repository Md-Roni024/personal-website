import type { ReactNode } from "react";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

type HomeSectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Optional "see more" button shown under the content. */
  more?: { href: string; label: string };
  tone?: "default" | "tint" | "band";
  children: ReactNode;
};

/** Homepage section: centred heading (as on the reference site), content below, optional "see more" button. */
export function HomeSection({
  id,
  eyebrow,
  title,
  intro,
  more,
  tone,
  children,
}: HomeSectionProps) {
  const headingId = `${id}-heading`;
  return (
    <Section
      id={id}
      aria-labelledby={headingId}
      tone={tone}
      className="scroll-mt-20"
    >
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        className="mb-14"
      />
      {children}
      {more && (
        <p className="reveal mt-12 text-center">
          <ButtonLink href={more.href} variant="secondary">
            {more.label}
          </ButtonLink>
        </p>
      )}
    </Section>
  );
}
