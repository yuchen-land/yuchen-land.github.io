"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, projectDocumentation } from "@/data/data";

// Image with loading skeleton
function ImageWithSkeleton({ src, alt, className = "" }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <>
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
        <Image
          src={src}
          alt={alt}
          fill
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          sizes="(max-width: 768px) 100vw, 33vw"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}
    </>
  );
}

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
    <section id="related" className="mb-20 animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Related Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
              className="group block backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {/* Project Image */}
              <div className="relative h-40 bg-gradient-to-br from-pink-50 to-rose-50 overflow-hidden">
                <ImageWithSkeleton
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors mb-2 text-sm line-clamp-1">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-rose-400 text-xs px-2 py-0.5 bg-rose-50/80 rounded-md"
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
                <div className="flex items-center gap-1 text-xs text-gray-500 group-hover:text-rose-500 group-hover:gap-1.5 transition-all">
                  <span>View details</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
