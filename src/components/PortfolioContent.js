"use client";

import { useState } from "react";
import { projects, thesis, projectDocumentation } from "@/data/data";
import PortfolioWorkCard from "@/components/PortfolioWorkCard";

const filters = ["All", "Product", "Systems", "Creative"];
const categories = {1:"Product",11:"Product",10:"Product",3:"Systems",8:"Systems",2:"Creative",7:"Creative"};
const summaries = {
  1:"AI image, audio and video tools, with product workflows, API integration and cross-team delivery at CyberLink.",
  11:"Creative tools for business, connecting subscription workflows and reusable product experiences.",
  10:"A multilingual costume rental platform, from catalog architecture to reliable releases and daily operations.",
  3:"A Python tool for serial-port throughput testing and data transmission verification on Linux.",
  2:"An artisanal pastry storefront bringing product presentation, ordering and a personal creative practice together.",
  8:"A C assembler that resolves symbols, encodes SIC/XE instructions and generates relocation records.",
  7:"A four-player tabletop learning game connecting physical cards with a bilingual Unity app.",
};
const titles = {10:"Holly World",2:"BonBunny Pastry Studio",3:"Linux Serial Port Test Tool",7:"Clchemy — Learn C++ through play"};
function toWork(p) {
  const doc=projectDocumentation[p.id];
  const href=p.id===3 ? "/projects/linux-serial-port#interactive-demo" : doc ? `/projects/${doc.slug}` : p.demo;
  return {...p,image:p.image,website:p.id===10 ? "https://www.holly-world.com.tw/" : undefined,title:titles[p.id] || p.title,category:categories[p.id] || "Product",summary:summaries[p.id] || p.description[0].replace(/\*\*/g,""),href,action:p.id===3 ? "Try interactive demo" : doc ? "Explore project" : "Visit website"};
}
const research={paper:thesis.links.publication,title:"SRv6 — Designing for recovery",category:"Systems",period:thesis.year,image:thesis.image,summary:"Adaptive path selection research, brought to life through an interactive network recovery dashboard.",tags:["SRv6","SDN","Network resilience"],href:"/srv6-proa",action:"Explore interactive demo"};
export default function PortfolioContent() {
  const [filter,setFilter]=useState("All");
  const visible=projects.filter(p=>!p.hidden);
  const featured=[1,10,11].map(id=>visible.find(p=>p.id===id)).filter(Boolean).map(toWork).concat(research);
  const more=[3,2,8,7].map(id=>visible.find(p=>p.id===id)).filter(Boolean).map(toWork);
  const matches=work=>filter==="All" || work.category===filter;
  const groups=[["Featured",featured.filter(matches),false],["More Projects",more.filter(matches),true]];
  return <>
    <header className="mb-7 border-b border-stone-200/80 pb-7 sm:mb-9 sm:pb-8">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[.2em] text-rose-500">Portfolio</p>
      <div className="flex flex-wrap items-end justify-between gap-4"><h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">Selected works.</h1><p className="max-w-sm text-sm leading-6 text-stone-500">Products, systems, and creative explorations.<br className="hidden sm:block"/> Thoughtful engineering, across different settings.</p></div>
    </header>
    <div className="sticky top-16 z-30 -mx-1 mb-6 flex items-center justify-between gap-3 border-b border-stone-200/70 bg-[#fcf8f8]/95 px-1 py-3 backdrop-blur-md sm:static sm:mb-8 sm:border-0 sm:bg-transparent sm:py-0" aria-label="Filter projects">
      <div className="portfolio-filter-row flex min-w-0 flex-1 flex-nowrap gap-1 overflow-x-auto sm:flex-none">{filters.map(item=><button key={item} type="button" aria-pressed={filter===item} onClick={()=>setFilter(item)} className={`portfolio-filter-button min-h-11 shrink-0 whitespace-nowrap rounded-full px-3.5 text-xs font-medium transition-colors ${filter===item ? "bg-rose-500 text-white" : "text-stone-500 hover:bg-white hover:text-stone-900"}`}>{item}</button>)}</div>
      <p aria-live="polite" className="sr-only text-xs text-stone-400 sm:not-sr-only">{featured.filter(matches).length+more.filter(matches).length} projects</p>
    </div>
    {groups.map(([title,works,compact])=>works.length>0 && <section key={title} className="mb-10 sm:mb-14" aria-label={title}>
      <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-semibold tracking-tight text-stone-800">{title}</h2><span className="text-[11px] text-stone-400">{String(works.length).padStart(2,"0")} projects</span></div>
      <div className={compact ? "grid gap-3" : "grid gap-5 sm:grid-cols-2"}>{works.map(work=><PortfolioWorkCard key={work.title} work={work} compact={compact}/>)}</div>
    </section>)}
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 py-7"><div><p className="text-base font-medium text-stone-800">Have something in mind?</p><p className="mt-1 text-sm text-stone-500">Let’s make something useful together.</p></div><a href="mailto:yuchen880401@gmail.com" className="inline-flex min-h-11 items-center gap-3 rounded-full bg-stone-800 px-5 text-xs font-medium text-white hover:bg-stone-700">Let’s talk <span aria-hidden="true">↗</span></a></footer>
  </>;
}
