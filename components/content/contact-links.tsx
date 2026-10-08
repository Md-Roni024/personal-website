import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/site.config";
import { getProfileLinks } from "@/lib/content";

/** Contact/profile links plus the CV, as a large rule-separated list. */
export function ContactLinks() {
  const items = [
    ...getProfileLinks().map((link) => ({ ...link, download: false })),
    { label: "CV", href: siteConfig.cvPath, detail: "PDF", download: true },
  ];
  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((link) => {
        const Icon = link.download ? Download : ArrowUpRight;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              className="group flex min-h-14 items-center justify-between gap-4 py-4"
            >
              <span className="font-serif text-2xl transition-colors duration-200 group-hover:text-accent">
                {link.label}
              </span>
              <span className="flex min-w-0 items-center gap-3 text-sm text-muted">
                {link.detail && <span className="truncate">{link.detail}</span>}
                <Icon
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
