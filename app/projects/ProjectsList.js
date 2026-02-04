"use client";

import React, { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowDownAZ, Star, Calendar, Filter } from "lucide-react";

const SORT_OPTIONS = [
  { value: "recent", label: "Recent", icon: Calendar },
  { value: "stars", label: "Stars", icon: Star },
  { value: "name", label: "Name", icon: ArrowDownAZ },
];

function getLanguages(repos) {
  const set = new Set();
  repos.forEach((r) => r.language && set.add(r.language));
  return Array.from(set).sort();
}

function sortRepos(repos, sortBy) {
  const copy = [...repos];
  if (sortBy === "recent") {
    copy.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  } else if (sortBy === "stars") {
    copy.sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0));
  } else if (sortBy === "name") {
    copy.sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
  }
  return copy;
}

export function ProjectsList({ repos }) {
  const [sortBy, setSortBy] = useState("recent");
  const [filterLanguage, setFilterLanguage] = useState(null);

  const languages = useMemo(() => getLanguages(repos), [repos]);

  const processed = useMemo(() => {
    let list = sortRepos(repos, sortBy);
    if (filterLanguage) {
      list = list.filter((r) => r.language === filterLanguage);
    }
    return list;
  }, [repos, sortBy, filterLanguage]);

  const featured = processed.slice(0, 2);
  const rest = processed.slice(2);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden />
          <span className="font-figtree text-sm font-medium text-gray-700 dark:text-gray-300">
            Sort:
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Sort projects">
            {SORT_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const isActive = sortBy === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSortBy(opt.value)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-figtree transition-colors ${
                    isActive
                      ? "bg-[#458a4e] text-white dark:bg-emerald-600"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-figtree text-sm font-medium text-gray-700 dark:text-gray-300">
            Language:
          </span>
          <button
            type="button"
            onClick={() => setFilterLanguage(null)}
            className={`rounded-full px-3 py-1 text-sm font-figtree transition-colors ${
              filterLanguage === null
                ? "bg-[#458a4e] text-white dark:bg-emerald-600"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            All
          </button>
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setFilterLanguage(lang)}
              className={`rounded-full px-3 py-1 text-sm font-figtree transition-colors ${
                filterLanguage === lang
                  ? "bg-[#458a4e] text-white dark:bg-emerald-600"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {featured.length >= 1 && (
        <section className="mb-12">
          <h2 className="font-gloock text-heading2 font-bold mb-6 text-gray-900 dark:text-white">
            Featured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((repo) => (
              <ProjectCard key={repo.html_url} repo={repo} featured />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-gloock text-heading2 font-bold mb-6 text-gray-900 dark:text-white">
          All projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((repo) => (
            <ProjectCard key={repo.html_url} repo={repo} />
          ))}
        </div>
      </section>
    </>
  );
}
