import React from 'react';
import Link from 'next/link';
import {SkillsLayoutGrid} from './SkillsLayoutGrid';

function SkillSection() {
  return (
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
  )
}

export default SkillSection