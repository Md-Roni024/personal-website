// Content types and accessors. Routes and components read content only through this module.

import { links } from "@/content/links";

export type ProfileLink = {
  label: string;
  href: string;
  /** Shown as secondary text, e.g. a handle or address. */
  detail?: string;
};

export function getProfileLinks(): readonly ProfileLink[] {
  return links;
}
