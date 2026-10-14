import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <div className="relative w-full max-h-fit overflow-hidden flex flex-col items-center justify-center bg-zinc-50 font-sans">
      {/* <Image
        src="/map.svg"
        alt="Bangladesh map"
        width={100}
        height={100}
        priority
        className="absolute md:block md:w-fit h-auto max-w-2xs top-0 left-25 md:left-0  "
      /> */}
      <Image
        src="/map.svg"
        alt="Bangladesh map"
        width={100}
        height={100}
        priority
        className="absolute top-0 left-1/2 -translate-x-1/2
             w-20 h-auto max-w-2xs
             md:top-0 md:left-0 md:translate-x-0 md:w-fit
             z-0 pointer-events-none"
      />
      <Image
        // src="/pattern.jpg"
        src="/wall.jpg"
        alt="Next.js logo"
        width={2500}
        height={2500}
        priority
        className="absolute inset-0 h-full w-full object-cover opacity-40 md:static md:h-auto md:max-h-svh md:aspect-video md:object-fill"
      />

      <div
        className="relative z-10 w-full px-6 pt-16 pb-2
                sm:px-10 sm:pt-32
                flex flex-col items-start
                md:absolute md:top-0 md:left-0 md:h-full
                md:w-[64vw] md:pl-[3.5vw] md:pr-[2vw]
                md:pt-0 md:pb-0 md:justify-center"
      >
        <h1
          className={`${serif.className} text-4xl sm:text-6xl md:text-[5vw] leading-[1.2] font-bold uppercase text-black`}
        >
          N.M. Shomirul Hayder
        </h1>
        <div className="w-full h-px bg-zinc-700 mt-3 mb-2 sm:mt-4 sm:mb-3 md:mt-[1vw] md:mb-[0.8vw]"></div>
        <p
          className={`${serif.className} text-sm sm:text-xl md:text-[1.4vw] leading-snug text-zinc-900`}
        >
          Brand Development Specialist | Digital Marketing Strategist | Content
          Writer | Social Media Manager | Email Marketing Specialist
        </p>
      </div>

      {/* Mobile photo (below md) */}
      <Image
        src="/nm_shomirul_mobile.png"
        alt="N.M. Shomirul Hayder"
        width={2500}
        height={2500}
        priority
        className="relative z-0 block md:hidden w-full h-auto max-w-sm sm:max-w-md mx-auto  "
      />

      {/* Desktop photo (md and up) - unchanged */}
      <Image
        src="/nm2.png"
        alt="N.M. Shomirul Hayder"
        width={2500}
        height={2500}
        priority
        className="hidden md:block relative w-full aspect-square object-contain md:absolute md:top-0 md:right-[-33vw] md:max-w-none md:max-h-svh    
         drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]
        drop-shadow-amber-100
        "
        // drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]
      />
    </div>
  );
}
