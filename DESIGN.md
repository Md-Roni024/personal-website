# Design

The visual language for the site. Consult before building any UI. Derived from `PROJECT_PLAN.md` §22–25.

> **Status:** Settled and implemented in Phase 2 (`app/globals.css`, `app/fonts.ts`, `components/ui/`). Live preview at `/design`. Typeface, palette and dark-mode choices were made with recommended defaults and can be revised by the owner — change the tokens, not individual components.

## 1. Character

Minimal · editorial · technical · personal · professional · calm · typography-led.

The site should read like a well-set publication about a person, not a product landing page. Typography, whitespace and composition carry the design; decoration is the exception.

## 2. Typography

- Typography is the primary design element. Hierarchy comes from size, weight and spacing — not colour or boxes.
- Fonts loaded with `next/font` (self-hosted, no layout shift). Maximum two families plus a monospace.
- Body text: 16–18px, line-height ~1.6, measure 60–75 characters (`max-w-reading`).
- Headings: tight leading (1.1–1.25), slight negative tracking at large sizes. Hero heading scales fluidly with `clamp()`; never overflows at 375px.
- Monospace only for genuinely technical details (dates, tech tags, metadata labels) — sparingly.
- Typefaces (`app/fonts.ts`):
  - `font-serif` — **Newsreader**: page titles, section headings (`h1`/`h2`), pull quotes. Regular weight; let size do the work.
  - `font-sans` — **Inter**: body text, UI, item headings (`h3`, semibold).
  - `font-mono` — **JetBrains Mono**: eyebrows, dates, tags, code.
- Scale: `text-display` (hero, fluid 40→72px), `text-title` (page `h1`, fluid 32→48px), `text-3xl`/`sm:text-4xl` (section `h2`), `text-lg` semibold (`h3`), `text-base`/`sm:text-lg` (body), `text-sm`/`text-xs` (meta).
- Shared pieces: `SectionHeading` (eyebrow + heading + intro), `Eyebrow` (mono uppercase label).

## 3. Colour

- Restrained: one neutral scale + one accent. The accent is used for links, focus rings and small highlights only.
- All text meets WCAG AA (4.5:1 body, 3:1 large text and UI). Verify contrast when tokens are set.
- Colours are defined once as CSS variables in `app/globals.css` and exposed via Tailwind `@theme`; components use tokens (`bg-background`, `text-muted`, …), never raw hex.
- Palette: warm neutrals + a deep green accent.

| Token | Use | Light | Dark |
|---|---|---|---|
| `background` | page | `#faf9f7` | `#141311` |
| `surface` | rare raised areas, code | `#f2f0ec` | `#1d1c19` |
| `foreground` | primary text | `#1c1a17` (16.5:1) | `#ece9e4` (15.3:1) |
| `muted` | secondary text | `#57534e` (7.3:1) | `#a8a29e` (7.4:1) |
| `subtle` | metadata | `#6f6a64` (5.1:1) | `#8f8983` (5.4:1) |
| `border` | hairlines | `#e4e1dc` | `#2c2a26` |
| `border-strong` | hover/emphasis rules | `#c9c4bc` | `#46423c` |
| `accent` | links on hover, focus ring, selection | `#2f5d43` (7.2:1) | `#8fbf9f` (9.0:1) |
| `accent-foreground` | text on accent | `#ffffff` | `#141311` |

  Ratios are against `background`; all text tokens also pass AA on `surface`. Re-check contrast whenever a token changes.
- Dark mode follows the system via `prefers-color-scheme` — no toggle, no JS. A toggle can be added later if wanted.
- Focus ring: 2px `accent` outline, 2px offset, on `:focus-visible` (global in `globals.css`).

## 4. Spacing & layout

- Tailwind's default 4px scale; do not add arbitrary spacing values.
- Generous vertical rhythm: sections separated by ~96–160px desktop, ~64–96px mobile.
- Containers:
  - `reading` — ~680px, long-form reading (`max-w-reading`).
  - `content` — ~1080px, default page width.
  - `wide` — ~1280px, rare (e.g. project media).
- Horizontal page padding: 16px mobile → 24px tablet → 32px+ desktop.
- A clear grid (e.g. 12-col desktop) for section layouts; asymmetric label/content columns (small heading left, content right) are encouraged for an editorial feel.

## 5. Borders, radius, elevation

- Borders: 1px, `border` token, used to separate rather than to box. Prefer hairline rules between items over enclosing cards.
- Radius: small and consistent (≈ 4–6px) for interactive elements and images. No pill-shaped everything.
- Shadows: none by default. At most one very subtle shadow for overlays (mobile menu).

## 6. Components

**Links** — Inline links underlined (offset underline, thickness changes on hover). Navigation links not underlined; current page indicated by weight/colour and `aria-current="page"`. External links open in the same tab unless downloading a file.

**Buttons** — Few. Primary (solid foreground/accent) and secondary (border or text). Used for main calls to action (e.g. View CV, Explore work). Real `<button>` for actions, `<a>` for navigation.

**Icons** — Lucide, `aria-hidden`, always next to a text label: external-link arrow, download, previous/next arrows. Never icon-only controls.

**Cards** — Used sparingly. Project listings may use a card-like block (title, one-line summary, category, year, tech) but prefer open layouts with rules over enclosed boxes. Do not make every project identical in visual weight; featured projects may get more space.

**Section heading** — Small label/eyebrow (optional, mono or small caps) + heading + optional one-line intro. One `h1` per page; sections use `h2`, items `h3`.

**Tags** — Plain text or very light outline; no coloured pills per technology.

**Navigation** — Minimal top bar: name (home link) left, ≤6 items + CV right. Below `lg` (1024px): a single “Menu” button opening a full-screen native `<dialog>`; focus contained while open, `Esc` closes, focus returns to the button. The full nav switches on at `lg` because the name plus seven items do not fit at tablet width. Not sticky.

**Footer** — Quiet: name, short line, contact/social links, CV. No sitemap mega-footer.

## 7. Imagery

- Only purposeful images: portrait, project screenshots, diagrams, personal photography. No stock or illustration filler.
- Always `next/image`, explicit dimensions, meaningful `alt` (empty `alt` only for purely decorative images).

## 8. Motion

- Subtle and functional: short fades/translates (150–300ms, ease-out) on hover, menu open, and optional on-scroll reveal of sections.
- No animated text, parallax, particles, or autoplaying media.
- Everything respects `prefers-reduced-motion: reduce` (disable non-essential motion).
- Prefer CSS transitions; add Motion only when CSS cannot do the job cleanly. Current state: CSS only (colour transitions, icon nudge on hover) — Motion is not installed.

## 9. Responsive rules

- Mobile-first. Verify at 375, 768, 1024, 1440 (and 390, 1280, 1920 in QA).
- No horizontal scroll at any width; long words/URLs wrap.
- Multi-column layouts collapse to one column below `md`.
- Touch targets ≥ 44×44px on mobile.

## 10. Accessibility baseline

- Semantic landmarks: `header`, `nav`, `main`, `footer`; skip-to-content link.
- Visible focus ring on every interactive element (`focus-visible`, `focus` token, ≥ 3:1 contrast).
- Correct heading order; descriptive link text (no “click here”).
- No information conveyed by colour alone.

## 11. Avoid

Gradients, glowing cards, particles, 3D, glassmorphism, animated text, skill percentage bars, fake terminals, generic developer illustrations, heavy shadows, rounded-card-everything, carousels, autoplaying media.
