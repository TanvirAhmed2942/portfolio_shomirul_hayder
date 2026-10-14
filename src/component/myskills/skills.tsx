import React from "react";

export default function Skills() {
  const skills = [
    "Content Writing",
    "Email Marketing",
    "Brand Management",
    "Social Media Management",
    "SEO",
    "Illustrator",
    "Canva Design",
  ];
  return (
    <div className="mt-6 md:mt-8 flex flex-col items-start gap-4">
      <p className="text-5xl font-semibold text-green-300">Skills</p>
      <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-transparent text-gray-800 py-2 px-4 rounded-lg shadow-md border-2 border-black hover:bg-amber-100 transition-colors duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
