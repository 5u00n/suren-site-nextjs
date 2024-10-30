import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import { ProjectsLayoutGrid } from "./components/UI/ProjectsLayoutGrid";
import { SkillsLayoutGrid } from "./components/UI/SkillsLayoutGrid";
import PricingSectionCards from "@/components/ui/PricingSectionCards";
import { ArticleJsonLd } from "next-seo";
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Home() {
  return (
    <main className="top-0 start-0 flex flex-col items-center sm:items-start lg:max-w-[1280px] mx-auto">

      <h1 className="sr-only">Suren Hembram</h1>
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

      <section id="projects-section" className=" flex flex-col gap-8 md:px-10 sm:px-5 xs:px-10 bg-[#ECF2FF] dark:bg-[#314061] py-3  max-w-[1280px] mx-auto xs:w-full">
        <ul className="h-full grid grid-cols-2 gap-4 mx-auto w-full md:w-full md:grid-cols-4 ">
          <li className="w-full h-full flex flex-col ">
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
          <h2 className="font-bold w-full font-figtree mb-4 text-heading2">
            Curious Questions?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="font-bold text-heading4">Which language do you program with?</h4>
              <p className="text-body">Coming from C++ , Java background, and mastering projects on JavaScript, Python, PHP, .NET. I{'’'}ve got it all covered. </p>
            </div>
            <div>
              <h4 className="font-bold text-heading4">Which language do you program with?</h4>
              <p className="text-body">Just Tap the “Contact Me” button above or click <Link href="#contact-section" className="text-blue-400 underline">Contact Me</Link> here.Super Easy! </p>
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

      <section id="skills-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#ECF2FF] dark:bg-[#314061] py-16 ">
        <div className="w-full h-full gap-8 flex">
          <h2 className=" font-bold w-full font-gloock mb-4 text-heading1">
            Skills & Services
          </h2>
          <span className="mb-4 min-w-[90px] flex items-center">
            <Link href="/services" className="block bg-transparent border-2 hover:bg-[#185c20] font-bold py-2 px-4 rounded font-figtree text-sm">
              View All
            </Link>
          </span>
        </div>

        <div className="w-full h-full mt-8 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start ">
            <SkillsLayoutGrid />
          </div>
          <div className="flex flex-col mt-3 w-full  md:w-1/2">
            <h3 className="font-bold text-heading3 text-center md:text-left">IT Engineer to the Core</h3>
            <ul className="flex flex-col gap-4 mt-4 text-sm font-inter text-center md:text-left">
              <li>
                <span className="font-bold text-heading4">Full-stack Development</span>
                <br className=" md:hidden" />
                <span className="text-body ml-4"> - Web, Mobile, Desktop Apps</span>
              </li>
              <li>
                <span className="font-bold text-heading4">Cloud Computing</span>
                <br className=" md:hidden" />
                <span className="text-body ml-4"> - AWS, Azure, Google Cloud</span>
              </li>
              <li>
                <span className="font-bold text-heading4">Database Management</span>
                <br className=" md:hidden" />
                <span className="text-body ml-4"> - MySQL, MongoDB, PostgreSQL</span>
              </li>
              <li>
                <span className="font-bold text-heading4">DevOps</span>
                <br className=" md:hidden" />
                <span className="text-body ml-4"> - Docker, Kubernetes, Jenkins</span>
              </li>
              <li>
                <span className="font-bold text-heading4">Programming Languages</span>
                <br className=" md:hidden" />
                <span className="text-body ml-4"> - JavaScript, Python, PHP, .NET</span>
              </li>

              <li>
                <span className="font-bold text-heading4">UI/UX Design</span>
                <br className=" md:hidden" />
                <span className="text-body ml-4"> - Figma, Adobe XD, Sketch</span>
              </li>

              <li>
                <span className="font-bold text-heading4">Agile Methodologies</span>
                <br className=" md:hidden" />
                <span className="text-body ml-4"> - Scrum, Kanban, Lean</span>
              </li>

              <li>
                <span className="font-bold text-heading4">Version Control</span>
                <br className=" md:hidden" />
                <span className="text-body ml-4"> - Git, GitHub, Bitbucket</span>
              </li>

              <li>
                <span className="font-bold text-heading4">Project Management</span>
                <br className=" md:hidden " />
                <span className="text-body ml-4"> - Jira, Trello, Asana</span>
              </li>


            </ul>
          </div>
        </div>

        <div className="w-full h-full mt-20">
          <h2 className="font-bold w-full mb-4 text-heading2 font-figtree text-center md:text-left">
            Mastery Across Platforms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 font-inter">
            <div>
              <h4 className="font-bold text-heading4">Web Wizard</h4>
              <p className="text-body">Crafting compelling websites that weave a tale through HTML, CSS, and JavaScript, and server side like PHP</p>
            </div>
            <div>
              <h4 className="font-bold text-heading4">Mobile Maestro</h4>
              <p className="text-body">Building robust mobile applications making the world accessible from your palm.</p>
            </div>
            <div>
              <h4 className="font-bold text-heading4">.NET Ninja</h4>
              <p className="text-body">Unleashing the power of .NET for desktop and Web applications that turn tables.</p>
            </div>
            <div>
              <h4 className="font-bold text-heading4">Python Powerhouse</h4>
              <p className="text-body">Harnessing the beast of Python for server-side wizardry and data sorcery.</p>
            </div>

            <div>
              <h4 className="font-bold text-heading4">Cloud Commander</h4>
              <p className="text-body">Navigating the cloud with AWS, Azure, and Google Cloud to host and manage your applications.</p>
            </div>
            <div>

              <h4 className="font-bold text-heading4">Database Dynamo</h4>
              <p className="text-body">Designing and managing databases with MySQL, MongoDB, and PostgreSQL for your data needs.</p>
            </div>

            <div>
              <h4 className="font-bold text-heading4">DevOps Doer</h4>
              <p className="text-body">Automating and streamlining the development process with Docker, Kubernetes, and Jenkins.</p>
            </div>
            <div>
              <h4 className="font-bold text-heading4">UI/UX Designer</h4>
              <p className="text-body">Crafting delightful user experiences with Figma, Adobe XD, and Sketch for your applications.</p>
            </div>

            <div>
              <h4 className="font-bold text-heading4">Agile Advocate</h4>
              <p className="text-body">Embracing Agile methodologies like Scrum, Kanban, and Lean to deliver projects efficiently.</p>
            </div>
          </div>
        </div>

      </section>

      <section id="education-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#FFFFFF] dark:bg-transparent py-16 ">
        <div className="w-full h-full gap-8 flex">
          <h2 className=" font-bold w-full font-gloock mb-4 text-heading1">
            Education
          </h2>

        </div>




        <div className="w-full gap-4 flex flex-col p-4 md:hidden">
          <div className="w-full">
            <h3 className="font-bold text-heading4 font-figtree">Masters in Computer Application</h3>
            <div className="w-full flex flex-row justify-between mb-2 font-inter">
              <span ><Link className="text-body font-bold underline text-blue-400" href={"https://mitwpu.edu.in"}>MIT World Peace University</Link>
                <p className="text-sm">Pune, Maharashtra, India</p></span>
              <span className="text-body px-2 rounded ">2021 - 2022</span>
            </div>
            <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the Admistrator’s from the bottom.</p>
          </div>

          <div className="w-full">
            <h3 className="font-bold text-heading4 font-figtree">Bachelor of Computer Application</h3>
            <div className="w-full flex flex-row justify-between mb-2 font-inter">
              <span ><Link className="text-body font-bold underline text-blue-400" href={"https://sau.edu.in"}>Spicer Adventist University</Link>
                <p className="text-sm">Pune, Maharashtra, India</p></span>
              <span className="text-body px-2 rounded">2017 - 2020</span>
            </div>
            <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the IT Administrators.</p>
          </div>

          <div className="w-full">
            <h3 className="font-bold text-heading4 font-figtree">Higher Secondary Certificate</h3>
            <div className="w-full flex flex-row justify-between mb-2 font-inter">
              <span ><Link className="text-body font-bold underline text-blue-400" href={""}>Irvine Adventist, TPS DAV</Link>
                <p className="text-sm">Ghatshila, Jharkhand, India</p></span>
              <span className="text-body px-2 rounded ">2004 - 2016</span>
            </div>
            <p className="text-sm font-inter">A Journey where I learned the basics of life, hard work, and common sense.</p>
          </div>
        </div>

        <div className="w-full h-full hidden md:flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 gap-4 flex flex-col p-4">
            <div className="w-full">
              <h3 className="font-bold text-heading4 font-figtree">Masters in Computer Application</h3>
              <div className="w-full flex flex-row justify-between mb-2 font-inter">
                <span className="text-body font-bold underline text-blue-400"><Link href={"https://mitwpu.edu.in"}>MIT World Peace University</Link></span>
                <span className="text-sm px-2">Pune, Maharashtra, India</span>
                <span className="text-body  px-2 rounded ">2021 - 2022</span>
              </div>
              <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the Admistrator’s from the bottom.</p>
            </div>

            <div className="w-full">
              <h3 className="font-bold text-heading4 font-figtree">Bachelor of Computer Application</h3>
              <div className="w-full flex flex-row justify-between mb-2 font-inter">
                <span className="text-body font-bold underline text-blue-400"><Link href={"https://sau.edu.in"}>Spicer Adventist University</Link></span>
                <span className="text-sm px-2">Pune, Maharashtra, India</span>
                <span className="text-body  px-2 rounded">2017 - 2020</span>
              </div>
              <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the IT Administrators.</p>
            </div>

            <div className="w-full">
              <h3 className="font-bold text-heading4 font-figtree">Higher Secondary Certificate</h3>
              <div className="w-full flex flex-row justify-between mb-2 font-inter">
                <span className="text-body font-bold underline text-blue-400"><Link href={""}>Irvine Adventist, TPS DAV</Link></span>
                <span className="text-sm px-2">Ghatshila, Jharkhand, India</span>
                <span className="text-body  px-2 rounded ">2004 - 2016</span>
              </div>
              <p className="text-body font-inter">A Journey where I learned the basics of life, hard work, and common sense.</p>
            </div>
          </div>

          <div className="md:w-1/2 gap-2 p-4 flex items-center justify-center">
            <div className=" grid-rows-3 grid-cols-3 grid-flow-col gap-4 max-w-[420px] max-h-80 h-full w-full hidden md:grid">
              <div className="row-span-2 col-span-2 bg-[#cf7878] rounded">01</div>
              <div className="bg-[#c7d387] row-span-2 rounded">02</div>
              <div className="bg-[#6c9ead] col-span-2 col-start-1 row-start-3 rounded">03</div>
              <div className="bg-[#5e557c] rounded">04</div>
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-10">
          <h3 className="font-bold text-heading3">Works and Awards</h3>

          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/images/work1.jpg"
                  alt="Work 1"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-xl font-semibold mb-2">Best Innovation Award 2023</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Received the Best Innovation Award for developing an AI-powered solution that helped optimize supply chain operations, resulting in 30% cost reduction.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">Learn more →</Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/images/work2.jpg"
                  alt="Work 2"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-xl font-semibold mb-2">Outstanding Project Award 2022</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Led a team of developers to create a revolutionary mobile app that garnered over 1 million downloads in its first month of launch.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">Learn more →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="certificate-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#ECF2FF] dark:bg-[#314061] py-16 lg:rounded">
        <div className="w-full h-full flex flex-col gap-8">
          <h2 className="font-bold font-gloock text-heading1">
            Certificates & Licenses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg border bg-white dark:bg-gray-800/40 p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl">AWS Cloud Practitioner</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Amazon Web Services</p>
                  <p className="text-xs text-gray-500">Issued Jan 2024 · Expires Jan 2027</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 p-2 dark:bg-blue-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <Link href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                  Show credential
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border bg-white dark:bg-gray-800/40 p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl">React Developer</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Meta</p>
                  <p className="text-xs text-gray-500">Issued Dec 2023 · No Expiration</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 p-2 dark:bg-blue-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                    <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <Link href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                  Show credential
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border bg-white dark:bg-gray-800/40 p-6 shadow-md transition-all hover:shadow-lg">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl">Google Analytics</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Google</p>
                  <p className="text-xs text-gray-500">Issued Nov 2023 · Expires Nov 2024</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 p-2 dark:bg-blue-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <Link href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                  Show credential
                </Link>
              </div>
            </div>
          </div>
        </div>


      </section>

      <section id="pricing-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#FFFFFF] dark:bg-transparent py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-bold font-gloock text-4xl mb-4">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Choose the perfect plan for your project needs
            </p>
          </div>
          
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="rounded-3xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10">
              <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Basic</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">Perfect for small projects and quick tasks</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">₹999</span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/hour</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">✓ Basic web development</li>
                <li className="flex gap-x-3">✓ Single page applications</li>
                <li className="flex gap-x-3">✓ Basic UI/UX design</li>
                <li className="flex gap-x-3">✓ 2 revisions</li>
                <li className="flex gap-x-3">✓ 48 hour support response time</li>
              </ul>
            </div>

            <div className="rounded-3xl p-8 ring-2 ring-indigo-600 xl:p-10 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-lg font-semibold leading-8 text-indigo-600 dark:text-indigo-400">Professional</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">For medium-sized projects and businesses</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">₹1,999</span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/hour</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">✓ Advanced web development</li>
                <li className="flex gap-x-3">✓ Full-stack applications</li>
                <li className="flex gap-x-3">✓ Professional UI/UX design</li>
                <li className="flex gap-x-3">✓ 5 revisions</li>
                <li className="flex gap-x-3">✓ 24 hour support response time</li>
                <li className="flex gap-x-3">✓ API integration</li>
                <li className="flex gap-x-3">✓ Database design</li>
              </ul>
            </div>

            <div className="rounded-3xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10">
              <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Enterprise</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">For large-scale enterprise solutions</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">₹3,999</span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/hour</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">✓ Enterprise-level development</li>
                <li className="flex gap-x-3">✓ Microservices architecture</li>
                <li className="flex gap-x-3">✓ Custom UI/UX design systems</li>
                <li className="flex gap-x-3">✓ Unlimited revisions</li>
                <li className="flex gap-x-3">✓ Priority 24/7 support</li>
                <li className="flex gap-x-3">✓ Advanced security features</li>
                <li className="flex gap-x-3">✓ Performance optimization</li>
                <li className="flex gap-x-3">✓ Scalability planning</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="py-4 px-4 text-left font-medium text-gray-900 dark:text-white">Features</th>
                  <th className="py-4 px-4 text-center font-medium text-gray-900 dark:text-white">Basic</th>
                  <th className="py-4 px-4 text-center font-medium text-gray-900 dark:text-white">Professional</th>
                  <th className="py-4 px-4 text-center font-medium text-gray-900 dark:text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-300">Minimum Project Duration</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-300">20 hours</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-300">40 hours</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-300">100 hours</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-300">Source Code Access</td>
                  <td className="py-4 px-4 text-center">✓</td>
                  <td className="py-4 px-4 text-center">✓</td>
                  <td className="py-4 px-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-300">Deployment Support</td>
                  <td className="py-4 px-4 text-center">-</td>
                  <td className="py-4 px-4 text-center">✓</td>
                  <td className="py-4 px-4 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="partner-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#ECF2FF] dark:bg-[#314061] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-bold font-gloock text-heading1 mb-8">Partners & Collaborators</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Working together with talented individuals to create impactful solutions
            </p>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-12 text-center">Amazing People I Work With</h3>
            <div className="mx-auto grid max-w-lg gap-12 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              
              <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800/40 rounded-2xl shadow-lg transition-all hover:shadow-xl h-full">
                <div className="h-40 w-40 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-blue-900/20">
                  <Image 
                    src="/images/partners/partner1.jpg" 
                    alt="Prem Sagar Gompa"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Prem S. Gompa</h4>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-2 font-medium text-center">Business Analyst</p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  Expert in business analysis and strategic planning with focus on market research
                </p>
                <div className="mt-auto flex space-x-6">
                  <Link href="https://linkedin.com/in/premsagargompa" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                  </Link>
                  <Link href="https://twitter.com/premsagargompa" target="_blank" className="transform hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-gray-600 hover:text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800/40 rounded-2xl shadow-lg transition-all hover:shadow-xl h-full">
                <div className="h-40 w-40 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-blue-900/20">
                  <Image 
                    src="/images/partners/partner2.jpg" 
                    alt="Richard Sagar Mitra"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Richard S. Mitra</h4>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-2 font-medium text-center">Research & Executive Officer</p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  Leading research initiatives and executive operations with innovative approaches
                </p>
                <div className="mt-auto flex space-x-6">
                  <Link href="https://linkedin.com/in/richardsagarmitra" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                  </Link>
                  <Link href="https://github.com/richardmitra" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800/40 rounded-2xl shadow-lg transition-all hover:shadow-xl h-full">
                <div className="h-40 w-40 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-blue-900/20">
                  <Image 
                    src="/images/partners/partner3.jpg" 
                    alt="Meghrai Tudu"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Meghrai Tudu</h4>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-2 font-medium text-center">Software Development Lead</p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  Leading software development and technical architecture with expertise in scalable solutions
                </p>
                <div className="mt-auto flex space-x-6">
                  <Link href="https://github.com/meghraidev" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Github className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                  </Link>
                  <Link href="https://linkedin.com/in/meghraitudu" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center p-8 bg-white dark:bg-gray-800/40 rounded-2xl shadow-lg transition-all hover:shadow-xl h-full">
                <div className="h-40 w-40 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-blue-900/20">
                  <Image 
                    src="/images/partners/partner4.jpg" 
                    alt="Chandray Murmu"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Chandray Murmu</h4>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-2 font-medium text-center">UI/UX Designer & Illustrator</p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  Creating beautiful user interfaces and compelling graphic illustrations
                </p>
                <div className="mt-auto flex space-x-6">
                  <Link href="https://linkedin.com/in/chandraymurmu" target="_blank" className="transform hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600" />
                  </Link>
                  <Link href="https://dribbble.com/chandraymurmu" target="_blank" className="transform hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-gray-600 hover:text-pink-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.203 10.203 0 012.345 6.266c-.34-.064-3.75-.718-7.188-.312-.064-.17-.17-.374-.234-.578-.234-.544-4.875-1.69-4.875-1.69s4.125-3.687 4.594-4.687c.47-1 .874-1.874.874-1.874s1.84.938 4.484 2.875zm-7.938-3.75c2.75 0 5.25 1.03 7.188 2.72-.064.064-1.064.874-4.188 2.374-1.31-2.406-2.75-4.406-2.97-4.72a9.855 9.855 0 00-.03-.374zm-2.594.5c.17.234 1.625 2.25 2.938 4.594-3.688.984-6.938.984-7.312.984a10.275 10.275 0 014.374-5.578zM2.25 12v-.312c.374 0 4.25.064 8.25-.875 1.188 2.313 1.688 3.813 1.75 4.063-3.125 1.375-5.188 3.375-5.188 3.375A9.904 9.904 0 012.25 12zm9.75 9.75a9.904 9.904 0 01-6.188-2.125s1.625-1.875 5-3.313c1.375 3.438 1.938 6.313 2.063 7.188-.312.125-.594.25-.875.25zm3.063-.375c-.064-.625-.688-3.688-2.125-7.188 3.438-.544 6.438.375 6.78.5a10.017 10.017 0 01-4.655 6.688z"/></svg>
                  </Link>
                  <Link href="https://behance.net/chandraymurmu" target="_blank" className="transform hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-gray-600 hover:text-blue-900" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V2H9v5H2v15h20V7zM9.5 15.5c0 1.9-1.6 3.5-3.5 3.5H3v-7h3c1.9 0 3.5 1.6 3.5 3.5zm7.5 3.5h-3.5v-7H20v7zm0-9h-7V4h7v6z"/></svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-xl font-semibold mb-8">Companies We&apos;ve Collaborated With</h3>
            <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <Link href="https://company1.com" className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image src="/images/companies/logo1.png" alt="Company 1" width={120} height={60} className="object-contain" />
              </Link>
              <Link href="https://company2.com" className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image src="/images/companies/logo2.png" alt="Company 2" width={120} height={60} className="object-contain" />
              </Link>
              <Link href="https://company3.com" className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image src="/images/companies/logo3.png" alt="Company 3" width={120} height={60} className="object-contain" />
              </Link>
              <Link href="https://company4.com" className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image src="/images/companies/logo4.png" alt="Company 4" width={120} height={60} className="object-contain" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#FFFFFF] dark:bg-transparent py-16 lg:rounded">
        <div className="w-full h-full flex flex-col gap-8">
          <h2 className="font-bold font-gloock text-heading1">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-lg border bg-white dark:bg-gray-800/40 shadow-md transition-all hover:shadow-lg">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">Contact Information</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Feel free to reach out through any of these channels</p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/20">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <a href="mailto:surenhembram97@gmail.com" className="text-sm hover:underline">surenhembram97@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/20">
                      <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Link href="https://linkedin.com/in/surenhembram" className="text-sm hover:underline">
                      linkedin.com/in/surenhembram
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/20">
                      <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Link href="https://github.com/5u00n" className="text-sm hover:underline">
                      github.com/5u00n
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white dark:bg-gray-800/40 shadow-md transition-all hover:shadow-lg mt-6">
                <div className="flex flex-col space-y-1.5 p-6 border-b border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">Business Hours</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">When you can reach us</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <span className="font-medium">Saturday and Sunday</span>
                    <span className="text-gray-600 dark:text-gray-300">Closed</span>
                  </div>
                </div>
              </div>

             
            </div>

            <form className="rounded-lg border bg-white dark:bg-gray-800/40 shadow-md transition-all hover:shadow-lg p-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="flex w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white h-10 px-4 py-2 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
