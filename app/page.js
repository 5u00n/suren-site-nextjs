import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import { ProjectsLayoutGrid } from "./components/UI/ProjectsLayoutGrid";
import { SkillsLayoutGrid } from "./components/UI/SkillsLayoutGrid";

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

      <section id="projects-section" className=" flex flex-col gap-8 md:px-10 sm:px-5 xs:px-10 bg-[#ECF2FF] dark:bg-[#314061] py-3  max-w-[1280px] mx-auto xs:w-screen">
        <ul className="h-full grid grid-cols-2 gap-4 mx-auto w-full xl:min-w-[1280px] md:w-screen md:grid-cols-4 ">
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
          <div className="w-full md:w-1/2">
            <SkillsLayoutGrid />
          </div>
          <div className="flex flex-col mt-3 w-full  md:w-1/2">
            <h3 className="font-bold text-heading3">IT Engineer to the Core</h3>
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

        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 gap-4 flex flex-col p-4">
            <div className="w-full">
              <h3 className="font-bold text-heading4 font-figtree">Masters in Computer Application</h3>
              <div className="w-full flex flex-row justify-between mb-2 font-inter">
                <span className="text-body font-bold underline text-blue-400"><Link href={"https://mitwpu.edu.in"}>MIT World Peace University</Link></span>
                <span className="text-sm px-2">Pune, Maharashtra, India</span>
                <span className="text-body border px-2 rounded">2021 - 2022</span>
              </div>
              <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the Admistrator’s from the bottom.</p>
            </div>
            
            <div className="w-full">
              <h3 className="font-bold text-heading4 font-figtree">Bachelor of Computer Application</h3>
              <div className="w-full flex flex-row justify-between mb-2 font-inter">
                <span className="text-body font-bold underline text-blue-400"><Link href={"https://sau.edu.in"}>Spicer Adventist University</Link></span>
                <span className="text-sm px-2">Pune, Maharashtra, India</span>
                <span className="text-body border px-2 rounded">2017 - 2020</span>
              </div>
              <p className="text-body font-inter">Experiencing Hard Work and learning to be humble, learning from the IT Administrators.</p>
              </div>

              <div className="w-full">
              <h3 className="font-bold text-heading4 font-figtree">Higher Secondary Certificate</h3>
              <div className="w-full flex flex-row justify-between mb-2 font-inter">
                <span className="text-body font-bold underline text-blue-400"><Link href={""}>Irvine Adventist, TPS DAV</Link></span>
                <span className="text-sm px-2">Ghatshila, Jharkhand, India</span>
                <span className="text-body border px-2 rounded">2004 - 2016</span>
                </div>
              <p className="text-body font-inter">A Journey where I learned the basics of life, hard work, and common sense.</p>
              </div>
          </div>

          <div className=" md:w-1/2 gap-2 p-4">
            <div class="grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 bg-slate-800 h-full">
              <div class="row-span-2 col-span-2 bg-slate-400">01</div>
              <div class=" bg-slate-400 row-span-2 ">02</div>
              <div class=" bg-slate-400 col-span-2 col-start-1 row-start-3">03</div>
              <div class="bg-slate-400">04</div>
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-10">
          <h3 className="font-bold text-heading3">Works and Awards</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 font-inter">
          </div>
        </div>
      </section>






    </main>
  );
}
