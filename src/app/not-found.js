import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      <Navbar />

      {/* Background Orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/30 via-rose-200/30 to-orange-200/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🌸</span>
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-10 max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Oops! The page you&apos;re looking for seems to have wandered off.
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 bg-white/80 border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            View Portfolio
          </Link>
        </div>

        {/* Fun suggestion */}
        <p className="mt-12 text-xs text-gray-400">
          Or try one of these:
          <Link href="/about" className="text-rose-400 hover:text-rose-500 ml-1">About</Link>
          <span className="mx-1">·</span>
          <Link href="/beyond" className="text-rose-400 hover:text-rose-500">Beyond</Link>
        </p>
      </div>
    </div>
  );
}
