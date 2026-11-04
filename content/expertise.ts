// Source: latest CV (Nov 2026), "Skills" section.
import type { ExpertiseCategory } from "@/lib/content";

export const expertise: readonly ExpertiseCategory[] = [
  {
    name: "Languages",
    items: ["C#", "JavaScript", "Python", "C/C++"],
  },
  {
    name: "Web Technology",
    items: ["Angular", "ASP.NET", "Blazor", "React.js", "Node.js"],
  },
  {
    name: "UI / Styling",
    items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    name: "ORM / Database",
    items: ["MSSQL", "PostgreSQL", "Entity Framework"],
  },
  {
    name: "Project Management",
    items: ["Git", "GitHub", "Gerrit", "Jira"],
  },
  {
    name: "AI & Automation",
    items: [
      "LLMs",
      "RAG",
      "Agentic AI",
      "AI Agent & Skills",
      "MCP",
      "Workflow Automation",
      "LangChain",
      "LangGraph",
    ],
  },
  {
    name: "Cloud & Deployment",
    items: ["Azure", "Docker", "Linux"],
  },
];
