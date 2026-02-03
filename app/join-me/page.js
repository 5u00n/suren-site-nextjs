import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const metadata = {
  title: "Join Me | Suren Hembram",
  description:
    "Collaborate with Suren Hembram — connect on GitHub, LinkedIn, or email.",
};

export default function JoinMePage() {
  return (
    <main className="mx-auto flex flex-col items-center sm:items-start lg:max-w-[1280px] w-full px-4 md:px-16 py-16">
      <div className="relative flex w-full flex-col items-center justify-center shadow-lg lg:min-h-[320px] bg-gradient-to-tr from-[#233fbd] to-[#09add6b2] rounded-lg p-10">
        <h1 className="font-gloock text-title text-white text-center">
          Join Me
        </h1>
        <p className="font-figtree text-white/90 text-center max-w-xl mt-4 text-lg">
          Interested in collaborating, open source, or staying in touch? Reach
          out on any of these channels.
        </p>
      </div>

      <section className="w-full mt-12 max-w-2xl">
        <h2 className="font-gloock text-heading1 font-bold mb-4">
          Connect & collaborate
        </h2>
        <p className="font-figtree text-body text-gray-600 dark:text-gray-300 mb-8">
          I’m open to collaboration on projects, contributions to open source,
          and connecting with other developers and teams.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://github.com/5u00n"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/40 p-4 shadow-md hover:shadow-lg transition-shadow font-figtree"
            aria-label="GitHub profile"
          >
            <Github className="h-8 w-8 text-gray-700 dark:text-gray-300" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/surenhembram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/40 p-4 shadow-md hover:shadow-lg transition-shadow font-figtree"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-8 w-8 text-gray-700 dark:text-gray-300" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:surenhembram97@gmail.com"
            className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/40 p-4 shadow-md hover:shadow-lg transition-shadow font-figtree"
            aria-label="Send email"
          >
            <Mail className="h-8 w-8 text-gray-700 dark:text-gray-300" />
            <span className="font-medium">Email</span>
          </a>
        </div>
        <p className="font-figtree text-body text-gray-600 dark:text-gray-300 mt-8">
          Or jump straight to the contact section on the{" "}
          <Link href="/#contact-section" className="text-[#458a4e] dark:text-[#6ee7a3] hover:underline">
            home page
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
