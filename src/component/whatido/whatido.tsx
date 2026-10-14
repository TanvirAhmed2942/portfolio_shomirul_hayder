import React from "react";
import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

const svgProps = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-14 h-14 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem]",
};

const services = [
  {
    number: "01",
    title: "Meta Ads",
    description:
      "Create and optimize Meta campaigns that drive leads, reach, and business growth.",
    icon: (
      <svg {...svgProps}>
        <path d="M32 32c-5-8-9-14-15-14S8 24 8 32s3 14 9 14 10-6 15-14Zm0 0c5 8 9 14 15 14s9-6 9-14-3-14-9-14-10 6-15 14Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Lead Generation",
    description:
      "Build targeted campaigns that convert prospects into quality enquiries.",
    icon: (
      <svg {...svgProps}>
        <circle cx="32" cy="12" r="6" />
        <circle cx="14" cy="18" r="5" />
        <circle cx="50" cy="18" r="5" />
        <path d="M20 34v10a12 12 0 0 0 24 0V34" strokeWidth={5} />
        <path d="M18 34h6M40 34h6" strokeWidth={5} />
        <path d="M24 27l-3 5h5l-3 5M40 27l3 5h-5l3 5" strokeWidth={2} />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Social Media Marketing",
    description: "Grow audience engagement and visibility.",
    icon: (
      <svg {...svgProps}>
        <circle cx="32" cy="34" r="16" />
        <ellipse cx="32" cy="34" rx="7" ry="16" />
        <path d="M16 34h32M32 18v32" />
        <rect x="6" y="14" width="8" height="8" rx="1" strokeWidth={2} />
        <circle cx="32" cy="8" r="3" strokeWidth={2} />
        <path d="M52 14h6v6h-6zM54 50l4 4M8 50h6v6H8z" strokeWidth={2} />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Performance Marketing",
    description: "Optimize campaigns using data.",
    icon: (
      <svg {...svgProps}>
        <path d="M6 54h40" />
        <rect x="10" y="40" width="6" height="14" />
        <rect x="22" y="32" width="6" height="22" />
        <rect x="34" y="22" width="6" height="32" />
        <path d="M8 30l16-10 8 6 16-14M40 12h8v8" strokeWidth={2.5} />
        <path d="M46 44l12-6v18l-12-6zM46 44v12" strokeWidth={2.5} />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Content Strategy",
    description: "Create content aligned with business goals.",
    icon: (
      <svg {...svgProps}>
        <path d="M14 6h22l10 10v18M14 6v46h20" />
        <path d="M22 24h14M22 32h14M22 40h8" strokeWidth={2.5} />
        <circle cx="46" cy="48" r="7" />
        <path d="M46 38v3M46 55v3M36 48h3M53 48h3" strokeWidth={2.5} />
        <path d="M44 14l12 12" strokeWidth={4} />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Marketing Analytics",
    description: "Turn data into insights.",
    icon: (
      <svg {...svgProps}>
        <rect x="18" y="6" width="40" height="28" rx="2" />
        <path d="M26 28V20M34 28V16M42 28V22M50 28V12" strokeWidth={2.5} />
        <path d="M38 34v6M30 42h16" />
        <circle cx="16" cy="44" r="9" />
        <path d="M10 56l-4 4" strokeWidth={4} />
        <path d="M16 44V38a6 6 0 0 1 6 6Z" strokeWidth={2} />
      </svg>
    ),
  },
];

export default function Whatido() {
  return (
    <section
      className={`$ w-full bg-zinc-50 px-5 sm:px-8 lg:px-[3vw] py-10 md:py-14`}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <h2 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase leading-none tracking-tight text-black">
          What i do
        </h2>

        <div className="max-w-md lg:mt-2">
          <p className="text-base sm:text-lg leading-snug text-zinc-700">
            I help businesses grow through strategic digital marketing,
            performance advertising, and data-driven campaigns that generate
            measurable results.
          </p>
          <div className="mt-4 h-[3px] w-28 bg-[#f0a040]"></div>
        </div>
      </div>

      <div className="mt-8 md:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service) => (
          <div
            key={service.number}
            className="relative flex flex-col rounded-2xl border-2 border-black bg-white p-6 sm:p-7 min-h-[16rem]"
          >
            <div className="absolute right-5 top-5 text-black">
              {service.icon}
            </div>

            <span className="text-6xl sm:text-7xl font-extrabold leading-none text-black">
              {service.number}
            </span>

            <h3 className="mt-3 max-w-[14rem] sm:max-w-[16rem] text-2xl sm:text-3xl font-extrabold uppercase leading-[1.05] text-black">
              {service.title}
            </h3>
            <div className="mt-3 h-[3px] w-14 bg-[#f0a040]"></div>

            <p className="mt-3 max-w-[20rem] text-sm sm:text-base leading-snug text-zinc-800">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
