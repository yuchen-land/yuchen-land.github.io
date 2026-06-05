"use client";

import Navbar from "@/components/Navbar";

export default function Srv6ProaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50">
      <Navbar />

      <main className="pt-20 md:pt-24 pb-10 px-4 md:px-6 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-indigo-500/80 tracking-widest uppercase mb-1">
              Interactive Demo
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              SRv6 PROA Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              SDN-based SRv6 adaptive path selection · PROA vs. traditional algorithms
            </p>
          </div>
          <a
            href="/srv6_proa_demo.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 self-start sm:self-auto bg-white/80 border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors"
          >
            Open in new tab
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>

        {/* Mobile notice */}
        <div className="md:hidden mb-3 flex items-start gap-2 text-xs text-gray-600 bg-amber-50/80 border border-amber-200/60 rounded-xl px-3 py-2.5">
          <svg className="w-4 h-4 flex-shrink-0 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            This dashboard is designed for desktop. Scroll horizontally to view it, or tap{" "}
            <b>Open in new tab</b> for the full experience.
          </span>
        </div>

        {/* Embedded demo — horizontal scroll on small screens */}
        <div className="overflow-x-auto rounded-2xl border border-white/60 shadow-sm bg-white/40 backdrop-blur-sm">
          <iframe
            src="/srv6_proa_demo.html"
            title="SRv6 PROA Dashboard"
            className="w-full min-w-[1100px] md:min-w-0 h-[calc(100vh-12rem)] min-h-[640px] rounded-2xl"
            style={{ border: "none" }}
          />
        </div>
      </main>
    </div>
  );
}
