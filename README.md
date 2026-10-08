# Personal website

Content-driven personal website built with Next.js 16 (App Router, Cache Components), TypeScript, Tailwind CSS v4 and MDX. Every page is prerendered at build time; there is no backend, database or CMS.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

`/design` is an internal, noindex preview of the design system.

## Checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run check      # all of the above
```

## Auditing a production build while `npm run dev` is running

Building into `.next` while the dev server runs can confuse it. Build into a separate folder instead:

```bash
NEXT_DIST_DIR=.next-audit npm run build
NEXT_DIST_DIR=.next-audit npx next start -p 3124
```

## Content

Content comes from the previous portfolio. Remaining placeholders and gaps:

```bash
grep -rnE "DUMMY|DRAFT|TODO" content site.config.ts
```

See `content/README.md` for where each piece lives and how to add projects and posts.

## Routes

| Route | Content |
|---|---|
| `/` | Hero, intro & current focus, experience, featured projects, expertise, education, interests, beyond code, contact |
| `/about` | `content/about.mdx` + expertise |
| `/experience` | `content/experience.ts` |
| `/projects`, `/projects/[slug]` | `content/projects/*.mdx` |
| `/academic` | `content/education.ts` + Academic/Research projects |
| `/interests` | `content/interests.ts` |
| `/writing`, `/writing/[slug]` | `content/writing/*.mdx` |
| `/contact` | `content/links.ts` + CV |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | Generated |

## Deploy (Vercel)

1. Push the repository to GitHub.
2. In Vercel: **Add New → Project**, import the repository. The framework preset (Next.js) and build settings are detected automatically.
3. Set the environment variable `NEXT_PUBLIC_SITE_URL` to the production URL (e.g. `https://yourname.dev`, no trailing slash) for Production. It drives canonical URLs, Open Graph URLs, the sitemap and robots.txt.
4. Deploy.
5. **Analytics:** in the project's *Analytics* tab, enable Web Analytics. The `<Analytics />` component is already in the root layout.
6. **Domain:** *Settings → Domains*, add the domain, configure DNS as instructed (HTTPS is automatic), then update `NEXT_PUBLIC_SITE_URL` and redeploy.

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (metadata, sitemap, robots). Defaults to `http://localhost:3000`. |

## Project docs

- `PROJECT_PLAN.md` — product specification
- `DESIGN.md` — visual language
- `CLAUDE_CODE_GUIDE.md` — phased development workflow
- `CLAUDE.md` — rules for Claude Code
- `content/README.md` — content model and how to add content
