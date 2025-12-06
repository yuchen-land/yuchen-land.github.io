"use client";

import Link from "next/link";
import { projects, thesis } from "@/data/data";
import ProjectCard from "@/components/ProjectCard";
import AcademicCard from "@/components/AcademicCard";
import { useState } from "react";

export default function PortfolioContent() {
  const [selectedTag, setSelectedTag] = useState(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();

  // Filter projects based on selected tag
  const filteredFeatured = selectedTag
    ? featuredProjects.filter((p) => p.tags.includes(selectedTag))
    : featuredProjects;

  const filteredOther = selectedTag
    ? otherProjects.filter((p) => p.tags.includes(selectedTag))
    : otherProjects;

  return (
    <>
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-down">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 text-transparent bg-clip-text tracking-tight">
          My Portfolio
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
          A collection of projects showcasing my skills in full-stack development, UI/UX design, and problem-solving
        </p>
      </div>

      {/* Tag Filter */}
      <div className="mb-16 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Filter by Technology
          </h3>
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="text-xs text-rose-600 hover:text-rose-700 font-medium underline transition-colors"
            >
              Clear Filter
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg scale-105"
                  : "bg-white/70 border border-pink-200/50 text-gray-700 hover:bg-white/90 hover:border-pink-300/70"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      {filteredFeatured.length > 0 && (
        <section className="mb-24 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xl shadow-lg">
              ⭐
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 text-transparent bg-clip-text">
                Featured Projects
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {filteredFeatured.length} project{filteredFeatured.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {filteredFeatured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Academic & Research Section */}
      <section className="mb-24 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg">
            🎓
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
              Academic & Research
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Master&apos;s Thesis & Publications
            </p>
          </div>
        </div>
        <AcademicCard thesis={thesis} />
      </section>

      {/* Other Projects */}
      {filteredOther.length > 0 && (
        <section className="mb-24 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg">
              📂
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
                More Projects
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {filteredOther.length} project{filteredOther.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredOther.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredFeatured.length === 0 && filteredOther.length === 0 && selectedTag && (
        <div className="text-center py-20 animate-fade-in">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Projects Found</h3>
          <p className="text-gray-600 mb-8">
            No projects found with the {`"`}{selectedTag}{`"`} technology.
          </p>
          <button
            onClick={() => setSelectedTag(null)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-6 py-3 font-medium hover:scale-105 transition-transform"
          >
            Clear Filter
          </button>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-20 mb-10 text-center bg-gradient-to-r from-pink-100/70 to-rose-100/70 backdrop-blur-sm border border-pink-200/50 rounded-3xl p-12 shadow-lg animate-fade-in">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Let&apos;s Collaborate
        </h3>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto font-light">
          Interested in working together or want to discuss my projects in detail?
          <br />
          Feel free to reach out via email, GitHub, or LinkedIn!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:yuchen880401@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all shadow-md"
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
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white/70 border border-pink-200/50 text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-white/90 hover:scale-105 transition-all"
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
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
