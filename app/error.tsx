"use client"

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-6 text-lg">{error.message || "An unexpected error occurred."}</p>
      <button
        className="px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 transition font-semibold"
        onClick={() => reset()}
      >
        Refresh
      </button>
    </div>
  );
} 