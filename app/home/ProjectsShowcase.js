import React from "react";
import Link from "next/link";
import { fetchGitHubRepos } from "@/lib/github";
import { ProjectCard } from "@/components/ProjectCard";

const FEATURED_COUNT = 6;

export async function ProjectsShowcase() {
  let repos = [];

  try {
    const all = await fetchGitHubRepos();
    repos = all.slice(0, FEATURED_COUNT);
  } catch {
    repos = [];
  }

  if (repos.length === 0) {
    return (
      <div className="w-full mt-6 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center text-gray-600 dark:text-gray-400 font-figtree">
        <p>Projects will appear here. View all on the Projects page.</p>
        <Link
          href="/projects"
          className="inline-block mt-4 text-[#458a4e] hover:text-[#185c20] dark:text-[#6ee7a3] font-medium"
        >
          View All Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <ProjectCard key={repo.html_url} repo={repo} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[#458a4e] hover:text-[#185c20] dark:text-[#6ee7a3] dark:hover:text-[#86efac] font-medium font-figtree"
        >
          View all projects
        </Link>
      </div>
    </div>
  );
}
