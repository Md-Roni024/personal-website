import { siteConfig } from "@/site.config";
import { getProfile } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

export function Hero() {
  const { headline } = getProfile();
  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32"
    >
      <Container>
        <Eyebrow className="mb-6">{siteConfig.title}</Eyebrow>
        <h1 id="hero-heading" className="max-w-4xl font-serif text-display">
          {siteConfig.name}
        </h1>
        <p className="mt-8 max-w-2xl font-serif text-xl/snug text-muted sm:text-2xl/snug">
          {headline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/projects">Explore my work</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            About me
          </ButtonLink>
          <ButtonLink href={siteConfig.cvPath} variant="ghost">
            View CV
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
