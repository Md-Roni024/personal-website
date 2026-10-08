import type { ReactNode } from "react";
import { Container } from "./container";
import { Eyebrow } from "./section";

type PageHeaderProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
};

/** Top of every inner page: eyebrow, the page's single h1, and an optional lead paragraph. Centred, on the hero glow. */
export function PageHeader({
  title,
  eyebrow,
  intro,
  children,
}: PageHeaderProps) {
  return (
    <div className="hero-glow pt-16 pb-16 sm:pt-24 sm:pb-20">
      <Container className="text-center">
        {eyebrow && <Eyebrow className="enter mb-4">{eyebrow}</Eyebrow>}
        <h1 className="enter enter-delay-1 mx-auto max-w-4xl text-title font-bold">
          {title}
        </h1>
        {intro && (
          <p className="enter enter-delay-2 mx-auto mt-5 max-w-2xl text-lg/relaxed text-muted">
            {intro}
          </p>
        )}
        {children}
      </Container>
    </div>
  );
}
