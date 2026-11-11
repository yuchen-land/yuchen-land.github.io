import Link from "next/link";
import Navbar from "@/components/Navbar";
import { personalInfo, education, experience, skills, publications, languages, activities } from "@/data/data";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#fff1f2_0%,_#fafafa_45%,_#fafafa_100%)]">
      <Navbar />

      <div className="relative z-10 min-h-screen py-12 px-5 sm:px-6 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Header - Premium Style */}
          <div className="text-center mb-10 md:mb-12 animate-fade-in-down">
            <p className="text-sm font-medium text-rose-500/80 tracking-widest uppercase mb-4">
              About
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              AI-Native Software Engineer building generative AI products and reliable production systems
            </p>
          </div>

          {/* Introduction Card */}
          <div className="mb-14 animate-fade-in-up">
            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="max-w-2xl space-y-4 text-sm md:text-base leading-7 text-gray-600 mb-7">
                <p>
                  I develop generative AI creative tools at CyberLink and independently build and operate Holly World, a multilingual costume rental platform.
                </p>
                <p>
                  I combine product engineering with AI-assisted development to deliver reliable software, supported by clear project rules, automated checks, deployment verification, and rollback.
                </p>
                <p>
                  My research in SDN and SRv6 informs my approach to resilient systems. Across engineering, design, QA, and product teams, I focus on turning complex ideas into practical products.
                </p>
                <p className="pt-1 text-xs md:text-sm text-stone-500">
                  Based in Taipei (UTC+8)<span aria-hidden="true" className="mx-2">·</span><span className="inline-block">Open to work in Taiwan & remote</span>
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900">2+</p>
                  <p className="text-xs text-gray-500 mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900">10+</p>
                  <p className="text-xs text-gray-500 mt-1">Projects Built</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-900">15+</p>
                  <p className="text-xs text-gray-500 mt-1">Skills & Tech</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <section className="mb-14 animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Experience</h2>
              <p className="text-sm text-gray-500">{experience.length} position{experience.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="relative pl-6 border-l border-stone-200">
              {experience.map((exp, index) => (
                <div key={index} className="mb-8 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[33px] top-2 w-4 h-4 bg-rose-400 rounded-full border-4 border-[#fafafa]"></div>

                  <div className="bg-white border border-gray-200/80 rounded-xl p-5 md:p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-base font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <span className="text-stone-500 text-xs font-medium mt-1 md:mt-0 whitespace-nowrap">
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
                          const parts = desc.split(/(MyEdit Business|MyEdit)/g);
                          return (
                            <li key={i} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                              <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="flex-1">
                                {parts.map((part, index) => {
                                  const href = part === "MyEdit Business"
                                    ? "https://business.myedit.online/"
                                    : part === "MyEdit" ? exp.links.myedit : null;
                                  return href ? (
                                    <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-rose-600 hover:text-rose-700 underline underline-offset-2">
                                      {part}
                                    </a>
                                  ) : part;
                                })}
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
                                <li key={i} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
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
                          <li key={i} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
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
          <section className="mb-14 animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Skills & Technologies</h2>
              <p className="text-sm text-gray-500">{Object.keys(skills).length} categories</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white border border-gray-200/80 rounded-xl p-5 shadow-sm"
                >
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    {category === "frontend" && "Frontend Development"}
                    {category === "backend" && "Backend Development"}
                    {category === "programming" && "Programming Languages"}
                    {category === "networking" && "Networking"}
                    {category === "infrastructure" && "Infrastructure & DevOps"}
                    {category === "database" && "Database & Storage"}
                    {category === "tools" && "Development Tools"}
                    {category === "design" && "Design & Multimedia"}
                    {category === "testingAnalytics" && "Testing & Analytics"}
                    {category === "aiTools" && "AI Agent Engineering"}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-stone-600 text-xs px-2.5 py-1 bg-stone-100 rounded-lg"
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
          <section className="mb-14 animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Education</h2>
              <p className="text-sm text-gray-500">{education.length} credential{education.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200/80 rounded-xl p-5 md:p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-gray-900">
                        {edu.school}
                      </h3>
                      {edu.level === "phd" && (
                        <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                          Ph.D.
                        </span>
                      )}
                      {edu.level === "master" && (
                        <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                          Master
                        </span>
                      )}
                      {edu.level === "bachelor" && (
                        <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                          Bachelor
                        </span>
                      )}
                      {edu.level === "high-school" && (
                        <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                          High School
                        </span>
                      )}
                    </div>
                    <span className="text-stone-500 text-xs font-medium mt-1 md:mt-0 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm mb-3">{edu.degree}</p>
                  {edu.admission && (
                    <details className="group mt-3 rounded-lg border border-stone-200 bg-stone-50/50 px-3 py-2.5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400 [&::-webkit-details-marker]:hidden">
                        <div>
                          <h4 className="text-[13px] font-medium leading-snug text-gray-800">Doctoral admission</h4>
                          <p className="mt-0.5 text-[11px] text-stone-500">2024 · Electrical Engineering, Group F · Rank 1</p>
                        </div>
                        <span aria-hidden="true" className="shrink-0 text-stone-400 transition-transform group-open:rotate-180">⌄</span>
                      </summary>
                      <div className="mt-2 border-t border-stone-200/70 pt-2">
                        <a href={edu.admission.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-xs font-medium text-rose-600 hover:underline underline-offset-4">Official announcement ↗</a>

                      <a href={edu.admission.image} target="_blank" rel="noopener noreferrer" className="mx-auto block max-w-xl overflow-hidden rounded-lg border border-stone-200 bg-white transition-colors hover:border-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400" aria-label="Open admission proof at full size">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={edu.admission.image} alt="成功大學113學年度博士班電機工程學系己組錄取名單，劉O蓁正取第一名" className="h-auto w-full" loading="lazy" />
                      </a>
                        <p className="mt-2 text-right text-[11px] text-stone-400">Click image to view full size ↗</p>
                      </div>
                    </details>
                  )}
                  {edu.description && (
                    <ul className="space-y-1.5">
                      {edu.description.filter((desc) => !(edu.scholarshipProof && desc.startsWith("Scholarship:"))).map((desc, i) => {
                        let link = null;

                        if (desc.includes("Research Lab:") && edu.links?.lab) {
                          link = { url: edu.links.lab };
                        } else if (desc.includes("Advisor:") && edu.links?.advisor) {
                          link = { url: edu.links.advisor };
                        } else if (desc.includes("Scholarship:") && edu.links?.scholarship) {
                          link = { url: edu.links.scholarship, text: "Scholarship announcement" };
                        }

                        return (
                          <li key={i} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-rose-400 mt-0.5">•</span>
                            <span className="flex-1 flex flex-wrap items-center gap-2">
                              {desc}
                              {link && (
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={link.text || `Learn more: ${desc}`}
                                  className={link.text ? "inline-flex min-h-11 items-center gap-1 text-rose-600 underline underline-offset-4 hover:text-rose-700" : "relative inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-50 after:absolute after:-inset-2.5 after:content-[''] hover:bg-rose-100 text-rose-500 transition-colors"}
                                >
                                  {link.text}
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
                  {edu.scholarshipProof && (
                    <details className="group mt-3 rounded-lg border border-stone-200 bg-stone-50/50 px-3 py-2.5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400 [&::-webkit-details-marker]:hidden">
                        <div>
                          <h4 className="text-[13px] font-medium leading-snug text-gray-800">NSTC Doctoral Research Scholarship</h4>
                          <p className="mt-0.5 text-[11px] text-stone-500">2024 · Award recipient</p>
                        </div>
                        <span aria-hidden="true" className="shrink-0 text-stone-400 transition-transform group-open:rotate-180">⌄</span>
                      </summary>
                      <div className="mt-2 border-t border-stone-200/70 pt-2">
                        <a href={edu.links.scholarship} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-xs font-medium text-rose-600 hover:underline underline-offset-4">Official announcement ↗</a>

                      <a href={edu.scholarshipProof} target="_blank" rel="noopener noreferrer" className="mx-auto block max-w-xl overflow-hidden rounded-lg border border-stone-200 bg-white transition-colors hover:border-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400" aria-label="Open scholarship award proof at full size">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={edu.scholarshipProof} alt="113年國科會博士生研究獎學金核定獎勵名單：劉宇蓁，國立中央大學資訊管理學系，正取" className="aspect-[6/1] w-full object-cover object-[50%_45%]" loading="lazy" />
                      </a>
                        <p className="mt-2 text-right text-[11px] text-stone-400">Click image to view full size ↗</p>
                      </div>
                    </details>
                  )}

                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="mb-14 animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Publications</h2>
              <p className="text-sm text-gray-500">{publications.length} publication{publications.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200/80 rounded-xl p-5 md:p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-stone-100 rounded-lg flex items-center justify-center text-stone-600 text-sm font-semibold">
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
                      <p className="mt-2 text-xs leading-relaxed text-stone-500">{pub.publisher} · {pub.series} · pp. {pub.pages}</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 text-xs font-medium text-rose-600">
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-rose-700">Published paper ↗</a>
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-rose-700">NCKU publication record ↗</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Language Proficiency */}
          <section className="mb-14 animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Language Proficiency</h2>
              <p className="text-sm text-gray-500">{languages.length} language{languages.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200/80 rounded-xl p-5 shadow-sm"
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
          <section className="mb-14 animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Activities & Involvement</h2>
              <p className="text-sm text-gray-500">{activities.length} activit{activities.length !== 1 ? "ies" : "y"}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200/80 rounded-xl p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold text-gray-900 flex-1">
                      {activity.organization}
                    </h3>
                    <span className="text-stone-500 text-xs font-medium">
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
            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 md:p-10 text-center shadow-sm">
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
