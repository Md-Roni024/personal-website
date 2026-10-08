import { getFeaturedProjects } from "@/lib/content";
import { ProjectGrid } from "@/components/content/project-card";
import { HomeSection } from "./home-section";

export async function FeaturedProjects() {
  return (
    <HomeSection
      id="projects"
      eyebrow="Projects"
      title="Featured Projects"
      intro="I have worked on a wide range of projects, from web apps to Android apps and machine learning. Here are some of them."
      more={{ href: "/projects", label: "All projects" }}
    >
      <ProjectGrid projects={await getFeaturedProjects()} />
    </HomeSection>
  );
}
