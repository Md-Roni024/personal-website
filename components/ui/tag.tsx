import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/** Quiet label for technologies, categories and topics. */
export function Tag({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn("font-mono text-xs text-subtle", className)}
      {...props}
    />
  );
}

/** Wrapping inline list of tags. */
export function TagList({
  tags,
  className,
}: {
  tags: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-x-3 gap-y-1", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
