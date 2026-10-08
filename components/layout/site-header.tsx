import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/container";
import { SiteNav } from "./site-nav";

export function SiteHeader() {
  return (
    <header>
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="font-serif text-xl tracking-tight">
          {siteConfig.name}
        </Link>
        <SiteNav items={siteConfig.nav} cvPath={siteConfig.cvPath} />
      </Container>
    </header>
  );
}
