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

      <div className="relative z-10 min-h-screen py-16 px-6 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto">
          {/* Header - Premium Style */}
          <div className="text-center mb-16 animate-fade-in-down">
            <p className="text-sm font-medium text-rose-500/80 tracking-widest uppercase mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight mb-6">
              Yu-Chen (Cindy) Liu
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
              Software Engineer passionate about building products that simplify life
            </p>
          </div>

          {/* Introduction Card */}
          <div className="mb-20 animate-fade-in-up">
            <div className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-2xl p-8 md:p-10 shadow-sm">
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                A proactive and curious software engineer with a passion for building products that simplify life. I thrive in dynamic teams, enjoy turning complex ideas into reality, and am always ready to bring positive energy and fresh perspectives to every project.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900">1+</p>
                  <p className="text-xs text-gray-500 mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900">10+</p>
                  <p className="text-xs text-gray-500 mt-1">Projects Built</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900">10+</p>
                  <p className="text-xs text-gray-500 mt-1">Skills & Tech</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <section className="mb-20 animate-fade-in-up">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Experience</h2>
              <p className="text-sm text-gray-400">{experience.length} position{experience.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="relative pl-8 border-l border-rose-200/60">
              {experience.map((exp, index) => (
                <div key={index} className="mb-8 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[25px] top-2 w-4 h-4 bg-rose-400 rounded-full border-4 border-pink-50"></div>

                  <div className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <span className="text-rose-500 text-sm font-medium mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium text-sm mb-4 flex items-center gap-2">
                      {exp.company}
                      {exp.type === "intern" && (
                        <span className="text-[10px] bg-rose-50 text-rose-500 px-2 py-0.5 rounded-full font-medium">
                          Internship
                        </span>
                      )}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => {
                        // Check if this is CyberLink experience with MyEdit link
                        if (exp.links?.myedit && desc.includes("MyEdit")) {
                          const parts = desc.split("MyEdit");
                          return (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="flex-1">
                                {parts[0]}
                                <a
                                  href={exp.links.myedit}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-medium text-rose-600 hover:text-rose-700 underline underline-offset-2"
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
                          for (const highlight of exp.highlights) {
                            if (desc.includes(highlight)) {
                              const parts = desc.split(highlight);
                              return (
                                <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                  <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="flex-1">
                                    {parts[0]}
                                    <span className="font-medium text-gray-800">{highlight}</span>
                                    {parts[1]}
                                  </span>
                                </li>
                              );
                            }
                          }
                        }

                        return (
                          <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                            <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
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
          <section className="mb-20 animate-fade-in-up">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Skills & Technologies</h2>
              <p className="text-sm text-gray-400">{Object.keys(skills).length} categories</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl p-5 shadow-sm"
                >
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    {category === "frontend" && "Frontend Development"}
                    {category === "backend" && "Backend Development"}
                    {category === "programming" && "Programming Languages"}
                    {category === "database" && "Database & Storage"}
                    {category === "tools" && "Development Tools"}
                    {category === "design" && "Design & Multimedia"}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-rose-400 text-xs px-2.5 py-1 bg-rose-50/80 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-20 animate-fade-in-up">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Education</h2>
              <p className="text-sm text-gray-400">{education.length} credential{education.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {edu.school}
                      </h3>
                      {edu.level === "phd" && (
                        <span className="text-[10px] bg-purple-50 text-purple-500 px-2 py-0.5 rounded-full font-medium">
                          Ph.D.
                        </span>
                      )}
                      {edu.level === "master" && (
                        <span className="text-[10px] bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full font-medium">
                          Master
                        </span>
                      )}
                      {edu.level === "bachelor" && (
                        <span className="text-[10px] bg-green-50 text-green-500 px-2 py-0.5 rounded-full font-medium">
                          Bachelor
                        </span>
                      )}
                      {edu.level === "high-school" && (
                        <span className="text-[10px] bg-orange-50 text-orange-500 px-2 py-0.5 rounded-full font-medium">
                          High School
                        </span>
                      )}
                    </div>
                    <span className="text-rose-500 text-sm font-medium mt-1 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm mb-3">{edu.degree}</p>
                  {edu.description && (
                    <ul className="space-y-1.5">
                      {edu.description.map((desc, i) => {
                        let link = null;

                        if (desc.includes("Research Lab:") && edu.links?.lab) {
                          link = { url: edu.links.lab };
                        } else if (desc.includes("Advisor:") && edu.links?.advisor) {
                          link = { url: edu.links.advisor };
                        } else if (desc.includes("Scholarship:") && edu.links?.scholarship) {
                          link = { url: edu.links.scholarship };
                        }

                        return (
                          <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-rose-400 mt-0.5">•</span>
                            <span className="flex-1 flex items-center gap-2">
                              {desc}
                              {link && (
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-500 transition-colors"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
          <section className="mb-20 animate-fade-in-up">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Publications</h2>
              <p className="text-sm text-gray-400">{publications.length} publication{publications.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center text-rose-500 text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[10px] bg-rose-50 text-rose-500 px-2 py-0.5 rounded-full font-medium uppercase tracking-wide">
                          {pub.status}
                        </span>
                        <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">
                          {pub.type === "conference" ? "Conference" : "Journal"}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2 leading-relaxed">
                        {pub.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {pub.authors}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
                        <span className="font-medium text-rose-500">{pub.venue}</span>
                        <span>•</span>
                        <span>{pub.location}</span>
                        <span>•</span>
                        <span>{pub.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Language Proficiency */}
          <section className="mb-20 animate-fade-in-up">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Language Proficiency</h2>
              <p className="text-sm text-gray-400">{languages.length} language{languages.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-semibold text-gray-900">{lang.name}</h3>
                    <span className="text-rose-500 font-semibold text-sm">
                      {lang.score}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{lang.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Activities & Involvement */}
          <section className="mb-20 animate-fade-in-up">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Activities & Involvement</h2>
              <p className="text-sm text-gray-400">{activities.length} activit{activities.length !== 1 ? "ies" : "y"}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold text-gray-900 flex-1">
                      {activity.organization}
                    </h3>
                    <span className="text-rose-500 text-xs font-medium">
                      {activity.period}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm mb-1">{activity.role}</p>
                  <p className="text-gray-500 text-sm">{activity.activity}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="animate-fade-in">
            <div className="backdrop-blur-sm bg-white/50 border border-white/60 rounded-2xl p-10 md:p-12 text-center shadow-sm">
              <p className="text-sm font-medium text-rose-500/80 tracking-widest uppercase mb-3">
                Get in Touch
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Let&apos;s connect
              </h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                Interested in collaborating or just want to say hi? I&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:yuchen880401@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send an email
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-white/80 border border-gray-200 text-gray-700 rounded-full px-6 py-2.5 text-sm font-medium hover:bg-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Portfolio
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
