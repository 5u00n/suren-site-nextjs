import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import { ProjectsLayoutGrid } from "./components/UI/ProjectsLayoutGrid";

export default function Home() {
  return (
    <main className="top-0 start-0 flex flex-col row-start-2 items-center sm:items-start">
      <hero className="relative h-[700px]  w-full md:px-16 sm:px-5 xs:px-5 bg-[#F1BABA] dark:bg-transparent pt-9">
        <BackgroundBeams className="absolute inset-0 h-full w-full" />
        <div className="relative w-full md:h-3/6 xs:h-2/6 flex justify-between xs:flex-col md:flex-row z-20">
          <div className="flex flex-col justify-center lg:w-3/5 xs:w-full text-[32px]  xs:text-[48px] md:text-[64px] lg:text-[68px] font-gloock font-bold ">
            <TextGenerateEffect duration={2} filter={false} words={`To Code,`} className={"m-0 p-0 border-none"} />
            <TextGenerateEffect duration={2} filter={false} words={`To Solve Problem,`} />
            <TextGenerateEffect duration={2} filter={false} words={`To Contribute`} />
          </div>
          <div className="flex items-center justify-center h-full sm:hidden xs:hidden md:flex w-2/5 ">
            <div className=" items-center justify-center h-full flex">
              <Image
                src="/images/hero-image.png"
                alt="Hero"
                layout="responsive"
                width={800}
                height={800}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="relative h-3/6 xs:h-4/6 flex md:flex-row xs:flex-col gap-8 my-2 w-full">
          <div className="flex flex-col h-full min-w-[220px] xs:items-center ">
            <Image src="/images/suren.jpg" alt="Suren Hembram" width={140} height={140} className=" content-end rounded-full " />
            <h5 className="text-[25px] font-bold w-full font-gloock mb-4 xs:text-center ">
              Suren Hembram
            </h5>
            <div className="mx-auto xs:w-80% font-figtree text-sm">
              <button className="bg-[#458a4e] hover:bg-[#185c20] text-white font-bold py-2 px-4 rounded">
                Hire Me
              </button>
              <button className="bg-[#492abb] hover:bg-[#221457] text-white font-bold py-2 px-4 ml-3 rounded">
                Contact Me
              </button>
            </div>
          </div>
          <div className=" h-full flex flex-col ">
            <h2 className="text-[48px] font-bold w-full font-gloock mb-4">
              About
            </h2>
            <p className="text-[20px] w-full font-inter mb-4">
              Hey there ! I‛m a tech-savvy doing wonder-tweaking coder who adores solving problems digitally.
              My skills are armed with an assortment of nifty programming languages and methodologies from
              <b><u> Full-stack development</u></b> of <b><u>Web, Mobile, Desktop</u></b> Apps to
              <b><u> Cloud Computing</u></b>.
            </p>
            <hr className="w-full border-1 border-white mb-2" />
            <div className="flex xs:flex-col lg:flex-row items-center justify-between mx-auto w-full mb-2">
              <h2 className="text-[16px] font-bold font-inter">
                Software Engineer
              </h2>
              <ul className="flex space-x-[40px] items-center font-figtree xs:flex-col xs:hidden md:hidden lg:flex lg:flex-row">
                <li>
                  <Link href="#projects-section">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#skills-section">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#education-section">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#experience-section">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#certificate-section">
                    Certificates
                  </Link>
                </li>
                <li>
                  <Link href="#pricing-section">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#partner-section">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#contact-section">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <hr className="w-full border-1 border-white mb-2" />
          </div>
        </div>
      </hero>

      <section id="skills-section" className="w-full h-full flex flex-col gap-8 md:px-16 sm:px-5 xs:px-5 bg-[#ECF2FF] dark:bg-[#314061] py-3">
        <ul className="h-full flex mx-auto gap-8 w-[90%]">
          <li className="w-full h-full flex flex-col">
            <h2 className=" text-heading3 font-bold w-full font-figtree">
              22+
            </h2>
            <span>
              <h3 className=" w-full font-inter text-body">
                Amazing Projects
              </h3>
            </span>
          </li>
          <li className="w-full h-full flex flex-col">
            <h2 className=" text-heading3 font-bold w-full font-figtree">
              10+
            </h2>
            <span>
              <h3 className=" w-full font-inter text-body">
                Happy Clients
              </h3>
            </span>
          </li>
          <li className="w-full h-full flex flex-col">
            <h2 className=" text-heading3 font-bold w-full font-figtree">
              10+
            </h2>
            <span>
              <h3 className=" w-full font-inter text-body">
                Awards
              </h3>
            </span>
          </li>
          <li className="w-full h-full flex flex-col">
            <h2 className=" text-heading3 font-bold w-full font-figtree">
              5+
            </h2>
            <span>
              <h3 className=" w-full font-inter text-body">
                Years Experience
              </h3>
            </span>
          </li>

        </ul>


      </section>

      <section id="projects-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#FFFFFF] dark:bg-transparent py-16 ">
        <div className="w-full h-full flex gap-8">
          <h2 className=" font-bold w-full font-gloock mb-4 text-heading1">
            Projects Showcase
          </h2>
          <span className="mb-4 min-w-[90px] flex items-center">
            <Link href="/projects" className="block bg-transparent border-2 hover:bg-[#185c20] font-bold py-2 px-4 rounded font-figtree text-sm">
              View All
            </Link>
          </span>
        </div>

        <ProjectsLayoutGrid />

        <div className="w-full h-full mt-20">
          <h2 className="font-bold w-full font-gloock mb-4 text-heading2">
            Curious Questions ?
          </h2>

          <div class="grid grid-cols-2 gap-4 mt-8">
            <div>
              <h4 className="font-bold text-heading4">Which language do you program with?</h4>
              <p className="text-body">Coming from C++ , Java background, and mastering projects on JavaScript, Python, PHP, .NET. I{'’'}ve got it all covered. </p>
            </div>
            <div>
              <h4 className="font-bold text-heading4">Which language do you program with?</h4>
              <p className="text-body">Just Tap the “Contact Me” button above or click Contact Me here.Super Easy! </p>
            </div>
            <div>
              <h4 className="font-bold text-heading4">Do you work on freelancing projects?</h4>
              <p className="text-body">Absolutely! I am here to solve the program you need. There’s nothing more exciting than a new challenging project!</p>
            </div>
            <div>
              <h4 className="font-bold text-heading4">Any tips for programming beginners ?</h4>
              <p className="text-body">Practice, practice , practice! treat it like driving and sports. Oh did I mention practice? </p>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}
