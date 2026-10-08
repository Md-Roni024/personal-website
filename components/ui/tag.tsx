import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/** Small purple chip for technologies, categories and topics. */
export function Tag({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-block rounded-md bg-primary/15 px-2 py-1 text-xs font-medium text-accent",
        className,
      )}
      {...props}
    />
  );
}

/** Wrapping list of tags. */
export function TagList({
  tags,
  className,
}: {
  tags: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
