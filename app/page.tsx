import Consultancy from "@/src/component/consultancy/consultancy";
import Experience from "@/src/component/experience/experiience";
import Hero from "@/src/component/hero/hero";
import Myskills from "@/src/component/myskills/myskils";
import Whatido from "@/src/component/whatido/whatido";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <Hero />
      <Experience />
      <Whatido />
      <Myskills />
      <Consultancy />
    </div>
  );
}
