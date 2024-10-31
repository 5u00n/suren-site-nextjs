import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


function HeroSection() {
  return (
    <hero className="relative lg:h-[700px] w-full md:px-16 sm:px-5 xs:px-5 bg-[#F1BABA] dark:bg-transparent pt-9">
        <BackgroundBeams className="absolute inset-0 h-full w-full" />
        <div className="relative w-full md:h-3/6 xs:h-2/6 flex justify-between xs:flex-col md:flex-row z-20">
          <div className="flex flex-col justify-center lg:w-3/5 xs:w-full text-[32px] xs:mt-4  xs:text-[46px] md:text-[64px] lg:text-[68px] font-gloock font-bold ">
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
              Hey there ! I‛m a tech-savvy coder who adores solving problems digitally.
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
  )
}

export default HeroSection