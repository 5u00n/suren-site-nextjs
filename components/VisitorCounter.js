"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setError(true));
  }, []);

  if (error) return null;
  if (count === null) return <span className="text-sm text-muted-foreground">—</span>;

  return (
    <span className="text-sm text-muted-foreground">
      {count.toLocaleString()} visitors
    </span>
  );
}
