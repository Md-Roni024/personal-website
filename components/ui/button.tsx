import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn, isExternalHref } from "@/lib/utils";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50 sm:text-base";

const variants = {
  // Gradient pill from the reference site; grows slightly on hover.
  primary:
    "bg-brand px-7 py-3 text-white shadow-[0_10px_40px_-10px_rgb(132_0_255/0.6)] hover:scale-105 hover:shadow-[0_14px_44px_-10px_rgb(200_0_224/0.7)]",
  // Outlined pill that fills with the primary colour on hover.
  secondary:
    "border-2 border-primary px-7 py-3 text-white hover:bg-primary hover:shadow-[0_10px_30px_-10px_rgb(133_76_230/0.8)]",
  ghost: "px-0 text-accent underline-offset-4 hover:underline",
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

/** A link styled as a button. Internal hrefs use `next/link`; http(s) links open in a new tab. */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
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
