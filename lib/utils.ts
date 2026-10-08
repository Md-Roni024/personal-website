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

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "2026-01-31" → "31 January 2026". Parsed by hand so output never depends on the build machine's timezone. */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}
