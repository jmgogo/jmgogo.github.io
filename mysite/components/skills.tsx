"use client";

import { motion } from "motion/react";
import GridPaper from "./grid-paper";

interface Skill {
  name: string;
}

export default function SkillsSection() {
  const skills: Skill[] = [
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "C++" },
    { name: "NextJS" },
    { name: "React" },
    { name: "Redux" },
    { name: "Tailwind" },
    { name: "Kubernetes" },
    { name: "Docker" },
    { name: "Git" },
    { name: "CI/CD" },
    { name: "Linux" },
    { name: "REST" },
    { name: "API" },
    { name: "SQL" },
    { name: "PostgreSQL" },
    { name: "IoT" },
    { name: "IT Networks" },
    { name: "Agile" },
    { name: "TDD" },
    { name: "Program Management" },
    { name: "Requirements" },
    { name: "Communication" },
    { name: "Systems" },
    { name: "Machine Learning" },
    { name: "AI" },
    { name: "Data Science" },
    { name: "Web Development" },
    { name: "UML" },
    { name: "SysML" },
    { name: "MBSE" },
    { name: "Design" },
    { name: "Cameo" },
  ];

  return (
    <GridPaper>
      <section className="py-16 px-4 max-w-6xl mx-auto font-mono pb-32">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative"
            >
              <div
                className={`
                absolute inset-0 bg-red-500 
              `}
              />
              <div
                className={`
                relative inline-flex px-2 py-1  text-sm font-medium
                bg-gray-300 text-gray-800
                transform transition-all duration-200
                group-hover:-translate-x-1 group-hover:-translate-y-1
                cursor-default shadow-sm group
              `}
              >
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </GridPaper>
  );
}
