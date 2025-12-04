import Link from "next/link";
import { projectDocumentation, projects } from "@/data/data";
import Navbar from "@/components/Navbar";

export async function generateStaticParams() {
  return Object.keys(projectDocumentation).map((id) => ({
    id: id.toString(),
  }));
}

export default function ProjectDocPage({ params }) {
  const doc = projectDocumentation[params.id];

  if (!doc) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project documentation you
            {`'`}re looking for doesn
            {`'`}t exist yet.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-8 py-3 hover:scale-105 transition-transform"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-24 pt-32 md:pt-40">
        {/* Back Button */}
        <Link
          href="/portfolio"
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
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            {doc.title}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
        </div>

        {/* Overview Section */}
        <section className="mb-20 animate-fade-in-up">
          <div className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-rose-600">
              Overview
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {doc.overview.description}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-50/50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-3">Challenge</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {doc.overview.challenge}
                </p>
              </div>
              <div className="bg-rose-50/50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-3">Solution</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {doc.overview.solution}
                </p>
              </div>
              <div className="bg-orange-50/50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-3">Impact</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {doc.overview.impact}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-rose-500">⚙️</span> Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(doc.techStack).map(([category, items]) => (
              <div
                key={category}
                className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-800 mb-4 text-rose-600 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <ul className="space-y-2">
                  {items.map((tech) => (
                    <li
                      key={tech}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-rose-500">✨</span> Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {doc.features.map((feature, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-rose-500 text-xl flex-shrink-0">✓</div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Achievements Section */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-rose-500">🏆</span> Key Achievements
          </h2>

          <div className="space-y-4">
            {doc.keyAchievements.map((achievement, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-gradient-to-r from-pink-50/70 to-rose-50/70 border border-pink-200/50 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-pink-400 to-rose-400 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roles Section */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-rose-500">👤</span> My Roles
          </h2>

          <div className="flex flex-wrap gap-3">
            {doc.roles.map((role) => (
              <div
                key={role}
                className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-full px-6 py-3 text-sm font-medium text-rose-600 hover:bg-white/90 transition-all"
              >
                {role}
              </div>
            ))}
          </div>
        </section>

        {/* Links Section */}
        {Object.keys(doc.links).length > 0 && (
          <section className="mb-20 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="text-rose-500">🔗</span> Project Links
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(doc.links).map(([linkType, url]) => (
                <a
                  key={linkType}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-800 capitalize mb-1">
                        {linkType.replace(/([A-Z])/g, " $1").trim()}
                      </h3>
                      <p className="text-xs text-gray-500 truncate">
                        {url.substring(0, 50)}...
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-rose-500 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mb-20 animate-fade-in">
          <div className="backdrop-blur-sm bg-gradient-to-r from-pink-100/70 to-rose-100/70 border border-pink-200/50 rounded-3xl p-12 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in this project?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Want to discuss this project or learn more about my work? Feel
              free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:yuchen880401@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full px-8 py-3 font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-white/70 border border-pink-200/50 text-rose-600 rounded-full px-8 py-3 font-medium hover:bg-white/90 hover:scale-105 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
