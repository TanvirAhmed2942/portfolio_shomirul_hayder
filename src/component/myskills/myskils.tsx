import React from "react";
import Skills from "./skills";
import Techstack from "./techstack";

export default function Myskills() {
  return (
    <div className="relative w-full overflow-hidden bg-zinc-50 font-sans px-6 sm:px-10 md:px-[3.5vw] py-10 md:py-16">
      <h1 className="pb-2 text-5xl sm:text-7xl md:text-9xl text-black font-extrabold uppercase tracking-tight">
        My Skills
      </h1>
      <Skills />
      <Techstack />
    </div>
  );
}
