import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getPostSlugs } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SiteNav } from "./site-nav";

export function SiteHeader() {
  // Hide "Writing" until there is at least one post.
  const hasPosts = getPostSlugs().length > 0;
  const items = siteConfig.nav.filter(
    (item) => item.href !== "/writing" || hasPosts,
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-bold text-white"
        >
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-xl bg-brand text-base text-white transition-transform duration-300 group-hover:rotate-6"
          >
            {siteConfig.name.replace(/[^A-Z]/g, "").slice(0, 2)}
          </span>
          {siteConfig.name}
        </Link>
        <SiteNav items={items} cvPath={siteConfig.cvPath} />
      </Container>
    </header>
  );
}
