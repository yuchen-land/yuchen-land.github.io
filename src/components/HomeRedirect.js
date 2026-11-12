"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function HomeRedirect() {
  useEffect(() => {
    const timer = window.setTimeout(() => window.location.replace("/"), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="site-surface flex min-h-screen items-center justify-center px-6">
      <div className="max-w-sm text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-rose-500">404</p>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-800">Taking you home.</h1>
        <p role="status" className="mt-3 text-sm leading-7 text-stone-500">This page is no longer available. You’ll be redirected to the homepage.</p>
        <Link href="/" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-stone-800 px-6 text-sm font-medium text-white">Go to homepage →</Link>
        <noscript><meta httpEquiv="refresh" content="2;url=/" /></noscript>
      </div>
    </main>
  );
}
