import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const sizes = {
  reading: "max-w-reading",
  content: "max-w-content",
  wide: "max-w-wide",
} as const;

type ContainerProps<T extends ElementType> = {
  as?: T;
  size?: keyof typeof sizes;
} & ComponentPropsWithoutRef<T>;

/** Centred page-width wrapper with responsive horizontal padding. */
export function Container<T extends ElementType = "div">({
  as,
  size = "content",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
