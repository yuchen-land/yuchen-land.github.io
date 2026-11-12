import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import styles from "./AboutPage.module.css";
import Navbar from "@/components/Navbar";
import { personalInfo, education, experience, skills, publications, languages, activities } from "@/data/data";

const websiteScreenshots = {
  "01": [
    { src: "/images/screenshots/myedit-home-20261112.webp", width: 1440, height: 780, title: "MyEdit", href: "https://myedit.online/en", caption: "AI image, video, and audio product homepage" },
    { src: "/images/screenshots/myedit-business-home-20261112.webp", width: 1440, height: 780, title: "MyEdit Business", href: "https://business.myedit.online/", caption: "Creative tools for product and marketing workflows" },
  ],
  "02": [
    { src: "/images/screenshots/holly-home-20261112.webp", width: 1429, height: 774, title: "Holly World · Homepage", href: "/projects/holly-world-ecommerce", caption: "Seasonal collections and costume discovery" },
    { src: "/images/screenshots/holly-catalog-20261112.webp", width: 1429, height: 774, title: "Holly World · Catalog", href: "/projects/holly-world-ecommerce", caption: "Category navigation and product browsing" },
    { src: "/images/screenshots/holly-admin-redacted.webp", width: 1600, height: 758, title: "Holly World · Admin", href: "/projects/holly-world-ecommerce", caption: "Product catalog management · Prices and stock redacted", alt: "Holly World product management dashboard, with all visible price and stock values obscured" },
  ],
  "03": [
    { src: "/images/screenshots/srv6-recovery-topology.webp", width: 389, height: 216, title: "SRv6 recovery topology", href: "/srv6-proa", caption: "Primary path, failed link, and backup route", alt: "SRv6 topology showing primary path A–R1–R2–R3–R5–R6–B, a failed R3–R5 link, and backup route through R7 and R8" },
  ],
};

function WebsiteScreenshots({ chapter }) {
  const screenshots = websiteScreenshots[chapter];
  if (!screenshots) return null;
  return <div className={`mt-5 grid gap-4 ${screenshots.length > 1 ? "sm:grid-cols-2" : "max-w-lg"}`} aria-label="Project visuals">
    {screenshots.map((screenshot, index) => <figure key={screenshot.src} className={`min-w-0 ${screenshots.length > 1 && screenshots.length % 2 === 1 && index === screenshots.length - 1 ? "sm:col-span-2" : ""}`}>
      <Link href={screenshot.href} {...(screenshot.href.startsWith("http") ? {target:"_blank",rel:"noopener noreferrer"} : {})} aria-label={`Explore ${screenshot.title}`} className="group block overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-colors hover:border-rose-300">
        <ExportedImage src={screenshot.src} alt={screenshot.alt || `${screenshot.title} website screenshot`} width={screenshot.width} height={screenshot.height} unoptimized className="h-auto w-full" />
      </Link>
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
  { number: "01", label: "PRODUCT ENGINEERING · CYBERLINK", title: "Making creative tools useful.", body: "At CyberLink, I work on MyEdit and MyEdit Business, bringing AI image, audio, and video tools into usable product experiences. My work spans editing interfaces, subscription and purchase workflows, API integration, and analytics.", detail: "I also coordinate AT work across the two products with Engineering and QE, alongside my work on AI-assisted testing and reporting automation.", tags: ["React", "API integration", "Cross-team delivery"], href: "https://myedit.online/en", link: "Explore MyEdit" },
  { number: "02", label: "INDEPENDENT BUILDING · HOLLY WORLD", title: "Owning what happens after launch.", body: "Building and operating Holly World brings me closer to the full life of a product: a multilingual catalog, day-to-day operations, search visibility, and reliable releases.", detail: "It is where I put AI-assisted development into practice, with project rules, automated validation, deployment checks, and rollback.", tags: ["Product ownership", "AI-assisted development", "Operations"], href: "/projects/holly-world-ecommerce", link: "Inside Holly World" },
  { number: "03", label: "RESEARCH · SDN & SRv6", title: "Understanding how systems recover.", body: "My research explored adaptive path selection in SDN-based SRv6 networks. It gave me a way to think about resilience: how a system responds when its expected path is no longer available.", detail: "I turned that research into an interactive dashboard, so the routing and recovery process can be explored rather than only read about.", tags: ["Network resilience", "Research", "Visualization"], href: "/srv6-proa", link: "Try the routing demo" },
];

export default function AboutPage() {
  return <div className="min-h-screen site-surface">
    <Navbar />
    <main className="page-shell max-w-5xl">
      <header className={styles.header}>
        <div>
          <p className="section-label mb-4">A little about me</p>
          <h1 className={styles.title}>Hi, I’m Cindy.</h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-stone-600">I’m a software engineer who enjoys turning complicated ideas into things people can use.</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-stone-500">I build AI products at CyberLink, run Holly World, and explore resilient networks through research. Across these different settings, I care about how things work — and how they feel to the people using them.</p>
          <p className="mt-5 text-xs leading-6 text-stone-500">Taipei, Taiwan · Open to opportunities in Taiwan &amp; remote</p>
        </div>
        <aside aria-label="Professional profile" className={styles.profile}>
          <div className="flex items-center gap-3">
            <ExportedImage src={personalInfo.avatar} alt="Cindy" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-rose-50" />
            <div className="min-w-0"><p className="text-sm font-semibold text-stone-800">Yu-Chen (Cindy) Liu</p><p className="mt-1 text-xs text-stone-500">Software Engineer</p></div>
          </div>
          <p className="mt-3 text-xs leading-6 text-stone-600">Product engineering<br />Reliable systems · Applied research</p>
          <p className="mt-2 text-[11px] text-stone-500">Taipei, Taiwan</p>
          <div className={styles.profileLinks}>
            {[
              { title: "Personal GitHub", href: "https://github.com/yuchen-land", icon: "M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 00-1-3c3-.3 6-1.5 6-6a5 5 0 00-1.5-3.5 4.5 4.5 0 000-3.5s-1.5-.5-4 1a13 13 0 00-7 0c-2.5-1.5-4-1-4-1a4.5 4.5 0 000 3.5A5 5 0 002 9c0 4.5 3 5.7 6 6a3.5 3.5 0 00-1 3v4" },
              { title: "Work GitHub", href: "https://github.com/cindyliu-dev", icon: "M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 00-1-3c3-.3 6-1.5 6-6a5 5 0 00-1.5-3.5 4.5 4.5 0 000-3.5s-1.5-.5-4 1a13 13 0 00-7 0c-2.5-1.5-4-1-4-1a4.5 4.5 0 000 3.5A5 5 0 002 9c0 4.5 3 5.7 6 6a3.5 3.5 0 00-1 3v4" },
              { title: "LinkedIn", href: "https://www.linkedin.com/in/yuchenliu0401/", icon: "M4 9v11M4 4v.5M10 20V9h4v2c1-3 6-3 6 2v7" },
            ].map(item => <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
              <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
              <span>{item.title}</span><span aria-hidden="true" className={styles.external}>↗</span>
            </a>)}
          </div>
        </aside>
      </header>

      <section aria-labelledby="approach-title" className="py-8 md:py-12">
        <p className="section-label mb-2">My approach</p>
        <h2 id="approach-title" className="text-xl font-semibold tracking-tight text-stone-800">How I work</h2>
        <div className={styles.approaches}>
          {approaches.map(([title, body], index) => <div key={title} className={styles.approach}>
            <span className="text-[10px] tabular-nums text-rose-400">0{index + 1}</span>
            <h3 className="mb-2 mt-2 text-sm font-semibold text-stone-700">{title}</h3>
            <p className="text-[13px] leading-6 text-stone-500">{body}</p>
          </div>)}
        </div>
      </section>

      <section aria-labelledby="chapters-title" className="border-t border-stone-200/80 pt-8 md:pt-12">
        <p className="section-label mb-2">Different settings, shared curiosity</p>
        <h2 id="chapters-title" className="text-xl font-semibold tracking-tight text-stone-800">Three threads in my work</h2>
        {chapters.map(chapter => <article key={chapter.number} className={styles.chapter}>
          <div className={styles.chapterLabel}><span>{chapter.number}</span><p>{chapter.label}</p></div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-stone-800">{chapter.title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">{chapter.number === "01" ? chapter.body.split(/(MyEdit Business|MyEdit)/g).map((part, index) => {
              const href = part === "MyEdit" ? "https://myedit.online/en" : part === "MyEdit Business" ? "https://business.myedit.online/" : null;
              return href ? <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-rose-600 underline decoration-rose-200 underline-offset-4 transition-colors hover:text-rose-700 hover:decoration-rose-400">{part}</a> : part;
            }) : chapter.body}</p>
            <p className="mt-3 text-sm leading-7 text-stone-500">{chapter.detail}</p>
            <p className="mt-4 text-xs leading-6 text-stone-500">{chapter.tags.join(" · ")}</p>
            <Link href={chapter.href} className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-700">{chapter.link}<span aria-hidden="true">→</span></Link>
            {chapter.number === "01" && <a href="https://business.myedit.online/" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-700">MyEdit Business <span aria-hidden="true">↗</span></a>}
            {chapter.number === "02" && <a href="https://www.holly-world.com.tw/" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-700">Live site <span aria-hidden="true">↗</span></a>}
            {chapter.number === "01" && <a href="https://github.com/cindyliu-dev" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-stone-600 hover:text-rose-600">Work GitHub <span aria-hidden="true">↗</span></a>}
          </div>
          <div className="min-w-0 md:col-span-2"><WebsiteScreenshots chapter={chapter.number} /></div>
        </article>)}
      </section>

      <section aria-labelledby="outside-title" className="py-8 md:py-12">
        <div className="grid items-center gap-6 rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50/80 to-white p-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:p-8">
          <div className="relative mx-auto h-48 w-36 overflow-hidden rounded-2xl border border-white bg-stone-100 shadow-sm sm:h-60 sm:w-[180px]">
            <ExportedImage src="/images/cindy-food-moment.webp" alt="Cindy enjoying food at a restaurant" width={600} height={800} unoptimized className="absolute bottom-0 left-0 h-full w-full object-cover object-left-bottom" />
          </div>
          <div>
            <p className="section-label mb-2">Beyond the screen</p>
            <h2 id="outside-title" className="text-xl font-semibold tracking-tight text-stone-800">There’s a pâtissier here, too.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600">Alongside engineering, I love making desserts and exploring new flavors. BonBunny brings my interest in pastry and creative work together with the experience of building a storefront.</p>
            <Link href="/projects/bonbunny" className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-700">Meet BonBunny <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="background-title" className="border-t border-stone-200/80 pt-8 md:pt-12">
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
