import React from "react";
import Link from "next/link";
import { fetchGitHubRepos } from "@/lib/github";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
  title: "Projects | Suren Hembram",
  description:
    "Open source and personal projects by Suren Hembram — Full Stack Web Development, React, Next.js, Node.js.",
};

export const revalidate = 3600;

export default async function ProjectsPage() {
  let repos = [];
  let error = null;

  try {
    repos = await fetchGitHubRepos();
  } catch (e) {
    error = e.message;
  }

  return (
    <main className="mx-auto flex flex-col items-center sm:items-start lg:max-w-[1280px] w-full">
      <div className="relative flex w-full flex-col items-center justify-center shadow-lg lg:h-[280px] bg-gradient-to-tr from-[#3e6d32be] to-[#09add6b2] rounded-lg">
        <div className="absolute z-10 flex flex-col items-center justify-center rounded-lg bg-opacity-50 p-10">
          <h1 className="relative z-10 text-center font-gloock text-title text-white">
            Projects
          </h1>
          <p className="relative z-10 text-center font-figtree text-white/90 mt-2 max-w-xl">
            Open source and personal projects from my GitHub.
          </p>
        </div>
      </div>

      <div className="w-full px-4 md:px-16 py-12">
        {error && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 p-4 text-amber-800 dark:text-amber-200">
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

        {!error && repos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <ProjectCard key={repo.html_url} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
