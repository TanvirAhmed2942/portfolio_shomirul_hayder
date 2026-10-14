import Image from "next/image";

export default function Consultancy() {
  return (
    <section className="relative isolate w-full h-[60vh] min-h-80 overflow-hidden">
      <Image
        src="/footer_wall.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-x-0 mx-auto my-10 w-fit max-w-full h-40 z-10 flex items-center justify-center bg-black px-6 mix-blend-multiply">
        <h1 className="text-center text-4xl font-extrabold text-white md:text-7xl">
          Let&apos;s Build Your Next Big Brand.
        </h1>
      </div>
    </section>
  );
}
