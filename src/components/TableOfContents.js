"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "screenshots", label: "Screenshots" },
  { id: "stats", label: "Highlights" },
  { id: "star", label: "Journey" },
  { id: "tech", label: "Tech Stack" },
  { id: "features", label: "Features" },
  { id: "roles", label: "Roles" },
  { id: "links", label: "Links" },
  { id: "related", label: "Related" },
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
      className="fixed left-4 xl:left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-lg p-2 shadow-sm min-w-[120px]">
        <ul className="space-y-0.5">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-rose-50/80 text-rose-600 font-medium"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1 h-1 rounded-full bg-rose-400 flex-shrink-0"
                  />
                )}
                <span>{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
