"use client";

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Navbar from "@/components/Navbar";
import TypewriterText from "@/components/TypewriterText";
import {
  personalInfo,
  internalLinks,
  projects,
  thesis,
} from "@/data/data";
import { useState } from "react";

// Image with loading skeleton
function ImageWithSkeleton({ src, alt, width, height, className = "", onError }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {isLoading && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-rose-100 to-pink-100">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-8 h-8 text-rose-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
        </div>
      )}
      {!hasError && (
        <ExportedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={() => setIsLoading(false)}
          onError={(e) => {
            setHasError(true);
            setIsLoading(false);
            if (onError) onError(e);
          }}
        />
      )}
    </div>
  );
}

export default function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#fff1f2_0%,_#fafafa_45%,_#fafafa_100%)] relative overflow-hidden">
      <Navbar />

      {/* Soft Gradient Orb - Single optimized blob */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-pink-200/30 via-rose-200/30 to-orange-200/30 rounded-full blur-3xl animate-blob-slow"></div>

      {/* Soft Light Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,182,193,0.15),transparent_60%)]"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 md:py-16 pt-32 md:pt-40">
        {/* Elegant Avatar */}
        <div className="mb-12 animate-fade-in-down">
          <div className="relative group">
            {/* Subtle Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-200/40 via-pink-200/40 to-rose-200/40 rounded-full blur-2xl group-hover:from-rose-200/60 group-hover:via-pink-200/60 group-hover:to-rose-200/60 transition-all duration-300"></div>

            {/* Refined Border Ring */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-rose-300/40 via-pink-200/30 to-rose-300/40 rounded-full"></div>

            {/* Avatar Container */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-white p-0.5 group-hover:scale-105 transition-all duration-300 shadow-[0_4px_24px_rgba(251,207,232,0.35)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                {!imgError ? (
                  <ExportedImage
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={144}
                    height={144}
                    priority
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-300 to-pink-300 text-white text-5xl md:text-6xl font-light">
                    {personalInfo.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in-up space-y-6 max-w-3xl mx-auto px-4 antialiased">
          {/* Name */}
          <div className="relative mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 text-transparent bg-clip-text tracking-tight leading-tight font-[family-name:var(--font-outfit)]">
              {personalInfo.name}
            </h1>
            {/* Elegant Underline */}
            <div className="mt-3 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>

          {/* Typewriter Title */}
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-50/80 border border-rose-100">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
              <span className="text-sm md:text-base text-rose-600 font-medium tracking-wide font-[family-name:var(--font-comfortaa)]">
                <TypewriterText
                  texts={[
                    "Software Engineer",
                    "Pâtissier"
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={2500}
                />
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-xl mx-auto pt-2">
            <p className="text-base md:text-lg text-gray-500 leading-relaxed tracking-normal font-[family-name:var(--font-caveat)]">
              {personalInfo.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            {/* Portfolio Button */}
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-6 py-2.5 text-sm font-medium tracking-wide hover:from-rose-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
              Portfolio
            </Link>

            {/* About — soft secondary */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 bg-rose-50 text-rose-600 rounded-full px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-rose-100 hover:scale-105 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 text-rose-500 group-hover:text-rose-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              About
            </Link>

            {/* Download Resume — ghost tertiary */}
            <a
              href="/YuChen_Liu_Resume.pdf"
              download="YuChen_Liu_Resume.pdf"
              className="group inline-flex items-center gap-2 text-gray-500 px-4 py-2.5 text-sm font-medium tracking-wide hover:text-rose-600 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-rose-500 group-hover:translate-y-0.5 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>


        {/* Featured Projects */}
        <div className="w-full max-w-4xl animate-fade-in px-4 mb-20">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-rose-500/80 tracking-widest uppercase mb-3">
              Featured
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Selected Projects
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Projects showcasing full-stack development and innovative problem-solving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                id: "myedit-suite",
                title: "MyEdit & MyEdit Business",
                role: "Product Engineering",
                summary: "Building AI image, audio, and video experiences for individual creators and business teams at CyberLink.",
                image: projects.find((project) => project.id === 1).image,
                tags: ["React", "Node.js", "UI/UX"],
                links: [
                  { label: "MyEdit", href: projects.find((project) => project.id === 1).demo },
                  { label: "Business", href: projects.find((project) => project.id === 11).demo },
                ],
              },
              {
                id: "holly-world",
                title: "Holly World — Costume Rental Platform",
                role: "Full-stack Development",
                summary: "A five-language rental platform built and operated with AI agents, automated release checks, and resilient catalog delivery.",
                image: projects.find((project) => project.id === 10).image,
                tags: ["Next.js", "TypeScript", "PostgreSQL"],
                links: [
                  { label: "View Project", href: "/projects/holly-world-ecommerce" },
                  { label: "Live Site", href: projects.find((project) => project.id === 10).demo },
                ],
              },
              {
                id: "thesis-srv6-demo",
                title: "SRv6 PROA Dashboard",
                role: "Research & Visualization",
                summary: "Turning networking research into an interactive exploration of adaptive routing, topology, and SRv6 paths.",
                image: thesis.image,
                tags: ["SRv6", "SDN", "Visualization"],
                links: [{ label: "Explore Dashboard", href: "/srv6-proa" }],
              },
            ].map((project) => (
              <article
                key={project.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/65 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100/50"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-rose-50">
                  <ImageWithSkeleton
                    src={project.image}
                    alt={project.title}
                    width={480}
                    height={270}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-rose-500">
                    {project.role}
                  </p>
                  <h3 className="mb-2 min-h-[2.75rem] text-base font-semibold leading-snug text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-xs leading-relaxed text-gray-500">
                    {project.summary}
                  </p>
                  <div className="mb-5 mt-auto flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-rose-50 px-2 py-1 text-[10px] font-medium text-rose-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-rose-100/70 pt-3">
                    {project.links.map((link) => {
                      const external = link.href.startsWith("https://");
                      const linkClass = "inline-flex min-h-10 md:min-h-8 items-center gap-1.5 text-xs font-medium text-gray-700 transition-colors hover:text-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400";
                      return external ? (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {link.label}<span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <Link key={link.label} href={link.href} className={linkClass}>
                          {link.label}<span aria-hidden="true">→</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <span>View All Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer - Minimal */}
        <div className="mt-auto pt-8 pb-4">
          <p className="text-center text-gray-400 text-xs tracking-wide">
            © 2026 Yu-Chen (Cindy) Liu
          </p>
        </div>
      </div>
    </div>
  );
}
