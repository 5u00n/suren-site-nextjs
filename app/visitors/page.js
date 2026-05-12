import { getVisitorStats } from "@/lib/visitorStore";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Visitor Stats | Suren Hembram Portfolio",
  description: "Live visitor statistics for total and unique visits.",
};

export default async function VisitorsPage() {
  const stats = await getVisitorStats();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 md:px-8">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Visitor Stats</h1>
      <p className="mt-3 text-muted-foreground">
        Local JSON-based tracking for total and unique visitors.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <article className="rounded-lg border p-6">
          <h2 className="text-sm font-medium text-muted-foreground">Total Visits</h2>
          <p className="mt-2 text-3xl font-semibold">{stats.totalVisits.toLocaleString()}</p>
        </article>
        <article className="rounded-lg border p-6">
          <h2 className="text-sm font-medium text-muted-foreground">Unique Visitors</h2>
          <p className="mt-2 text-3xl font-semibold">{stats.uniqueVisits.toLocaleString()}</p>
        </article>
      </section>

      <p className="mt-6 text-sm text-muted-foreground">
        Last updated: {stats.updatedAt ? new Date(stats.updatedAt).toLocaleString() : "Not available yet"}
      </p>
    </main>
  );
}
