"use client";

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Navbar from "@/components/Navbar";
import HeroOrbit from "@/components/HeroOrbit";
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

  return (
    <div className="min-h-screen site-surface relative overflow-hidden">
      <Navbar />

      {/* Main Content */}
      <div className="page-shell relative z-10 flex min-h-screen flex-col items-center">
        <section aria-labelledby="home-title" className="mb-10 grid w-full max-w-5xl items-center gap-6 md:mb-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 lg:py-6">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-rose-600">AI-Native Software Engineer</p>
            <h1 id="home-title" className="font-display text-4xl leading-[1.1] text-stone-900 sm:text-5xl lg:text-[3.25rem]">{personalInfo.name}</h1>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-stone-600 lg:mx-0 md:text-base md:leading-8">I build AI products and reliable production systems. From creative tools used by 10M+ creators at CyberLink to the brand I run, I turn ideas into useful, thoughtful experiences.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/portfolio" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-rose-500 px-5 text-sm font-medium text-white transition-colors hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400">View projects <span aria-hidden="true">→</span></Link>
              <a href="/YuChen_Liu_Resume.pdf" download="YuChen_Liu_Resume.pdf" className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm text-stone-600 transition-colors hover:bg-white hover:text-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400">Download resume <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <HeroOrbit />
        </section>

        {/* Featured Projects */}
        <div className="w-full max-w-5xl animate-fade-in mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <p className="section-label mb-3">
              Featured
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-2">
              Selected Projects
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Selected work in product engineering, reliable systems, and applied research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
            {[
              {
                id: "myedit-suite",
                title: "MyEdit & MyEdit Business",
                role: "Product Engineering",
                summary: "Building AI image, audio, and video experiences for individual creators and business teams at CyberLink.",
                outcome: "10M+ creators · reporting effort cut by 86%",
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
                role: "Platform Engineering",
                summary: "A five-language rental platform built and operated with AI agents, automated release checks, and resilient catalog delivery.",
                outcome: "Solo build · live in production",
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
                outcome: "Published at ACIIDS 2026",
                image: thesis.image,
                tags: ["SRv6", "SDN", "Visualization"],
                links: [{ label: "Explore Dashboard", href: "/srv6-proa" }],
              },
            ].map((project) => (
              <article
                key={project.id}
                className="surface-card group flex h-full flex-col overflow-hidden transition-shadow duration-200"
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
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-rose-600">
                    {project.role}
                  </p>
                  <h3 className="font-display mb-2 min-h-[2.75rem] text-lg leading-snug text-stone-900">
                    {project.title}
                  </h3>
                  <p className="mb-2 text-[13px] leading-6 text-stone-600">
                    {project.summary}
                  </p>
                  <p className="mb-5 text-xs leading-5 text-stone-500">
                    {project.outcome}
                  </p>
                  <div className="mb-5 mt-auto flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-rose-50 px-2 py-1 text-[11px] font-medium text-rose-600">
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
        <footer className="mt-auto flex w-full max-w-5xl flex-col items-center gap-3 border-t border-stone-200/70 pt-6 pb-4 md:flex-row md:justify-between">
          <p className="text-xs tracking-wide text-stone-600">
            © 2026 Yu-Chen (Cindy) Liu · Taipei, Taiwan
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-stone-600">
            <li><a href={`mailto:${personalInfo.email}`} className="inline-flex min-h-11 items-center hover:text-rose-600">Email</a></li>
            <li><a href="https://github.com/yuchen-land" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-rose-600">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/yuchenliu0401/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-rose-600">LinkedIn</a></li>
            <li><a href="/YuChen_Liu_Resume.pdf" download="YuChen_Liu_Resume.pdf" className="inline-flex min-h-11 items-center hover:text-rose-600">Resume</a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
