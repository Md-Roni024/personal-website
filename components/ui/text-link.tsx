import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn, isExternalHref } from "@/lib/utils";

type TextLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};

/** Inline link for running text. Internal hrefs use `next/link`; http(s) links open in a new tab. */
export function TextLink({ href, className, ...props }: TextLinkProps) {
  const classes = cn(
    "font-medium text-accent underline decoration-accent/40 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-heading hover:decoration-accent",
    className,
  );
  if (isExternalHref(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      />
    );
  }
  return <Link href={href} className={classes} {...props} />;
}
