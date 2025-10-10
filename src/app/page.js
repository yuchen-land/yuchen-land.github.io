'use client';

import Link from "next/link";
import { personalInfo, socialLinks, internalLinks } from "@/data/data";
import { useState } from "react";

export default function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-rose-100/40 via-transparent to-transparent"></div>
      
      {/* Floating Orbs with Refined Colors */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Avatar with Premium Effect */}
        <div className="mb-12 animate-fade-in-down">
          <div className="relative group">
            {/* Animated Gradient Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-rose-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-700 animate-gradient"></div>
            
            {/* Inner Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 via-rose-400 to-purple-400 rounded-full blur-md opacity-50"></div>
            
            {/* Avatar Container */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-white ring-4 ring-white/50 shadow-2xl">
              {!imgError ? (
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-500 via-purple-500 to-rose-500 text-white text-5xl md:text-6xl font-bold">
                  {personalInfo.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Name & Title with Premium Typography */}
        <div className="text-center mb-14 animate-fade-in-up space-y-3">
          <h1 className="text-3xl md:text-5xl font-light mb-3 bg-gradient-to-r from-violet-600 via-purple-600 to-rose-600 text-transparent bg-clip-text animate-gradient tracking-wide">
            {personalInfo.name}
          </h1>
          <p className="text-base md:text-lg text-slate-600 font-light tracking-wide">
            {personalInfo.title}
          </p>
          <p className="text-sm md:text-base text-slate-500 max-w-lg mx-auto font-light leading-relaxed">
            {personalInfo.description}
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light">
            {personalInfo.email}
          </p>
        </div>

        {/* Premium Link Buttons - All Icons in One Row */}
        <div className="w-full max-w-2xl animate-fade-in">
          {/* All Links in Single Row */}
          <div className="flex justify-center gap-4 md:gap-6">
            {/* Internal Links */}
            {internalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="group relative"
              >
                {/* Button with Gradient */}
                <div className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {link.icon === "briefcase" && (
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  )}
                </div>
                
                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-medium">
                  {link.name}
                </span>
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
              >
                <div className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {link.icon === "github" && (
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 relative z-10"
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
                      className="w-8 h-8 md:w-10 md:h-10 relative z-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {link.icon === "email" && (
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  )}
                </div>
                
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg font-medium">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
