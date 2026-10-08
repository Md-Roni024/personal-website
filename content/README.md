# Content

All personal content lives here, separate from UI components. Only add genuine information. Everything currently here is **DUMMY** placeholder data — find it all with `grep -r DUMMY content site.config.ts`.

| Content | Format | Location | Shown on |
|---|---|---|---|
| Name, title, description, nav, CV path | TypeScript | `../site.config.ts` | Everywhere |
| Hero headline, intro, current focus | TypeScript | `profile.ts` | Home, About |
| About (long bio) | MDX | `about.mdx` | About |
| Experience | TypeScript | `experience.ts` (most recent first) | Home (first 3), Experience |
| Education, coursework, academic interests | TypeScript | `education.ts` | Home, Academic |
| Expertise | TypeScript | `expertise.ts` | Home, About |
| Current work, exploring, future interests, beyond code | TypeScript | `interests.ts` | Home, Research & Interests |
| Contact / profile links | TypeScript | `links.ts` | Home, Contact, footer |
| Project case studies | MDX, one per project | `projects/<slug>.mdx` → `/projects/<slug>` | Home (if `featured`), Projects, Academic (if Academic/Research) |
| Articles / notes | MDX, one per post | `writing/<slug>.mdx` → `/writing/<slug>` | Writing |

The TypeScript types for every file are in `lib/content.ts`; the editor and `npm run typecheck` flag mistakes.

## Projects and posts

Copy the `_template.mdx` in each folder to `<slug>.mdx` and fill it in. The slug becomes the URL. Metadata is an export at the top of the file (no frontmatter):

```mdx
export const metadata = {
  title: "…",
  summary: "…",
  category: "Professional", // projects: Professional | Academic | Personal | Research | Experimental | Open Source
  year: "2025",
  technologies: ["…"],
  featured: true,
  order: 1,
  links: [{ label: "GitHub", href: "https://github.com/…" }],
};

## Overview
…
```

Posts use `title`, `summary`, `date` (`YYYY-MM-DD`), `category` (Article | Technical note | Learning note | Retrospective | Research note | Personal) and optional `tags`. Reading time is computed automatically.

The build fails with a clear message if required metadata is missing or a category is unknown.

Files starting with `_` are ignored by the site. Keep the `_template.mdx` files — they also keep each folder in git, which the build needs.

## Files

- Images: `public/images/` (general), `public/projects/<slug>/` (project screenshots). Reference them in MDX as `/projects/<slug>/screenshot.png`.
- CV: `public/documents/cv.pdf` (currently a DUMMY placeholder PDF).
