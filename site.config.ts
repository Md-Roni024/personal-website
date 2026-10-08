// Site-wide identity and settings. Source: the owner's previous portfolio (roni-portfolio-ten.vercel.app).

export const siteConfig = {
  name: "Md. Roni",
  // DRAFT: current title per owner.
  title: "Software Engineer",
  description:
    "Md. Roni — Software Engineer at BJIT Limited. Projects, experience, education and certifications.",
  // Set NEXT_PUBLIC_SITE_URL once the domain is decided.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en",
  // CV hosted on Google Drive. To self-host instead, put the PDF in public/documents/cv.pdf and use "/documents/cv.pdf".
  cvPath:
    "https://drive.google.com/file/d/1otnLp-BcdxQj1h78ULk5hkIr1cGApeqj/view?usp=sharing",
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
