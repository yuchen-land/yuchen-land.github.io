'use client';

import { useState } from "react";
import Image from "next/image";

export default function AcademicCard({ thesis }) {
  const [imgError, setImgError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first highlight by default
  const MAX_VISIBLE_ITEMS = 1;

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-white/60 group flex flex-col h-full">
      {/* Banner Image */}
      <div className="relative h-40 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 overflow-hidden flex-shrink-0">
        {thesis.image && !imgError ? (
          <Image
            src={thesis.image}
            alt={thesis.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-rose-500 text-white text-4xl font-bold">
            🎓
          </div>
        )}

        {/* Thesis Badge */}
        <div className="absolute top-3 right-3 w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </div>

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <div className="mb-2">
            <h3 className="text-base font-semibold text-gray-800 group-hover:text-rose-500 transition-colors mb-1.5 line-clamp-2">
              {thesis.title}
            </h3>
            {thesis.year && (
              <span className="text-xs text-gray-400 font-medium">
                {thesis.year}
              </span>
            )}
          </div>

          {/* Academic Info - Compact */}
          <div className="flex gap-2 mb-3 text-xs">
            <div className="bg-rose-50/60 rounded-lg px-2.5 py-1.5 border border-rose-100/50">
              <span className="text-gray-400">Advisor:</span>
              <span className="text-gray-700 font-medium ml-1">{thesis.advisor.name.split(',')[0]}</span>
            </div>
            <div className="bg-rose-50/60 rounded-lg px-2.5 py-1.5 border border-rose-100/50">
              <span className="text-gray-400">@</span>
              <span className="text-gray-700 font-medium ml-1">{thesis.institution.split(' ').slice(-1)[0]}</span>
            </div>
          </div>

          {/* Research Highlights with expand/collapse */}
          <ul className="text-gray-600 mb-3 space-y-2 list-none">
            {(isExpanded ? thesis.highlights : thesis.highlights.slice(0, MAX_VISIBLE_ITEMS)).map((highlight, index) => (
              <li key={index} className="text-sm leading-relaxed pl-4 relative">
                <span className="text-rose-400 absolute left-0 top-1 text-xs">•</span>
                <span className="block">{highlight}</span>
              </li>
            ))}
          </ul>
          {thesis.highlights.length > MAX_VISIBLE_ITEMS && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-rose-500 hover:text-rose-600 text-xs font-medium mb-3 flex items-center gap-1 transition-colors"
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
                  +{thesis.highlights.length - MAX_VISIBLE_ITEMS} more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          )}

          {/* Tech Tags - Compact */}
          <div className="flex flex-wrap gap-1 mb-4">
            {thesis.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-rose-400 text-[11px] px-2 py-0.5 bg-rose-50/80 rounded-md"
              >
                {tag}
              </span>
            ))}
            {thesis.tags.length > 4 && (
              <span className="text-gray-400 text-[11px] px-2 py-0.5">
                +{thesis.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons - Compact Style */}
        <div className="flex gap-2 pt-1">
          {thesis.links.advisor && (
            <a
              href={thesis.links.advisor}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 h-8 bg-gray-800 text-white rounded-lg text-xs font-medium hover:bg-gray-700 transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Advisor</span>
            </a>
          )}
          {thesis.links.conference && (
            <a
              href={thesis.links.conference}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 h-8 bg-rose-50/80 text-rose-500 rounded-lg text-xs font-medium hover:bg-rose-100/80 transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              <span>Conference</span>
            </a>
          )}
          {thesis.links.pdf && (
            <a
              href={thesis.links.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 h-8 bg-rose-50/80 text-rose-500 rounded-lg text-xs font-medium hover:bg-rose-100/80 transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>PDF</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
