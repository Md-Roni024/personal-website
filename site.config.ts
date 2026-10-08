// Site-wide identity and settings. Values marked TODO must come from the site owner — do not invent them.

export const siteConfig = {
  name: "TODO: Full name",
  title: "TODO: Professional title",
  description: "TODO: One-sentence site description",
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
