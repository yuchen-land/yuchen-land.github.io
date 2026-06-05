'use client';

import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { projectDocumentation } from "@/data/data";

export default function ProjectCard({ project }) {
  const doc = projectDocumentation[project.id];
  const hasDocumentation = doc !== undefined;
  const projectSlug = doc?.slug;
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first bullet point by default
  const MAX_VISIBLE_ITEMS = 1;

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-white/60 group flex flex-col h-full">
      {/* Project Image */}
      <div className="relative h-40 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 overflow-hidden flex-shrink-0">
        {/* Loading Skeleton */}
        {imgLoading && !imgError && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-rose-100 to-pink-100">
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-10 h-10 text-rose-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
          </div>
        )}
        {!imgError ? (
          <ExportedImage
            src={project.image}
            alt={project.title}
            width={400}
            height={224}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImgLoading(false)}
            onError={() => {
              setImgError(true);
              setImgLoading(false);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-rose-500 text-white text-5xl font-bold">
            {project.title.charAt(0)}
          </div>
        )}

        {/* Type Badge - Top Left — hidden for now */}
        {false && project.type && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 shadow-sm bg-white/90 text-gray-600 backdrop-blur-sm">
            {project.type === "frontend" && "Frontend"}
            {project.type === "backend" && "Backend"}
            {project.type === "fullstack" && "Full-stack"}
            {project.type === "firmware" && "Firmware"}
          </div>
        )}

        {/* Featured Star - Top Right, aligned with left tag */}
        {project.featured && (
          <div className="absolute top-3 right-3 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        )}

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <div className="mb-2">
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-rose-500 transition-colors mb-1.5 line-clamp-2">
              {project.title}
            </h3>
            {project.period && (
              <span className="text-xs text-gray-400 font-medium">
                {project.period}
              </span>
            )}
          </div>

          {/* Description - support both string and array */}
          {Array.isArray(project.description) ? (
            <>
              <ul className="text-gray-600 mb-3 space-y-2.5 list-none">
                {(isExpanded ? project.description : project.description.slice(0, MAX_VISIBLE_ITEMS)).map((item, i) => {
                  // Check if text contains **bold** markers
                  const parts = item.split(/\*\*(.*?)\*\*/g);
                  return (
                    <li key={i} className="text-sm leading-relaxed pl-5 relative">
                      <span className="text-rose-400 absolute left-0 top-1 text-xs">•</span>
                      <span className="block">
                        {parts.map((part, idx) =>
                          idx % 2 === 1 ? (
                            <strong key={idx} className="font-bold text-gray-800">{part}</strong>
                          ) : (
                            part
                          )
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {project.description.length > MAX_VISIBLE_ITEMS && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-rose-500 hover:text-rose-600 text-xs font-medium mb-4 flex items-center gap-1 transition-colors"
                >
                  {isExpanded ? (
                    <>
                      Show less
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      +{project.description.length - MAX_VISIBLE_ITEMS} more
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </>
          ) : (
            <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
          )}
        </div>

        {/* Tech Tags - Clean & Minimal */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-rose-400 text-[11px] px-2 py-0.5 bg-rose-50/80 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons - Compact Style */}
        <div className="flex gap-2 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 h-8 bg-gray-800 text-white rounded-lg text-xs font-medium hover:bg-gray-700 transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              {project.github.includes('github.com') ? (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              <span>{project.github.includes('github.com') ? 'GitHub' : 'Docs'}</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 h-8 bg-rose-50/80 text-rose-500 rounded-lg text-xs font-medium hover:bg-rose-100/80 transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              <span>Demo</span>
            </a>
          )}
          {false && hasDocumentation && projectSlug && (
            <Link
              href={`/projects/${projectSlug}`}
              className="group/btn flex-1 h-8 bg-white/80 border border-gray-200/60 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-1"
            >
              <span>More</span>
              <svg className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
