import React from "react";
import Link from "next/link";
import Timeline from "./Timeline";

export const metadata = {
  title: "Blog | Suren Hembram",
  description:
    "Life, projects, and journey notes by Suren Hembram — EMS, EduSoftHub, AWR and more.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto flex flex-col items-center sm:items-start lg:max-w-[1280px] w-full">
      <div className="relative flex w-full flex-col items-center justify-center shadow-lg lg:min-h-[320px] bg-gradient-to-tr from-[#3c5c46] to-[#09add6b2] rounded-lg p-10">
        <h1 className="font-gloock text-title text-white text-center">
          Blogs / Journey
        </h1>
        <p className="font-figtree text-white/90 text-center max-w-xl mt-4 text-lg">
          My life, what I’m working on, and new things I’m learning — shared here.
        </p>
        <p className="font-figtree text-white/80 text-center max-w-md mt-2 text-sm">
          EMS, EduSoftHub, AWR and more. Timeline of projects and updates below.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-white/80 text-white hover:bg-white/10 font-medium px-6 py-3 font-figtree transition-colors"
        >
          Back to home
        </Link>
      </div>

      <section className="w-full mt-12 sm:mt-16 px-4 sm:px-6">
        <h2 className="font-gloock text-heading2 text-neutral-900 dark:text-white mb-2">
          Timeline
        </h2>
        <p className="font-figtree text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl">
          Projects and initiatives I’ve worked on or am building — past and current.
        </p>
        <Timeline />
      </section>
    </main>
  );
}
