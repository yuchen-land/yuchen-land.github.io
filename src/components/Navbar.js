"use client";

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") { setIsMobileMenuOpen(false); menuButtonRef.current?.focus(); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  const contactIcons = {
    Email: "M3 5h18v14H3zM3 5l9 7 9-7",
    GitHub: "M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 00-1-3c3-.3 6-1.5 6-6a5 5 0 00-1.5-3.5 4.5 4.5 0 000-3.5s-1.5-.5-4 1a13 13 0 00-7 0c-2.5-1.5-4-1-4-1a4.5 4.5 0 000 3.5A5 5 0 002 9c0 4.5 3 5.7 6 6a3.5 3.5 0 00-1 3v4",
    LinkedIn: "M4 9v11M4 4v.5M10 20V9h4v2c1-3 6-3 6 2v7M10 9v11",
  };

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    // { href: "/beyond", label: "Beyond" }, // hidden for now
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => pathname === href || (href === "/portfolio" && (pathname.startsWith("/projects/") || pathname.startsWith("/srv6-proa")));

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/95 shadow-sm border-b border-stone-200/60"
          : "bg-white/80 backdrop-blur-xl border-b border-stone-200/40"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-6">
        {/* Left: Mobile Menu Button + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            ref={menuButtonRef}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="absolute right-4 top-2.5 md:hidden w-11 h-11 rounded-lg flex items-center justify-center text-gray-600 hover:text-rose-600 hover:bg-rose-50/80 transition-all duration-300"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
          <Link href="/" className="group flex min-h-11 items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400">
            <div
              className={`relative rounded-full overflow-hidden transition-all duration-500 ${
                "w-6 h-6"
              }`}
            >
              <ExportedImage
                src="/icon.png"
                alt="Logo"
                fill
                sizes="24px"
                unoptimized
                className="object-cover"
              />
            </div>
            <span
              className={`font-medium bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-transparent bg-clip-text group-hover:opacity-80 transition-all duration-500 ${
                "text-lg"
              }`}
            >
              Cindy
            </span>
          </Link>
        </div>

        {/* Right: Navigation Links + Action Icons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`inline-flex min-h-10 items-center rounded-lg px-3.5 text-[13px] font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400 ${
                  isActive(link.href)
                    ? "bg-rose-50 text-rose-600"
                    : "text-gray-600 hover:text-rose-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Separator - Desktop Only */}
          <div className="h-5 w-px bg-stone-200/80"></div>

          <div className="flex items-center gap-1">
            {[
              { label: "Email", href: "mailto:yuchen880401@gmail.com" },
              { label: "GitHub", href: "https://github.com/yuchen-land" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/yuchenliu0401/" },
            ].map(item => <a key={item.label} href={item.href} {...(item.href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label={item.label} title={item.label} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-500 transition-colors hover:bg-rose-50 hover:text-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400">
              <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={contactIcons[item.label]} /></svg>
            </a>)}
            <a href="/YuChen_Liu_Resume.pdf" download="YuChen_Liu_Resume.pdf" aria-label="Download resume" className="ml-2 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-rose-200/70 bg-rose-50/70 px-4 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400">
              <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H5v20h14V7l-5-5zM14 2v5h5M12 11v7m-3-3 3 3 3-3" /></svg>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile navigation is only mounted while open, keeping hidden links out of tab order. */}
      {isMobileMenuOpen && <div id="mobile-menu" className="md:hidden max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-stone-100 bg-white/95 px-5 pb-5 pt-3 shadow-lg backdrop-blur-xl">
        <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-widest text-stone-400">Explore</p>
        <div className="grid gap-1">
          {[{ href: "/", label: "Home" }, ...navLinks].map(link => <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} aria-current={pathname === link.href ? "page" : undefined} className={`flex min-h-11 items-center justify-between rounded-xl px-3 text-sm font-medium ${pathname === link.href ? "bg-rose-50 text-rose-600" : "text-stone-700 hover:bg-stone-50"}`}>{link.label}<span aria-hidden="true" className="text-stone-400">→</span></Link>)}
        </div>
        <div className="mt-3 border-t border-stone-100 pt-3">
          <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-widest text-stone-400">Connect</p>
          <div className="grid grid-cols-2 gap-2">
            {[{ label: "Email", href: "mailto:yuchen880401@gmail.com" }, { label: "GitHub", href: "https://github.com/yuchen-land" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/yuchenliu0401/" }].map(item => <a key={item.label} href={item.href} {...(item.href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})} onClick={() => setIsMobileMenuOpen(false)} className="flex min-h-11 items-center justify-between rounded-xl bg-stone-50 px-3 text-xs text-stone-600"><span className="flex items-center gap-2"><svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={contactIcons[item.label]} /></svg>{item.label}</span><span aria-hidden="true">↗</span></a>)}
            <a href="/YuChen_Liu_Resume.pdf" download="YuChen_Liu_Resume.pdf" onClick={() => setIsMobileMenuOpen(false)} className="flex min-h-11 items-center justify-between rounded-xl bg-rose-50 px-3 text-xs font-medium text-rose-600"><span className="flex items-center gap-2"><svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H5v20h14V7l-5-5zM14 2v5h5M12 11v7m-3-3 3 3 3-3" /></svg>Resume</span><span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </div>}
    </nav>
  );
}
