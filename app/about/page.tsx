import Image from "next/image";
import AboutContent from "@/content/about.mdx";
import { siteConfig } from "@/site.config";
import { getProfile } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { ExpertiseGrid } from "@/components/content/expertise-grid";
import { ProfileFacts } from "@/components/content/profile-facts";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = createMetadata({
  title: "About",
  description: `About ${siteConfig.name}: background, approach, skills and direction.`,
  path: "/about",
});

export default function AboutPage() {
  const { headline, photo, currentFocus } = getProfile();
  return (
    <>
      <PageHeader eyebrow="About" title="About Me" intro={headline} />

      <Container className="pb-16 sm:pb-24">
        <div className="grid items-start gap-8 lg:grid-cols-[360px_1fr] lg:gap-10">
          {/* Profile card — sticks beside the text on large screens. */}
          <aside className="reveal relative overflow-hidden card p-6 sm:p-8 lg:sticky lg:top-28">
            <div
              aria-hidden="true"
              className="absolute -top-20 left-1/2 size-56 -translate-x-1/2 rounded-full bg-brand opacity-20 blur-3xl"
            />
            {photo && (
              <Image
                src={photo}
                alt={`Portrait of ${siteConfig.name}`}
                width={652}
                height={834}
                sizes="(min-width: 1024px) 296px, 160px"
                className="relative mx-auto size-40 rounded-full border-2 border-primary object-cover object-top shadow-[0_0_40px_rgb(132_0_255/0.35)] lg:size-44"
              />
            )}
            <div className="relative mt-5 text-center">
              <p className="text-2xl font-bold text-heading">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-brand font-semibold">
                {siteConfig.title}
              </p>
            </div>
            <ProfileFacts
              withEmail
              className="relative mt-6 border-t border-border pt-6"
            />
            <div className="relative mt-6 grid gap-3">
              <ButtonLink href={siteConfig.cvPath}>Check Resume</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </aside>

          <article className="reveal card p-6 sm:p-10 [&>h2:first-child]:mt-0">
            <AboutContent />
          </article>
        </div>
      </Container>

      {currentFocus.length > 0 && (
        <Section aria-labelledby="focus-heading" tone="tint">
          <SectionHeading
            id="focus-heading"
            eyebrow="Now"
            title="Current Focus"
            className="mb-12"
          />
          <ul className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {currentFocus.map((item) => (
              <li key={item.title} className="reveal card p-6">
                <p className="font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-sm/relaxed text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section
        id="expertise"
        aria-labelledby="expertise-heading"
        className="scroll-mt-20"
      >
        <SectionHeading
          id="expertise-heading"
          eyebrow="Skills"
          title="What I Work With"
          className="mb-12"
        />
        <ExpertiseGrid />
      </Section>
    </>
  );
}
