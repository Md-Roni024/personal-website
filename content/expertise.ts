// Source: previous portfolio ("Here are some of my skills on which I have been working").
import type { ExpertiseCategory } from "@/lib/content";

export const expertise: readonly ExpertiseCategory[] = [
  {
    name: "Frontend",
    items: [
      "Angular",
      "React.js",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Redux",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "TypeScript", "Flask", "Scrapy"],
  },
  { name: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"] },
  {
    name: "Machine Learning",
    items: [
      "Python",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Jupyter",
      "Google Colab",
    ],
  },
  { name: "Tools", items: ["Git", "GitHub", "Docker", "Postman"] },
];
