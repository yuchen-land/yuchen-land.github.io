import Link from "next/link";
import Navbar from "@/components/Navbar";
import { education, experience, skills, publications, languages, activities } from "@/data/data";

export const metadata = {
  title: "About Me - Yu-Chen(Cindy), Liu",
  description: "Learn more about my education, experience, skills, and professional journey as a Software Engineer.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <Navbar />

      <div className="relative z-10 min-h-screen py-16 px-4 pt-32 md:pt-40">
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
          <div className="mb-16 animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 text-transparent bg-clip-text tracking-tight">
              About Me
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl font-light">
              Discover my journey, skills, and passion for building great products
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up">
            <div className="backdrop-blur-sm bg-gradient-to-br from-pink-100/70 to-rose-100/70 border border-pink-200/50 rounded-3xl p-10 md:p-12 shadow-lg">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5 font-light">
                A proactive and curious <span className="font-semibold text-rose-600">software engineer</span> with a passion for building products that simplify life. I thrive in dynamic teams, enjoy turning complex ideas into reality, and am always ready to bring positive energy and fresh perspectives to every project.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-pink-200/50">
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 text-transparent bg-clip-text">
                    1+
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 text-transparent bg-clip-text">
                    6+
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Projects Built</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text">
                    10+
                  </p>
                  <p className="text-xs text-gray-600 mt-1">Skills & Tech</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <section className="mb-24 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-2xl shadow-lg">
                🎓
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Education
                </h2>
                <p className="text-xs text-gray-500 mt-1">{education.length} credentials</p>
              </div>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-3xl p-8 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:-translate-y-1"
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
                    {edu.description.map((desc, i) => {
                      // Check if this description has a link
                      let content = desc;
                      let link = null;
                      
                      if (desc.includes("Research Lab:") && edu.links?.lab) {
                        link = { url: edu.links.lab, icon: "lab" };
                      } else if (desc.includes("Advisor:") && edu.links?.advisor) {
                        link = { url: edu.links.advisor, icon: "advisor" };
                      } else if (desc.includes("Scholarship:") && edu.links?.scholarship) {
                        link = { url: edu.links.scholarship, icon: "scholarship" };
                      }
                      
                      return (
                        <li key={i} className="text-gray-600 flex items-start gap-3">
                          <span className="text-pink-400 mt-1 text-sm">•</span>
                          <span className="flex-1 flex items-center gap-2">
                            {content}
                            {link && (
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 hover:text-rose-700 transition-all hover:scale-110"
                                title={link.icon === "lab" ? "Visit Lab" : link.icon === "advisor" ? "View Profile" : "Learn More"}
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
            </div>
          </section>

          {/* Publications */}
          <section className="mb-24 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-2xl shadow-lg">
                📚
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Publications
                </h2>
                <p className="text-xs text-gray-500 mt-1">{publications.length} publication{publications.length !== 1 ? "s" : ""}</p>
              </div>
            </div>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-3xl p-8 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:-translate-y-1"
                >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-bold uppercase tracking-wide">
                        {pub.status}
                      </span>
                      <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-semibold">
                        {pub.type === "conference" ? "Conference Paper" : "Journal Paper"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 leading-relaxed">
                      {pub.title}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold text-rose-600">{pub.authors}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold text-rose-600">{pub.venue}</span>
                      <span className="text-gray-400">•</span>
                      <span>{pub.location}</span>
                      <span className="text-gray-400">•</span>
                      <span>{pub.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-24 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg">
                💼
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Experience
                </h2>
                <p className="text-xs text-gray-500 mt-1">{experience.length} position{experience.length !== 1 ? "s" : ""}</p>
              </div>
            </div>
          <div className="relative pl-12 border-l-2 border-pink-200">
            {experience.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[49px] top-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full border-4 border-pink-50 shadow-lg"></div>

                <div className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
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
                    {exp.description.map((desc, i) => {
                      // Check if this is CyberLink experience with MyEdit link
                      if (exp.links?.myedit && desc.includes("MyEdit")) {
                        const parts = desc.split("MyEdit");
                        return (
                          <li key={i} className="text-gray-600 flex items-start gap-3">
                            <span className="text-rose-500 mt-1.5 text-lg">▸</span>
                            <span className="flex-1">
                              {parts[0]}
                              <a
                                href={exp.links.myedit}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-rose-600 hover:text-rose-700 underline decoration-2 underline-offset-2"
                              >
                                MyEdit
                              </a>
                              {parts[1]}
                            </span>
                          </li>
                        );
                      }
                      
                      // Check if this description has any highlights (bold text)
                      if (exp.highlights && exp.highlights.length > 0) {
                        let hasHighlight = false;
                        
                        // Check if any highlight exists in this description
                        for (const highlight of exp.highlights) {
                          if (desc.includes(highlight)) {
                            hasHighlight = true;
                            const parts = desc.split(highlight);
                            return (
                              <li key={i} className="text-gray-600 flex items-start gap-3">
                                <span className="text-rose-500 mt-1.5 text-lg">▸</span>
                                <span className="flex-1">
                                  {parts[0]}
                                  <span className="font-bold text-gray-800">{highlight}</span>
                                  {parts[1]}
                                </span>
                              </li>
                            );
                          }
                        }
                      }
                      
                      return (
                        <li key={i} className="text-gray-600 flex items-start gap-3">
                          <span className="text-rose-500 mt-1.5 text-lg">▸</span>
                          <span className="flex-1">{desc}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
            </div>
          </section>

          {/* Skills & Technologies */}
          <section className="mb-24 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">
                🛠️
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Skills & Technologies
                </h2>
                <p className="text-xs text-gray-500 mt-1">{Object.keys(skills).length} categories</p>
              </div>
            </div>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-3xl p-8 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-500"></span>
                  <span className="capitalize">
                    {category === "frontend" && "Frontend Development"}
                    {category === "backend" && "Backend Development"}
                    {category === "programming" && "Programming Languages"}
                    {category === "database" && "Database & Storage"}
                    {category === "tools" && "Development Tools"}
                    {category === "design" && "Design & Multimedia"}
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

          {/* Language Proficiency */}
          <section className="mb-24 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg">
                🌐
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Language Proficiency
                </h2>
                <p className="text-xs text-gray-500 mt-1">{languages.length} language{languages.length !== 1 ? "s" : ""}</p>
              </div>
            </div>
          <div className="space-y-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-3xl p-8 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{lang.name}</h3>
                  <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1.5 rounded-full text-lg mt-2 md:mt-0">
                    Score: {lang.score}
                  </span>
                </div>
                <p className="text-gray-600">{lang.details}</p>
              </div>
            ))}
            </div>
          </section>

          {/* Activities & Involvement */}
          <section className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">
                🎯
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Activities & Involvement
                </h2>
                <p className="text-xs text-gray-500 mt-1">{activities.length} activit{activities.length !== 1 ? "ies" : "y"}</p>
              </div>
            </div>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/70 border border-pink-200/50 rounded-3xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 flex-1">
                    {activity.organization}
                  </h3>
                  <span className="text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full text-xs">
                    {activity.period}
                  </span>
                </div>
                <p className="text-gray-700 font-semibold mb-2">{activity.role}</p>
                <p className="text-gray-600 text-sm">{activity.activity}</p>
              </div>
            ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
