import { getProfile } from "@/lib/content";
import { ProfileFacts } from "@/components/content/profile-facts";
import { StatsGrid } from "@/components/content/stats-grid";
import { ButtonLink } from "@/components/ui/button";
import { HomeSection } from "./home-section";

/** Homepage "About Me": short intro and key facts beside a single panel of headline numbers. */
export function Introduction() {
  const [lead, ...rest] = getProfile().introduction;

  return (
    <HomeSection id="about" eyebrow="About" title="About Me">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="reveal">
          {lead && (
            <p className="text-lg/relaxed text-heading sm:text-xl/relaxed">
              {lead}
            </p>
          )}
          {rest.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-base/relaxed text-muted sm:text-lg/relaxed"
            >
              {paragraph}
            </p>
          ))}
          <ProfileFacts className="mt-8" />
          <ButtonLink href="/about" variant="secondary" className="mt-9">
            More about me
          </ButtonLink>
        </div>
        <StatsGrid />
      </div>
    </HomeSection>
  );
}
