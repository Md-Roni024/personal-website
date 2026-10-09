import type { MDXComponents } from "mdx/types";
import { TextLink } from "@/components/ui/text-link";

// Global element styles for MDX content (projects, writing, about). Wrap rendered MDX in a `max-w-reading` container.
const components: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="mt-12 mb-4 flex items-center gap-3 text-2xl/tight font-semibold sm:text-[1.75rem]/tight"
      {...props}
    >
      <span
        aria-hidden="true"
        className="h-7 w-1.5 shrink-0 rounded-full bg-brand"
      />
      {children}
    </h2>
  ),
  h3: (props) => <h3 className="mt-10 mb-3 text-lg font-semibold" {...props} />,
  h4: (props) => <h4 className="mt-8 mb-2 font-semibold" {...props} />,
  p: (props) => (
    <p
      className="my-4 text-base/relaxed text-muted sm:text-lg/relaxed 2xl:text-xl/relaxed"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => <TextLink href={href} {...props} />,
  ul: (props) => (
    <ul
      className="my-5 list-disc space-y-2 pl-6 marker:text-subtle"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-5 list-decimal space-y-2 pl-6 marker:text-subtle"
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="pl-1 text-muted sm:text-lg/relaxed 2xl:text-xl/relaxed"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-primary pl-5 text-xl/relaxed text-muted italic"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-border" />,
  strong: (props) => <strong className="font-semibold" {...props} />,
  code: (props) => (
    <code
      className="rounded-xs bg-surface px-1.5 py-0.5 font-mono text-[0.875em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-8 overflow-x-auto rounded-md border border-border bg-surface p-4 font-mono text-sm/relaxed [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
