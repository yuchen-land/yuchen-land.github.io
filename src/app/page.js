'use client';

import Link from "next/link";
import { personalInfo, socialLinks, internalLinks } from "@/data/data";
import { useState } from "react";

export default function Home() {
  const [imgError, setImgError] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      {/* Soft Gradient Orbs - Pastel Colors */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/40 via-rose-200/40 to-pink-300/40 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/40 via-pink-200/40 to-rose-300/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-rose-200/40 via-pink-300/40 to-orange-200/40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Soft Light Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,182,193,0.15),transparent_60%)]"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 md:py-16">
        {/* Sweet Avatar - Youthful Style */}
        <div className="mb-12 animate-fade-in-down">
          <div className="relative group">
            {/* Soft Pink Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-pink-300 via-rose-300 to-orange-300 rounded-full opacity-60 blur-2xl group-hover:opacity-80 transition-all duration-1000 animate-gradient"></div>
            
            {/* Cute Decorative Ring */}
            <div className="absolute -inset-3 bg-gradient-to-r from-pink-200/50 via-rose-200/50 to-orange-200/50 rounded-full blur-xl"></div>
            
            {/* Pastel Border Ring */}
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full"></div>
            
            {/* Avatar Container with Soft Shadow - Remove filter */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white p-1 group-hover:scale-105 transition-transform duration-700 shadow-[0_8px_30px_rgb(251,207,232,0.4)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                {!imgError ? (
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-300 to-orange-300 text-white text-6xl md:text-7xl font-light">
                    {personalInfo.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sweet & Professional Typography */}
        <div className="text-center mb-16 animate-fade-in-up space-y-5 max-w-3xl mx-auto px-4">
          {/* Name with Soft Gradient - Fix clipping with overflow */}
          <div className="relative mb-8 pb-3 overflow-visible">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 text-transparent bg-clip-text animate-gradient tracking-wide leading-[1.3] pb-1">
              {personalInfo.name}
            </h1>
            {/* Elegant Underline */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-pink-300 via-rose-300 to-orange-300 rounded-full opacity-60"></div>
          </div>
          
          {/* Title Badges - Two Separate Blocks */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="backdrop-blur-sm bg-white/60 rounded-full px-6 py-2.5 border border-pink-200/50 shadow-lg">
              <p className="text-sm md:text-base text-rose-600 font-medium tracking-wider">
                Software Engineer
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/60 rounded-full px-6 py-2.5 border border-pink-200/50 shadow-lg">
              <p className="text-sm md:text-base text-rose-600 font-medium tracking-wider">
                Pâtissier
              </p>
            </div>
          </div>
          
          {/* Description Card - More Compact */}
          <div className="backdrop-blur-md bg-white/50 rounded-2xl p-6 border-0 shadow-[0_8px_30px_rgb(251,207,232,0.2)]">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
              {personalInfo.description}
            </p>
          </div>
          
          {/* Email - Clean & Simple */}
          <div className="flex items-center justify-center gap-2 text-rose-500 hover:text-rose-600 transition-colors group">
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <a href={`mailto:${personalInfo.email}`} className="text-xs md:text-sm tracking-wide">
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Icon Navigation - Sweet & Professional */}
        <div className="w-full max-w-5xl animate-fade-in px-4 mb-20">
          <div className="flex justify-center items-center gap-3 md:gap-5">
            {/* Internal Links */}
            {internalLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.path}
                className="group relative"
                onMouseEnter={() => setHoveredIcon(link.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {/* Cute Button Container */}
                <div className="relative">
                  {/* Soft Glow Effect */}
                  <div className={`absolute -inset-1.5 bg-gradient-to-r ${link.color.replace('to-pink-600', 'to-pink-300').replace('to-purple-600', 'to-rose-300').replace('from-rose-500', 'from-pink-300').replace('from-violet-500', 'from-rose-300')} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-all duration-500`}></div>
                  
                  {/* Main Button */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 backdrop-blur-md bg-white/80 border-2 border-pink-200/50 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(251,207,232,0.3)] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-[0_16px_35px_rgb(251,207,232,0.4)] group-hover:bg-gradient-to-br group-hover:from-pink-50 group-hover:to-rose-50 overflow-hidden">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-200/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Icon */}
                    {link.icon === "user" && (
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 relative z-10 text-rose-400 group-hover:text-rose-500 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                    {link.icon === "briefcase" && (
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 relative z-10 text-pink-400 group-hover:text-pink-500 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    )}
                  </div>
                  
                  {/* Tooltip - Improved Position */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="backdrop-blur-md bg-white/95 border border-pink-200 text-rose-600 text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-lg font-medium">
                      {link.name}
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Social Links */}
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                onMouseEnter={() => setHoveredIcon(link.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="relative">
                  {/* Soft Glow */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-300 to-rose-300 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                  
                  {/* Main Button */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 backdrop-blur-md bg-white/80 border-2 border-pink-200/50 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(251,207,232,0.3)] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-[0_16px_35px_rgb(251,207,232,0.4)] group-hover:bg-gradient-to-br group-hover:from-pink-50 group-hover:to-rose-50 overflow-hidden">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-200/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Icons */}
                    {link.icon === "github" && (
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 relative z-10 text-gray-500 group-hover:text-gray-600 transition-all duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {link.icon === "linkedin" && (
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 relative z-10 text-blue-400 group-hover:text-blue-500 transition-all duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {link.icon === "email" && (
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 relative z-10 text-orange-400 group-hover:text-orange-500 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    )}
                  </div>
                  
                  {/* Tooltip - Improved Position */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="backdrop-blur-md bg-white/95 border border-pink-200 text-rose-600 text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-lg font-medium">
                      {link.name}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Footer - Fixed at bottom with proper spacing */}
        <div className="mt-auto pt-8">
          <p className="text-rose-400/60 text-xs tracking-[0.25em] text-center">
            WELCOME
          </p>
        </div>
      </div>
    </div>
  );
}
