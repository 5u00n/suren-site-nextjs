import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Blog | Suren Hembram",
  description:
    "Blog posts and journey notes by Suren Hembram — coming soon.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto flex flex-col items-center sm:items-start lg:max-w-[1280px] w-full">
      <div className="relative flex w-full flex-col items-center justify-center shadow-lg lg:min-h-[400px] bg-gradient-to-tr from-[#3c5c46] to-[#09add6b2] rounded-lg p-10">
        <h1 className="font-gloock text-title text-white text-center">
          Blogs / Journey
        </h1>
        <p className="font-figtree text-white/90 text-center max-w-xl mt-4 text-lg">
          Blog posts and journey notes coming soon.
        </p>
        <p className="font-figtree text-white/80 text-center max-w-md mt-2 text-sm">
          I’ll share thoughts on development, projects, and learning here.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-white/80 text-white hover:bg-white/10 font-medium px-6 py-3 font-figtree transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
