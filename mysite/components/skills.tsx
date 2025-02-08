"use client";

import { motion } from "motion/react";

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

  // TODO: Add a random color to each skill
/*   const getRandomColor = () => {
    const colors = [
      "red-500",
      "yellow-500",
      "green-500",
      "blue-500",
      "indigo-500",
      "purple-500",
      "pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }; */

  return (
    <section className="py-8 px-4 max-w-5xl mx-auto bg-gray-100 font-mono flex items-center justify-center">
      <div
        className="flex flex-wrap items-center justify-center
      gap-4 "
      >
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
  );
}
