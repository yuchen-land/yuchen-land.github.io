"use client";

import Link from "next/link";
import { projects, thesis, tagCategories } from "@/data/data";
import ProjectCard from "@/components/ProjectCard";
import AcademicCard from "@/components/AcademicCard";
import { useState } from "react";

export default function PortfolioContent() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: true,
    languages: true,
    tools: false,
    specialization: false,
  });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  // Get all unique tags (including thesis tags)
  const allTags = [...new Set([...projects.flatMap((p) => p.tags), ...thesis.tags])].sort();

  // Filter projects based on selected type AND tags
  const filterByTypeAndTags = (projectList) => {
    let filtered = projectList;

    // Filter by type first
    if (selectedType !== "all") {
      filtered = filtered.filter((p) => p.type === selectedType);
    }

    // Then filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((p) =>
        selectedTags.some((tag) => p.tags.includes(tag))
      );
    }

    return filtered;
  };

  const filteredFeatured = filterByTypeAndTags(featuredProjects);
  const filteredOther = filterByTypeAndTags(otherProjects);

  // Check if thesis matches selected tags (thesis doesn't have type, so only filter by tags)
  const thesisMatchesTag = selectedTags.length === 0
    ? (selectedType === "all") // only show thesis when "all" types is selected
    : selectedTags.some((tag) => thesis.tags.includes(tag)) && selectedType === "all";

  // Project type options
  const typeOptions = [
    { value: "all", label: "All", icon: "📦", color: "from-gray-500 to-gray-600" },
    { value: "frontend", label: "Frontend", icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { value: "backend", label: "Backend", icon: "⚙️", color: "from-purple-500 to-pink-500" },
    { value: "fullstack", label: "Full-stack", icon: "🔗", color: "from-emerald-500 to-teal-500" },
  ];

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

  // Toggle all tags on/off
  const toggleAllTags = () => {
    if (selectedTags.length === 0) {
      // Select all tags
      const allTags = Object.values(tagCategories).flatMap((cat) => cat.tags);
      setSelectedTags(allTags);
    } else {
      // Clear all tags
      setSelectedTags([]);
    }
  };

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

      {/* Quick Type Filter */}
      <div className="mb-6 animate-fade-in">
        <div className="flex flex-wrap justify-center gap-3">
          {typeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedType(option.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${selectedType === option.value
                ? `bg-gradient-to-r ${option.color} text-white shadow-lg scale-105`
                : "bg-white/70 text-gray-600 hover:bg-white hover:shadow-md border border-gray-200/50"
                }`}
            >
              <span>{option.icon}</span>
              <span>{option.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${selectedType === option.value
                ? "bg-white/20"
                : "bg-gray-100"
                }`}>
                {option.value === "all"
                  ? projects.length
                  : projects.filter(p => p.type === option.value).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tag Filter */}
      <div className="mb-12 animate-fade-in">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </summary>

          {/* Tag Categories - Subtle Design */}
          <div className="space-y-3 pt-4">
            {/* All Button */}
            <div className="flex items-center gap-2 pb-3 border-b border-pink-200/20 px-4">
              <button
                onClick={toggleAllTags}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${selectedTags.length > 0
                  ? "bg-rose-500 text-white shadow-md"
                  : "text-gray-600 hover:text-rose-600 hover:bg-rose-50/50"
                  }`}
              >
                {selectedTags.length > 0 ? "✓ All Selected" : "All"}
              </button>
              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="text-xs text-gray-500 hover:text-rose-600 transition-colors font-medium"
                >
                  Clear
                </button>
              )}
            </div>

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
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${expandedCategories[categoryKey] ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {/* Category Tags */}
                {expandedCategories[categoryKey] && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-6">
                    {category.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-xs transition-all duration-200 ${selectedTags.includes(tag)
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
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xl shadow-lg">
              ⭐
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 text-transparent bg-clip-text">
                Featured Projects
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {filteredFeatured.length + (thesisMatchesTag ? 1 : 0)} project{filteredFeatured.length + (thesisMatchesTag ? 1 : 0) !== 1 ? "s" : ""}
              </p>
            </div>
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
      {filteredFeatured.length === 0 && filteredOther.length === 0 && !thesisMatchesTag && selectedTags.length > 0 && (
        <div className="text-center py-20 animate-fade-in">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Projects Found</h3>
          <p className="text-gray-600 mb-8">
            No projects found with the selected technologies.
          </p>
          <button
            onClick={() => setSelectedTags([])}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-6 py-3 font-medium hover:scale-105 transition-transform"
          >
            Clear Filters
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
