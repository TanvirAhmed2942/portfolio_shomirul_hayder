import React from "react";
import {
  SiClaude,
  SiPerplexity,
  SiCanvas,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiMeta,
  SiGoogleads,
  SiSemrush,
} from "react-icons/si";
import {
  LuBrainCircuit,
  LuPenTool,
  LuChartColumn,
  LuTarget,
  LuNotebookText,
  LuTrendingUp,
  LuLibrary,
  LuBot,
} from "react-icons/lu";

export default function Techstack() {
  const stack = [
    {
      id: 1,
      title: "AI & Productivity",
      titleIcon: <LuBrainCircuit />,
      tools: [
        { name: "ChatGPT", icon: <SiMeta />, color: "#10a37f" },
        { name: "Claude", icon: <SiClaude />, color: "#d97757" },
        { name: "Perplexity", icon: <SiPerplexity />, color: "#20808d" },
        { name: "NotebookLM", icon: <LuNotebookText />, color: "#4285f4" },
      ],
    },
    {
      id: 2,
      title: "Creative & Content",
      titleIcon: <LuPenTool />,
      tools: [
        {
          name: "Adobe Photoshop",
          icon: <SiMeta />,
          color: "#31a8ff",
        },
        {
          name: "Adobe Illustrator",
          icon: <SiMeta />,
          color: "#ff9a00",
        },
        { name: "Canva", icon: <SiCanvas />, color: "#00c4cc" },
        { name: "CapCut", icon: <SiMeta />, color: "#ffffff" },
      ],
    },
    {
      id: 3,
      title: "Research & Analytics",
      titleIcon: <LuChartColumn />,
      tools: [
        {
          name: "Google Analytics",
          icon: <SiGoogleanalytics />,
          color: "#f9ab00",
        },
        {
          name: "Google Search Console",
          icon: <SiGooglesearchconsole />,
          color: "#458cf5",
        },
        { name: "Google Trends", icon: <LuTrendingUp />, color: "#34a853" },
        { name: "Meta Ad Library", icon: <LuLibrary />, color: "#0866ff" },
        { name: "Manus AI", icon: <LuBot />, color: "#e5e7eb" },
        { name: "Semrush", icon: <SiSemrush />, color: "#d97757" },
      ],
    },
    {
      id: 4,
      title: "Performance Marketing",
      titleIcon: <LuTarget />,
      tools: [
        { name: "Meta Ads", icon: <SiMeta />, color: "#0866ff" },
        { name: "Google Ads", icon: <SiGoogleads />, color: "#4285f4" },
      ],
    },
  ];

  return (
    <div className="mt-6 md:mt-8 flex flex-col items-start gap-4 w-full">
      <p className="text-5xl font-semibold text-green-300">Tech Stack</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-full">
        {stack.map((group) => (
          <div
            key={group.id}
            className="rounded-3xl border-2 border-black bg-transparent p-5 shadow-md"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-gray-400">
              <span className="text-3xl text-green-300">{group.titleIcon}</span>
              <h3 className="text-xl font-semibold text-gray-800">
                {group.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {group.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center gap-2 w-24 py-3 px-2 rounded-lg shadow-md border-2 border-black text-gray-800 hover:bg-amber-100 transition-colors duration-300"
                >
                  <span className="text-4xl" style={{ color: tool.color }}>
                    {tool.icon}
                  </span>
                  <span className="text-xs text-center font-medium">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
