// Site-wide identity and settings.
// DUMMY: name, title and description are placeholders until the owner supplies real values — do not invent them.

export const siteConfig = {
  name: "Your Name",
  title: "Your Professional Title",
  description:
    "A short, one-sentence description of who you are and what you do.",
  // Set NEXT_PUBLIC_SITE_URL once the domain is decided.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en",
  cvPath: "/documents/cv.pdf",
  nav: [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Academic", href: "/academic" },
    { label: "Writing", href: "/writing" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type NavItem = SiteConfig["nav"][number];
