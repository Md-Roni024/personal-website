// DUMMY: placeholder experience entries. Replace with real roles — most recent first.
import type { ExperienceEntry } from "@/lib/content";

export const experience: readonly ExperienceEntry[] = [
  {
    organization: "Company Name",
    role: "Job Title",
    start: "20XX",
    location: "City, Country",
    summary:
      "One or two sentences summarising the role and the team or product you work on.",
    highlights: [
      "A specific contribution or responsibility.",
      "Another specific contribution or responsibility.",
    ],
    technologies: ["Technology A", "Technology B", "Technology C"],
  },
  {
    organization: "Previous Company Name",
    role: "Previous Job Title",
    start: "20XX",
    end: "20XX",
    location: "City, Country",
    summary: "One or two sentences summarising this earlier role.",
    highlights: ["A specific contribution or responsibility."],
    technologies: ["Technology A", "Technology D"],
  },
];
