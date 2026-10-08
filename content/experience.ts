// Most recent first. Sources: previous portfolio and CV (Drive). Entries marked DRAFT are not verified.
import type { ExperienceEntry } from "@/lib/content";

export const experience: readonly ExperienceEntry[] = [
  // DRAFT: current role per owner ("Software Engineer at BJIT Ltd."). Start date unknown (20XX); highlights drafted.
  {
    organization: "BJIT Limited",
    role: "Software Engineer",
    start: "20XX",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Build and maintain web applications with Angular and TypeScript, integrating REST APIs.",
      "Work in an agile Scrum team across the full software development life cycle, from requirements to release.",
      "Take part in code reviews and use Git/Gerrit for version control.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "REST API",
      "Git",
      "Gerrit",
      "Scrum",
    ],
  },
  // Source: CV. DRAFT: end date (20XX) — the CV says "Present", but the owner now works at BJIT.
  {
    organization: "ImpleVista BD Ltd.",
    role: "Junior Software Engineer",
    start: "Mar 2025",
    end: "20XX",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Developed and maintained software solutions using Angular, Node.js, REST API, Firebase and Git.",
      "Built responsive and high-performance cross-platform applications for iOS and Web using Angular, Tailwind CSS and the Ionic framework.",
      "Participated in code reviews, debugging and software optimisation, resulting in a 20% increase in system search efficiency.",
      "Integrated a third-party API (Google Maps) and handled real-time data processing for client-driven features.",
    ],
    technologies: [
      "Angular",
      "Ionic",
      "Node.js",
      "REST API",
      "Firebase",
      "Tailwind CSS",
      "Google Maps API",
      "Git",
    ],
  },
  // Source: CV.
  {
    organization: "BJIT Limited",
    role: "Intern Software Engineer",
    start: "Sep 2024",
    end: "Dec 2024",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Learned TypeScript, Angular, REST API, Git/Gerrit and the Software Development Life Cycle (SDLC).",
      "Learned and applied Scrum and agile methodology.",
    ],
    technologies: ["TypeScript", "Angular", "REST API", "Git", "Gerrit"],
  },
  // Source: previous portfolio. TODO: add the organisation and your role.
  {
    organization: "Industrial Attachment",
    start: "Apr 2023",
    end: "May 2023",
    highlights: [
      "Gained industrial knowledge of requirements gathering and analysis, workflow design, version control and product deployment procedures.",
      "Built a Flask backend with JWT authentication.",
    ],
    technologies: ["Flask", "JWT"],
  },
];
