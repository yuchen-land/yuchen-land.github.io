"use client";

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/beyond", label: "Beyond" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/70 shadow-sm border-b border-white/50"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "py-2.5" : "py-4"
        }`}
      >
        {/* Left: Mobile Menu Button + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-rose-600 hover:bg-rose-50/80 transition-all duration-300"
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo/Name */}
          <Link href="/" className="group flex items-center gap-2">
            <div
              className={`relative rounded-full overflow-hidden transition-all duration-500 ${
                isScrolled ? "w-5 h-5" : "w-6 h-6"
              }`}
            >
              <ExportedImage
                src="/icon.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <span
              className={`font-medium bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-transparent bg-clip-text group-hover:opacity-80 transition-all duration-500 ${
                isScrolled ? "text-base" : "text-lg"
              }`}
            >
              Cindy
            </span>
          </Link>
        </div>

        {/* Right: Navigation Links + Action Icons */}
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-rose-600"
                    : "text-gray-600 hover:text-rose-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Separator - Desktop Only */}
          <div className="hidden sm:block w-px h-5 bg-gray-200/80"></div>

          {/* Action Icons */}
          <div className="flex items-center gap-1 sm:gap-0.5">
            {/* Email */}
            <a
              href="mailto:yuchen880401@gmail.com"
              className="w-9 h-9 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100/60 transition-all duration-200"
              aria-label="Email"
              title="Email"
            >
              <svg
                className="w-[18px] h-[18px] sm:w-[15px] sm:h-[15px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yuchen-land"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100/60 transition-all duration-200"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg className="w-[18px] h-[18px] sm:w-[15px] sm:h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yuchenliu0401/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100/60 transition-all duration-200"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg className="w-[18px] h-[18px] sm:w-[15px] sm:h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Download Resume */}
            <a
              href="/YuChen_Liu_Resume.pdf"
              download="YuChen_Liu_Resume.pdf"
              className="w-9 h-9 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100/60 transition-all duration-200"
              aria-label="Resume"
              title="Download Resume"
            >
              <svg
                className="w-[18px] h-[18px] sm:w-[15px] sm:h-[15px]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="backdrop-blur-xl bg-white/80 border-t border-white/50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-rose-50/80 text-rose-600"
                    : "text-gray-600 hover:text-rose-600 hover:bg-rose-50/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
