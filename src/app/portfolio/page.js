import Link from "next/link";
import { projects } from "@/data/data";
import ProjectCard from "@/components/ProjectCard";

export default function PortfolioPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
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
            My Portfolio
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            A showcase of projects I've built and contributed to
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-24 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-xl shadow-lg">
                ⭐
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 text-transparent bg-clip-text">
                Featured Projects
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="mb-20 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg">
                📂
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
                More Projects
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white/70 backdrop-blur-glass rounded-3xl p-12 shadow-lg animate-fade-in border-0">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Let's Collaborate
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Interested in working together or want to learn more about my projects? 
            Feel free to reach out via GitHub or LinkedIn!
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pink-400 to-rose-500 text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl text-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
