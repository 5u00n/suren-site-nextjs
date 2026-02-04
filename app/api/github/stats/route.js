import { fetchGitHubUser, fetchGitHubContributions } from "@/lib/github";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function lastYearRange() {
  const to = new Date();
  const from = new Date(to);
  from.setFullYear(from.getFullYear() - 1);
  return {
    from: from.toISOString(),
    to: to.toISOString(),
  };
}

export async function GET() {
  try {
    const [user, contributions] = await Promise.all([
      fetchGitHubUser(),
      fetchGitHubContributions(lastYearRange()),
    ]);

    return Response.json({
      user: {
        login: user.login,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
      },
      contributions: contributions
        ? {
            totalLastYear: contributions.totalContributions,
            weeks: contributions.weeks,
          }
        : null,
    });
  } catch (err) {
    return Response.json(
      { error: err.message || "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
