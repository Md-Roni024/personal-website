import { AcademicPreview } from "@/components/sections/academic-preview";
import { BeyondCode } from "@/components/sections/beyond-code";
import { Contact } from "@/components/sections/contact";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { Expertise } from "@/components/sections/expertise";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Interests } from "@/components/sections/interests";
import { Introduction } from "@/components/sections/introduction";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ExperiencePreview />
      <FeaturedProjects />
      <Expertise />
      <AcademicPreview />
      <Interests />
      <BeyondCode />
      <Contact />
    </>
  );
}
