# Claude Code Development Guide

## 1. Purpose

This document defines how Claude Code should be used to build the personal website.

`PROJECT_PLAN.md` defines **what the website should be**.

This document defines **how Claude Code should build it**.

---

# 2. Core Rule

Claude Code must treat `PROJECT_PLAN.md` as the primary product specification.

Before implementing a feature:

1. Read the relevant project requirements.
2. Inspect the existing project structure.
3. Understand what is already implemented.
4. Avoid duplicating existing functionality.
5. Make the smallest clean implementation that satisfies the requirement.
6. Verify the implementation.
7. Report what changed.

---

# 3. Never Build Everything in One Prompt

Do not give Claude Code a single instruction like:

> Build my entire personal website.

Instead, work phase by phase.

Recommended workflow:

```text
Planning
   ↓
Foundation
   ↓
Design System
   ↓
Layout
   ↓
Pages
   ↓
Content
   ↓
Polish
   ↓
SEO
   ↓
Accessibility
   ↓
Performance
   ↓
QA
   ↓
Deployment
```

---

# 4. Claude Code's Role

Claude Code should act as:

- Software engineer
- UI engineer
- Architecture assistant
- Code reviewer
- QA assistant
- Performance reviewer

But it should not make personal decisions on behalf of the user.

Claude must not invent:

- Experience
- Projects
- Achievements
- Education
- Research
- Skills
- Job responsibilities
- Personal interests
- Publications

If information is missing, use a placeholder or ask for the information.

---

# 5. Before Coding

Before making significant implementation changes, Claude should inspect:

```text
PROJECT_PLAN.md
CLAUDE.md
DESIGN.md
package.json
app/
components/
content/
lib/
public/
```

Claude should understand the current implementation before changing it.

---

# 6. Project Initialization

The first Claude Code task should be project initialization.

Claude should:

- Create the Next.js application
- Configure TypeScript
- Configure Tailwind
- Configure ESLint
- Configure formatting if needed
- Initialize Git
- Create the project structure
- Create `PROJECT_PLAN.md`
- Create `CLAUDE_CODE_GUIDE.md`
- Create `CLAUDE.md`
- Create `DESIGN.md`

Do not start designing the homepage yet.

---

# 7. CLAUDE.md

The repository should contain a concise `CLAUDE.md`.

It should tell Claude:

```text
This is a personal website.

Read PROJECT_PLAN.md before making major product decisions.

Read DESIGN.md before making visual/design changes.

Do not invent personal information.

Keep architecture simple.

Prefer reusable components.

Keep content separate from UI.

Prefer Server Components.

Use Client Components only when required.

Avoid unnecessary dependencies.

Maintain accessibility.

Maintain responsive design.

Keep animation subtle.

Do not introduce backend infrastructure without a clear requirement.

Run lint and build after significant changes.
```

`CLAUDE.md` should remain concise.

Detailed development strategy belongs in `CLAUDE_CODE_GUIDE.md`.

---

# 8. DESIGN.md

Before major UI work, create `DESIGN.md`.

It should define:

- Typography
- Color system
- Spacing
- Containers
- Borders
- Radius
- Buttons
- Cards
- Navigation
- Section styling
- Animation principles
- Responsive rules

Claude should consult this before implementing new UI.

---

# 9. Development Loop

For each feature:

```text
1. Understand
2. Inspect
3. Plan
4. Implement
5. Verify
6. Review
```

Claude should not immediately start changing many files without understanding the requirement.

---

# 10. Small Task Principle

Each Claude Code task should ideally have one primary objective.

Good:

> Build the global navigation and responsive mobile navigation.

Bad:

> Build the navigation, homepage, projects, blog, SEO, animations, and deployment.

Small tasks make it easier to:

- Review changes
- Detect mistakes
- Roll back changes
- Maintain quality
- Control design decisions

---

# 11. Phase-by-Phase Claude Code Workflow

## Phase 0 – Understand the Project

Initial instruction:

```text
Read PROJECT_PLAN.md and CLAUDE_CODE_GUIDE.md.

Do not write application code yet.

Analyze the requirements and propose:
1. application architecture
2. folder structure
3. content architecture
4. component architecture
5. dependency choices
6. implementation phases

Keep the architecture simple.

Do not invent personal content.

Do not modify files yet.
```

Review Claude's proposal before proceeding.

---

# 12. Phase 1 – Initialize the Application

Prompt:

```text
Initialize the personal website according to PROJECT_PLAN.md.

Create the Next.js + TypeScript foundation and the basic project structure.

Set up:
- Next.js
- TypeScript
- Tailwind CSS
- ESLint
- Git
- basic content architecture

Create:
- CLAUDE.md
- DESIGN.md
- PROJECT_PLAN.md
- CLAUDE_CODE_GUIDE.md

Do not build the homepage yet.

After implementation:
1. run lint
2. run build
3. report the files created/changed
4. report any issues
```

---

# 13. Phase 2 – Design System

Prompt:

```text
Implement the initial design system for the personal website.

First inspect PROJECT_PLAN.md and DESIGN.md.

Create the reusable foundations for:
- typography
- colors
- spacing
- containers
- buttons
- links
- borders
- cards
- section headings

The design should be minimal, editorial, technical, personal, and professional.

Avoid generic AI-generated portfolio styling.

Do not build the full homepage yet.

Run lint and build after implementation.
```

---

# 14. Phase 3 – Global Layout

Prompt:

```text
Implement the global website layout.

Build:
- desktop navigation
- mobile navigation
- page container
- main layout
- footer

Follow DESIGN.md.

Keep the navigation simple.

Ensure keyboard accessibility and responsive behavior.

Do not implement the individual homepage sections yet.

Run lint and build.
```

---

# 15. Phase 4 – Homepage

Prompt:

```text
Implement the homepage according to PROJECT_PLAN.md.

Build the homepage using reusable sections:

- Hero
- Introduction
- Current Focus
- Experience preview
- Featured Projects
- Expertise
- Academic / Research preview
- Interests
- Beyond Code
- Contact

Do not invent personal content.

If actual content is missing, create clearly marked content placeholders.

Focus on strong visual hierarchy and typography.

Avoid excessive cards, gradients, animations, or decorative elements.

Test mobile and desktop layouts.

Run lint and build.
```

---

# 16. Phase 5 – About

Prompt:

```text
Implement the About page.

Follow PROJECT_PLAN.md and the existing design system.

Create a structure that supports:
- personal introduction
- professional background
- technical philosophy
- current interests
- future direction

Do not invent information.

Keep the writing structure easy to update later.

Reuse existing layout components.

Run lint and build.
```

---

# 17. Phase 6 – Experience

Prompt:

```text
Implement the Experience section/page.

Create reusable experience components.

Support:
- organization
- role
- dates
- description
- responsibilities
- projects
- technologies
- contributions

Keep content separate from presentation.

Do not invent experience.

Make the structure easy to add future jobs.

Run lint and build.
```

---

# 18. Phase 7 – Project System

Prompt:

```text
Implement the project architecture.

Create:
- project content model
- project listing
- project cards
- project categories
- project detail pages
- MDX support
- project metadata
- project navigation

Important projects should have dedicated URLs.

Keep project content separate from UI.

Design the system so additional projects can be added by creating content rather than rewriting components.

Run lint and build.
```

---

# 19. Phase 8 – Project Case Study

For each major project, provide Claude the actual project information.

Use:

```text
Project:
[project name]

Category:
[professional/academic/personal/etc.]

Overview:
[...]

Problem:
[...]

Context:
[...]

Goals:
[...]

My contribution:
[...]

Technology:
[...]

Architecture:
[...]

Challenges:
[...]

Technical decisions:
[...]

Outcome:
[...]

Lessons:
[...]

Links:
[...]
```

Then instruct:

```text
Create the project case study from the information provided.

Do not invent missing details.

If information is missing, leave that section out or mark it as TODO.

Follow the existing project content model and design system.
```

---

# 20. Phase 9 – Academic

Prompt:

```text
Implement the Academic section/page.

Support:
- education
- academic projects
- relevant areas
- academic interests

The architecture should be expandable later for:
- research
- publications
- thesis
- conference papers

Do not invent academic information.

Keep content separate from UI.

Run lint and build.
```

---

# 21. Phase 10 – Expertise

Prompt:

```text
Implement the Expertise section.

Organize capabilities into meaningful categories.

Do not use percentage skill bars.

Do not claim expertise that is not supported by the provided content.

Make the component reusable and easy to update.

Follow the existing design system.

Run lint and build.
```

---

# 22. Phase 11 – Research & Interests

Prompt:

```text
Implement the Research & Interests section.

Separate:
1. current work
2. current exploration
3. future interests

Use the content provided in the project requirements.

Do not invent research experience.

The section should be easy to update without changing the UI implementation.
```

---

# 23. Phase 12 – Beyond Code

Prompt:

```text
Implement the Beyond Code section.

The goal is to show genuine interests outside professional software development.

Keep the visual design consistent with the website while allowing this section to feel more personal.

Do not add generic hobbies or interests.

Use only the information provided.
```

---

# 24. Phase 13 – Writing

Prompt:

```text
Implement the MDX-based writing system.

Support:
- title
- date
- category
- tags
- reading time
- content

Create:
- writing index
- writing detail page
- reusable article layout

Keep the system simple.

Do not implement search, RSS, newsletter, or other advanced features yet.
```

---

# 25. Phase 14 – Contact

Prompt:

```text
Implement the Contact section/page.

Support:
- email
- GitHub
- LinkedIn
- CV
- other relevant professional links

Do not create a backend contact system.

Use accessible links and clear visual hierarchy.
```

---

# 26. Phase 15 – SEO

Prompt:

```text
Perform a complete SEO implementation according to PROJECT_PLAN.md.

Review all important routes.

Implement:
- metadata
- OpenGraph
- canonical URLs
- sitemap
- robots.txt
- appropriate structured data

Do not add inaccurate structured data.

Use the actual website identity and content.

Run build after implementation.
```

---

# 27. Phase 16 – Accessibility

Prompt:

```text
Perform a complete accessibility review.

Check:
- semantic HTML
- heading hierarchy
- keyboard navigation
- focus states
- links
- buttons
- images
- contrast
- mobile navigation
- reduced motion
- ARIA usage

Fix issues you find.

Do not introduce unnecessary ARIA.

Run lint and build after the fixes.
```

---

# 28. Phase 17 – Performance

Prompt:

```text
Perform a performance review of the entire website.

Inspect:
- client components
- JavaScript usage
- images
- fonts
- dependencies
- animations
- unnecessary rendering
- bundle size

Prefer Server Components where possible.

Do not make changes that reduce usability simply to optimize metrics.

Implement only meaningful improvements.

Run lint and build.
```

---

# 29. Phase 18 – Responsive QA

Prompt:

```text
Perform a responsive UI review.

Test the website conceptually and through the implementation at:

375px
390px
768px
1024px
1280px
1440px
1920px

Look for:
- overflow
- broken layouts
- typography issues
- navigation issues
- spacing problems
- image problems
- project card issues
- footer issues

Fix only the issues found.

Do not redesign the website unnecessarily.
```

---

# 30. Phase 19 – Final Code Review

Prompt:

```text
Perform a final engineering review.

Check:

- architecture
- component reuse
- TypeScript
- unused code
- unused dependencies
- duplicated logic
- client/server boundaries
- accessibility
- performance
- content architecture
- maintainability

Do not perform a visual redesign.

Report:
1. problems found
2. problems fixed
3. remaining recommendations

Run lint and build.
```

---

# 31. Phase 20 – Deployment Preparation

Prompt:

```text
Prepare the website for production deployment on Vercel.

Check:

- production build
- environment variables
- metadata
- sitemap
- robots
- asset paths
- image handling
- external links
- CV download
- production configuration

Do not deploy yet.

First report anything that needs to be configured manually.
```

---

# 32. How to Give Claude Code Instructions

Use this general structure:

```text
Context
↓
Goal
↓
Requirements
↓
Constraints
↓
Expected result
↓
Verification
```

Example:

```text
Context:
We are building the personal website described in PROJECT_PLAN.md.

Goal:
Implement the Experience section.

Requirements:
- reusable experience component
- content separated from UI
- responsive
- accessible

Constraints:
- do not invent experience
- do not add unnecessary dependencies
- follow DESIGN.md

Expected result:
A reusable Experience section/page that can support future jobs.

Verification:
Run lint and build and report the result.
```

---

# 33. How to Correct Claude

Do not immediately rewrite the whole prompt.

Give focused feedback.

Example:

```text
The implementation is technically fine, but the visual design feels too much like a generic SaaS dashboard.

Keep the existing structure but:
- reduce card usage
- increase whitespace
- strengthen typography
- reduce borders
- remove unnecessary gradients
- make the section feel more editorial and personal

Do not change unrelated sections.
```

This gives Claude a much clearer correction.

---

# 34. How to Prevent Claude from Overengineering

Use instructions such as:

```text
Prefer the simplest implementation that satisfies the requirement.

Do not introduce a library unless there is a clear reason.

Do not create an abstraction until it is reused or clearly justified.

Do not add backend infrastructure.

Do not add features that are not in the current task.

Do not refactor unrelated code.
```

---

# 35. How to Prevent AI-Generated Design

Tell Claude:

```text
Avoid generic AI-generated portfolio patterns.

Do not automatically use:
- gradients
- glowing cards
- excessive rounded containers
- glassmorphism
- particle effects
- giant animated headings
- skill percentage bars
- fake terminal interfaces

Prioritize:
- typography
- whitespace
- hierarchy
- composition
- restraint
- personal identity
```

---

# 36. How to Handle Missing Information

Claude must not guess.

If information is missing:

```text
Do not invent the information.

Either:
1. leave the content as TODO
2. create a clearly marked placeholder
3. ask for the missing information
```

---

# 37. Verification Rule

After every meaningful implementation:

```bash
npm run lint
npm run build
```

If available, also run:

```bash
npm run typecheck
```

The exact scripts should follow the project's `package.json`.

Claude should report:

```text
Files changed
What was implemented
Tests/checks run
Errors
Warnings
Remaining TODOs
```

---

# 38. Git Strategy

After each stable phase:

```bash
git status
git diff
```

Review the changes.

Then commit.

Example:

```text
feat: initialize personal website
feat: add design system
feat: add global layout
feat: build homepage
feat: add project system
feat: add academic section
feat: add writing system
```

Avoid huge commits containing unrelated changes.

---

# 39. Important Rule About Visual Review

Claude Code can implement the UI, but visual judgment should remain iterative.

After a major UI phase:

1. Start the development server.
2. Open the website.
3. Inspect desktop.
4. Inspect mobile.
5. Identify issues.
6. Give Claude specific feedback.
7. Repeat.

Do not assume the first generated UI is final.

---

# 40. Recommended Development Cycle

For every major section:

```text
Claude implements
        ↓
You inspect
        ↓
You give feedback
        ↓
Claude refines
        ↓
You inspect again
        ↓
Move to next section
```

This is better than asking Claude to make the entire website perfect in one attempt.

---

# 41. Final Claude Code Checklist

Before considering the website finished, ask Claude:

```text
Perform a complete final review of this personal website against PROJECT_PLAN.md.

Check:

1. Product requirements
2. Content structure
3. UI consistency
4. Responsive behavior
5. Accessibility
6. SEO
7. Performance
8. TypeScript
9. Code quality
10. Dependencies
11. Broken links
12. Missing pages
13. Missing metadata
14. Mobile navigation
15. Production build

Do not redesign the website.

Report all issues first, then fix only issues that are clearly necessary.

After fixing them, run the project's lint, typecheck, and build commands and report the results.
```

---

# 42. Golden Rule for Claude Code

The most important instruction is:

> **Claude Code should help implement my vision, not decide what my identity or website should be.**

`PROJECT_PLAN.md` defines the vision.

`DESIGN.md` defines the visual language.

`CLAUDE.md` defines persistent coding rules.

`CLAUDE_CODE_GUIDE.md` defines the development workflow.

Claude Code should use all four appropriately.