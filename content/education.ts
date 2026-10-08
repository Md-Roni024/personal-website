// Sources: previous portfolio and CV.
import type { EducationEntry } from "@/lib/content";

export const education: readonly EducationEntry[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Gopalganj Science and Technology University (GSTU)",
    start: "Jan 2019",
    end: "Sep 2024",
    summary:
      "Formerly Bangabandhu Sheikh Mujibur Rahman Science & Technology University (BSMRSTU). CGPA 3.28. Languages: C/C++, Java, Python, SQL.",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Compiler Design",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Hajigonj Model Govt College",
    start: "Jun 2015",
    end: "Jan 2018",
    coursework: [
      "Physics",
      "Chemistry",
      "Biology",
      "Higher Mathematics",
      "Information & Communication Technology (ICT)",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maisaid P.M.A.G High School",
    start: "Jan 2010",
    end: "Mar 2015",
  },
];

// DRAFT: based on the ML projects and PROJECT_PLAN.md. Verify, or set to [] to hide the block.
export const academicInterests: readonly string[] = [
  "Machine learning & computer vision",
  "AI & agentic systems",
  "Software engineering & architecture",
  "Technology for agriculture",
];
