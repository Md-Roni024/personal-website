import { siteConfig } from "@/site.config";
import { getProfileLinks } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/content/json-ld";
import { AcademicPreview } from "@/components/sections/academic-preview";
import { BeyondCode } from "@/components/sections/beyond-code";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { Expertise } from "@/components/sections/expertise";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Interests } from "@/components/sections/interests";
import { Introduction } from "@/components/sections/introduction";

export const metadata = createMetadata({ path: "/" });

export default function Home() {
  const profiles = getProfileLinks()
    .map((link) => link.href)
    .filter((href) => href.startsWith("http"));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
            },
            {
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
              jobTitle: siteConfig.title,
              sameAs: profiles,
            },
          ],
        }}
      />
      <Hero />
      <Introduction />
      <Expertise />
      <ExperiencePreview />
      <FeaturedProjects />
      <AcademicPreview />
      <Certifications />
      <Interests />
      <BeyondCode />
      <Contact />
    </>
  );
}
