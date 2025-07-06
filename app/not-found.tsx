export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-lg">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/"
        className="px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 transition font-semibold"
      >
        Go Home
      </a>
    </div>
  );
} 