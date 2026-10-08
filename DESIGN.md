# Design

The visual language for the site. Consult before building any UI.

> **Direction (owner decision, 2026-10-08):** colours, typography and animation follow the owner's previous portfolio, https://roni-portfolio-ten.vercel.app/ — dark navy, purple accent, violet-to-magenta gradient, Poppins, card hover lifts, typewriter hero, scroll reveals. This **overrides** `PROJECT_PLAN.md` §22–23 where they conflict (gradients, animated text). Everything else in the plan still applies: content first, no skill bars, no particles/3D/carousels/autoplay, accessibility and performance.

Implementation: tokens and utilities in `app/globals.css`, fonts in `app/fonts.ts`, primitives in `components/ui/`. Live preview at `/design`.

## 1. Colour (dark theme only)

| Token | Value | Use |
|---|---|---|
| `background` | `#1c1c27` | page |
| `surface` | `#171721` | cards |
| `surface-raised` | `#232334` | chips, raised states |
| `tint` | `#201e33` | alternate section background (Skills, Beyond code, Certificates) |
| `foreground` | `#f2f2f7` | body text (15.1:1). Headings are pure white. |
| `muted` | `#b1b2b3` | secondary text (7.9:1) |
| `subtle` | `#8e8ea6` | metadata (5.3:1) |
| `border` / `border-strong` | `#2d2b45` / `#4a3d7a` | hairlines / outlined controls |
| `primary` | `#854ce6` | **fills, borders, dots, large display text only** (3.4:1 — fails AA for small text) |
| `accent` | `#a97cf5` | small purple text: eyebrows, links, dates, tags (5.5:1) |
| brand gradient | `#8400ff → #c800e0` (225°) | primary buttons, hero highlight, heading underline. End colour darkened from the reference's `#e600ff` so white text passes AA (≥ 4.6:1). |

Ratios are against `background`; all text tokens also pass AA on `surface` and `surface-raised`. Re-check whenever a value changes.

Utilities: `bg-brand`, `text-brand` (gradient text — large text only), `card`, `card-hover`, `hero-glow`.
Section tones (`Section tone=…`): `default`, `tint`, `band` (card colour — Contact section and footer).

## 2. Typography

- **Poppins** everywhere (300–700), via `next/font`. JetBrains Mono only inside code blocks.
- Headings bold/semibold, white. Section titles centred, ~42px desktop, with a short gradient bar beneath (`SectionHeading`).
- `text-display` (hero name, fluid 36→56px), `text-title` (page `h1`, fluid 32→44px).
- Eyebrows: 12px, semibold, wide tracking, uppercase, `accent`.
- Body 16–18px, line-height ~1.6; long-form text at `max-w-reading` (680px).

## 3. Layout & spacing

- Content width 1200px (`max-w-content`), padding 16 → 24 → 32px.
- Sections: 64 / 96 / 128px vertical padding. Headings and section intros centred; content in grids below.
- Grids collapse to one column on mobile; project/certificate grids are 1 → 2 → 3 columns.

## 4. Components

- **Buttons** — pills. Primary: brand gradient, white text, coloured shadow, `scale(1.05)` on hover. Secondary: 2px `primary` outline that fills on hover. `ButtonLink` opens http(s) links in a new tab.
- **Cards** (`card` + `card-hover`) — `surface` background, thin translucent purple border, soft blue-violet shadow, 16px radius; lift 6px and brighten border on hover. The whole card is clickable via a stretched link where it represents a destination.
- **Project card** — white image panel (logos/screenshots, `object-contain`), or a gradient panel with initials when there is no image; tags, title, date, 3-line summary.
- **Skills** — one card per category, centred title in `accent`, items as outlined chips. Never ratings or percentages.
- **Timeline** (Experience, Education) — gradient vertical line with ringed dots; left-aligned on mobile, centred and alternating on md+; each entry is a card with the date above it.
- **About** — keep it simple. Homepage: short intro, three icon facts (`ProfileFacts`: role, education, location) and one button, beside a single 2×2 numbers panel (`StatsGrid`). `/about`: sticky profile card (photo, facts incl. email, CTAs) beside the MDX write-up, then Current Focus and skills. Facts and numbers are computed from content.
- **Projects filter** — `ProjectFilter` (client): segmented pill buttons by `platform` with counts; the only interactive control besides the nav.
- **Tags** — small rounded chips, `primary/15` background, `accent` text.
- **Header** — sticky, translucent background with blur; monogram + name left; links white → `accent` on hover/current; outlined "Resume" pill. Below `lg` a "Menu" button opens a full-screen native `<dialog>` (focus contained, Esc closes, focus restored). "Writing" is hidden until a post exists.
- **Footer** — centred: gradient name, nav, round social icon buttons, copyright.
- **Icons** — Lucide for UI; brand marks (GitHub, LinkedIn, YouTube, LeetCode, Codeforces) inlined from Simple Icons in `components/ui/brand-icon.tsx`. Icon-only links always have `aria-label`.

## 5. Motion

- Hero: staggered fade-up on load (`.enter`, `.enter-delay-*`) and a typewriter cycling the roles (`components/content/typewriter.tsx`; the first role is server-rendered, screen readers get the full list).
- Sections and cards fade and rise as they scroll into view (`.reveal`), using CSS scroll-driven animations — no JS; unsupported browsers just show the content.
- Hover: card lift, button scale, icon nudges (300ms ease-in-out).
- **All of it is disabled under `prefers-reduced-motion: reduce`** (the typewriter stays on the first role).

## 6. Imagery

Portrait in the hero (circular, purple ring, soft gradient glow). Project images from the projects' repositories. No stock imagery.

## 7. Responsive & accessibility

- Verify at 375 / 768 / 1024 / 1440. No horizontal scroll. Touch targets ≥ 44px.
- Semantic landmarks, skip link, one `h1` per page, visible `focus-visible` ring (`accent`), descriptive link text, no information by colour alone.

## 8. Still avoid

Skill percentage bars, particle backgrounds, 3D objects, glassmorphism beyond the header blur, fake terminals, carousels, autoplaying media, gradient text on small text.
