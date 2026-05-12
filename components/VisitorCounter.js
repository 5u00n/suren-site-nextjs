"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function VisitorCounter() {
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to load visitor counts");
        }
        return res.json();
      })
      .then((data) => setCounts(data))
      .catch(() => setError(true));
  }, []);

  if (error) return null;
  if (counts === null) {
    return <span className="text-sm text-muted-foreground">—</span>;
  }

  return (
    <Link href="/visitors" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
      {counts.totalVisits.toLocaleString()} visits • {counts.uniqueVisits.toLocaleString()} unique visitors
    </Link>
  );
}
