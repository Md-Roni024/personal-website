import type { Profile } from "@/lib/content";

export const profile: Profile = {
  // DRAFT: "Software Engineer" added per owner; the other two are from the previous portfolio.
  roles: ["Software Engineer", "Web Developer", "Programmer"],
  // DRAFT: positioning statement based on the current role and listed skills. Verify wording.
  headline:
    "Software Engineer at BJIT Limited, building web and cross-platform applications with Angular, TypeScript and Node.js — and exploring AI agents and developer tools.",
  photo: "/images/profile.jpg",
  // DRAFT: drafted from the CV and the current role. Verify wording.
  introduction: [
    "I am a software engineer who enjoys turning real problems into reliable, well-structured software. Day to day I build web applications with Angular and TypeScript, integrate REST APIs, and work in agile teams from requirements to release.",
    "Before that I built cross-platform iOS and web apps with Angular and Ionic at ImpleVista, and worked on web, Android and machine-learning projects. I am currently exploring AI agents, MCP and software architecture.",
  ],
  // DRAFT: themes from PROJECT_PLAN.md and the current role. Replace with what you are actually focused on.
  currentFocus: [
    {
      title: "Production web apps",
      description:
        "Building and maintaining Angular and TypeScript applications at BJIT, with clean APIs and maintainable code.",
    },
    {
      title: "AI agents & MCP",
      description:
        "Learning how AI agents, agentic workflows and the Model Context Protocol can power better developer tools.",
    },
    {
      title: "Software architecture",
      description:
        "Studying system design and architecture patterns to build software that scales and stays easy to change.",
    },
  ],
};
