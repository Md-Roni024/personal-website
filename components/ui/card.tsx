import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Bordered block for the few places that need containment (e.g. project listings).
 * Prefer open layouts separated by rules — see DESIGN.md §6.
 */
export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={cn(
        "rounded-md border border-border p-6 transition-colors duration-200 hover:border-border-strong",
        className,
      )}
      {...props}
    />
  );
}
