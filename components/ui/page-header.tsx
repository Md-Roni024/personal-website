import type { ReactNode } from "react";
import { Container } from "./container";
import { Eyebrow } from "./section";

type PageHeaderProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
};

/** Top of every inner page: eyebrow, the page's single h1, and an optional lead paragraph. */
export function PageHeader({
  title,
  eyebrow,
  intro,
  children,
}: PageHeaderProps) {
  return (
    <div className="pt-12 pb-12 sm:pt-20 sm:pb-16 lg:pt-24">
      <Container>
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        <h1 className="max-w-4xl font-serif text-title">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg/relaxed text-muted sm:text-xl/relaxed">
            {intro}
          </p>
        )}
        {children}
      </Container>
    </div>
  );
}
