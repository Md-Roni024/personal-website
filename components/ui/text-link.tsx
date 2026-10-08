import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn, isExternalHref } from "@/lib/utils";

type TextLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};

/** Inline underlined link for running text. Internal hrefs use `next/link`. */
export function TextLink({ href, className, ...props }: TextLinkProps) {
  const classes = cn(
    "text-foreground underline decoration-border-strong decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent",
    className,
  );
  if (isExternalHref(href)) {
    return <a href={href} className={classes} {...props} />;
  }
  return <Link href={href} className={classes} {...props} />;
}
