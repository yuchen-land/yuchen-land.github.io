"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, projectDocumentation } from "@/data/data";

export default function RelatedProjects({ currentProjectSlug, currentTags = [] }) {
  const relatedProjects = useMemo(() => {
    // Find current project by slug
    const currentDoc = Object.values(projectDocumentation).find((doc) => doc.slug === currentProjectSlug);
    const currentProjectId = currentDoc ? Object.keys(projectDocumentation).find((key) => projectDocumentation[key].slug === currentProjectSlug) : null;
    const currentProject = currentProjectId ? projects.find((p) => p.id === parseInt(currentProjectId)) : null;
    const tagsToMatch = currentTags.length > 0 ? currentTags : (currentProject?.tags || []);

    // Find related projects based on tag overlap
    const projectsWithScore = projects
      .filter((p) => !currentProjectId || p.id !== parseInt(currentProjectId))
      .filter((p) => projectDocumentation[p.id]) // Only show projects with documentation
      .map((project) => {
        const overlap = project.tags.filter((tag) => tagsToMatch.includes(tag)).length;
        const doc = projectDocumentation[project.id];
        return { ...project, score: overlap, slug: doc?.slug };
      })
      .filter((p) => p.score > 0 && p.slug)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    // If not enough related projects, fill with featured projects
    if (projectsWithScore.length < 2) {
      const featured = projects
        .filter((p) => !currentProjectId || p.id !== parseInt(currentProjectId))
        .filter((p) => projectDocumentation[p.id])
        .filter((p) => p.featured)
        .filter((p) => !projectsWithScore.find((rp) => rp.id === p.id))
        .map((project) => {
          const doc = projectDocumentation[project.id];
          return { ...project, slug: doc?.slug };
        })
        .filter((p) => p.slug)
        .slice(0, 3 - projectsWithScore.length);

      return [...projectsWithScore, ...featured];
    }

    return projectsWithScore;
  }, [currentProjectSlug, currentTags]);

  if (relatedProjects.length === 0) return null;

  return (
    <section id="related" className="mb-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        <span className="text-rose-500">📁</span> Related Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-[1.01]"
            >
              {/* Project Image */}
              <div className="relative h-40 bg-gradient-to-br from-pink-50 to-rose-50 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Type Badge */}
                {project.type && (
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold bg-white/90 text-gray-700 backdrop-blur-sm">
                    {project.type === "frontend" && "Frontend"}
                    {project.type === "backend" && "Backend"}
                    {project.type === "fullstack" && "Full-stack"}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="font-bold text-gray-800 group-hover:text-rose-600 transition-colors mb-2 line-clamp-1">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-rose-50 text-rose-600 px-2 py-0.5 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-gray-400 text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* View Link */}
                <div className="flex items-center gap-1 text-sm text-rose-500 font-medium group-hover:gap-2 transition-all">
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
