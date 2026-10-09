import { ArrowUp, ArrowUpRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getPostSlugs, getProfile, getProfileLinks } from "@/lib/content";
import { BrandIcon } from "@/components/ui/brand-icon";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

// `new Date()` is not allowed in a prerendered shell with Cache Components; a cached function is.
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
      {children}
    </h2>
  );
}

/** Four-column footer: brand, site links, profiles, contact; bottom bar with copyright and back-to-top. */
export function SiteFooter() {
  const profile = getProfile();
  const links = getProfileLinks();
  const email = links.find((link) => link.label === "Email");
  const profiles = links.filter((link) => link.label !== "Email");
  const hasPosts = getPostSlugs().length > 0;
  const nav = siteConfig.nav.filter(
    (item) => item.href !== "/writing" || hasPosts,
  );

  return (
    <footer className="tone-band relative mt-auto border-t border-border">
      {/* Thin brand-gradient rule along the top edge. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-brand opacity-60"
      />
      <Container className="grid grid-cols-2 gap-x-6 gap-y-12 py-14 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-10 lg:py-16">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="group inline-flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt=""
              width={44}
              height={44}
              className="size-11 rounded-xl shadow-[0_0_16px_rgb(47_123_255/0.35)] transition-transform duration-300 group-hover:scale-105"
            />
            <span>
              <span className="block text-xl font-bold text-heading">
                {siteConfig.name}
              </span>
              <span className="block text-sm text-accent">
                {siteConfig.title}
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm/relaxed text-muted">
            {profile.headline}
          </p>
        </div>

        <nav aria-label="Footer">
          <FooterHeading>Explore</FooterHeading>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors duration-200 hover:text-heading"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <FooterHeading>Connect</FooterHeading>
          <ul className="mt-5 space-y-3 text-sm">
            {profiles.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-muted transition-colors duration-200 hover:text-heading"
                >
                  <BrandIcon
                    name={link.label}
                    className="size-4 transition-colors duration-200 group-hover:text-accent"
                  />
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <FooterHeading>Get in touch</FooterHeading>
          {/* DRAFT: footer invitation line. Verify wording. */}
          <p className="mt-5 text-sm/relaxed text-muted">
            Have a question, an idea or an opportunity? I&apos;d be glad to hear
            from you.
          </p>
          {email && (
            <a
              href={email.href}
              className="group mt-4 inline-flex items-center gap-1.5 font-semibold break-all text-heading transition-colors duration-200 hover:text-accent"
            >
              {email.detail}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
          <div className="mt-6">
            <ButtonLink
              href={siteConfig.cvPath}
              variant="secondary"
              className="min-h-10 px-5 py-2 text-sm sm:text-sm"
            >
              <FileText aria-hidden="true" className="size-4" />
              View resume
            </ButtonLink>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-subtle sm:flex-row">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#main"
            className="group inline-flex items-center gap-2 transition-colors duration-200 hover:text-heading"
          >
            Back to top
            <span className="flex size-8 items-center justify-center rounded-full border border-border-strong transition-colors duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              <ArrowUp aria-hidden="true" className="size-4" />
            </span>
          </a>
        </Container>
      </div>
    </footer>
  );
}
