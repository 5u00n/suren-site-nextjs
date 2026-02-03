"use client";

import React from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="font-gloock text-heading1 text-gray-900 dark:text-white mb-2">
        Something went wrong
      </h1>
      <p className="font-figtree text-body text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        An error occurred. You can try again or return home.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="rounded-lg bg-[#458a4e] hover:bg-[#185c20] text-white font-medium px-6 py-3 font-figtree transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium px-6 py-3 font-figtree transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
