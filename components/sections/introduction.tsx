import { Compass, Rocket, Sparkles } from "lucide-react";
import { siteConfig } from "@/site.config";
import { getProfile, getProfileLinks } from "@/lib/content";
import { ProfileFacts } from "@/components/content/profile-facts";
import { StatsGrid } from "@/components/content/stats-grid";
import { BrandIcon } from "@/components/ui/brand-icon";
import { ButtonLink } from "@/components/ui/button";
import { HomeSection } from "./home-section";

const focusIcons = [Rocket, Compass, Sparkles];

/** Homepage "About Me": intro card with key facts, headline numbers, and current focus. */
export async function Introduction() {
  const { introduction, currentFocus } = getProfile();
  const [lead, ...rest] = introduction;

  return (
    <HomeSection id="about" eyebrow="About" title="About Me">
      <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
        <article className="reveal relative overflow-hidden card p-7 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 size-64 rounded-full bg-brand opacity-15 blur-3xl"
          />
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Who I am
          </p>
          {lead && (
            <p className="mt-4 text-xl/relaxed font-medium text-white sm:text-2xl/relaxed">
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

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/about">More about me</ButtonLink>
            <ButtonLink href={siteConfig.cvPath} variant="secondary">
              Check Resume
            </ButtonLink>
          </div>
        </article>

        <div className="flex flex-col gap-6">
          <StatsGrid />
          <FindMeOnline />
        </div>
      </div>

      {currentFocus.length > 0 && (
        <div className="mt-16">
          <h3 className="reveal flex items-center justify-center gap-3 text-center text-2xl font-semibold">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-gradient-to-r from-transparent to-primary"
            />
            Current focus
            <span
              aria-hidden="true"
              className="h-px w-10 bg-gradient-to-l from-transparent to-primary"
            />
          </h3>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {currentFocus.map((item, index) => {
              const Icon = focusIcons[index % focusIcons.length];
              return (
                <li
                  key={item.title}
                  className="reveal group relative card-hover overflow-hidden card p-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-5 text-brand text-5xl font-bold opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                  >
                    0{index + 1}
                  </span>
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-white shadow-[0_8px_24px_-8px_rgb(132_0_255/0.7)]">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <p className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm/relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </HomeSection>
  );
}

/** Profile links as labelled icon chips, filling the column under the stats. */
function FindMeOnline() {
  const profiles = getProfileLinks().filter((link) =>
    link.href.startsWith("http"),
  );
  if (profiles.length === 0) return null;
  return (
    <div className="reveal relative flex-1 overflow-hidden card p-6">
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 size-44 rounded-full bg-brand opacity-10 blur-3xl"
      />
      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
        Find me online
      </p>
      <ul className="relative mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {profiles.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface-raised/60 px-3 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/20"
            >
              <BrandIcon
                name={link.label}
                className="size-4 shrink-0 text-accent transition-colors group-hover:text-white"
              />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
