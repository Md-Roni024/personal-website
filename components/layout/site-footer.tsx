import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getProfileLinks } from "@/lib/content";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const links = getProfileLinks();

  return (
    <footer className="mt-auto border-t border-border">
      <Container className="grid gap-8 py-12 text-sm sm:grid-cols-[1fr_auto] sm:items-end sm:py-16">
        <div className="max-w-sm">
          <Link href="/" className="font-serif text-lg">
            {siteConfig.name}
          </Link>
          <p className="mt-2 text-muted">{siteConfig.title}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={siteConfig.cvPath}
              className="text-muted transition-colors duration-200 hover:text-foreground"
            >
              CV
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
