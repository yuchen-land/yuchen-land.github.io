'use client';

import { useState } from "react";
import Image from "next/image";

export default function AcademicCard({ thesis }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white/70 backdrop-blur-glass rounded-3xl overflow-hidden shadow-lg card-hover border-0 group">
      {/* Banner Image - 與 Project Card 完全一致 */}
      <div className="relative h-56 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 overflow-hidden">
        {thesis.image && !imgError ? (
          <Image
            src={thesis.image}
            alt={thesis.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-rose-500 text-white text-5xl font-bold">
            🎓
          </div>
        )}

        {/* Featured Badge - 與 Project Card 一致 */}
        <div className="absolute top-5 right-5 bg-gradient-to-r from-pink-400 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-xl">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          THESIS
        </div>

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Project Info - 與 Project Card 一致 */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">
          {thesis.title}
        </h3>

        {/* Academic Info */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
            <p className="text-xs text-gray-500 font-medium mb-1">Advisor</p>
            <p className="text-sm font-semibold text-gray-800">{thesis.advisor.name}</p>
          </div>
          <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
            <p className="text-xs text-gray-500 font-medium mb-1">Institution</p>
            <p className="text-sm font-semibold text-gray-800">{thesis.institution}</p>
          </div>
        </div>

        {/* Research Highlights - 與 Project description 一致 */}
        <ul className="text-gray-600 mb-6 space-y-2.5 list-none">
          {thesis.highlights.map((highlight, index) => (
            <li key={index} className="text-sm leading-relaxed pl-5 relative">
              <span className="text-rose-400 absolute left-0 top-1 text-xs">•</span>
              <span className="block">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tech Tags - 與 Project Card 一致 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {thesis.tags.map((tag) => (
            <span
              key={tag}
              className="bg-rose-50 text-rose-700 px-4 py-1.5 rounded-xl text-xs font-semibold border border-rose-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons - 與 Project Card 一致 */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {thesis.links.advisor && (
            <a
              href={thesis.links.advisor}
              target="_blank"
              rel="noopener noreferrer"
              className={`min-h-[44px] bg-gradient-to-r from-gray-600 to-gray-800 text-white py-3 px-5 rounded-xl text-center text-sm font-semibold hover:shadow-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${!thesis.links.conference ? 'col-span-2' : ''}`}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
              className={`min-h-[44px] bg-gradient-to-r from-pink-400 to-rose-500 text-white py-3 px-5 rounded-xl text-center text-sm font-semibold hover:shadow-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${!thesis.links.advisor ? 'col-span-2' : ''}`}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
              className="min-h-[44px] bg-gradient-to-r from-pink-400 to-rose-500 text-white py-3 px-5 rounded-xl text-center text-sm font-semibold hover:shadow-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>PDF</span>
            </a>
          )}
          {thesis.links.github && (
            <a
              href={thesis.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] bg-gradient-to-r from-gray-600 to-gray-800 text-white py-3 px-5 rounded-xl text-center text-sm font-semibold hover:shadow-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
