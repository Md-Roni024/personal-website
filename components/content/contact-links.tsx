import { ArrowUpRight, FileText } from "lucide-react";
import { siteConfig } from "@/site.config";
import { getProfileLinks } from "@/lib/content";
import { BrandIcon } from "@/components/ui/brand-icon";

/** Contact/profile links plus the CV, as a grid of cards. */
export function ContactLinks() {
  const items = [
    ...getProfileLinks().map((link) => ({ ...link, isCv: false })),
    { label: "Resume", href: siteConfig.cvPath, detail: "View CV", isCv: true },
  ];
  return (
    <ul className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((link) => {
        const newTab = link.href.startsWith("http");
        return (
          <li key={link.href} className="reveal">
            <a
              href={link.href}
              {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
              className="group flex card-hover items-center gap-4 card p-5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-accent transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                {link.isCv ? (
                  <FileText aria-hidden="true" className="size-5" />
                ) : (
                  <BrandIcon name={link.label} className="size-5" />
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-white">
                  {link.label}
                </span>
                {link.detail && (
                  <span className="block truncate text-sm text-muted">
                    {link.detail}
                  </span>
                )}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0 text-subtle transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
