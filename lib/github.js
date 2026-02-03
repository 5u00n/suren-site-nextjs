const GITHUB_USER = "5u00n";
const REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`;

/**
 * Fetches public repos for the portfolio GitHub user.
 * Uses optional GITHUB_TOKEN for higher rate limits.
 * @param {{ next?: { revalidate?: number } }} [options] - Next.js fetch options (e.g. revalidate)
 * @returns {Promise<Array<{ name: string, description: string | null, html_url: string, language: string | null, stargazers_count: number, updated_at: string, topics?: string[] }>>}
 */
export async function fetchGitHubRepos(options = {}) {
  const headers = {};
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  headers.Accept = "application/vnd.github.v3+json";

  const res = await fetch(REPOS_URL, {
    headers,
    next: { revalidate: 3600 },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      name: repo.name,
      description: repo.description ?? null,
      html_url: repo.html_url,
      language: repo.language ?? null,
      stargazers_count: repo.stargazers_count ?? 0,
      updated_at: repo.updated_at,
      topics: repo.topics ?? [],
    }));
}
