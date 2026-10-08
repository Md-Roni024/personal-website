import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getPostSlugs, getProfileLinks } from "@/lib/content";
import { BrandIcon } from "@/components/ui/brand-icon";
import { Container } from "@/components/ui/container";

/** Centred footer (reference-site style): name, nav, social icons, copyright. */
export function SiteFooter() {
  const links = getProfileLinks();
  const hasPosts = getPostSlugs().length > 0;
  const nav = siteConfig.nav.filter(
    (item) => item.href !== "/writing" || hasPosts,
  );

  return (
    <footer className="tone-band mt-auto border-t border-border">
      <Container className="flex flex-col items-center gap-8 py-14 text-center">
        <Link href="/" className="text-brand text-2xl font-bold">
          {siteConfig.name}
        </Link>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-label={link.label}
                {...(link.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="flex size-10 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
              >
                <BrandIcon name={link.label} className="size-5" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-subtle">
          © {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
