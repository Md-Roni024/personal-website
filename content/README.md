# Content

All personal content lives here, separate from UI components. Only add genuine information; use `TODO:` for anything not yet provided.

| Content | Format | Location |
|---|---|---|
| About (long bio) | MDX | `about.mdx` |
| Project case studies | MDX, one file per project | `projects/<slug>.mdx` → `/projects/<slug>` |
| Articles / notes | MDX, one file per post | `writing/<slug>.mdx` → `/writing/<slug>` |
| Experience | TypeScript data | `experience.ts` |
| Education | TypeScript data | `education.ts` |
| Expertise | TypeScript data | `expertise.ts` |
| Interests, currently exploring, beyond code | TypeScript data | `interests.ts` |
| Contact / social links | TypeScript data | `links.ts` |

MDX files declare their metadata as an export (no frontmatter):

```mdx
export const metadata = {
  title: "…",
  summary: "…",
  date: "YYYY-MM-DD",
}

Body content…
```

The exact metadata fields per content type are defined by the types in `lib/content.ts` when each phase implements them.

Images: `public/images/` (general), `public/projects/<slug>/` (project assets). CV: `public/documents/cv.pdf` (currently a DUMMY placeholder PDF).
