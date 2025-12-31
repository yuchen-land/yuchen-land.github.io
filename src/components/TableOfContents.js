"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "screenshots", label: "Screenshots", icon: "📸" },
  { id: "stats", label: "Highlights", icon: "📊" },
  { id: "star", label: "STAR", icon: "⭐" },
  { id: "tech", label: "Tech Stack", icon: "⚙️" },
  { id: "features", label: "Features", icon: "✨" },
  { id: "roles", label: "Roles", icon: "👤" },
  { id: "links", label: "Links", icon: "🔗" },
  { id: "related", label: "Related", icon: "📁" },
];

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show TOC after scrolling past hero
      setIsVisible(window.scrollY > 300);

      // Find active section
      const sectionElements = sections
        .map((s) => ({
          id: s.id,
          element: document.getElementById(s.id),
        }))
        .filter((s) => s.element);

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="backdrop-blur-md bg-white/80 border border-pink-200/50 rounded-2xl p-4 shadow-lg">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
          Contents
        </div>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 font-semibold"
                    : "text-gray-600 hover:bg-pink-50 hover:text-rose-600"
                }`}
              >
                <span className="text-base">{section.icon}</span>
                <span>{section.label}</span>
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-rose-500"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
