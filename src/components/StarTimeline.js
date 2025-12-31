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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isArray = Array.isArray(content);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-16 md:pl-20"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 md:left-8 top-14 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 to-pink-100" />
      )}

      {/* Step indicator */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
        className={`absolute left-0 md:left-2 top-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
      >
        <span className="text-white font-bold text-xl md:text-2xl">{step.letter}</span>
      </motion.div>

      {/* Content card */}
      <div className={`${step.bgColor} ${step.borderColor} border rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm`}>
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">{step.title}</h3>
          <p className="text-sm text-gray-500">{step.subtitle}</p>
        </div>

        {isArray ? (
          <ul className="space-y-3">
            {content.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mt-2 flex-shrink-0`} />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 leading-relaxed">{content}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function StarTimeline({ star }) {
  if (!star) return null;

  return (
    <section id="star" className="mb-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        <span className="text-rose-500">⭐</span> Project Journey (STAR)
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
