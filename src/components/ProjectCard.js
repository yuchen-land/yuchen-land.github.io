'use client';

import { useState } from "react";

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white/70 backdrop-blur-glass rounded-3xl overflow-hidden shadow-lg card-hover border-0 group">
      {/* Project Image */}
      <div className="relative h-56 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 overflow-hidden">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-rose-500 text-white text-5xl font-bold">
            {project.title.charAt(0)}
          </div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-5 right-5 bg-gradient-to-r from-pink-400 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-xl">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            FEATURED
          </div>
        )}
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Project Info */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">
          {project.title}
        </h3>
        
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

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-rose-50 text-rose-700 px-4 py-1.5 rounded-xl text-xs font-semibold border border-rose-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-gray-600 to-gray-800 text-white py-3 px-5 rounded-xl text-center text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              {project.github.includes('github.com') ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Document
                </>
              )}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-pink-400 to-rose-500 text-white py-3 px-5 rounded-xl text-center text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
