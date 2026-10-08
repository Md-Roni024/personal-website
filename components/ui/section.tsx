import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  size?: "reading" | "content" | "wide";
  /** Draw a hairline rule above the section. */
  divided?: boolean;
  /** No top padding — for the first section directly under a PageHeader. */
  flushTop?: boolean;
  /**
   * Full-width background. `tint`: soft green wash (personal sections). `band`: deep green, re-themes all
   * tokens inside (contact). Toned sections never draw the divider — the colour change separates them.
   */
  tone?: "default" | "tint" | "band";
};

const tones = {
  default: "",
  tint: "bg-tint",
  band: "tone-band",
} as const;

/** Vertical rhythm wrapper for page sections. */
export function Section({
  size,
  divided = false,
  flushTop = false,
  tone = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        flushTop ? "pb-16 sm:pb-24 lg:pb-32" : "py-16 sm:py-24 lg:py-32",
        tones[tone],
        className,
      )}
      {...props}
    >
      <Container size={size}>
        {divided && tone === "default" && (
          <hr className="mb-16 border-border sm:mb-24" />
        )}
        {children}
      </Container>
    </section>
  );
}

type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  intro?: ReactNode;
  /** `h1` for page titles, `h2` (default) for sections. */
  level?: 1 | 2;
  /** Centred (default, like the reference site) or left-aligned. */
  align?: "center" | "left";
  id?: string;
  className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  intro,
  level = 2,
  align = "center",
  id,
  className,
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  const centred = align === "center";
  return (
    <header
      className={cn(
        "reveal max-w-2xl",
        centred && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={cn(
          "font-bold",
          level === 1
            ? "text-title"
            : "text-3xl/tight sm:text-4xl/tight lg:text-[2.625rem]/tight",
        )}
      >
        {title}
      </Heading>
      <span
        aria-hidden="true"
        className={cn(
          "mt-4 block h-1 w-14 rounded-full bg-brand",
          centred && "mx-auto",
        )}
      />
      {intro && <p className="mt-5 text-lg/relaxed text-muted">{intro}</p>}
    </header>
  );
}

/** Small uppercase label used above headings and for metadata. */
export function Eyebrow({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "text-xs font-semibold tracking-[0.18em] text-accent uppercase",
        className,
      )}
      {...props}
    />
  );
}
