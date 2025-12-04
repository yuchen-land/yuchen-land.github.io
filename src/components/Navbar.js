"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/80 shadow-md border-b border-pink-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="group">
          <span className="text-lg font-medium bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 text-transparent bg-clip-text group-hover:opacity-80 transition-opacity">
            Cindy
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm text-gray-600 hover:text-rose-600 transition-colors font-light tracking-[0.01em]"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-sm text-gray-600 hover:text-rose-600 transition-colors font-light tracking-[0.01em]"
          >
            Portfolio
          </Link>

          {/* CTA Button - Contact Me */}
          <a
            href="mailto:yuchen880401@gmail.com"
            className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-6 py-2 text-sm font-light tracking-[0.01em] hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
