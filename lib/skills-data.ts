import { Code, Database, Wrench, Smartphone, Users } from "lucide-react";
import type { ComponentType } from "react";

export interface Skill {
  name: string;
  description: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: ComponentType<{ size?: number | string; className?: string }>;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: [
      {
        name: "React & Next.js",
        description:
          "5+ projects shipped, including e-commerce sites and complex dashboards. Expertise in performance optimization and SSR/ISR.",
        level: 5,
      },
      {
        name: "TypeScript",
        description:
          "Used in all recent projects to ensure type safety and improve code maintainability.",
        level: 5,
      },
      {
        name: "Tailwind CSS",
        description:
          "My go-to for rapid, responsive UI development. Used in 10+ projects.",
        level: 5,
      },
      {
        name: "Vue.js & Nuxt.js",
        description:
          "Built two large-scale applications, focusing on state management and component architecture.",
        level: 4,
      },
    ],
  },
  {
    category: "Backend Development",
    icon: Database,
    skills: [
      {
        name: "Node.js & Express",
        description:
          "Developed RESTful APIs for multiple applications, handling authentication, data processing, and third-party integrations.",
        level: 4,
      },
      {
        name: "GraphQL",
        description:
          "Implemented GraphQL endpoints for a data-intensive application, improving query efficiency.",
        level: 3,
      },
      {
        name: "PostgreSQL",
        description:
          "Designed and managed relational databases, writing complex queries and ensuring data integrity.",
        level: 3,
      },
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [
      {
        name: "React Native",
        description:
          "Developed a cross-platform mobile app from scratch, available on both iOS and Android.",
        level: 4,
      },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    skills: [
      {
        name: "Git & GitHub",
        description:
          "Proficient in version control, branching strategies, and collaborative workflows using GitHub Actions.",
        level: 5,
      },
      {
        name: "Docker",
        description:
          "Containerized applications for consistent development and deployment environments.",
        level: 3,
      },
      {
        name: "Figma",
        description:
          "Translated complex Figma designs into pixel-perfect, functional user interfaces.",
        level: 4,
      },
    ],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: [
      {
        name: "Communication",
        description:
          "Experienced in conveying technical concepts to non-technical stakeholders and collaborating effectively in remote teams.",
        level: 4,
      },
      {
        name: "Problem Solving",
        description:
          "Adept at breaking down complex problems and architecting elegant, scalable solutions.",
        level: 4,
      },
    ],
  },
];
