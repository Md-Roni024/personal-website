import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  /** Lift and brighten the border on hover — for cards that are links or contain one. */
  interactive?: boolean;
};

/** Dark panel with a thin purple border and soft shadow (the `card` utility in globals.css). */
export function Card({ interactive = false, className, ...props }: CardProps) {
  return (
    <article
      className={cn("card p-6", interactive && "card-hover", className)}
      {...props}
    />
  );
}
