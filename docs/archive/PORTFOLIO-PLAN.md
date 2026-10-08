# Personal Website / Digital Portfolio
## Complete From-Scratch Implementation Plan

---

# 1. Project Vision

Build a completely new personal website that represents **the person behind the work**, not just a traditional developer portfolio.

The website should combine:

- Professional identity
- Software engineering career
- Technical expertise
- Projects and achievements
- Academic background
- Research interests
- Personal interests
- Future direction
- Personal brand
- Contact and professional links

The website should remain useful for several years and evolve as the user's career, education, projects, and interests change.

### Core idea

> **A personal digital profile that communicates who I am, what I build, what I know, what I am interested in, and where I am going.**

It should work for multiple audiences:

- Recruiters
- Software engineers
- Engineering managers
- Universities
- Professors/researchers
- Potential collaborators
- Professional connections
- General visitors

This is **not only a job portfolio**.

---

# 2. Project Principles

The website should follow these principles.

### 2.1 Personal

It should feel like a real person's website rather than a generic developer template.

### 2.2 Professional

The visual design and content should be appropriate for recruiters, companies, universities, and professional contacts.

### 2.3 Technical

Technical depth should be visible through projects, architecture, engineering decisions, and writing.

### 2.4 Academic-friendly

The website should also work as a supplementary academic profile for future higher studies.

### 2.5 Long-term

The architecture should make it easy to add:

- New jobs
- New projects
- Publications
- Research
- Articles
- Certifications
- Achievements
- Experiments
- New interests

without redesigning the entire website.

### 2.6 Simple

Do not build unnecessary functionality.

This is primarily a **content-driven personal website**, not a SaaS application.

---

# 3. Recommended Technology Stack

## Core

### Framework

**Next.js**

Use the modern App Router architecture.

### Language

**TypeScript**

Use strict TypeScript where practical.

### Styling

**Tailwind CSS**

Use utility classes and a small reusable design system.

### UI Components

**shadcn/ui**

Use selectively.

Do not turn the entire website into a collection of generic UI components.

### Icons

**Lucide React**

Use icons only where they improve usability.

### Animation

**Motion**

Use subtle animation.

Avoid excessive animation.

### Content

**MDX**

Use MDX for:

- Projects
- Articles
- Notes
- Long-form content

Simple structured data can remain in TypeScript/JSON/TS files where appropriate.

---

# 4. Deployment Stack

### Version Control

Git

### Repository

GitHub

### Hosting

Vercel

### Analytics

Vercel Analytics

### Domain

Use a personal domain when ready.

Example:

```text
yourname.com
```

or

```text
yourname.dev
```

The domain should be decided later.

---

# 5. What NOT to Use Initially

Do not introduce these unless there is a real requirement:

- PostgreSQL
- MongoDB
- Firebase
- Authentication
- Admin dashboard
- CMS
- Backend API
- Redis
- Docker
- GraphQL
- Complex state management
- Heavy UI libraries
- Large animation libraries
- Three.js
- WebGL
- AI chatbot
- Contact database

The first version should be **fast, static, maintainable, and easy to deploy**.

---

# 6. Website Information Architecture

Recommended primary sections:

```text
Home
About
Experience
Projects
Expertise
Academic
Research & Interests
Beyond Code
Writing / Notes
Contact
```

Not every section needs to appear as a separate top-level navigation item.

For example:

```text
Home
About
Work
Projects
Academic
Ideas
Contact
```

could be the visible navigation while the homepage links to deeper sections.

---

# 7. Homepage

The homepage should provide a concise overview of the entire identity.

Recommended structure:

```text
Navbar
    ↓
Hero
    ↓
Short Introduction
    ↓
Current Focus
    ↓
Selected Experience
    ↓
Featured Projects
    ↓
Expertise
    ↓
Academic / Research
    ↓
Interests
    ↓
Beyond Code
    ↓
Contact
    ↓
Footer
```

---

# 8. Hero Section

The hero is the most important section.

It should immediately communicate:

1. Who you are
2. What you do
3. What you are interested in
4. What direction you are moving toward

Example structure:

```text
Your Name

Software Engineer
Technology Enthusiast
Builder / Learner / Explorer

Short 1–2 sentence introduction.

[Explore my work]
[About me]
```

Avoid generic statements such as:

```text
I am a passionate full-stack developer who loves coding.
```

The hero should eventually use a more distinctive personal positioning.

---

# 9. About Section

The About section should answer:

- Who am I?
- What is my professional background?
- What do I enjoy working on?
- What am I currently learning?
- What direction am I interested in?
- What do I value?

Keep it personal but professional.

Avoid making it a long autobiography.

Recommended structure:

```text
About Me

Professional introduction

How I approach technology

Current interests

Future direction
```

---

# 10. Experience

Create a professional timeline.

Example:

```text
Experience

Software Engineer
BJIT Ltd.
2025 – Present

Responsibilities
Projects
Technologies
Key contributions
```

Each experience entry should communicate:

- Organization
- Role
- Date
- Responsibilities
- Projects
- Technical environment
- Meaningful contributions

Do not exaggerate responsibilities.

Only include verified work.

---

# 11. Projects

Projects should be one of the strongest sections.

Projects can belong to different categories:

```text
Professional
Academic
Personal
Research
Experimental
Open Source
```

Do not make every project look identical.

The website should prioritize quality over quantity.

Recommended:

```text
Featured Projects
    4–6 strong projects

Other Projects
    Additional projects
```

---

# 12. Project Case Study Pages

Important projects should have dedicated pages.

Each project can follow:

```text
Project Overview

Problem

Context

Goals

Approach

Architecture

Implementation

My Contribution

Technology

Challenges

Important Technical Decisions

Results / Outcome

Lessons Learned

Future Improvements

Links
```

Possible links:

```text
GitHub
Live Demo
Documentation
Research Paper
Related Article
```

Do not force every project to contain every section.

Use only sections that are meaningful.

---

# 13. Featured Project Strategy

The strongest projects should demonstrate different capabilities.

For example:

### Professional Engineering

A real production/project system.

### AI / Agentic Systems

An AI-agent or agentic workflow project.

### Software Architecture

A system demonstrating backend/system design.

### Academic

A university project demonstrating technical fundamentals.

### Personal

A project demonstrating curiosity or independent learning.

### Experimental

A project demonstrating exploration of a new technology.

This creates a more complete picture than showing five similar CRUD applications.

---

# 14. Expertise

Do not use generic percentage bars such as:

```text
JavaScript     90%
Python         85%
React          90%
```

These percentages are subjective and quickly become outdated.

Instead, organize expertise into categories.

Example:

```text
Software Engineering
    Software Architecture
    API Development
    System Design
    Problem Solving

Backend
    Python
    Java
    REST APIs
    Databases

Frontend
    React
    Next.js
    TypeScript

AI & Agentic Systems
    AI Agents
    MCP
    Agentic Workflows
    AI-assisted Development

Data
    PostgreSQL
    SQL
    Data Modeling

Tools & Engineering
    Git
    GitHub
    Docker
    Linux
    CI/CD
```

Only list technologies you can genuinely discuss.

---

# 15. Academic Section

The website should support future higher-study applications.

Include:

```text
Education

Degree
University
Department
Years

Academic Projects

Relevant Coursework

Academic Interests
```

Potential future additions:

```text
Research
Publications
Conference Papers
Thesis
Academic Achievements
```

Do not invent research experience.

If research experience is limited, present genuine research interests instead.

---

# 16. Research & Interests

This section should distinguish between:

### What I currently work on

and

### What I am interested in exploring

Possible categories:

```text
AI & Agentic Systems

Software Engineering

Developer Tools

Distributed / Backend Systems

Human-AI Collaboration

Technology & Agriculture

Automation

Emerging Technologies
```

This section is important because the website represents **future direction**, not only historical experience.

---

# 17. Currently Exploring

Create a lightweight section showing current learning/exploration.

Example:

```text
Currently Exploring

AI Agent Systems
MCP
Software Architecture
Developer Productivity
Developer Tools
Technology × Agriculture
```

This can be updated frequently without changing the website structure.

---

# 18. Beyond Code

This is one of the elements that differentiates the website from a typical developer portfolio.

Technology should not represent the entire identity.

Possible areas:

```text
Agriculture

Learning

Technology Exploration

Personal Projects

Books / Reading

Travel

Photography

Other Interests
```

Only include things that genuinely represent the user.

The section should feel authentic rather than decorative.

---

# 19. Writing / Notes

Create a future-ready writing system.

Possible content:

```text
Articles
Technical Notes
Learning Notes
Project Retrospectives
Research Notes
Personal Thoughts
```

Use MDX.

Example:

```text
content/
    writings/
        understanding-mcp.mdx
        building-skillhub.mdx
        database-notes.mdx
```

This section does not need to be heavily populated initially.

A single high-quality article is better than ten empty-looking posts.

---

# 20. Contact

The contact section should be simple.

Possible links:

```text
Email
GitHub
LinkedIn
CV
Other professional profiles
```

Avoid building a custom contact backend initially.

A simple email link is enough.

A contact form can be added later if there is a real need.

---

# 21. Navigation

Recommended desktop navigation:

```text
Home
About
Experience
Projects
Academic
Ideas
Contact
```

Optional:

```text
Resume
```

The navbar should remain minimal.

On mobile:

```text
Menu
```

with a clean mobile navigation drawer/menu.

---

# 22. Content Architecture

Use a content-first architecture.

Recommended structure:

```text
project/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── experience/
│   ├── projects/
│   ├── academic/
│   ├── interests/
│   ├── writing/
│   └── contact/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── projects/
│   ├── ui/
│   └── shared/
│
├── content/
│   ├── about.mdx
│   ├── education.mdx
│   ├── experience.mdx
│   ├── interests.mdx
│   ├── projects/
│   │   ├── project-one.mdx
│   │   ├── project-two.mdx
│   │   └── project-three.mdx
│   │
│   └── writings/
│       └── first-post.mdx
│
├── lib/
│   ├── content.ts
│   ├── metadata.ts
│   └── utils.ts
│
├── public/
│   ├── images/
│   ├── projects/
│   └── documents/
│
├── styles/
│
├── CLAUDE.md
├── PROJECT.md
├── DESIGN.md
├── README.md
├── package.json
└── ...
```

The exact structure can be adjusted by Claude Code after evaluating the latest Next.js conventions.

---

# 23. Content/Data Separation

Do not hardcode large amounts of personal content directly inside UI components.

Bad:

```tsx
<section>
  <h2>I am a Software Engineer...</h2>
</section>
```

Prefer:

```text
content/about.mdx
```

and reusable components that render that content.

This makes future updates much easier.

---

# 24. Design Direction

The design should be:

```text
Minimal
Modern
Editorial
Technical
Personal
Professional
Calm
Typography-focused
```

Visual priorities:

### Typography

Strong typography should be one of the main design elements.

### Whitespace

Use generous spacing.

### Layout

Use a strong grid.

### Borders

Use subtle borders where useful.

### Colors

Use a restrained color palette.

### Animation

Use subtle transitions.

---

# 25. Things to Avoid

Avoid the typical AI-generated portfolio look.

Do NOT overuse:

- Giant gradients
- Glowing cards
- Particle backgrounds
- Floating 3D objects
- Excessive glassmorphism
- Animated text everywhere
- Huge skill percentage charts
- Fake terminal windows
- Generic developer illustrations
- Excessive shadows
- Excessive rounded cards
- Unnecessary carousels
- Auto-playing media

The website should look intentional rather than "AI-generated portfolio".

---

# 26. Responsive Design

Design mobile-first.

The website must work well on:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Test at minimum:

```text
375px
768px
1024px
1440px
```

Pay particular attention to:

- Navigation
- Hero typography
- Project cards
- Long project pages
- Tables
- Images
- Timeline
- Footer

---

# 27. Accessibility

Implement:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Alt text
- Accessible buttons
- Accessible links
- Good color contrast
- Reduced-motion support
- Proper form labels if forms are added

Accessibility should not be treated as a final afterthought.

---

# 28. SEO

Implement:

### Metadata

```text
Title
Description
Open Graph
Twitter/X metadata
Canonical URL
```

### Sitemap

Generate sitemap.

### Robots

Configure robots.txt.

### Structured Data

Eventually consider:

```text
Person
WebSite
Article
```

where appropriate.

Do not add structured data that does not accurately represent the site.

---

# 29. Performance

Target:

```text
Fast initial load
Optimized images
Minimal JavaScript
Static rendering where possible
Lazy loading where appropriate
Good Core Web Vitals
```

Prefer Server Components by default.

Use Client Components only when necessary.

---

# 30. Image Strategy

Images should be purposeful.

Potential images:

```text
Professional photo
Project screenshots
Architecture diagrams
Project thumbnails
Academic/project visuals
Personal photography
```

Use Next.js image optimization.

Do not fill the website with decorative stock images.

---

# 31. Resume / CV

The website should provide a downloadable CV.

Recommended:

```text
public/documents/cv.pdf
```

The CV should be independent from the website but linked from it.

Potential locations:

```text
Navbar
Hero
About
Contact
```

Do not make the CV the primary experience.

The website should provide more context than the CV.

---

# 32. Git Workflow

Use Git from the beginning.

Recommended branch structure:

```text
main
```

For larger changes:

```text
feature/homepage
feature/projects
feature/writing
feature/seo
```

Commit meaningful changes.

Examples:

```text
feat: initialize portfolio architecture
feat: add homepage hero section
feat: add project case study system
feat: add academic section
feat: add writing support
fix: improve mobile navigation
perf: optimize project images
```

---

# 33. Claude Code Strategy

Claude Code will be the primary development assistant.

Do NOT give Claude Code one enormous prompt such as:

```text
Build my entire portfolio.
```

Instead, use controlled phases.

Claude should:

1. Inspect the current state.
2. Understand the requirements.
3. Make a focused change.
4. Run checks.
5. Report what changed.
6. Wait for the next task.

---

# 34. CLAUDE.md

Create a root-level:

```text
CLAUDE.md
```

It should contain project rules.

Important rules:

```text
- This is a personal website, not a SaaS application.
- Keep the architecture simple.
- Do not add unnecessary dependencies.
- Do not invent personal information.
- Do not invent projects or achievements.
- Do not exaggerate technical expertise.
- Keep content separate from UI where practical.
- Prefer reusable components.
- Prefer Server Components.
- Use Client Components only when necessary.
- Maintain accessibility.
- Maintain responsive design.
- Keep animations subtle.
- Avoid generic AI-generated portfolio patterns.
- Do not redesign unrelated sections without a reason.
- Run lint/typecheck/build after significant changes.
- Keep the website performant.
```

---

# 35. PROJECT.md

Create:

```text
PROJECT.md
```

This should explain:

```text
Project Vision
Goals
Target Audience
Website Sections
Technology
Design Philosophy
Non-Goals
Future Possibilities
```

This becomes the primary product specification.

---

# 36. DESIGN.md

Create:

```text
DESIGN.md
```

Document:

```text
Design philosophy
Typography
Colors
Spacing
Borders
Radius
Buttons
Cards
Navigation
Animation
Responsive behavior
Accessibility
```

Claude Code should refer to this before creating new UI.

---

# 37. Development Phases

## Phase 0 – Define Personal Identity

Before coding, prepare:

```text
Name
Professional title
Short bio
Long bio
Current role
Education
Experience
Projects
Skills
Interests
Research interests
Future direction
Contact links
CV
```

Do not worry about perfect writing initially.

Create the raw content first.

---

# Phase 1 – Initialize Project

Claude Code should:

- Create Next.js project
- Configure TypeScript
- Configure Tailwind
- Configure linting
- Configure formatting
- Configure basic project structure
- Initialize Git
- Create CLAUDE.md
- Create PROJECT.md
- Create DESIGN.md

Verify:

```bash
npm run lint
npm run build
```

---

# Phase 2 – Establish Design System

Implement:

- Typography
- Colors
- Spacing
- Container
- Buttons
- Links
- Borders
- Cards
- Section headings
- Responsive breakpoints

Do not build every page yet.

First establish the visual language.

---

# Phase 3 – Global Layout

Build:

```text
Navbar
Main container
Footer
Page wrapper
Section wrapper
Mobile navigation
```

Test desktop and mobile.

---

# Phase 4 – Homepage

Build:

```text
Hero
Introduction
Current Focus
Experience preview
Featured Projects
Expertise
Academic preview
Research / Interests
Beyond Code
Contact
```

Keep sections concise.

---

# Phase 5 – About

Build the complete About page.

Include:

```text
Introduction
Professional background
Technical philosophy
Current interests
Future direction
```

---

# Phase 6 – Experience

Create reusable experience components.

Support:

```text
Company
Role
Dates
Description
Responsibilities
Projects
Technologies
```

Use a timeline only if it improves the design.

---

# Phase 7 – Project System

Build the project content architecture.

Implement:

```text
Project listing
Project categories
Project cards
Project detail pages
MDX rendering
Project metadata
Project navigation
```

Each project should have its own URL.

Example:

```text
/projects/skillhub
/projects/agentic-sdlc
/projects/project-name
```

---

# Phase 8 – Academic

Build:

```text
Education
Academic projects
Relevant areas
Academic interests
```

Keep it expandable for future:

```text
Research
Publications
Thesis
```

---

# Phase 9 – Expertise

Build a clean expertise section.

Focus on:

```text
Capabilities
Technologies
Areas of knowledge
```

Avoid subjective percentage ratings.

---

# Phase 10 – Research & Interests

Build:

```text
Research interests
Technology interests
Current exploration
Future directions
```

This section should be easy to update.

---

# Phase 11 – Beyond Code

Build the personal section.

Keep it visually different from the technical sections while maintaining the same design system.

---

# Phase 12 – Writing System

Implement MDX-based writing.

Support:

```text
Title
Date
Category
Tags
Reading time
Content
```

Later:

```text
Search
Categories
RSS
```

can be added if needed.

---

# Phase 13 – Contact

Implement:

```text
Email
GitHub
LinkedIn
CV
Other relevant links
```

Do not build a backend unless necessary.

---

# Phase 14 – SEO

Implement:

```text
Metadata
OpenGraph
Sitemap
Robots
Canonical URLs
Structured data
```

Check every important route.

---

# Phase 15 – Accessibility

Run an accessibility review.

Check:

```text
Keyboard navigation
Heading structure
Focus states
Contrast
Alt text
ARIA usage
Reduced motion
Mobile navigation
```

---

# Phase 16 – Performance

Check:

```text
Image sizes
Bundle size
Client components
Font loading
Unused dependencies
Large JavaScript
Animations
Core Web Vitals
```

Remove unnecessary client-side code.

---

# Phase 17 – Responsive Refinement

Test:

```text
375px
390px
768px
1024px
1280px
1440px
1920px
```

Fix:

- Overflow
- Typography
- Navigation
- Cards
- Images
- Spacing
- Project pages

---

# Phase 18 – Final Quality Review

Claude Code should review the entire project for:

### Content

- No placeholder text
- No invented information
- No broken links
- No inconsistent dates

### UI

- Consistent spacing
- Consistent typography
- Consistent components
- No unnecessary visual noise

### Engineering

- No unnecessary dependencies
- No unused components
- No unnecessary client components
- No TypeScript errors
- No lint errors

### Accessibility

- Keyboard accessible
- Semantic HTML
- Good contrast

### Performance

- Optimized images
- Good loading performance

---

# 39. Deployment

Deploy to Vercel.

Basic flow:

```text
Local Development
       ↓
GitHub
       ↓
Vercel
       ↓
Production
```

Configure:

```text
Production domain
Environment variables
Analytics
Metadata
Sitemap
```

---

# 40. Custom Domain

After the website is stable:

```text
Purchase domain
       ↓
Configure DNS
       ↓
Connect Vercel
       ↓
Enable HTTPS
       ↓
Verify redirects
```

Use the personal domain consistently across:

- CV
- LinkedIn
- GitHub
- Email signature
- Applications

---

# 41. Recommended Claude Code Workflow

For every major phase:

### Step 1

Give Claude the relevant requirement.

### Step 2

Ask Claude to inspect the current implementation.

### Step 3

Ask it to propose the implementation before making large changes.

### Step 4

Approve or adjust.

### Step 5

Let Claude implement.

### Step 6

Run:

```bash
npm run lint
npm run build
```

### Step 7

Visually inspect the result.

### Step 8

Give Claude focused corrections.

---

# 42. Example Claude Code Session Sequence

Use separate sessions/tasks such as:

```text
1. Project initialization
2. Design system
3. Global layout
4. Homepage
5. About
6. Experience
7. Project system
8. Project case studies
9. Academic
10. Expertise
11. Research & interests
12. Beyond Code
13. Writing
14. Contact
15. SEO
16. Accessibility
17. Performance
18. Responsive review
19. Final QA
20. Deployment
```

This makes the project much easier to control.

---

# 43. MVP Scope

The first production version should contain:

```text
- Homepage
- About
- Experience
- Projects
- Project detail pages
- Expertise
- Academic
- Research & Interests
- Beyond Code
- Contact
- CV
- Responsive design
- SEO
- Accessibility
- Performance optimization
- Vercel deployment
```

---

# 44. Features to Add Later

After the first version is stable:

```text
Writing / Blog

Search

Project filtering

RSS

Newsletter

GitHub activity

Now / Currently page

Public speaking

Publications

Research papers

Interactive project architecture diagrams

Guestbook

Contact form

Analytics dashboard
```

Only add these when they provide actual value.

---

# 45. Long-Term Evolution

The website can eventually become a broader personal knowledge and identity platform.

Possible future structure:

```text
Personal Website
│
├── Professional
│   ├── Experience
│   ├── Projects
│   ├── Expertise
│   └── CV
│
├── Academic
│   ├── Education
│   ├── Research
│   ├── Publications
│   └── Academic Projects
│
├── Ideas
│   ├── Writing
│   ├── Notes
│   └── Experiments
│
├── Personal
│   ├── Interests
│   ├── Beyond Code
│   └── Currently Exploring
│
└── Contact
```

This allows the website to grow with the user rather than becoming obsolete after a job change.

---

# 46. Final Architecture

The target architecture should remain approximately:

```text
                    Personal Website
                          │
             ┌────────────┴────────────┐
             │                         │
          Content                      UI
             │                         │
       ┌─────┴─────┐             ┌────┴────┐
       │           │             │         │
      MDX       Structured     Sections  Components
       │           │             │         │
 Projects      Experience      Homepage   UI
 Writing       Education       About      Layout
 About         Interests       Projects   Navigation
```

With:

```text
Next.js
TypeScript
Tailwind CSS
shadcn/ui
Motion
MDX
Vercel
GitHub
```

---

# 47. Definition of Done

The project is considered complete when:

### Identity

- [ ] Clear professional identity
- [ ] Clear personal identity
- [ ] Clear future direction

### Content

- [ ] About
- [ ] Experience
- [ ] Projects
- [ ] Expertise
- [ ] Academic
- [ ] Research/interests
- [ ] Beyond Code
- [ ] Contact
- [ ] CV

### Engineering

- [ ] TypeScript
- [ ] Clean architecture
- [ ] Reusable components
- [ ] Content separated from UI
- [ ] No unnecessary dependencies

### Design

- [ ] Strong typography
- [ ] Consistent spacing
- [ ] Responsive
- [ ] Professional
- [ ] Personal
- [ ] No generic template feeling

### Accessibility

- [ ] Keyboard accessible
- [ ] Semantic HTML
- [ ] Good contrast
- [ ] Focus states
- [ ] Reduced motion

### SEO

- [ ] Metadata
- [ ] OpenGraph
- [ ] Sitemap
- [ ] Robots
- [ ] Canonical URLs

### Performance

- [ ] Optimized images
- [ ] Minimal client JavaScript
- [ ] Good Core Web Vitals
- [ ] Fast page loading

### Deployment

- [ ] GitHub repository
- [ ] Vercel deployment
- [ ] Production domain
- [ ] HTTPS
- [ ] Analytics

---

# 48. Golden Rule

The most important rule for this project:

> **Do not build a website that simply says what you have done. Build a website that communicates who you are.**

Your work, projects, education, technical skills, interests, research direction, and personal interests should all contribute to that identity.

The technology should support the content – **not become the identity of the website itself.**

---

# 49. Recommended Starting Order

Start with exactly this sequence:

```text
1. Define personal identity
2. Prepare raw content
3. Create empty Git repository
4. Initialize Next.js
5. Create CLAUDE.md
6. Create PROJECT.md
7. Create DESIGN.md
8. Establish design system
9. Build global layout
10. Build homepage
11. Build About
12. Build Experience
13. Build Projects
14. Build Project Case Studies
15. Build Academic
16. Build Expertise
17. Build Research & Interests
18. Build Beyond Code
19. Build Writing
20. Build Contact
21. SEO
22. Accessibility
23. Performance
24. Responsive QA
25. Final QA
26. Deploy
27. Connect domain
```

**Do not start by building individual UI components randomly.**

First establish the **identity → content → information architecture → design system → implementation**.

That sequence will make Claude Code much more effective and will prevent the project from turning into an inconsistent collection of AI-generated pages.