import type { MetadataRoute } from "next";
import { getPosts, getProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/metadata";

// Internal pages such as /design are intentionally excluded.
const staticRoutes = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/academic",
  "/interests",
  "/writing",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route) })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/writing/${post.slug}`),
      lastModified: post.date,
    })),
  ];
}
