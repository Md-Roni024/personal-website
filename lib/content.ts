// Content types and accessors. Routes and components read content only through this module.

import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { cacheLife } from "next/cache";
import { certifications } from "@/content/certifications";
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
  /** Rotating roles in the hero, e.g. "Web Developer". */
  roles: readonly string[];
  /** Positioning statement under the name in the hero. */
  headline: string;
  /** Path under /public, e.g. "/images/profile.jpg". */
  photo?: string;
  /** Short homepage introduction, one paragraph per entry. */
  introduction: readonly string[];
  currentFocus: readonly FocusItem[];
};

export type ExperienceEntry = {
  organization: string;
  /** Job title. Optional: the page shows the organisation alone when it is missing. */
  role?: string;
  /** Free-form, e.g. "2024" or "Jan 2024". */
  start: string;
  /** Omit for a current role. */
  end?: string;
  location?: string;
  summary?: string;
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
  /** Relevant courses, shown on the Academic page. */
  coursework?: readonly string[];
};

export type Certification = {
  title: string;
  issuer?: string;
  /** Free-form, e.g. "May 2024". */
  date: string;
  description?: string;
  /** Credential / certificate URL. */
  href?: string;
  image?: string;
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
  /** Cover image: a path under /public or an https URL (host must be allowed in next.config.ts). */
  image?: string;
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
export const getCertifications = (): readonly Certification[] => certifications;

export const writingCategories = [
  "Article",
  "Technical note",
  "Learning note",
  "Retrospective",
  "Research note",
  "Personal",
] as const;

export type WritingCategory = (typeof writingCategories)[number];

export type PostMeta = {
  title: string;
  summary: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  category: WritingCategory;
  tags?: readonly string[];
};

export type Post = PostMeta & { slug: string; readingMinutes: number };

/* ---------- MDX collections ---------- */

type Collection = "projects" | "writing";

const collectionDir = (collection: Collection) =>
  path.join(process.cwd(), "content", collection);

/** Slugs of a collection's MDX files. Files starting with `_` are skipped (each folder keeps a `_template.mdx`). */
function getSlugs(collection: Collection): string[] {
  return readdirSync(collectionDir(collection))
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function assertFields(
  file: string,
  meta: Record<string, unknown> | undefined,
  required: readonly string[],
) {
  const missing = required.filter((key) => meta?.[key] === undefined);
  if (missing.length) {
    throw new Error(`${file}: metadata is missing ${missing.join(", ")}`);
  }
}

function assertOneOf(
  file: string,
  field: string,
  value: unknown,
  allowed: readonly string[],
) {
  if (!allowed.includes(value as string)) {
    throw new Error(
      `${file}: unknown ${field} "${String(value)}" (allowed: ${allowed.join(", ")})`,
    );
  }
}

const WORDS_PER_MINUTE = 220;

function readingMinutes(collection: Collection, slug: string): number {
  const source = readFileSync(
    path.join(collectionDir(collection), `${slug}.mdx`),
    "utf8",
  );
  const words = source
    .replace(/export const metadata = \{[\s\S]*?\n\}/, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export const getProjectSlugs = () => getSlugs("projects");
export const getPostSlugs = () => getSlugs("writing");

/**
 * Params for a collection detail route. Cache Components requires generateStaticParams to return at least one
 * entry, so an empty collection returns a placeholder slug that resolves to the 404 page.
 */
export function collectionStaticParams(slugs: string[]): { slug: string }[] {
  return (slugs.length > 0 ? slugs : ["_none"]).map((slug) => ({ slug }));
}

export async function getProjects(): Promise<Project[]> {
  "use cache";
  // Content only changes on deploy.
  cacheLife("max");
  const projects = await Promise.all(
    getProjectSlugs().map(async (slug) => {
      const file = `content/projects/${slug}.mdx`;
      const { metadata } = await import(`@/content/projects/${slug}.mdx`);
      assertFields(file, metadata, [
        "title",
        "summary",
        "category",
        "year",
        "technologies",
      ]);
      assertOneOf(file, "category", metadata.category, projectCategories);
      return { ...(metadata as ProjectMeta), slug };
    }),
  );
  return projects.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return (await getProjects()).filter((project) => project.featured);
}

/** The project plus its neighbours in listing order, for previous/next navigation. */
export async function getProjectWithNeighbours(slug: string) {
  const projects = await getProjects();
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return null;
  return {
    project: projects[index],
    previous: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}

/** Newest first. */
export async function getPosts(): Promise<Post[]> {
  "use cache";
  cacheLife("max");
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => {
      const file = `content/writing/${slug}.mdx`;
      const { metadata } = await import(`@/content/writing/${slug}.mdx`);
      assertFields(file, metadata, ["title", "summary", "date", "category"]);
      assertOneOf(file, "category", metadata.category, writingCategories);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.date)) {
        throw new Error(
          `${file}: date must be YYYY-MM-DD, got "${metadata.date}"`,
        );
      }
      return {
        ...(metadata as PostMeta),
        slug,
        readingMinutes: readingMinutes("writing", slug),
      };
    }),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | null> {
  return (await getPosts()).find((post) => post.slug === slug) ?? null;
}
