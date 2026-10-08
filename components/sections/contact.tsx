import { siteConfig } from "@/site.config";
import { getProfileLinks } from "@/lib/content";
import { SplitSection } from "./split-section";

export function Contact() {
  const links = getProfileLinks();
  return (
    <SplitSection
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      intro="The best way to reach me is by email."
    >
      <ul className="divide-y divide-border border-y border-border">
        {[
          ...links,
          { label: "CV", href: siteConfig.cvPath, detail: "Download PDF" },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="group flex min-h-14 items-baseline justify-between gap-4 py-4"
            >
              <span className="font-serif text-2xl transition-colors duration-200 group-hover:text-accent">
                {link.label}
              </span>
              {link.detail && (
                <span className="truncate text-sm text-muted">
                  {link.detail}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}
