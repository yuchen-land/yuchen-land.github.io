"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Left: Mobile Menu Button + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-all duration-300"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo/Name */}
          <Link href="/" className="group">
            <span className="text-lg font-medium bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 text-transparent bg-clip-text group-hover:opacity-80 transition-opacity">
              Cindy
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 md:gap-8">
          <Link
            href="/about"
            className="hidden sm:block text-sm text-gray-600 hover:text-rose-600 transition-colors font-light tracking-[0.01em]"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="hidden sm:block text-sm text-gray-600 hover:text-rose-600 transition-colors font-light tracking-[0.01em]"
          >
            Portfolio
          </Link>

          {/* Action Icons */}
          <div className="flex items-center gap-1.5 md:gap-2">
            {/* Email */}
            <a
              href="mailto:yuchen880401@gmail.com"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-all duration-300 group"
              aria-label="Email"
              title="Email"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yuchen-land"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-700 hover:bg-gray-50 transition-all duration-300 group"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yuchenliu0401/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Download Resume */}
            <a
              href="/YuChen_Liu_Resume.pdf"
              download="YuChen_Liu_Resume.pdf"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 group"
              aria-label="Resume"
              title="Download Resume"
            >
              <span className="material-symbols-outlined text-xl leading-none">article_person</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden backdrop-blur-md bg-white/90 border-b border-pink-200/50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-gray-600 hover:text-rose-600 transition-colors font-light tracking-[0.01em] py-2 px-3 rounded-lg hover:bg-rose-50"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-gray-600 hover:text-rose-600 transition-colors font-light tracking-[0.01em] py-2 px-3 rounded-lg hover:bg-rose-50"
            >
              Portfolio
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
