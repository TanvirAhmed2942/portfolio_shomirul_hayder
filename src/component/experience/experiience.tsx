import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      serial: 1,
      title: "Product Marketing Executive",
      company: "CodeZen Technologies Limited",
      companyLogo: "/codezen.svg",
      duration: "Oct 2025 - Present",
      description:
        "My current role as a Product Marketing Executive, is to work on understanding product features, communicating their value to the target audience, placing the product in the market, and creating content that supports product positioning and promotion. I collaborate with different teams to align marketing activities with business goals and improve product visibility across digital channels.",
    },
    {
      serial: 2,
      title: "Junior Executive - Digital Marketing",
      company: "CodeZen Technologies Limited",
      companyLogo: "/codezen.svg",
      duration: "Jan 2025 - Oct 2026",
      description:
        "In my role as a Digital Marketer, my work was a combination of SEO optimization, work on increasing brand visibility, email marketing and social media marketing. I worked with several teams to increase brand visibility for 5 brands, and reviewed 100+ blogs and product descriptions.",
    },
    {
      serial: 3,
      title: "Email Marketing Specialist",
      company: "CodeZen Technologies Limited",
      companyLogo: "/codezen.svg",
      duration: "Jan 2025 - Oct 2026",
      description:
        "I have been designing emails (copy, subject line, preview line, A/B testing, templates) that represent the brand. My email marketing work has contributed to over £50,000+ in sales in 1.5+ years of time. I have created several automation workflows depending on user behavior and managed audience segments.",
    },
    {
      serial: 4,
      title: "Blogger",
      company: "CodeZen Technologies Limited",
      companyLogo: "/codezen.svg",
      duration: "Dec 2024 - Mar 2025",
      description:
        "As a Blogger on the Digital Marketing Team, I wrote SEO-optimized blogs through competitor analysis and independent research. I also created guest posts, with several blogs ranking #1 on Google. After updating older content, some of my blogs were also featured in Google's AI Overviews.",
    },
    {
      serial: 5,
      title: "Content Writer",
      company: "CodeZen Technologies Limited",
      companyLogo: "/codezen.svg",
      duration: "Oct 2024 - Dec 2024",
      description:
        "My role as a content writer was to research competitors, develop course content, and created unique courses through independent research. I also collaborated with the creative design team to align content with visual designs.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 font-sans ">
      <Image
        src="/wall.jpg"
        alt="Next.js logo"
        width={2500}
        height={2500}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 px-6 sm:px-10 md:px-[3.5vw] py-10 md:py-16">
        <h1 className="pb-2 text-5xl sm:text-7xl md:text-9xl text-black font-extrabold tracking-tight">
          My Experience
        </h1>

        <div className="mt-8 md:mt-12 flex flex-col items-start gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.serial}
              className="w-full max-w-4xl p-6 sm:p-8 md:p-10 bg-zinc-50 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={experience.companyLogo}
                  alt={`${experience.company} logo`}
                  width={64}
                  height={64}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-contain shrink-0 bg-black p-1"
                />
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                    {experience.title}
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600">
                    {experience.company}
                  </p>
                </div>
                <span className="ml-auto text-3xl sm:text-5xl font-black text-zinc-200">
                  {String(experience.serial).padStart(2, "0")}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-zinc-500 mb-2">
                {experience.duration}
              </p>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

        {/* <Image
          src="/path3.svg"
          alt="Next.js logo"
          width={2500}
          height={2500}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        /> */}
      </div>
    </section>
  );
}

// "use client";

// import { useRef, useState, useLayoutEffect } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// // Size of your path3.svg (viewBox)
// const VB_W = 1804.4153;
// const VB_H = 1139.2561;

// // Your SVG layer has translate(-166.2869,-15.664062), so the centerline
// // (written in the original coordinates) must be shifted by the same amount.
// const OFFSET_X = 166.2869;
// const OFFSET_Y = 15.664062;

// // Rough centerline of YOUR road, top -> bottom.
// // Replace with a line you trace in Inkscape for a perfect fit.
// const CENTER_D =
//   "M 1715 35 L 1100 170 C 940 205, 960 250, 1100 285 C 960 320, 840 360, 880 420 C 930 490, 1180 560, 1260 650 C 1330 740, 1250 830, 1150 850 C 1000 930, 700 1040, 400 1125";

// // Chronological: oldest first (top of the road)
// const experiences = [
//   {
//     startYear: 2016,
//     title: "Brand Manager",
//     company: "CodeZen",
//     companyLogo: "/codezen.svg",
//     duration: "Jan 2016 - Feb 2018",
//     description:
//       "Collaborated with cross-functional teams to define project requirements and deliver high-quality software solutions.",
//   },
//   {
//     startYear: 2018,
//     title: "Email Marketing Specialist",
//     company: "CodeZen",
//     companyLogo: "/codezen.svg",
//     duration: "Mar 2018 - Dec 2019",
//     description:
//       "Implemented responsive UI components and optimized performance for web applications.",
//   },
//   {
//     startYear: 2020,
//     title: "Content Writer",
//     company: "CodeZen",
//     companyLogo: "/codezen.svg",
//     duration: "Jan 2020 - Present",
//     description:
//       "Developed and maintained web applications using React and Node.js.",
//   },
// ];

// // Years painted on the road: first job start -> last job start
// const FIRST_YEAR = experiences[0].startYear;
// const LAST_YEAR = experiences[experiences.length - 1].startYear;
// const years = Array.from(
//   { length: LAST_YEAR - FIRST_YEAR + 1 },
//   (_, i) => FIRST_YEAR + i,
// );

// // Position of a year along the path (0..1)
// const T_START = 0.06;
// const T_END = 0.94;
// const tForYear = (y: number) =>
//   T_START + ((y - FIRST_YEAR) / (LAST_YEAR - FIRST_YEAR)) * (T_END - T_START);

// // Older years small -> recent years big
// const MIN_REM = 1.25;
// const MAX_REM = 5;
// const sizeForYear = (y: number) =>
//   MIN_REM + ((y - FIRST_YEAR) / (LAST_YEAR - FIRST_YEAR)) * (MAX_REM - MIN_REM);
// const opacityForYear = (y: number) =>
//   0.45 + ((y - FIRST_YEAR) / (LAST_YEAR - FIRST_YEAR)) * 0.55;

// type Exp = (typeof experiences)[number];
// type YearPoint = { year: number; t: number; left: number; top: number };

// function Card({ exp, index }: { exp: Exp; index: number }) {
//   return (
//     <>
//       <div className="flex items-center gap-5 mb-4">
//         <Image
//           src={exp.companyLogo}
//           alt={`${exp.company} logo`}
//           width={72}
//           height={72}
//           className="w-14 h-14 rounded-full object-contain shrink-0 bg-black p-1"
//         />
//         <div className="min-w-0">
//           <h2 className="text-2xl font-bold text-zinc-900">{exp.title}</h2>
//           <p className="text-base text-zinc-600">{exp.company}</p>
//         </div>
//         <span className="ml-auto text-5xl font-black text-zinc-200">
//           {String(index + 1).padStart(2, "0")}
//         </span>
//       </div>
//       <p className="text-sm font-medium text-zinc-500 mb-2">{exp.duration}</p>
//       <p className="text-base text-zinc-700 leading-relaxed">
//         {exp.description}
//       </p>
//     </>
//   );
// }

// export default function Experience() {
//   const stageRef = useRef<HTMLDivElement>(null);
//   const roadRef = useRef<SVGPathElement>(null);
//   const [yearPoints, setYearPoints] = useState<YearPoint[]>([]);
//   const ready = yearPoints.length > 0; // primitive, safe to use as a dependency

//   // Find the exact point on the curve for every year (as % of the stage)
//   useLayoutEffect(() => {
//     const path = roadRef.current;
//     if (!path) return;
//     const len = path.getTotalLength();
//     setYearPoints(
//       years.map((year) => {
//         const t = tForYear(year);
//         const p = path.getPointAtLength(len * t);
//         return {
//           year,
//           t,
//           left: ((p.x - OFFSET_X) / VB_W) * 100,
//           top: ((p.y - OFFSET_Y) / VB_H) * 100,
//         };
//       }),
//     );
//   }, []);

//   useGSAP(
//     () => {
//       const path = roadRef.current;
//       if (!path || !ready) return; // wait until labels and cards exist

//       const len = path.getTotalLength();
//       gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: stageRef.current,
//           start: "top 90%", // begins as soon as the stage peeks into view
//           end: "bottom 85%", // fully drawn when the stage bottom is near the screen bottom
//           scrub: 1, // higher = slower, smoother catch-up
//           // markers: true, // uncomment to see start/end lines while tuning
//         },
//       });

//       // 1) draw the road (reveals your SVG through the mask)
//       tl.to(path, { strokeDashoffset: 0, ease: "none", duration: 1 }, 0);

//       // 2) years pop in as the road reaches them
//       gsap.utils.toArray<HTMLElement>(".year-item").forEach((el) => {
//         const t = Number(el.dataset.t);
//         tl.fromTo(
//           el,
//           { autoAlpha: 0, scale: 0.6 },
//           { autoAlpha: 1, scale: 1, duration: 0.06, ease: "back.out(2)" },
//           Math.max(t - 0.03, 0),
//         );
//       });

//       // 3) each card appears when the road reaches its start year
//       gsap.utils.toArray<HTMLElement>(".exp-item").forEach((el) => {
//         const t = Number(el.dataset.t);
//         tl.fromTo(
//           el,
//           { autoAlpha: 0, y: 40, scale: 0.95 },
//           { autoAlpha: 1, y: 0, scale: 1, duration: 0.1, ease: "power2.out" },
//           Math.max(t - 0.05, 0),
//         );
//       });
//     },
//     { scope: stageRef, dependencies: [ready], revertOnUpdate: true },
//   );

//   return (
//     <section className="relative w-full overflow-hidden bg-zinc-50 font-sans">
//       <Image
//         src="/wall.jpg"
//         alt=""
//         width={2500}
//         height={2500}
//         className="absolute inset-0 w-full h-full object-cover opacity-20"
//       />

//       <div className="relative z-10 px-6 sm:px-10 md:px-[3.5vw] py-10 md:py-16">
//         <h1 className="pb-2 text-5xl sm:text-7xl md:text-9xl text-black font-extrabold tracking-tight">
//           My Experience
//         </h1>

//         {/* Mobile: simple stacked list */}
//         <div className="md:hidden mt-8 flex flex-col gap-6">
//           {experiences.map((exp, i) => (
//             <div key={i} className="p-6 bg-zinc-50 rounded-lg shadow-md">
//               <Card exp={exp} index={i} />
//             </div>
//           ))}
//         </div>

//         {/* Desktop: career path infographic */}
//         <div
//           ref={stageRef}
//           className="relative mt-8 w-full hidden md:block"
//           style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
//         >
//           <svg
//             viewBox={`0 0 ${VB_W} ${VB_H}`}
//             className="absolute inset-0 w-full h-full"
//           >
//             <defs>
//               <mask
//                 id="roadMask"
//                 maskUnits="userSpaceOnUse"
//                 x="0"
//                 y="0"
//                 width={VB_W}
//                 height={VB_H}
//               >
//                 <g transform={`translate(${-OFFSET_X} ${-OFFSET_Y})`}>
//                   <path
//                     ref={roadRef}
//                     d={CENTER_D}
//                     fill="none"
//                     stroke="white"
//                     strokeWidth={300} // lower to ~200 if tight curves reveal too early
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </g>
//               </mask>
//             </defs>

//             {/* your original road SVG, revealed by the animated mask */}
//             <image
//               href="/path3.svg"
//               width={VB_W}
//               height={VB_H}
//               opacity={0.55}
//               mask="url(#roadMask)"
//             />
//           </svg>

//           {/* Years painted on the road: past = small, recent = big */}
//           {yearPoints.map((p) => (
//             <div
//               key={p.year}
//               className="year-item absolute pointer-events-none"
//               data-t={p.t}
//               style={{ left: `${p.left}%`, top: `${p.top}%` }}
//             >
//               <span
//                 className="block -translate-x-1/2 -translate-y-1/2 font-black text-white leading-none tracking-tight select-none"
//                 style={{
//                   fontSize: `${sizeForYear(p.year)}rem`,
//                   opacity: opacityForYear(p.year),
//                   textShadow: "0 2px 12px rgba(0,0,0,0.35)",
//                 }}
//               >
//                 {p.year}
//               </span>
//             </div>
//           ))}

//           {/* Cards, anchored to the point of the year each job started */}
//           {experiences.map((exp, i) => {
//             const p = yearPoints.find((yp) => yp.year === exp.startYear);
//             if (!p) return null;
//             const onLeft = i % 2 === 0; // alternate sides of the road
//             return (
//               <div
//                 key={i}
//                 className="exp-item absolute"
//                 data-t={p.t}
//                 style={{ left: `${p.left}%`, top: `${p.top}%` }}
//               >
//                 <div
//                   className="absolute top-0 w-[min(40rem,46vw)] p-8 bg-zinc-50 rounded-lg shadow-lg"
//                   style={{
//                     transform: onLeft
//                       ? "translate(calc(-100% - 6rem), -50%)"
//                       : "translate(6rem, -50%)",
//                   }}
//                 >
//                   <Card exp={exp} index={i} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
