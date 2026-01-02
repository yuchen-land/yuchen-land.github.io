"use client";

import Link from "next/link";
import { projects, thesis, tagCategories } from "@/data/data";
import ProjectCard from "@/components/ProjectCard";
import AcademicCard from "@/components/AcademicCard";
import { useState } from "react";

export default function PortfolioContent() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: true,
    languages: true,
    tools: true,
    firmware: true,
    specialization: true,
  });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  // Filter projects based on selected tags only
  const filterByTags = (projectList) => {
    if (selectedTags.length === 0) return projectList;
    return projectList.filter((p) =>
      selectedTags.some((tag) => p.tags.includes(tag))
    );
  };

  const filteredFeatured = filterByTags(featuredProjects);
  const filteredOther = filterByTags(otherProjects);

  // Check if thesis matches selected tags
  const thesisMatchesTag = selectedTags.length === 0
    ? true
    : selectedTags.some((tag) => thesis.tags.includes(tag));

  // Toggle category expansion
  const toggleCategory = (categoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  // Toggle tag selection (multi-select)
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all tags
  const clearTags = () => setSelectedTags([]);

  return (
    <>
      {/* Header - Premium Style */}
      <div className="text-center mb-16 animate-fade-in-down">
        <p className="text-sm font-medium text-rose-500/80 tracking-widest uppercase mb-4">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight mb-6">
          Selected Works
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
          A curated collection of projects showcasing expertise in full-stack development and design.
        </p>
      </div>

      {/* Tag Filter */}
      <div className="mb-16 animate-fade-in">
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer select-none py-3 px-4 rounded-lg hover:bg-gray-50/50 transition-colors">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">
              Filter by Technology {selectedTags.length > 0 && `(${selectedTags.length})`}
            </span>
            <svg
              className="w-4 h-4 text-gray-400 transition-transform duration-300 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          {/* Tag Categories */}
          <div className="space-y-3 pt-4">
            {/* Clear Button */}
            {selectedTags.length > 0 && (
              <div className="flex items-center gap-2 pb-3 border-b border-pink-200/20 px-4">
                <button
                  onClick={clearTags}
                  className="text-xs text-gray-500 hover:text-rose-600 transition-colors font-medium"
                >
                  Clear all
                </button>
              </div>
            )}

            {Object.entries(tagCategories).map(([categoryKey, category]) => (
              <div key={categoryKey} className="border-l-2 border-pink-200/40 pl-4 py-2">
                <button
                  onClick={() => toggleCategory(categoryKey)}
                  className="flex items-center justify-between w-full py-2 hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{category.icon}</span>
                    <span className="text-xs font-medium text-gray-600">{category.name}</span>
                    <span className="text-xs text-gray-400">({category.tags.length})</span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      expandedCategories[categoryKey] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Category Tags */}
                {expandedCategories[categoryKey] && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-6">
                    {category.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-xs transition-all duration-200 ${
                          selectedTags.includes(tag)
                            ? "bg-rose-500 text-white shadow-md"
                            : "text-gray-600 hover:text-rose-600 hover:bg-rose-50/50"
                        }`}
                      >
                        {selectedTags.includes(tag) ? "✓ " : ""}{tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </details>
      </div>

      {/* Featured Projects */}
      {(filteredFeatured.length > 0 || thesisMatchesTag) && (
        <section className="mb-24 animate-fade-in-up">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              Featured
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {filteredFeatured.length + (thesisMatchesTag ? 1 : 0)} highlighted project{filteredFeatured.length + (thesisMatchesTag ? 1 : 0) !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {filteredFeatured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {thesisMatchesTag && <AcademicCard thesis={thesis} />}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {filteredOther.length > 0 && (
        <section className="mb-24 animate-fade-in-up">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              More Projects
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {filteredOther.length} additional project{filteredOther.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredOther.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredFeatured.length === 0 && filteredOther.length === 0 && !thesisMatchesTag && selectedTags.length > 0 && (
        <div className="text-center py-24 animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No projects found</h3>
          <p className="text-gray-500 mb-8 text-sm">
            Try adjusting your filters to find what you&apos;re looking for.
          </p>
          <button
            onClick={clearTags}
            className="text-sm text-rose-500 hover:text-rose-600 font-medium transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* CTA Section - Refined */}
      <div className="mt-20 mb-10 text-center backdrop-blur-sm bg-white/50 border border-white/60 rounded-3xl p-12 md:p-16 animate-fade-in">
        <p className="text-sm font-medium text-rose-500/80 tracking-widest uppercase mb-4">
          Get in Touch
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Let&apos;s work together
        </h3>
        <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
          Interested in collaborating or discussing a project? I&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:yuchen880401@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an email
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white/80 border border-gray-200 text-gray-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back home
          </Link>
        </div>
      </div>
    </>
  );
}
