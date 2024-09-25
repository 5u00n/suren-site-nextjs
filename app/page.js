import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

export default function Home() {

  const words = `To Code, To Solve, To Contribute`;
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start md:px-16 sm:px-5 xs:px-5 ">

      <hero className="h-[700px] w-full  dark:bg-black">

        <BackgroundBeams className="h-full" />

        <div className=" w-full md:h-3/6 xs:h-2/6 flex justify-between xs:flex-col md:flex-row ">
          <div className="flex flex-col justify-center lg:w-3/5 xs:w-full text-[32px]  xs:text-[48px]  md:text-[64px] lg:text-[68px] xl:text-[80px]">
            <TextGenerateEffect duration={2} filter={false} words={`To Code,`} className={"m-0 p-0 border-none"} />
            <TextGenerateEffect duration={2} filter={false} words={`To Solve Problem,`} />
            <TextGenerateEffect duration={2} filter={false} words={`To Contribute`} />
          </div>
          <div className="md:flex items-center justify-center w-2/5 sm:hidden xs:hidden ">
            <Image
              src="/images/hero-image.png"
              alt="Hero"
              width={750}
              height={750}
            />
          </div>
        </div>
        <div className=" h-3/6 xs:h-4/6 flex md:flex-row xs:flex-col gap-8 my-8 w-full">
          <div className="flex flex-col h-full min-w-[220px] xs:items-center ">
            <Image src="/images/suren.jpg" alt="Suren Hembram" width={140} height={140} className=" content-end rounded-full " />
            <h5 className="text-[25px] font-bold w-full font-gloock mb-4 xs:text-center ">
              Suren Hembram
            </h5>
            <div className="mx-auto xs:w-80% ">
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

      <section id="projects-section" className="w-full h-full flex flex-col gap-8">
        <h2 className="text-[48px] font-bold w-full font-gloock mb-4">
          Projects
        </h2>
        <div className="w-full h-full flex flex-col gap-8">
          <div className="w-full h-full flex flex-col gap-8">
            <h3 className="text-[32px] font-bold w-full font-gloock mb-4">
              Project 1
            </h3>
            <p className="text-[20px] w-full font-inter mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec purus ut purus ultricies aliquam. Nullam nec purus ut purus
              ultricies aliquam. Nullam nec purus ut purus ultricies aliquam.
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-8">
            <h3 className="text-[32px] font-bold w-full font-gloock mb-4">
              Project 2
            </h3>
            <p className="text-[20px] w-full font-inter mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec purus ut purus ultricies aliquam. Nullam nec purus ut purus
              ultricies aliquam. Nullam nec purus ut purus ultricies aliquam.
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-8">
            <h3 className="text-[32px] font-bold w-full font-gloock mb-4">
              Project 3
            </h3>
            <p className="text-[20px] w-full font-inter mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec purus ut purus ultricies aliquam. Nullam nec purus ut purus
              ultricies aliquam. Nullam nec purus ut purus ultricies aliquam.
            </p>
          </div>
        </div>
      </section>



    </main>
  );
}
