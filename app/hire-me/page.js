import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Hire Me | Suren Hembram",
  description:
    "Hire Suren Hembram for Full Stack Web Development, React, Next.js, Node.js, and software development projects.",
};

export default function HireMePage() {
  return (
    <main className="mx-auto flex flex-col items-center sm:items-start lg:max-w-[1280px] w-full px-4 md:px-16 py-16">
      <div className="relative flex w-full flex-col items-center justify-center shadow-lg lg:min-h-[320px] bg-gradient-to-tr from-[#3e6d32be] to-[#09add6b2] rounded-lg p-10">
        <h1 className="font-gloock text-title text-white text-center">
          Hire Me
        </h1>
        <p className="font-figtree text-white/90 text-center max-w-xl mt-4 text-lg">
          I’m available for full-stack and web development projects. I work with
          React, Next.js, Node.js, and modern JavaScript/TypeScript to build
          fast, reliable applications.
        </p>
      </div>

      <section className="w-full mt-12 max-w-2xl">
        <h2 className="font-gloock text-heading1 font-bold mb-4">
          Let’s work together
        </h2>
        <p className="font-figtree text-body text-gray-600 dark:text-gray-300 mb-6">
          Whether you need a new product, an existing app improved, or technical
          guidance, get in touch. I’m happy to discuss scope, timeline, and how I
          can help.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#contact-section"
            className="inline-flex items-center justify-center rounded-lg bg-[#458a4e] hover:bg-[#185c20] text-white font-medium px-6 py-3 font-figtree transition-colors"
          >
            Get in touch
          </Link>
          <a
            href="mailto:surenhembram97@gmail.com"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#458a4e] text-[#458a4e] hover:bg-[#458a4e] hover:text-white font-medium px-6 py-3 font-figtree transition-colors dark:border-[#6ee7a3] dark:text-[#6ee7a3] dark:hover:bg-[#6ee7a3] dark:hover:text-gray-900"
          >
            Email me
          </a>
        </div>
      </section>
    </main>
  );
}
