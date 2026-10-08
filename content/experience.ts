// Source: previous portfolio. Most recent first.
// TODO: job titles are not on the previous site — add `role` to each entry.
import type { ExperienceEntry } from "@/lib/content";

export const experience: readonly ExperienceEntry[] = [
  {
    organization: "ImpleVista BD Ltd.",
    start: "Mar 2025",
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
  {
    organization: "BJIT Limited",
    start: "Sep 2024",
    end: "Dec 2024",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Learned TypeScript, Angular, REST API, Git/Gerrit and the Software Development Life Cycle (SDLC).",
      "Learned and applied Scrum and agile methodology.",
    ],
    technologies: ["TypeScript", "Angular", "REST API", "Git", "Gerrit"],
  },
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
