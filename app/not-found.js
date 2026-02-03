import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="font-gloock text-heading1 text-gray-900 dark:text-white mb-2">
        404
      </h1>
      <p className="font-figtree text-body text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-[#458a4e] hover:bg-[#185c20] text-white font-medium px-6 py-3 font-figtree transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
