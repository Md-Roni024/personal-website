import type { MDXComponents } from "mdx/types";

// Global element overrides for MDX content. Styled versions are added in the design-system phase.
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
