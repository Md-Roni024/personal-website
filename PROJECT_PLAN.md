# Personal Website – Project Plan

## 1. Project Overview

Build a completely new personal website from scratch.

This website is not intended to be only a traditional developer portfolio. It should represent the person behind the work and act as a long-term personal digital profile.

The website should communicate:

- Who I am
- What I do
- What I have built
- What I know
- What I am currently exploring
- What I am interested in
- What I have achieved
- Where I want to go

The website should support both my **professional identity** and **personal identity**.

It should be useful for:

- Recruiters
- Engineering managers
- Software engineers
- Universities
- Professors/researchers
- Professional connections
- Potential collaborators
- General visitors

---

# 2. Core Vision

The website should feel like:

> A personal digital profile that communicates who I am, what I build, what I know, what I am interested in, and where I am going.

It should not feel like:

- A generic developer portfolio
- A resume converted into HTML
- An AI-generated template
- A collection of random UI sections
- A SaaS application
- A technology showcase with no personal identity

---

# 3. Main Goals

## Professional

Show:

- Current professional role
- Professional experience
- Technical capabilities
- Important projects
- Engineering experience
- Career direction

## Academic

Support future:

- Higher-study applications
- Academic networking
- Research opportunities
- University/professor interactions

Show:

- Education
- Academic projects
- Academic interests
- Research interests
- Future research direction

## Personal

Show:

- Personal interests
- Things I explore outside work
- Learning
- Technology interests
- Future aspirations
- Areas beyond software development

## Personal Branding

Create a consistent digital identity across:

- Website
- CV
- GitHub
- LinkedIn
- Future professional profiles

---

# 4. Technology Stack

## Core

- Next.js
- TypeScript
- Tailwind CSS

## UI

- shadcn/ui
- Lucide React

Use shadcn/ui selectively rather than building the entire website around generic UI components.

## Animation

- Motion

Use animation subtly.

## Content

- MDX

Use MDX for:

- Projects
- Articles
- Technical notes
- Long-form content

## Version Control

- Git
- GitHub

## Deployment

- Vercel

## Analytics

- Vercel Analytics

## Domain

A personal domain will be connected later.

---

# 5. Architecture Philosophy

The project should remain simple.

This is primarily a content-driven personal website.

Do not introduce unnecessary infrastructure.

Initially there should be:

- No database
- No authentication
- No admin dashboard
- No backend API
- No CMS
- No Redis
- No GraphQL
- No complex state-management system

The architecture should be easy to maintain for several years.

---

# 6. Main Website Sections

The website should contain:

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

The visible navigation can remain smaller if appropriate.

For example:

```text
Home
About
Work
Projects
Ideas
Contact
```

while deeper sections remain accessible from the homepage.

---

# 7. Homepage

The homepage should provide a concise overview of the entire identity.

Recommended structure:

```text
Navbar
    ↓
Hero
    ↓
Introduction
    ↓
Current Focus
    ↓
Experience Preview
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

The homepage should not contain huge amounts of text.

Its purpose is to make visitors understand the person quickly.

---

# 8. Hero

The hero should communicate:

1. Name
2. Professional identity
3. What I work on
4. Current interests
5. General direction

It should include clear calls to action such as:

- Explore my work
- About me
- View CV

Avoid generic phrases such as:

> I am a passionate full-stack developer who loves coding.

The final wording should be based on genuine information.

---

# 9. About

The About section should answer:

- Who am I?
- What is my professional background?
- What do I enjoy working on?
- What am I learning?
- What am I interested in?
- What direction am I moving toward?
- What do I value?

It should be personal but professional.

Avoid writing a long autobiography.

---

# 10. Experience

Show professional experience as a timeline or structured list.

Each entry may contain:

- Organization
- Position
- Dates
- Responsibilities
- Projects
- Technologies
- Contributions
- Important outcomes

Only include accurate information.

Do not exaggerate responsibilities.

---

# 11. Projects

Projects are one of the most important parts of the website.

Projects can be categorized as:

```text
Professional
Academic
Personal
Research
Experimental
Open Source
```

Prioritize quality over quantity.

The initial website should highlight approximately 4–6 strong projects.

---

# 12. Project Case Studies

Important projects should have dedicated pages.

A project page can contain:

```text
Overview
Problem
Context
Goals
Approach
Architecture
Implementation
My Contribution
Technology
Challenges
Technical Decisions
Results / Outcome
Lessons Learned
Future Improvements
Links
```

Not every project needs every section.

Use only meaningful sections.

Possible links:

- GitHub
- Live Demo
- Documentation
- Research Paper
- Related Article

---

# 13. Expertise

Do not use subjective percentage bars.

Avoid:

```text
Python       90%
JavaScript   85%
React        90%
```

Instead organize expertise by category.

Example:

```text
Software Engineering
Backend
Frontend
AI & Agentic Systems
Data
Tools & Engineering
```

Possible technologies/capabilities can include:

- Python
- Java
- TypeScript
- React
- Next.js
- REST APIs
- PostgreSQL
- SQL
- Git
- Docker
- AI Agents
- MCP
- Agentic Workflows
- Software Architecture
- System Design

Only include technologies and capabilities that genuinely represent my knowledge.

---

# 14. Academic

The website should support future higher-study opportunities.

Include:

- Degree
- University
- Department
- Years
- Academic projects
- Relevant areas
- Academic interests

Future expansion can include:

- Research
- Publications
- Thesis
- Conference papers
- Academic achievements

Do not invent research experience.

---

# 15. Research & Interests

This section should communicate areas I am interested in exploring.

Potential areas:

- AI & Agentic Systems
- Software Engineering
- Developer Tools
- Software Architecture
- Backend/System Design
- Human-AI Collaboration
- Automation
- Technology & Agriculture
- Emerging Technologies

This section should distinguish between:

**Current work**

and

**Future interests.**

---

# 16. Currently Exploring

Include a lightweight area showing what I am currently learning or exploring.

Examples:

```text
AI Agent Systems
MCP
Software Architecture
Developer Tools
Developer Productivity
Technology × Agriculture
```

This section should be easy to update.

---

# 17. Beyond Code

The website should represent more than software development.

Potential areas:

- Agriculture
- Learning
- Technology exploration
- Personal projects
- Books/reading
- Photography
- Travel
- Other genuine interests

Only include things that genuinely represent me.

---

# 18. Writing / Notes

Create a future-ready writing system using MDX.

Possible content:

- Technical articles
- Learning notes
- Project retrospectives
- Research notes
- Personal thoughts

Each article can contain:

```text
Title
Date
Category
Tags
Reading time
Content
```

The writing section does not need to contain many posts initially.

---

# 19. Contact

Keep the contact section simple.

Include relevant links such as:

- Email
- GitHub
- LinkedIn
- CV
- Other professional profiles

A custom backend contact form is not required initially.

---

# 20. Content Architecture

Recommended structure:

```text
content/
├── about.mdx
├── education.mdx
├── experience.mdx
├── interests.mdx
├── projects/
│   ├── project-one.mdx
│   ├── project-two.mdx
│   └── project-three.mdx
└── writings/
    └── first-post.mdx
```

Large personal content should not be unnecessarily hardcoded into UI components.

---

# 21. Application Structure

Recommended architecture:

```text
app/
├── page.tsx
├── about/
├── experience/
├── projects/
├── academic/
├── interests/
├── writing/
└── contact/

components/
├── layout/
├── navigation/
├── sections/
├── projects/
├── ui/
└── shared/

content/

lib/

public/
├── images/
├── projects/
└── documents/
```

Claude Code may adjust this structure if a newer Next.js convention provides a clear improvement.

---

# 22. Design Direction

The visual identity should be:

- Minimal
- Modern
- Editorial
- Technical
- Personal
- Professional
- Calm
- Typography-focused

Prioritize:

- Strong typography
- Whitespace
- Clear hierarchy
- Grid/layout
- Subtle borders
- Restrained colors
- Subtle animation

---

# 23. Things to Avoid

Avoid excessive:

- Gradients
- Glowing cards
- Particle backgrounds
- 3D objects
- Glassmorphism
- Animated text
- Skill percentage bars
- Fake terminal windows
- Generic developer illustrations
- Heavy shadows
- Excessive rounded cards
- Carousels
- Auto-playing media

The website should feel intentionally designed rather than AI-generated.

---

# 24. Responsive Design

The website must work well on:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Test at approximately:

```text
375px
768px
1024px
1440px
```

Pay special attention to:

- Navigation
- Hero typography
- Project cards
- Project pages
- Images
- Timeline
- Footer

---

# 25. Accessibility

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
- Proper labels for forms

---

# 26. SEO

Implement:

- Page metadata
- Open Graph
- Twitter/X metadata
- Canonical URLs
- Sitemap
- Robots.txt

Consider structured data where appropriate:

- Person
- WebSite
- Article

Only use structured data that accurately represents the website.

---

# 27. Performance

Prioritize:

- Fast loading
- Optimized images
- Minimal JavaScript
- Server Components where possible
- Static rendering where appropriate
- Good Core Web Vitals

Avoid unnecessary client-side code.

---

# 28. Images

Use images only when they add value.

Potential images:

- Professional photo
- Project screenshots
- Architecture diagrams
- Project visuals
- Personal photography

Do not use stock images simply to fill empty space.

---

# 29. CV

Provide a downloadable CV.

Possible location:

```text
public/documents/cv.pdf
```

The website should provide more context than the CV.

The CV should not become the entire website.

---

# 30. Development Phases

## Phase 0 – Personal Content

Prepare:

- Name
- Professional title
- Short bio
- Long bio
- Current role
- Education
- Experience
- Projects
- Skills
- Interests
- Research interests
- Future direction
- Contact information
- CV

---

## Phase 1 – Project Initialization

Set up:

- Next.js
- TypeScript
- Tailwind
- Git
- ESLint
- Formatting
- Basic project structure

---

## Phase 2 – Design System

Establish:

- Typography
- Colors
- Spacing
- Containers
- Buttons
- Links
- Borders
- Cards
- Section headings
- Responsive behavior

---

## Phase 3 – Global Layout

Build:

- Navbar
- Mobile navigation
- Page wrapper
- Main container
- Footer
- Shared layout

---

## Phase 4 – Homepage

Build:

- Hero
- Introduction
- Current Focus
- Experience preview
- Featured Projects
- Expertise
- Academic preview
- Research/Interests
- Beyond Code
- Contact

---

## Phase 5 – About

Build the complete About page.

---

## Phase 6 – Experience

Build reusable experience components.

---

## Phase 7 – Project System

Build:

- Project listing
- Project categories
- Project cards
- Project detail pages
- MDX rendering
- Project metadata
- Project navigation

---

## Phase 8 – Academic

Build:

- Education
- Academic projects
- Relevant areas
- Academic interests

---

## Phase 9 – Expertise

Build the expertise/capability section.

---

## Phase 10 – Research & Interests

Build:

- Research interests
- Technology interests
- Current exploration
- Future directions

---

## Phase 11 – Beyond Code

Build the personal-interest section.

---

## Phase 12 – Writing

Implement MDX-based writing.

---

## Phase 13 – Contact

Implement professional contact links and CV.

---

## Phase 14 – SEO

Implement:

- Metadata
- OpenGraph
- Sitemap
- Robots
- Canonical URLs
- Structured data

---

## Phase 15 – Accessibility

Perform a complete accessibility review.

---

## Phase 16 – Performance

Review:

- Images
- Bundle size
- Client components
- Fonts
- Dependencies
- Animations
- Core Web Vitals

---

## Phase 17 – Responsive QA

Test across mobile, tablet and desktop.

---

## Phase 18 – Final QA

Review:

- Content
- UI
- Accessibility
- SEO
- Performance
- Links
- Mobile behavior
- Code quality

---

## Phase 19 – Deployment

Deploy to Vercel.

Configure:

- Production domain
- Analytics
- Metadata
- Sitemap
- HTTPS

---

# 31. MVP

The first production version should contain:

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

---

# 32. Future Features

Potential future additions:

- Writing/blog
- Search
- Project filtering
- RSS
- Newsletter
- GitHub activity
- Now/Currently page
- Publications
- Research papers
- Interactive architecture diagrams
- Speaking
- Guestbook

These should only be added when they provide real value.

---

# 33. Definition of Done

The project is complete when:

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
- [ ] Fast loading

### Deployment

- [ ] GitHub
- [ ] Vercel
- [ ] Production domain
- [ ] HTTPS
- [ ] Analytics