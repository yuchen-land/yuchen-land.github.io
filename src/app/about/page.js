import Link from "next/link";
import { education, experience, skills } from "@/data/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 mb-12 group font-medium transition-colors"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-rose-600 text-transparent bg-clip-text tracking-tight">
            About Me
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            My education, experience, and technical expertise
          </p>
        </div>

        {/* Education */}
        <section className="mb-20 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg">
              🎓
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Education
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-glass rounded-3xl p-8 shadow-xl card-hover border border-slate-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {edu.school}
                  </h3>
                  <span className="text-violet-600 font-semibold bg-violet-50 px-4 py-1.5 rounded-full text-sm mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-700 font-semibold text-lg mb-2">{edu.degree}</p>
                {edu.description && (
                  <p className="text-slate-600">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white text-2xl shadow-lg">
              💼
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Experience
            </h2>
          </div>
          <div className="relative pl-12 border-l-2 border-violet-200">
            {experience.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[49px] top-2 w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full border-4 border-slate-50 shadow-lg"></div>

                <div className="bg-white/80 backdrop-blur-glass rounded-3xl p-8 shadow-xl card-hover border border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {exp.position}
                    </h3>
                    <span className="text-violet-600 font-semibold bg-violet-50 px-4 py-1.5 rounded-full text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-700 font-semibold text-lg mb-4 flex items-center gap-2">
                    {exp.company}
                    {exp.type === "intern" && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
                        INTERNSHIP
                      </span>
                    )}
                  </p>
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 flex items-start gap-3">
                        <span className="text-violet-500 mt-1.5 text-lg">▸</span>
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-2xl shadow-lg">
              🛠️
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Skills & Technologies
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/80 backdrop-blur-glass rounded-3xl p-8 shadow-xl card-hover border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600"></span>
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
                      className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default"
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
