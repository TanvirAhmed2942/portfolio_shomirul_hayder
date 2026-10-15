// import Image from "next/image";

// export default function Experience() {
//   // Newest first: index 0 sits at the top of the spiral, last item at the bottom.
//   const experiences = [
//     {
//       serial: 1,
//       title: "Product Marketing Executive",
//       company: "CodeZen Technologies Limited",
//       companyLogo: "/codezen.svg",
//       duration: "Oct 2025 - Present",
//       description:
//         "My current role as a Product Marketing Executive, is to work on understanding product features, communicating their value to the target audience, placing the product in the market, and creating content that supports product positioning and promotion. I collaborate with different teams to align marketing activities with business goals and improve product visibility across digital channels.",
//     },
//     {
//       serial: 2,
//       title: "Junior Executive - Digital Marketing",
//       company: "CodeZen Technologies Limited",
//       companyLogo: "/codezen.svg",
//       duration: "Jan 2025 - Oct 2025",
//       description:
//         "In my role as a Digital Marketer, my work was a combination of SEO optimization, work on increasing brand visibility, email marketing and social media marketing. I worked with several teams to increase brand visibility for 5 brands, and reviewed 100+ blogs and product descriptions.",
//     },
//     {
//       serial: 3,
//       title: "Email Marketing Specialist",
//       company: "CodeZen Technologies Limited",
//       companyLogo: "/codezen.svg",
//       duration: "Jan 2025 - Oct 2025",
//       description:
//         "I have been designing emails (copy, subject line, preview line, A/B testing, templates) that represent the brand. My email marketing work has contributed to over £50,000+ in sales in 1.5+ years of time. I have created several automation workflows depending on user behavior and managed audience segments.",
//     },
//     {
//       serial: 4,
//       title: "Blogger",
//       company: "CodeZen Technologies Limited",
//       companyLogo: "/codezen.svg",
//       duration: "Dec 2024 - Mar 2025",
//       description:
//         "As a Blogger on the Digital Marketing Team, I wrote SEO-optimized blogs through competitor analysis and independent research. I also created guest posts, with several blogs ranking #1 on Google. After updating older content, some of my blogs were also featured in Google's AI Overviews.",
//     },
//     {
//       serial: 5,
//       title: "Content Writer",
//       company: "CodeZen Technologies Limited",
//       companyLogo: "/codezen.svg",
//       duration: "Oct 2024 - Dec 2024",
//       description:
//         "My role as a content writer was to research competitors, develop course content, and created unique courses through independent research. I also collaborated with the creative design team to align content with visual designs.",
//     },
//   ];

//   // Large screens (lg+): odd items on the left, even items on the right,
//   // each in its own row so they step down alongside the spiral.
//   const placement = [
//     "lg:col-start-1 lg:row-start-1",
//     "lg:col-start-3 lg:row-start-2",
//     "lg:col-start-1 lg:row-start-3",
//     "lg:col-start-3 lg:row-start-4",
//     "lg:col-start-1 lg:row-start-5",
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-zinc-50 font-sans">
//       <Image
//         src="/wall.jpg"
//         alt=""
//         width={2500}
//         height={2500}
//         className="absolute inset-0 w-full h-full object-cover opacity-20"
//       />

//       <div className="relative z-10 mx-auto md:max-w-[1600px] xl:max-w-full px-5 sm:px-10 lg:px-[3.5vw] py-10 md:py-16">
//         <h1 className="pb-6 sm:pb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black font-extrabold tracking-tight break-words">
//           My Experience
//         </h1>

//         {/*
//           Phones (<640):   single column, text only
//           sm - md:         single column, spiral banner on top
//           md - lg:         two text columns under the spiral banner
//           lg+ (desktop):   spiral in the middle, text stepping down both sides
//         */}
//         <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(240px,40%)_1fr] lg:grid-rows-3 lg:gap-x-8 lg:gap-y-4 lg:my-8">
//           {/* Spiral */}
//           <div className="relative hidden sm:block h-80 md:h-96 md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-5 lg:h-auto lg:min-h-svh bg-amber-300">
//             <Image
//               src="/stairs.svg"
//               alt="Experience timeline spiral"
//               fill
//               priority
//               // sizes="(min-width: 1024px) 40vw, 90vw"
//               className="object-contain lg:object-cover"
//             />
//           </div>

//           {/* Newspaper-style text columns: no cards, no boxes */}
//           {experiences.map((experience, i) => (
//             <article
//               key={experience.serial}
//               className={`w-full max-w-md lg:self-center ${placement[i]} bg-red-400`}
//             >
//               <p className="text-xl sm:text-2xl font-extrabold leading-none text-black">
//                 {experience.duration}
//               </p>
//               <h2 className="mt-1 text-base font-bold text-zinc-900">
//                 {experience.title}
//               </h2>
//               <p className="text-[12px] font-medium uppercase tracking-wide text-zinc-500">
//                 {experience.company}
//               </p>
//               <p className="mt-3 text-xs sm:text-sm lg:text-xs xl:text-sm leading-snug text-zinc-700 text-justify hyphens-auto">
//                 {experience.description}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Experience() {
  // Newest first: index 0 sits at the top of the spiral, last item at the bottom.
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
      duration: "Jan 2025 - Oct 2025",
      description:
        "In my role as a Digital Marketer, my work was a combination of SEO optimization, work on increasing brand visibility, email marketing and social media marketing. I worked with several teams to increase brand visibility for 5 brands, and reviewed 100+ blogs and product descriptions.",
    },
    {
      serial: 3,
      title: "Email Marketing Specialist",
      company: "CodeZen Technologies Limited",
      companyLogo: "/codezen.svg",
      duration: "Jan 2025 - Oct 2025",
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

  // Large screens (lg+): odd items on the left, even items on the right,
  // each in its own row so they step down alongside the spiral.
  const placement = [
    "lg:col-start-1 lg:row-start-1",
    "lg:col-start-3 lg:row-start-2",
    "lg:col-start-1 lg:row-start-3",
    "lg:col-start-3 lg:row-start-4",
    "lg:col-start-1 lg:row-start-5",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 font-sans">
      <Image
        src="/wall.jpg"
        alt=""
        width={2500}
        height={2500}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 mx-auto md:max-w-[1600px] xl:max-w-full px-5 sm:px-10 lg:px-[3.5vw] py-10 md:py-16">
        <h1 className="pb-6 sm:pb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black font-extrabold tracking-tight break-words">
          My Experience
        </h1>

        {/*
          Phones (<640):   single column, text only
          sm - md:         single column, spiral banner on top
          md - lg:         two text columns under the spiral banner
          lg+ (desktop):   spiral in the middle, text stepping down both sides
        */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(240px,40%)_1fr] lg:grid-rows-3 lg:gap-x-8 lg:gap-y-4 lg:my-8">
          {/* Spiral */}
          <div className="relative hidden sm:block h-80 md:h-96 md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-5 lg:h-auto lg:min-h-svh">
            {/* Mac and smaller (everything below 2xl / 1536px): mac_stair.svg */}
            <Image
              src="/mac_stair.svg"
              alt="Experience timeline spiral"
              fill
              priority
              // sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain lg:object-cover 2xl:hidden"
            />
            {/* Larger monitors (2xl and up): original stairs.svg */}
            <Image
              src="/stairs.svg"
              alt="Experience timeline spiral"
              fill
              // sizes="(min-width: 1024px) 40vw, 90vw"
              className="hidden object-contain lg:object-cover 2xl:block"
            />
          </div>

          {/* Newspaper-style text columns: no cards, no boxes */}
          {experiences.map((experience, i) => (
            <article
              key={experience.serial}
              className={`w-full max-w-md lg:self-center ${placement[i]} `}
            >
              <p className="text-xl sm:text-2xl font-extrabold leading-none text-black">
                {experience.duration}
              </p>
              <h2 className="mt-1 text-base font-bold text-zinc-900">
                {experience.title}
              </h2>
              <p className="text-[12px] font-medium uppercase tracking-wide text-zinc-500">
                {experience.company}
              </p>
              <p className="mt-3 text-xs sm:text-sm lg:text-xs xl:text-sm leading-snug text-zinc-700 text-justify hyphens-auto">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
