import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

export default function PortfolioWorkCard({ work, compact = false }) {
  const external = work.href.startsWith("http");
  return (
    <article className={`group overflow-hidden rounded-2xl border border-stone-200/80 bg-white transition-shadow hover:shadow-md ${compact ? "flex flex-col sm:grid sm:grid-cols-[180px_minmax(0,1fr)]" : "flex flex-col"}`}>
      <Link href={work.href} {...(external ? {target:"_blank",rel:"noopener noreferrer"} : {})} aria-label={`Explore ${work.title}`} className={`relative block shrink-0 overflow-hidden border-b border-stone-200/70 bg-stone-100 ${compact ? "aspect-[16/9] sm:aspect-auto sm:min-h-[170px]" : "aspect-[16/9] sm:aspect-auto sm:h-40"}`}>
        <div className="absolute inset-x-0 top-0" style={{height:"100%"}}>
        <ExportedImage src={work.image} alt={work.title} fill unoptimized sizes={compact ? "(max-width: 639px) 100vw, 180px" : "(max-width: 639px) 100vw, 430px"} className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" style={{objectPosition:work.imagePosition || "center"}} />
        </div>
      </Link>
      <div className={`flex min-w-0 flex-1 flex-col ${compact ? "p-5 sm:px-5 sm:py-4" : "p-5 sm:p-6"}`}>
        <p className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-medium tracking-widest"><span className="uppercase text-rose-500">{work.category}</span><span className="tracking-normal text-stone-400">{work.period}</span></p>
        <h3 className={`${compact ? "text-lg sm:text-base" : "text-lg"} font-semibold leading-snug tracking-tight text-stone-800`}>{work.title}</h3>
        <p className={`mt-2 text-sm leading-6 text-stone-500 ${compact ? "line-clamp-2" : "line-clamp-2"}`}>{work.summary}</p>
        <div className="mb-2 mt-3 flex flex-wrap gap-1.5">{work.tags.slice(0,3).map(tag=><span key={tag} className="rounded bg-stone-100 px-2 py-1 text-[10px] text-stone-500">{tag}</span>)}</div>
        <div className="mt-auto flex flex-wrap items-center gap-x-3">
          <Link href={work.href} {...(external ? {target:"_blank",rel:"noopener noreferrer"} : {})} className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-800">{work.action}<span aria-hidden="true">{external ? "↗" : "→"}</span></Link>
          {work.paper && <a href={work.paper} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-rose-600">Paper <span aria-hidden="true">↗</span></a>}
          {work.website && <a href={work.website} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-rose-600">Live site <span aria-hidden="true">↗</span></a>}
          {work.github && <a href={work.github} target="_blank" rel="noopener noreferrer" aria-label={`${work.title} on GitHub`} className="ml-auto inline-flex h-11 w-11 items-center justify-center text-stone-400 hover:text-stone-800"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/></svg></a>}
        </div>
      </div>
    </article>
  );
}
