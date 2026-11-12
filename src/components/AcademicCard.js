'use client';

import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";

export default function AcademicCard({ thesis, featuredLayout = false }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first highlight by default
  const MAX_VISIBLE_ITEMS = 1;
  const previewHighlights = featuredLayout ? thesis.highlights.slice(2, 3) : thesis.highlights.slice(0, MAX_VISIBLE_ITEMS);

  return (
    <div className="surface-card overflow-hidden transition-shadow duration-200 group flex flex-col h-full">
      {/* Banner Image */}
      <div className={`relative aspect-[16/9] bg-stone-50 overflow-hidden flex-shrink-0`}>
        {/* Loading Skeleton */}
        {imgLoading && !imgError && thesis.image && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-rose-100 to-pink-100">
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-10 h-10 text-rose-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
          </div>
        )}
        {thesis.image && !imgError ? (
          <ExportedImage
            src={thesis.image}
            alt={thesis.title}
            fill
            sizes="(max-width: 767px) 100vw, 560px"
            className={`object-cover transition-opacity duration-300 ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImgLoading(false)}
            onError={() => {
              setImgError(true);
              setImgLoading(false);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-rose-500 text-white text-4xl font-bold">
            🎓
          </div>
        )}

        {/* Type Badge - Top Left */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-medium shadow-sm bg-white/90 text-gray-600 backdrop-blur-sm">
          Thesis
        </div>

        {/* Thesis Badge - Top Right */}
        <div className="absolute top-3 right-3 w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </div>

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className={`p-4 flex flex-col flex-1`}>
        <div className="flex-1">
          <div className="mb-2">
            <h3 className={`min-h-10 text-sm leading-5 font-semibold text-gray-800 group-hover:text-rose-500 transition-colors mb-1.5 line-clamp-2`}>
              {thesis.title}
            </h3>
            {thesis.year && (
              <span className="text-xs text-gray-500 font-medium">
                {thesis.year}
              </span>
            )}
          </div>

          {/* Research Highlights with expand/collapse */}
          <ul className="text-gray-600 mb-3 space-y-2 list-none">
            {(isExpanded ? thesis.highlights : previewHighlights).map((highlight, index) => (
              <li key={index} className={`${"text-sm"} leading-relaxed pl-4 relative`}>
                <span className="text-rose-400 absolute left-0 top-1 text-xs">•</span>
                <span className={isExpanded ? "block" : "line-clamp-2"}>{highlight}</span>
              </li>
            ))}
          </ul>
          {thesis.highlights.length > MAX_VISIBLE_ITEMS && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-rose-500 hover:text-rose-600 text-xs font-medium mb-1 -ml-1 min-h-9 px-1 flex items-center gap-1 transition-colors"
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
          <div className="flex flex-wrap items-center gap-1 mb-3">
            {(isExpanded ? thesis.tags : thesis.tags.slice(0, 3)).map((tag) => (
              <span
                key={tag}
                className="text-stone-600 text-[11px] px-2 py-1 bg-stone-100 rounded-md"
              >
                {tag}
              </span>
            ))}
            {!isExpanded && thesis.tags.length > 3 && (
              <button type="button" onClick={() => setIsExpanded(true)} aria-label="Show all research details and technologies" className="inline-flex min-h-7 min-w-7 items-center justify-center rounded-md px-2 text-[11px] text-gray-500 hover:bg-stone-100 hover:text-rose-500">+{thesis.tags.length - 3}</button>
            )}
          </div>
        </div>

        {/* Action Buttons - Compact Style */}
        <div className="flex gap-2 pt-1">
          {thesis.links.demo && (
            <a
              href={thesis.links.demo}
              {...(thesis.links.demo.startsWith("/")
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="group/btn min-w-0 flex-1 whitespace-nowrap px-2 h-11 bg-rose-50 text-rose-600 rounded-lg text-xs font-medium hover:bg-rose-100/80 transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Demo</span>
            </a>
          )}
          {thesis.links.publication && (
            <a href={thesis.links.publication} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg bg-stone-100 px-2 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-200 md:h-11">Paper ↗</a>
          )}
          {thesis.links.pdf && (
            <a
              href={thesis.links.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn min-w-0 flex-1 whitespace-nowrap px-2 h-11 bg-rose-50 text-rose-600 rounded-lg text-xs font-medium hover:bg-rose-100/80 transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
