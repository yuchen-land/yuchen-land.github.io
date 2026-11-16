import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import MiniFlow from "@/components/MiniFlow";

export default function PortfolioWorkCard({ work, compact = false }) {
  const external = work.href.startsWith("http");
  return (
    <article className={`group relative cursor-pointer overflow-hidden rounded-lg border border-stone-200/80 bg-white transition-shadow hover:shadow-md focus-within:shadow-md has-[h3_a:focus-visible]:outline has-[h3_a:focus-visible]:outline-2 has-[h3_a:focus-visible]:outline-offset-2 has-[h3_a:focus-visible]:outline-rose-400 ${compact ? "flex flex-col sm:grid sm:grid-cols-[248px_minmax(0,1fr)]" : "flex flex-col"}`}>
      <div className={`relative block shrink-0 overflow-hidden border-b border-stone-200/70 bg-stone-100 ${compact ? "aspect-[16/9] sm:m-4 sm:mr-0 sm:self-start sm:rounded-md sm:border sm:border-stone-200/70" : "aspect-[16/9]"}`}>
        <div className="absolute inset-x-0 top-0" style={{height:"100%"}}>
        <ExportedImage src={work.image} alt={work.title} fill unoptimized sizes={compact ? "(max-width: 639px) 100vw, 248px" : "(max-width: 639px) 100vw, 430px"} className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" style={{objectPosition:work.imagePosition || "center"}} />
        </div>
      </div>
      <div className={`flex min-w-0 flex-1 flex-col ${compact ? "p-5 sm:px-5 sm:py-4" : "p-5 sm:p-6"}`}>
        <p className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium tracking-widest"><span className="uppercase text-rose-600">{work.category}</span><span className="tracking-normal text-stone-500">{work.period}</span></p>
        <h3 className={`font-display ${compact ? "text-xl sm:text-lg" : "text-xl"} leading-snug text-stone-800`}><Link href={work.href} {...(external ? {target:"_blank",rel:"noopener noreferrer"} : {})} className="outline-none after:absolute after:inset-0 after:content-[''] group-hover:text-rose-700 transition-colors">{work.title}</Link></h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600">{work.summary}</p>
        {work.outcome && <p className="mt-2 text-xs leading-5 text-stone-500">{work.outcome}</p>}
        {work.flow ? <div className="mb-3 mt-5 border-t border-stone-100 pt-4"><MiniFlow steps={work.flow} label={`How ${work.title} works`} /></div> : <div className="mb-2 mt-3 flex flex-wrap gap-1.5">{work.tags.slice(0,3).map(tag=><span key={tag} className="rounded bg-stone-100 px-2 py-1 text-[11px] text-stone-600">{tag}</span>)}</div>}
        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-3">
          <Link href={work.href} {...(external ? {target:"_blank",rel:"noopener noreferrer"} : {})} tabIndex={-1} aria-hidden="true" className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-800">{work.action}<span aria-hidden="true">{external ? "↗" : "→"}</span></Link>
          {work.paper && <a href={work.paper} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-rose-600">Paper <span aria-hidden="true">↗</span></a>}
          {work.website && <a href={work.website} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-rose-600">Live site <span aria-hidden="true">↗</span></a>}
          {work.github && <a href={work.github} target="_blank" rel="noopener noreferrer" aria-label={`${work.title} on GitHub`} className="ml-auto inline-flex h-11 w-11 items-center justify-center text-stone-500 hover:text-stone-800"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/></svg></a>}
        </div>
      </div>
    </article>
  );
}
