@AGENTS.md

# Personal website

A content-driven personal website — not a SaaS app, not a generic portfolio template.

- Product spec: `PROJECT_PLAN.md`. Read it before major product decisions.
- Visual language: `DESIGN.md`. Read it before any visual/UI change.
- Workflow: `CLAUDE_CODE_GUIDE.md`. Work one phase / one objective at a time.
- `docs/archive/` holds superseded planning docs. Do not follow them.

## Hard rules

- Never invent personal information: experience, projects, achievements, education, research, skills, interests, publications, dates, links. Missing → `TODO:` placeholder or ask.
- Until the owner supplies real data, build with **obviously fake dummy data** ("Your Name", "Sample Project", "Company Name", `20XX`, `example.com`) — never plausible-looking invented facts. Mark every dummy file/block with a `DUMMY` comment so it can be found with `grep -r DUMMY` and replaced.
- Do not exaggerate expertise or responsibilities.
- Keep the architecture simple. No database, auth, CMS, backend API, or state library without an explicit requirement.
- Add a dependency only with a clear reason. Lucide, shadcn/ui components, Motion and Vercel Analytics are added when a phase actually needs them.
- Avoid generic AI-portfolio patterns (gradients, glow, glassmorphism, skill bars, fake terminals, carousels). See `DESIGN.md`.
- Do not redesign or refactor unrelated sections.

## Architecture

- Next.js 16 App Router, TypeScript strict, Tailwind v4, statically generated. `cacheComponents` is on: async I/O in a server component (e.g. reading `content/` with `fs`) must be in a `"use cache"` function or it will fail prerendering.
- Server Components by default; `"use client"` only for real interactivity (mobile nav, animation).
- Content is separate from UI — see `content/README.md`:
  - Long-form prose → `.mdx` in `content/` (projects, writing, about), metadata via `export const metadata`.
  - Structured records (experience, education, expertise, interests, links) → typed `.ts` files in `content/`.
  - Routes read content only through `lib/content.ts`.
  - Files starting with `_` are internal (e.g. `_design-preview.mdx`) and must be skipped by content listings.
- The layout renders `<main id="main">`; pages must not add another `<main>`.
- Site identity, nav, site URL and CV path live in `site.config.ts`.
- Components: `components/layout` (header, nav, footer), `components/sections` (homepage sections), `components/content` (content renderers), `components/ui` (primitives: `Container`, `Section`, `SectionHeading`, `Eyebrow`, `Button`, `ButtonLink`, `TextLink`, `Card`, `Tag`, `TagList`). Reuse these before writing new styles.
- MDX element styles live in `mdx-components.tsx`. `/design` is an internal, noindex preview of the design system.

## Quality

- Accessible (semantic HTML, heading order, keyboard, visible focus, alt text, contrast, `prefers-reduced-motion`) and responsive (375 / 768 / 1024 / 1440).
- Animation subtle and optional.
- After significant changes run `npm run check` (lint, typecheck, format check, build) and report the results.
