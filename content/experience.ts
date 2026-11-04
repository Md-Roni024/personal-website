// Most recent first. Sources: latest CV (Nov 2026) and previous portfolio.
import type { ExperienceEntry } from "@/lib/content";

export const experience: readonly ExperienceEntry[] = [
  // Source: latest CV.
  {
    organization: "BJIT Ltd.",
    role: "Software Engineer",
    start: "Aug 2025",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Developed and maintained web applications using .NET, C# and Blazor.",
      "Worked on legacy application to .NET migration, helping modernise and streamline enterprise systems.",
      "Utilised existing PostgreSQL database structures to perform data integration, testing, validation and application-side data handling.",
      "Collaborated through Gerrit for code reviews, maintaining code quality, consistency and shared team standards.",
      "Worked closely with a large team, including overseas collaborators, to support development processes, share findings and contribute to continuous improvement.",
      "Explored and experimented with LLMs, AI Agents & Skills, and MCP to understand their application in modern software development.",
      "Designed and experimented with AI-based workflow automation to improve development workflows and automate repetitive engineering tasks.",
    ],
    technologies: [
      ".NET",
      "C#",
      "Blazor",
      "PostgreSQL",
      "Gerrit",
      "LLMs",
      "AI Agents",
      "MCP",
    ],
  },
  // Source: latest CV.
  {
    organization: "ImpleVista BD Ltd.",
    role: "Intern Software Engineer",
    start: "Apr 2025",
    end: "Aug 2025",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Developed and maintained software solutions using Angular, Node.js, REST API and Git.",
      "Participated in code reviews, debugging and software optimisation efforts.",
      "Integrated third-party APIs and handled real-time data processing for client-driven features.",
    ],
    technologies: ["Angular", "Node.js", "REST API", "Git"],
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
