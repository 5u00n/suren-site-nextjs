import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {

  const words = `To Code, To Solve Problems, To Contribute`;
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">

      <hero className="h-[800px] w-screen ">

        <BackgroundBeams />

        <div className="absolute top-0 left-0 w-full h-[300px] flex  justify-between px-16 mt-32">
          <div className="flex items-center justify-center w-1/2 text-[80px]">
            <TextGenerateEffect duration={2} filter={false} words={words} />
          </div>
          <div className="flex items-center justify-center w-1/2">
            <Image
              src="/images/hero-image.png"
              alt="Hero"
              width={550}
              height={650}
            />
          </div>
        </div>

      </hero>




      <h1 className="text-4xl font-bold text-center  w-full font-unica">
        Welcome to Suren Hembram{"'"}s Next.js app.

      </h1>

      <h1 className="text-4xl font-bold text-center w-full font-gloock">
        Full App arriving soon!
      </h1>


    </main>
  );
}
