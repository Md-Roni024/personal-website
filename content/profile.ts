import type { Profile } from "@/lib/content";

export const profile: Profile = {
  // DRAFT: "Software Engineer" added per owner; the other two are from the previous portfolio.
  roles: ["Software Engineer", "Web Developer", "Programmer"],
  // Source: latest CV (professional summary), shortened.
  headline:
    "Software Engineer at BJIT Ltd. with 1.5+ years of experience building and maintaining web applications with .NET, C# and PostgreSQL.",
  photo: "/images/profile.jpg",
  // Source: latest CV (professional summary and work experience). DRAFT: wording — verify.
  introduction: [
    "I am a software engineer with 1.5+ years of experience developing and maintaining web applications using .NET, C# and PostgreSQL. I work mostly on backend development, system optimisation and legacy system migration, and I am passionate about building scalable solutions and using modern tools to improve development efficiency.",
    "Before BJIT I was an intern software engineer at ImpleVista, building with Angular, Node.js and REST APIs. Today I am also exploring LLMs, AI agents and MCP, and experimenting with AI-based workflow automation for engineering tasks.",
  ],
  // DRAFT: based on the current role in the latest CV. Replace with what you are actually focused on.
  currentFocus: [
    {
      title: ".NET web applications",
      description:
        "Developing and maintaining web applications with .NET, C# and Blazor at BJIT.",
    },
    {
      title: "Legacy system migration",
      description:
        "Helping migrate legacy applications to .NET to modernise and streamline enterprise systems.",
    },
    {
      title: "AI & workflow automation",
      description:
        "Experimenting with LLMs, AI agents, MCP and AI-based workflow automation for repetitive engineering tasks.",
    },
  ],
};
