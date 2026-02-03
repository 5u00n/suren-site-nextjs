import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Star, Circle } from "lucide-react";

/**
 * @param {{ name: string, description: string | null, html_url: string, language: string | null, stargazers_count: number, updated_at: string, topics?: string[] }} repo
 */
export function ProjectCard({ repo }) {
  const updated = repo.updated_at
    ? new Date(repo.updated_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <Card className="rounded-lg border bg-white dark:bg-gray-800/40 shadow-md transition-all hover:shadow-lg h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-gloock dark:text-white">
          {repo.name}
        </CardTitle>
        {repo.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-1">
            {repo.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="flex-1 pt-0 space-y-2">
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          {repo.language && (
            <span className="flex items-center gap-1">
              <Circle className="h-2 w-2 fill-current" />
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
                className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
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
          className="inline-flex items-center gap-2 text-sm font-medium text-[#458a4e] hover:text-[#185c20] dark:text-[#6ee7a3] dark:hover:text-[#86efac]"
          aria-label={`View ${repo.name} on GitHub`}
        >
          View on GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}
