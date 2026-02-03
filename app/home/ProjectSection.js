import React from 'react';
import Link from 'next/link';
import { ProjectsShowcase } from './ProjectsShowcase';

function ProjectSection() {
  return (
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

        <ProjectsShowcase />

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
  )
}

export default ProjectSection