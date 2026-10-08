import { getFeaturedProjects } from "@/lib/content";
import { ProjectGrid } from "@/components/content/project-card";
import { SplitSection } from "./split-section";

export async function FeaturedProjects() {
  return (
    <SplitSection
      id="projects"
      eyebrow="Selected work"
      title="Featured projects"
      more={{ href: "/projects", label: "All projects" }}
    >
      <ProjectGrid projects={await getFeaturedProjects()} />
    </SplitSection>
  );
}
