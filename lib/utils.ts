/** Join class names, skipping falsy values. Components avoid conflicting utilities, so no merge step is needed. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/** True for absolute http(s) and mailto/tel URLs. */
export function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || /^(mailto|tel):/.test(href);
}
