const GITHUB_USER = "5u00n";
const REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`;
const USER_URL = `https://api.github.com/users/${GITHUB_USER}`;
const GITHUB_GRAPHQL = "https://api.github.com/graphql";

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

/**
 * Fetches GitHub user profile (public_repos, followers, following, etc.).
 * @param {{ next?: { revalidate?: number } }} [options]
 * @returns {Promise<{ public_repos: number, followers: number, following: number, login: string, avatar_url?: string }>}
 */
export async function fetchGitHubUser(options = {}) {
  const headers = { Accept: "application/vnd.github.v3+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(USER_URL, {
    headers,
    next: { revalidate: 3600 },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return {
    login: data.login,
    public_repos: data.public_repos ?? 0,
    followers: data.followers ?? 0,
    following: data.following ?? 0,
    avatar_url: data.avatar_url,
  };
}

/**
 * Fetches contribution calendar for the last year via GraphQL.
 * Requires GITHUB_TOKEN with read:user scope.
 * @param {{ from: string, to: string }} dateRange - ISO date strings
 * @returns {Promise<{ totalContributions: number, weeks: Array<{ contributionDays: Array<{ date: string, contributionCount: number, weekday: number }> }> } | null>}
 */
export async function fetchGitHubContributions(dateRange) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                weekday
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        login: GITHUB_USER,
        from: dateRange.from,
        to: dateRange.to,
      },
    }),
    next: { revalidate: 86400 },
  });

  if (!res.ok) return null;

  const json = await res.json();
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) return null;

  return {
    totalContributions: calendar.totalContributions ?? 0,
    weeks: calendar.weeks ?? [],
  };
}
