// Sources: previous portfolio and CV.
import type { ExpertiseCategory } from "@/lib/content";

export const expertise: readonly ExpertiseCategory[] = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "C++", "C#", "Python", "Java"],
  },
  {
    name: "Frontend",
    items: [
      "Angular",
      "React.js",
      "Ionic",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "HTML",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "Entity Framework",
      "Flask",
      "Scrapy",
      "REST API",
    ],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MSSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    name: "Machine Learning & AI",
    items: [
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Jupyter",
      "Google Colab",
      "Ollama (Llama 2)",
    ],
  },
  {
    name: "Tools & Practices",
    items: ["Git", "GitHub", "Docker", "Linux", "Postman", "Agile / Scrum"],
  },
];
