"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const starSteps = [
  {
    key: "situation",
    letter: "S",
    title: "Situation",
    subtitle: "Background & Context",
    color: "from-rose-400 to-rose-500",
    bgColor: "bg-rose-50/50",
    borderColor: "border-rose-100",
  },
  {
    key: "task",
    letter: "T",
    title: "Task",
    subtitle: "Goals & Objectives",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-pink-50/50",
    borderColor: "border-pink-100",
  },
  {
    key: "action",
    letter: "A",
    title: "Action",
    subtitle: "What I Did",
    color: "from-pink-500 to-rose-400",
    bgColor: "bg-rose-50/50",
    borderColor: "border-rose-100",
  },
  {
    key: "result",
    letter: "R",
    title: "Result",
    subtitle: "Outcomes & Impact",
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-pink-50/50",
    borderColor: "border-pink-100",
  },
];

function StarStep({ step, content, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const isArray = Array.isArray(content);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="relative pl-16 md:pl-20"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 md:left-8 top-12 bottom-0 w-px bg-gradient-to-b from-rose-200/60 to-rose-100/30" />
      )}

      {/* Step indicator */}
      <div
        className={`absolute left-0 md:left-2 top-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-sm`}
      >
        <span className="text-white font-semibold text-lg md:text-xl">{step.letter}</span>
      </div>

      {/* Content card */}
      <div className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl p-5 md:p-6 mb-6 shadow-sm">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
          <p className="text-xs text-gray-400">{step.subtitle}</p>
        </div>

        {isArray ? (
          <ul className="space-y-2">
            {content.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5"
              >
                <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function StarTimeline({ star }) {
  if (!star) return null;

  return (
    <section id="star" className="mb-20 animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Project Journey
      </h2>

      <div className="relative">
        {starSteps.map((step, index) => (
          <StarStep
            key={step.key}
            step={step}
            content={star[step.key]}
            index={index}
            isLast={index === starSteps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
