"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Star, Circle } from "lucide-react";

const LANGUAGE_COLORS = {
  JavaScript: "from-amber-400 to-yellow-600",
  TypeScript: "from-blue-500 to-blue-700",
  Python: "from-emerald-500 to-teal-700",
  "C++": "from-pink-500 to-rose-600",
  Java: "from-orange-500 to-amber-600",
  PHP: "from-violet-500 to-purple-700",
  "C#": "from-green-600 to-emerald-800",
  Ruby: "from-red-500 to-rose-600",
  Go: "from-cyan-400 to-teal-600",
  Rust: "from-gray-600 to-gray-800",
  Swift: "from-orange-400 to-orange-600",
  Kotlin: "from-purple-500 to-indigo-600",
  Vue: "from-green-400 to-emerald-600",
  HTML: "from-orange-400 to-red-500",
  CSS: "from-blue-400 to-indigo-500",
  SCSS: "from-pink-400 to-rose-500",
};

function getGradientClass(language) {
  return LANGUAGE_COLORS[language] || "from-[#458a4e] to-[#2d5c38] dark:from-emerald-600 dark:to-emerald-800";
}

/**
 * @param {{ name: string, description: string | null, html_url: string, language: string | null, stargazers_count: number, updated_at: string, topics?: string[] }} repo
 * @param {{ featured?: boolean }} [options]
 */
export function ProjectCard({ repo, featured = false }) {
  const updated = repo.updated_at
    ? new Date(repo.updated_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const gradientClass = getGradientClass(repo.language);

  const card = (
    <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#458a4e]/30 dark:hover:border-emerald-500/30 h-full flex flex-col overflow-hidden">
      <div
        className={`h-2 w-full bg-gradient-to-r ${gradientClass}`}
        aria-hidden
      />
      <CardHeader className="pb-2">
        <CardTitle className={`font-gloock dark:text-white ${featured ? "text-2xl" : "text-xl"}`}>
          {repo.name}
        </CardTitle>
        {repo.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-1 font-figtree">
            {repo.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="flex-1 pt-0 space-y-2">
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400 font-figtree">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span
                className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${gradientClass}`}
                aria-hidden
              />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {repo.stargazers_count}
            </span>
          )}
          {updated && <span>Updated {updated}</span>}
        </div>
        {repo.topics?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-figtree"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#458a4e] hover:text-[#185c20] dark:text-[#6ee7a3] dark:hover:text-[#86efac] font-figtree transition-colors"
          aria-label={`View ${repo.name} on GitHub`}
        >
          View on GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {card}
    </motion.div>
  );
}
