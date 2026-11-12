import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Navbar from "@/components/Navbar";
import { personalInfo, education, experience, skills, publications, languages, activities } from "@/data/data";

const websiteScreenshots = {
  "01": [
    { src: "/images/screenshots/myedit-home-20261112.webp", width: 1440, height: 780, title: "MyEdit", caption: "AI image, video, and audio product homepage" },
    { src: "/images/screenshots/myedit-business-home-20261112.webp", width: 1440, height: 780, title: "MyEdit Business", caption: "Creative tools for product and marketing workflows" },
  ],
  "02": [
    { src: "/images/screenshots/holly-home-20261112.webp", width: 1429, height: 774, title: "Holly World · Homepage", caption: "Seasonal collections and costume discovery" },
    { src: "/images/screenshots/holly-catalog-20261112.webp", width: 1429, height: 774, title: "Holly World · Catalog", caption: "Category navigation and product browsing" },
  ],
  "03": [
    { src: "/images/screenshots/srv6-recovery-topology.webp", width: 389, height: 216, title: "SRv6 recovery topology", caption: "Primary path, failed link, and backup route", alt: "SRv6 topology showing primary path A–R1–R2–R3–R5–R6–B, a failed R3–R5 link, and backup route through R7 and R8" },
  ],
};

function WebsiteScreenshots({ chapter }) {
  const screenshots = websiteScreenshots[chapter];
  if (!screenshots) return null;
  return <div className={`mt-5 grid gap-4 ${screenshots.length > 1 ? "sm:grid-cols-2" : "max-w-sm"}`} aria-label="Project visuals">
    {screenshots.map(screenshot => <figure key={screenshot.src} className="min-w-0">
      <a href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`View ${screenshot.title} screenshot at full size`} className="group block overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-colors hover:border-rose-300">
        <ExportedImage src={screenshot.src} alt={screenshot.alt || `${screenshot.title} website screenshot`} width={screenshot.width} height={screenshot.height} unoptimized className="h-auto w-full" />
      </a>
      <figcaption className="mt-2 text-[11px] leading-5 text-stone-500"><span className="block font-medium text-stone-700">{screenshot.title}</span>{screenshot.caption}<span aria-hidden="true" className="ml-1 text-rose-500">↗</span></figcaption>
    </figure>)}
  </div>;
}

const approaches = [
  ["Start with the user", "I look at the whole journey: what someone needs, where a workflow gets difficult, and how the interface can make the next step clear."],
  ["Build for the real world", "Implementation is one part of delivery. I also work on automated checks, deployment verification, and recovery when something goes wrong."],
  ["Work across disciplines", "I collaborate with product, design, marketing, and QE teams to connect technical decisions with the people using the product."],
];
const chapters = [
  { number: "01", label: "PRODUCT ENGINEERING · CYBERLINK", title: "Making creative tools useful.", body: "At CyberLink, I work on MyEdit and MyEdit Business, bringing AI image, audio, and video tools into usable product experiences. My work spans editing interfaces, subscription and purchase workflows, API integration, and analytics.", detail: "I also coordinate AT work across the two products with Engineering and QE, alongside my work on AI-assisted testing and reporting automation.", tags: ["React", "API integration", "Cross-team delivery"], href: "/projects/myedit", link: "Explore MyEdit" },
  { number: "02", label: "INDEPENDENT BUILDING · HOLLY WORLD", title: "Owning what happens after launch.", body: "Building and operating Holly World brings me closer to the full life of a product: a multilingual catalog, day-to-day operations, search visibility, and reliable releases.", detail: "It is where I put AI-assisted development into practice, with project rules, automated validation, deployment checks, and rollback.", tags: ["Product ownership", "AI-assisted development", "Operations"], href: "/projects/holly-world-ecommerce", link: "Inside Holly World" },
  { number: "03", label: "RESEARCH · SDN & SRv6", title: "Understanding how systems recover.", body: "My research explored adaptive path selection in SDN-based SRv6 networks. It gave me a way to think about resilience: how a system responds when its expected path is no longer available.", detail: "I turned that research into an interactive dashboard, so the routing and recovery process can be explored rather than only read about.", tags: ["Network resilience", "Research", "Visualization"], href: "/srv6-proa", link: "Try the routing demo" },
];

export default function AboutPage() {
  return <div className="min-h-screen site-surface">
    <Navbar />
    <main className="page-shell max-w-4xl">
      <header className="grid items-center gap-7 border-b border-stone-200/80 pb-10 md:grid-cols-[minmax(0,1fr)_170px] md:gap-12 md:pb-12">
        <div>
          <p className="section-label mb-4">A little about me</p>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-800 sm:text-4xl">Hi, I’m Cindy.</h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-stone-600">I’m a software engineer who enjoys turning complicated ideas into things people can use.</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-stone-500">I build AI products at CyberLink, run Holly World, and explore resilient networks through research. Across these different settings, I care about how things work — and how they feel to the people using them.</p>
          <p className="mt-5 text-xs leading-6 text-stone-500">Taipei, Taiwan · Open to opportunities in Taiwan &amp; remote</p>
        </div>
        <figure className="hidden md:block">
          <div className="overflow-hidden rounded-[2rem] border border-white bg-rose-50 p-1 shadow-sm rotate-3">
            <ExportedImage src={personalInfo.avatar} alt="Cindy enjoying a meal" width={170} height={210} className="aspect-[4/5] w-full rounded-[1.8rem] object-cover" />
          </div>
          <figcaption className="mt-4 text-center text-[10px] text-stone-500">Engineering, with a human side.</figcaption>
        </figure>
      </header>

      <section aria-labelledby="approach-title" className="py-10 md:py-12">
        <p className="section-label mb-2">My approach</p>
        <h2 id="approach-title" className="text-xl font-semibold tracking-tight text-stone-800">How I work</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-7">
          {approaches.map(([title, body], index) => <div key={title} className="border-l-2 border-rose-200/80 pl-4">
            <span className="text-[10px] tabular-nums text-rose-400">0{index + 1}</span>
            <h3 className="mb-2 mt-2 text-sm font-semibold text-stone-700">{title}</h3>
            <p className="text-[13px] leading-6 text-stone-500">{body}</p>
          </div>)}
        </div>
      </section>

      <section aria-labelledby="chapters-title" className="border-t border-stone-200/80 pt-10 md:pt-12">
        <p className="section-label mb-2">Different settings, shared curiosity</p>
        <h2 id="chapters-title" className="text-xl font-semibold tracking-tight text-stone-800">Three threads in my work</h2>
        {chapters.map(chapter => <article key={chapter.number} className="grid gap-3 border-b border-stone-200/70 py-8 md:grid-cols-[190px_minmax(0,1fr)] md:gap-8 md:py-10">
          <div><span className="text-[11px] tabular-nums text-rose-400">{chapter.number}</span><p className="mt-2 max-w-[170px] text-[10px] font-medium leading-5 tracking-[.1em] text-stone-500">{chapter.label}</p></div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-stone-800">{chapter.title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">{chapter.number === "01" ? chapter.body.split(/(MyEdit Business|MyEdit)/g).map((part, index) => {
              const href = part === "MyEdit" ? "https://myedit.online/en" : part === "MyEdit Business" ? "https://business.myedit.online/" : null;
              return href ? <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-rose-600 underline decoration-rose-200 underline-offset-4 transition-colors hover:text-rose-700 hover:decoration-rose-400">{part}</a> : part;
            }) : chapter.body}</p>
            <p className="mt-3 text-sm leading-7 text-stone-500">{chapter.detail}</p>
            <WebsiteScreenshots chapter={chapter.number} />
            <p className="mt-4 text-xs leading-6 text-stone-500">{chapter.tags.join(" · ")}</p>
            <Link href={chapter.href} className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-700">{chapter.link}<span aria-hidden="true">→</span></Link>
            {chapter.number === "01" && <a href="https://github.com/cindyliu-dev" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-stone-600 hover:text-rose-600">Work GitHub <span aria-hidden="true">↗</span></a>}
          </div>
        </article>)}
      </section>

      <section aria-labelledby="outside-title" className="py-10 md:py-12">
        <p className="section-label mb-2">Beyond the screen</p>
        <h2 id="outside-title" className="text-xl font-semibold tracking-tight text-stone-800">There’s a pâtissier here, too.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">Alongside engineering, I have a life in pastry and creative work. BonBunny brings those interests together with the experience of building a storefront.</p>
        <Link href="/projects/bonbunny" className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-700">Meet BonBunny <span aria-hidden="true">→</span></Link>
      </section>

      <section aria-labelledby="background-title" className="border-t border-stone-200/80 pt-10 md:pt-12">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div><p className="section-label mb-2">The details, if you’re curious</p><h2 id="background-title" className="text-xl font-semibold tracking-tight text-stone-800">Background &amp; credentials</h2></div>
          <a href="/YuChen_Liu_Resume.pdf" download="YuChen_Liu_Resume.pdf" className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-rose-600">Download resume <span aria-hidden="true">↓</span></a>
        </div>
        <p className="mb-5 text-sm leading-7 text-stone-500">My background connects software engineering with quality assurance and network research. Expand a section for the timeline, technical toolkit, or supporting documents.</p>
          <details className="group border-b border-stone-200/80 py-1">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span><span className="block text-sm font-medium text-stone-700">Work history</span><span className="mt-1 block text-xs leading-5 text-stone-500">CyberLink · MOXA · National Center for High-Performance Computing</span></span>
              <span aria-hidden="true" className="shrink-0 text-lg font-light text-rose-400 transition-transform group-open:rotate-45">+</span>
            </summary>
          {/* Experience */}
          <div className="pt-5">

            <div className="relative pl-6 border-l border-stone-200">
              {experience.map((exp, index) => (
                <div key={index} className="mb-8 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[33px] top-2 w-4 h-4 bg-rose-400 rounded-full border-4 border-[#fafafa]"></div>

                  <div className="bg-white border border-gray-200/80 rounded-2xl p-5 md:p-6 shadow-sm">
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
          </div>


          </details>
          <details className="group border-b border-stone-200/80 py-1">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span><span className="block text-sm font-medium text-stone-700">Technical toolkit</span><span className="mt-1 block text-xs leading-5 text-stone-500">Languages, platforms, testing, and analytics</span></span>
              <span aria-hidden="true" className="shrink-0 text-lg font-light text-rose-400 transition-transform group-open:rotate-45">+</span>
            </summary>
          {/* Skills & Technologies */}
          <div className="pt-5">

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
          </div>


          </details>
          <details className="group border-b border-stone-200/80 py-1">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span><span className="block text-sm font-medium text-stone-700">Education & supporting documents</span><span className="mt-1 block text-xs leading-5 text-stone-500">Academic background, admission, and scholarship records</span></span>
              <span aria-hidden="true" className="shrink-0 text-lg font-light text-rose-400 transition-transform group-open:rotate-45">+</span>
            </summary>
          {/* Education */}
          <div className="pt-5">

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200/80 rounded-2xl p-5 md:p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-gray-900">
                        {edu.school}
                      </h3>
                      {edu.level === "phd" && (
                        <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                          Doctoral studies
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
          </div>


          </details>
          <details className="group border-b border-stone-200/80 py-1">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span><span className="block text-sm font-medium text-stone-700">Research publication</span><span className="mt-1 block text-xs leading-5 text-stone-500">Published SDN / SRv6 research and paper links</span></span>
              <span aria-hidden="true" className="shrink-0 text-lg font-light text-rose-400 transition-transform group-open:rotate-45">+</span>
            </summary>
          {/* Publications */}
          <div className="pt-5">

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200/80 rounded-2xl p-5 md:p-6 shadow-sm"
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
          </div>


          </details>
          <details className="group border-b border-stone-200/80 py-1">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <span><span className="block text-sm font-medium text-stone-700">Languages & activities</span><span className="mt-1 block text-xs leading-5 text-stone-500">Language proficiency, workshops, and community involvement</span></span>
              <span aria-hidden="true" className="shrink-0 text-lg font-light text-rose-400 transition-transform group-open:rotate-45">+</span>
            </summary>
          {/* Language Proficiency */}
          <div className="pt-5">

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
          </div>

          {/* Activities & Involvement */}
          <div className="pt-5">
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
          </div>


          </details>
      </section>
      <section aria-labelledby="connect-title" className="mt-10 rounded-2xl border border-rose-100 bg-rose-50/40 px-5 py-8 md:mt-12 md:px-8">
        <p className="section-label mb-2">Let’s connect</p>
        <h2 id="connect-title" className="text-xl font-semibold tracking-tight text-stone-800">Have something in mind?</h2>
        <p className="mt-3 max-w-lg text-sm leading-7 text-stone-500">I’m happy to talk about products, engineering challenges, or an opportunity to work together.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={`mailto:${personalInfo.email}`} className="inline-flex min-h-11 items-center rounded-full bg-rose-500 px-5 text-sm font-medium text-white hover:bg-rose-600">Say hello <span aria-hidden="true" className="ml-2">↗</span></a>
          <a href="https://www.linkedin.com/in/yuchenliu0401/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-stone-200 bg-white px-5 text-sm text-stone-600 hover:border-rose-200">LinkedIn <span aria-hidden="true" className="ml-2">↗</span></a>
        </div>
      </section>
    </main>
  </div>;
}
