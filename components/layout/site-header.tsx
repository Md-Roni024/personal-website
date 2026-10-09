import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getPostSlugs } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { LogoMark } from "./logo-mark";
import { SiteNav } from "./site-nav";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  // Hide "Writing" until there is at least one post.
  const hasPosts = getPostSlugs().length > 0;
  const items = siteConfig.nav.filter(
    (item) => item.href !== "/writing" || hasPosts,
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-header shadow-(--header-shadow) backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-bold text-heading"
        >
          <LogoMark alt={siteConfig.name} />
        </Link>
        <div className="flex items-center gap-4 lg:gap-6">
          <SiteNav items={items} cvPath={siteConfig.cvPath} />
          {/* Before the menu button on mobile, after Resume on desktop. */}
          <ThemeToggle className="max-lg:order-first" />
        </div>
      </Container>
    </header>
  );
}
