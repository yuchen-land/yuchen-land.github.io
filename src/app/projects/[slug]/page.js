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
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Project Not Found
          </h1>
          <p className="text-gray-500 mb-8 text-sm">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
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

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 xl:px-8 py-20 md:py-24 pt-32 md:pt-40">
        {/* Back Button - Subtle */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-12 group transition-colors"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Portfolio
        </Link>

        {/* Header - Premium Style */}
        <header className="mb-16 animate-fade-in-down">
          <p className="text-sm font-medium text-rose-500/80 tracking-widest uppercase mb-4">
            Project
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
            {doc.title}
          </h1>

          {/* Roles - Minimal Tags */}
          <div className="flex flex-wrap gap-2">
            {doc.roles.map((role) => (
              <span
                key={role}
                className="text-rose-400 text-xs px-2.5 py-1 bg-rose-50/80 rounded-lg"
              >
                {role}
              </span>
            ))}
          </div>
        </header>

        {/* Project Screenshots Carousel */}
        {doc.screenshots && doc.screenshots.length > 0 && (
          <section id="screenshots" className="mb-20 animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Screenshots
            </h2>
            <div className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-2xl p-5 md:p-6 shadow-sm">
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
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(doc.techStack).map(([category, items]) => (
              <div
                key={category}
                className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl p-4 shadow-sm"
              >
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <ul className="space-y-1.5">
                  {items.map((tech) => (
                    <li
                      key={tech}
                      className="text-sm text-gray-700"
                    >
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
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Key Features
          </h2>

          <div className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl p-5 shadow-sm">
            <ul className="space-y-3">
              {doc.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <svg className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="mb-20 animate-fade-in">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            My Roles
          </h2>

          <div className="flex flex-wrap gap-2">
            {doc.roles.map((role) => (
              <span
                key={role}
                className="bg-white/70 border border-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm font-medium shadow-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </section>

        {/* Links Section */}
        {doc.links && Object.keys(doc.links).length > 0 && (
          <section id="links" className="mb-20 animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Project Links
            </h2>

            <div className="flex flex-wrap gap-3">
              {Object.entries(doc.links).map(([linkType, url]) => (
                <a
                  key={linkType}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-white/70 border border-gray-200 text-gray-700 rounded-full px-5 py-2.5 text-sm font-medium hover:border-gray-300 hover:bg-white transition-all shadow-sm"
                >
                  <span className="capitalize">{linkType.replace(/([A-Z])/g, " $1").trim()}</span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
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

        {/* CTA Section - Refined */}
        <section className="mb-20 animate-fade-in">
          <div className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-2xl p-10 md:p-12 text-center shadow-sm">
            <p className="text-sm font-medium text-rose-500/80 tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Interested in this project?
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Want to discuss this project or learn more about my work? I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:yuchen880401@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send an email
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/80 border border-gray-200 text-gray-700 rounded-full px-6 py-2.5 text-sm font-medium hover:bg-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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
