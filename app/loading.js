export default function Loading() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700" />
        <p className="font-figtree text-sm text-gray-500 dark:text-gray-400">
          Loading…
        </p>
      </div>
    </div>
  );
}
