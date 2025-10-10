import Link from "next/link";
import { education, experience, skills } from "@/data/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-12 group font-medium transition-colors"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 text-transparent bg-clip-text tracking-tight">
            About Me
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            My education, experience, and technical expertise
          </p>
        </div>

        {/* Education */}
        <section className="mb-20 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-2xl shadow-lg">
              🎓
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Education
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-glass rounded-3xl p-8 shadow-lg card-hover border-0"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {edu.school}
                    </h3>
                    {/* Level Badge */}
                    {edu.level === "phd" && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
                        Ph.D.
                      </span>
                    )}
                    {edu.level === "master" && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
                        Master
                      </span>
                    )}
                    {edu.level === "bachelor" && (
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
                        Bachelor
                      </span>
                    )}
                    {edu.level === "high-school" && (
                      <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold">
                        High School
                      </span>
                    )}
                  </div>
                  <span className="text-rose-600 font-semibold bg-rose-50 px-4 py-1.5 rounded-full text-sm mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-700 font-semibold text-lg mb-4">{edu.degree}</p>
                {edu.description && (
                  <ul className="space-y-2">
                    {edu.description.map((desc, i) => (
                      <li key={i} className="text-gray-600 flex items-start gap-3">
                        <span className="text-pink-400 mt-1 text-sm">•</span>
                        <span className="flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg">
              💼
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Experience
            </h2>
          </div>
          <div className="relative pl-12 border-l-2 border-pink-200">
            {experience.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[49px] top-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full border-4 border-pink-50 shadow-lg"></div>

                <div className="bg-white/70 backdrop-blur-glass rounded-3xl p-8 shadow-lg card-hover border-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {exp.position}
                    </h3>
                    <span className="text-rose-600 font-semibold bg-rose-50 px-4 py-1.5 rounded-full text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-lg mb-4 flex items-center gap-2">
                    {exp.company}
                    {exp.type === "intern" && (
                      <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-bold">
                        INTERNSHIP
                      </span>
                    )}
                  </p>
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-600 flex items-start gap-3">
                        <span className="text-rose-500 mt-1.5 text-lg">▸</span>
                        <span className="flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">
              🛠️
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Skills & Technologies
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/70 backdrop-blur-glass rounded-3xl p-8 shadow-lg card-hover border-0"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-500"></span>
                  <span className="capitalize">
                    {category === "frontend" && "Frontend Development"}
                    {category === "backend" && "Backend Development"}
                    {category === "database" && "Database & Storage"}
                    {category === "tools" && "Tools & Platforms"}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-pink-100/80 text-rose-700 px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default border border-pink-200/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
