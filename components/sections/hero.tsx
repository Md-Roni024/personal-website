import Image from "next/image";
import { siteConfig } from "@/site.config";
import { getProfile, getProfileLinks } from "@/lib/content";
import { Typewriter } from "@/components/content/typewriter";
import { BrandIcon } from "@/components/ui/brand-icon";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const { roles, headline, photo } = getProfile();
  const socials = getProfileLinks().filter((link) =>
    link.href.startsWith("http"),
  );

  return (
    <section aria-labelledby="hero-heading" className="relative hero-glow">
      <Container className="grid items-center gap-12 pt-12 pb-24 sm:pt-16 sm:pb-32 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-20 lg:pb-40">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="enter text-lg font-medium text-muted sm:text-xl">
            Hi, I am
          </p>
          <h1
            id="hero-heading"
            className="enter enter-delay-1 mt-2 text-display font-bold"
          >
            {siteConfig.name}
          </h1>
          <p className="enter enter-delay-2 mt-4 text-2xl font-semibold text-heading sm:text-3xl">
            I am a <Typewriter words={roles} className="text-brand" />
          </p>
          <p className="enter enter-delay-3 mx-auto mt-6 max-w-xl text-lg/relaxed text-muted lg:mx-0">
            {headline}
          </p>
          <div className="enter enter-delay-3 mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <ButtonLink href={siteConfig.cvPath}>Check Resume</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              Explore my work
            </ButtonLink>
          </div>
          <ul className="enter enter-delay-3 mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            {socials.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex size-11 items-center justify-center rounded-full border border-border-strong text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <BrandIcon name={link.label} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {photo && (
          <div className="enter order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-full bg-brand opacity-30 blur-3xl"
              />
              <Image
                src={photo}
                alt={`Portrait of ${siteConfig.name}`}
                width={652}
                height={834}
                priority
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 224px"
                className="relative size-56 rounded-full border-2 border-primary object-cover object-top sm:size-72 lg:size-[400px]"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
