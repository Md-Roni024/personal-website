import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn, isExternalHref } from "@/lib/utils";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "px-5 bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
  secondary:
    "px-5 border border-border-strong text-foreground hover:border-foreground",
  ghost: "px-0 text-foreground underline-offset-4 hover:underline",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = ComponentPropsWithoutRef<"button"> & { variant?: Variant };

/** For actions. Use `ButtonLink` for navigation. */
export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: Variant;
};

/** A link styled as a button. Internal hrefs use `next/link`. */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
  if (isExternalHref(href) || props.download !== undefined) {
    return <a href={href} className={classes} {...props} />;
  }
  return <Link href={href} className={classes} {...props} />;
}
