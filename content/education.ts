// Source: previous portfolio.
import type { EducationEntry } from "@/lib/content";

export const education: readonly EducationEntry[] = [
  {
    degree: "Bachelor of Engineering (Hons.), Computer Science",
    institution:
      "Bangabandhu Sheikh Mujibur Rahman Science & Technology University (BSMRSTU)",
    start: "Jan 2019",
    end: "Sep 2024",
    summary: "Languages: C/C++, Java, Python, SQL.",
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

// DUMMY: placeholder academic interests. Replace with your own, or set to [] to hide the block.
export const academicInterests: readonly string[] = [
  "Academic interest one",
  "Academic interest two",
  "Academic interest three",
];
