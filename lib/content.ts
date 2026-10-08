// Content types and accessors. Routes and components read content only through this module.

import { readdirSync } from "node:fs";
import path from "node:path";
import { cacheLife } from "next/cache";
import { education, academicInterests } from "@/content/education";
import { experience } from "@/content/experience";
import { expertise } from "@/content/expertise";
import { interests } from "@/content/interests";
import { links } from "@/content/links";
import { profile } from "@/content/profile";

/* ---------- Types ---------- */

export type ProfileLink = {
  label: string;
  href: string;
  /** Shown as secondary text, e.g. a handle or address. */
  detail?: string;
};

export type FocusItem = { title: string; description: string };

export type Profile = {
  /** Positioning statement under the name in the hero. */
  headline: string;
  /** Short homepage introduction, one paragraph per entry. */
  introduction: readonly string[];
  currentFocus: readonly FocusItem[];
};

export type ExperienceEntry = {
  organization: string;
  role: string;
  /** Free-form, e.g. "2024" or "Jan 2024". */
  start: string;
  /** Omit for a current role. */
  end?: string;
  location?: string;
  summary: string;
  highlights?: readonly string[];
  technologies?: readonly string[];
};

export type ExpertiseCategory = { name: string; items: readonly string[] };

export type EducationEntry = {
  degree: string;
  institution: string;
  department?: string;
  start: string;
  end?: string;
  summary?: string;
};

export type InterestItem = { title: string; description?: string };

export type Interests = {
  /** Areas actively worked on now. */
  currentWork: readonly InterestItem[];
  /** Lightweight, frequently updated list of things being learned. */
  exploring: readonly string[];
  /** Areas of future research/work interest. */
  future: readonly InterestItem[];
  /** Personal interests outside software. */
  beyondCode: readonly InterestItem[];
};

export const projectCategories = [
  "Professional",
  "Academic",
  "Personal",
  "Research",
  "Experimental",
  "Open Source",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectMeta = {
  title: string;
  summary: string;
  category: ProjectCategory;
  year: string;
  technologies: readonly string[];
  /** Shown on the homepage when true. */
  featured?: boolean;
  /** Lower numbers sort first. */
  order?: number;
  links?: readonly ProfileLink[];
};

export type Project = ProjectMeta & { slug: string };

/* ---------- Structured content ---------- */

export const getProfile = (): Profile => profile;
export const getProfileLinks = (): readonly ProfileLink[] => links;
export const getExperience = (): readonly ExperienceEntry[] => experience;
export const getExpertise = (): readonly ExpertiseCategory[] => expertise;
export const getEducation = (): readonly EducationEntry[] => education;
export const getAcademicInterests = (): readonly string[] => academicInterests;
export const getInterests = (): Interests => interests;

/* ---------- MDX collections ---------- */

const projectsDir = path.join(process.cwd(), "content", "projects");

/** Slugs of all project MDX files. Files starting with `_` are skipped. */
export function getProjectSlugs(): string[] {
  return readdirSync(projectsDir)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function assertProjectMeta(
  slug: string,
  meta: unknown,
): asserts meta is ProjectMeta {
  const m = meta as Partial<ProjectMeta> | undefined;
  const missing = (
    ["title", "summary", "category", "year", "technologies"] as const
  ).filter((key) => m?.[key] === undefined);
  if (missing.length) {
    throw new Error(
      `content/projects/${slug}.mdx: metadata is missing ${missing.join(", ")}`,
    );
  }
  if (!projectCategories.includes(m!.category as ProjectCategory)) {
    throw new Error(
      `content/projects/${slug}.mdx: unknown category "${m!.category}"`,
    );
  }
}

export async function getProjects(): Promise<Project[]> {
  "use cache";
  // Content only changes on deploy.
  cacheLife("max");
  const projects = await Promise.all(
    getProjectSlugs().map(async (slug) => {
      const { metadata } = await import(`@/content/projects/${slug}.mdx`);
      assertProjectMeta(slug, metadata);
      return { ...metadata, slug };
    }),
  );
  return projects.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return (await getProjects()).filter((project) => project.featured);
}
