import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  size?: "reading" | "content" | "wide";
  /** Draw a hairline rule above the section. */
  divided?: boolean;
};

/** Vertical rhythm wrapper for page sections. */
export function Section({
  size,
  divided = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-24 lg:py-32", className)} {...props}>
      <Container size={size}>
        {divided && <hr className="mb-16 border-border sm:mb-24" />}
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
  id?: string;
  className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  intro,
  level = 2,
  id,
  className,
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header className={cn("max-w-reading", className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={cn(
          "font-serif font-normal",
          level === 1
            ? "text-title"
            : "text-3xl/tight tracking-tight sm:text-4xl/tight",
        )}
      >
        {title}
      </Heading>
      {intro && <p className="mt-4 text-lg/relaxed text-muted">{intro}</p>}
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
        "font-mono text-xs tracking-widest text-subtle uppercase",
        className,
      )}
      {...props}
    />
  );
}
