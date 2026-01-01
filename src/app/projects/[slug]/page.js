"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import ScrollProgress from "@/components/ScrollProgress";
import TableOfContents from "@/components/TableOfContents";
import StarTimeline from "@/components/StarTimeline";
import StatsHighlight from "@/components/StatsHighlight";
import RelatedProjects from "@/components/RelatedProjects";
import { findDocBySlug, findProjectBySlug } from "@/utils/projectHelpers";
import { use } from "react";

export default function ProjectDocPage({ params }) {
  const resolvedParams = use(params);
  const doc = findDocBySlug(resolvedParams.slug);
  const project = findProjectBySlug(resolvedParams.slug);

  if (!doc) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project documentation you&apos;re looking for doesn&apos;t exist yet.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-8 py-3 hover:scale-105 transition-transform"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <ScrollProgress />
      <Navbar />
      <TableOfContents />

      {/* Main Content with side padding for TOC */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-24 pt-32 md:pt-40 xl:ml-[280px] xl:mr-auto xl:max-w-3xl 2xl:ml-auto 2xl:mr-auto 2xl:max-w-4xl">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-12 group font-medium transition-colors"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </Link>

        {/* Header */}
        <header className="mb-16 animate-fade-in-down">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 tracking-tight leading-tight">
            {doc.title}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mb-6"></div>

          {/* Roles */}
          <div className="flex flex-wrap gap-2">
            {doc.roles.map((role) => (
              <span
                key={role}
                className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-medium border border-rose-200"
              >
                {role}
              </span>
            ))}
          </div>
        </header>

        {/* Project Screenshots Carousel */}
        {doc.screenshots && doc.screenshots.length > 0 && (
          <section id="screenshots" className="mb-20 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="text-rose-500">📸</span> Project Screenshots
            </h2>
            <div className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-3xl p-6 md:p-8 shadow-lg">
              <ImageCarousel
                images={doc.screenshots}
                title={doc.title}
              />
            </div>
          </section>
        )}

        {/* Stats Highlight */}
        <StatsHighlight stats={doc.stats} />

        {/* STAR Timeline */}
        <StarTimeline star={doc.star} />

        {/* Tech Stack Section */}
        <section id="tech" className="mb-20 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-rose-500">⚙️</span> Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(doc.techStack).map(([category, items]) => (
              <div
                key={category}
                className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-800 mb-3 text-rose-600 capitalize text-sm">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <ul className="space-y-1.5">
                  {items.map((tech) => (
                    <li
                      key={tech}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-rose-400 rounded-full flex-shrink-0"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-20 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-rose-500">✨</span> Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            {doc.features.map((feature, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="text-rose-500 text-lg flex-shrink-0">✓</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="mb-20 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-rose-500">👤</span> My Roles
          </h2>

          <div className="flex flex-wrap gap-3">
            {doc.roles.map((role) => (
              <div
                key={role}
                className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-full px-6 py-3 text-sm font-medium text-rose-600 hover:bg-white/90 transition-all shadow-sm"
              >
                {role}
              </div>
            ))}
          </div>
        </section>

        {/* Links Section */}
        {doc.links && Object.keys(doc.links).length > 0 && (
          <section id="links" className="mb-20 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="text-rose-500">🔗</span> Project Links
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(doc.links).map(([linkType, url]) => (
                <a
                  key={linkType}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 capitalize mb-1">
                        {linkType.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <p className="text-xs text-gray-500 truncate max-w-[200px]">
                        {url.length > 40 ? url.substring(0, 40) + "..." : url}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-rose-500 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Related Projects */}
        <RelatedProjects
          currentProjectSlug={resolvedParams.slug}
          currentTags={project?.tags || []}
        />

        {/* CTA Section */}
        <section className="mb-20 animate-fade-in">
          <div className="backdrop-blur-sm bg-gradient-to-r from-pink-100/70 to-rose-100/70 border border-pink-200/50 rounded-3xl p-10 md:p-12 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in this project?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Want to discuss this project or learn more about my work? Feel
              free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:yuchen880401@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-8 py-3 font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                <svg
                  className="w-5 h-5"
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
                Contact Me
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/70 border border-pink-200/50 text-rose-600 rounded-full px-8 py-3 font-medium hover:bg-white/90 hover:scale-105 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
