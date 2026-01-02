'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectDocumentation } from "@/data/data";

export default function ProjectCard({ project }) {
  const doc = projectDocumentation[project.id];
  const hasDocumentation = doc !== undefined;
  const projectSlug = doc?.slug;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white/70 backdrop-blur-glass rounded-3xl overflow-hidden shadow-lg card-hover border-0 group flex flex-col h-full">
      {/* Project Image */}
      <div className="relative h-56 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 overflow-hidden flex-shrink-0">
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={224}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-rose-500 text-white text-5xl font-bold">
            {project.title.charAt(0)}
          </div>
        )}

        {/* Type Badge - Top Left */}
        {project.type && (
          <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg bg-white/90 text-gray-700 backdrop-blur-sm">
            {project.type === "frontend" && "Frontend"}
            {project.type === "backend" && "Backend"}
            {project.type === "fullstack" && "Full-stack"}
            {project.type === "firmware" && "Firmware"}
          </div>
        )}

        {/* Featured Star - Top Right, aligned with left tag */}
        {project.featured && (
          <div className="absolute top-5 right-5 w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        )}

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors mb-2">
              {project.title}
            </h3>
            {project.period && (
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                {project.period}
              </span>
            )}
          </div>

          {/* Description - support both string and array */}
          {Array.isArray(project.description) ? (
            <ul className="text-gray-600 mb-6 space-y-2.5 list-none">
              {project.description.map((item, i) => {
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
          ) : (
            <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
          )}
        </div>

        {/* Tech Tags - Clean & Minimal */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-rose-400 text-xs px-2.5 py-1 bg-rose-50/80 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons - Premium Style */}
        <div className="flex gap-2.5 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 h-10 bg-gray-900 text-white rounded-full text-[13px] font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              {project.github.includes('github.com') ? (
                <svg className="w-4 h-4 opacity-80 group-hover/btn:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 opacity-80 group-hover/btn:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
              className="group/btn flex-1 h-10 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-[13px] font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4 opacity-80 group-hover/btn:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              <span>Demo</span>
            </a>
          )}
          {hasDocumentation && projectSlug && (
            <Link
              href={`/projects/${projectSlug}`}
              className="group/btn flex-1 h-10 bg-white border border-gray-200 text-gray-700 rounded-full text-[13px] font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>More</span>
              <svg className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
