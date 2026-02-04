import React from "react";
import Link from "next/link";
import { fetchGitHubRepos } from "@/lib/github";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ProjectsList } from "./ProjectsList";

export const metadata = {
  title: "Projects | Suren Hembram",
  description:
    "Open source and personal projects by Suren Hembram — Full Stack Web Development, React, Next.js, Node.js.",
};

export const revalidate = 3600;

function uniqueLanguages(repos) {
  const langs = new Set();
  repos.forEach((r) => r.language && langs.add(r.language));
  return langs.size;
}

export default async function ProjectsPage() {
  let repos = [];
  let error = null;

  try {
    repos = await fetchGitHubRepos();
  } catch (e) {
    error = e.message;
  }

  const repoCount = repos.length;
  const languageCount = uniqueLanguages(repos);

  return (
    <main className="relative mx-auto flex flex-col items-center lg:max-w-[1280px] w-full min-h-screen">
      <section className="relative w-full overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-[#3e6d32be] to-[#09add6b2] dark:from-[#2d5c38] dark:to-[#1e3d28] min-h-[320px] flex flex-col items-center justify-center">
          <BackgroundBeams className="absolute inset-0 h-full w-full opacity-60" />
          <div className="relative z-10 flex flex-col items-center justify-center p-10 text-center">
            <h1 className="font-gloock text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Projects
            </h1>
            <p className="font-figtree text-lg md:text-xl text-white/90 mt-3 max-w-xl">
              Open source and personal work from my GitHub.
            </p>
            {repoCount > 0 && (
              <p className="font-figtree text-sm text-white/80 mt-2">
                {repoCount} repo{repoCount !== 1 ? "s" : ""} · {languageCount} language{languageCount !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="w-full px-4 md:px-16 py-12">
        {error && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 p-6 text-amber-800 dark:text-amber-200 font-figtree">
            <p>Unable to load projects right now. ({error})</p>
            <p className="text-sm mt-2">
              You can view them on{" "}
              <a
                href="https://github.com/5u00n"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        )}

        {!error && repos.length === 0 && (
          <p className="text-gray-600 dark:text-gray-400 font-figtree">
            No projects to show yet.
          </p>
        )}

        {!error && repos.length > 0 && <ProjectsList repos={repos} />}
      </div>
    </main>
  );
}
