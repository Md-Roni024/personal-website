# Personal website

Content-driven personal website built with Next.js (App Router), TypeScript, Tailwind CSS and MDX. Statically generated; deployed to Vercel.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run check      # all of the above
```

## Project docs

- `PROJECT_PLAN.md` — product specification
- `DESIGN.md` — visual language
- `CLAUDE_CODE_GUIDE.md` — phased development workflow
- `CLAUDE.md` — rules for Claude Code
- `content/README.md` — where and how content is stored

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used for metadata, sitemap). Defaults to `http://localhost:3000`. |
