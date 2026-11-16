"use client";

import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import HomeRedirect from "@/components/HomeRedirect";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import MiniFlow from "@/components/MiniFlow";
import Brief from "@/components/Brief";
import ScrollProgress from "@/components/ScrollProgress";
import TableOfContents from "@/components/TableOfContents";
import StarTimeline from "@/components/StarTimeline";
import SerialPortDemo from "@/components/SerialPortDemo";
import AssemblerContent from "@/components/AssemblerContent";
import ClchemyContent from "@/components/ClchemyContent";
import HollyArchitecture from "@/components/HollyArchitecture";
import { findDocBySlug, findProjectBySlug } from "@/utils/projectHelpers";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { categories, summaries, flows, titles, architectures, buildMaps, highlights } from "@/data/projectPresentation";
import { use, useMemo } from "react";

const linkLabels = { demo: "Live site", github: "Code", paper: "Paper" };

export default function ProjectDocPage({ params }) {
  const resolvedParams = use(params);
  const doc = findDocBySlug(resolvedParams.slug);
  const project = findProjectBySlug(resolvedParams.slug);

  // The cover leads the page; the gallery shows everything else.
  const cover = project?.image || doc?.screenshots?.[0]?.src;
  const gallery = useMemo(() => (doc?.screenshots || []).filter((shot) => shot.src !== cover), [doc, cover]);

  const sections = useMemo(() => [
    ...(doc?.star?.result ? [{ id: "results", label: "Results" }] : []),
    ...(doc?.id === "holly-world-ecommerce" || architectures[project?.id] ? [{ id: "architecture", label: "Architecture" }] : []),
    ...(doc?.id === "sic-assembler" ? [{ id: "assembler-design", label: "Assembly Pipeline" }] : []),
    ...(doc?.id === "clchemy" ? [{ id: "game-design", label: "Game Design" }] : []),
    ...(doc?.id === "linux-serial-port" ? [{ id: "interactive-demo", label: "Live Demo" }] : []),
    ...(gallery.length ? [{ id: "screenshots", label: "Gallery" }] : []),
    ...(doc?.star && ["situation", "task", "action"].some((key) => doc.star[key]?.length) ? [{ id: "star", label: "Journey" }] : []),
    ...(doc?.techStack && Object.keys(doc.techStack).length ? [{ id: "tech", label: "Tech Stack" }] : []),
  ], [doc, gallery, project]);

  if (!doc) return <HomeRedirect />;

  const id = project?.id;
  const links = Object.entries(doc.links || {});
  const meta = [
    ["Role", doc.roles?.join(" · ")],
    ["Timeline", project?.period],
    ["Type", categories[id]],
  ].filter(([, value]) => value);

  return (
    <div className="min-h-screen site-surface">
      <ScrollProgress />
      <Navbar />
      <TableOfContents sections={sections} />

      <div className="relative z-10 page-shell max-w-3xl">
        <Link href="/portfolio" className="group mb-8 inline-flex min-h-10 items-center gap-1.5 text-xs font-medium text-stone-500 transition-colors hover:text-stone-900">
          <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">←</span>
          Portfolio
        </Link>

        <header className="mb-8 md:mb-10">
          <p className="section-label mb-4">{categories[id] ? `${categories[id]} project` : "Project"}</p>
          <h1 className="font-display text-4xl leading-[1.12] text-stone-900 sm:text-5xl">{titles[id] || doc.title}</h1>
          {summaries[id] && <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">{summaries[id]}</p>}

          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-stone-200/80 py-5 sm:grid-cols-4">
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[11px] font-medium uppercase tracking-[.14em] text-stone-400">{label}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-stone-700">{value}</dd>
              </div>
            ))}
            {links.length > 0 && (
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[.14em] text-stone-400">Links</dt>
                <dd className="mt-1.5 flex flex-col items-start text-sm leading-6">
                  {links.map(([type, url]) => (
                    <a key={type} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-rose-600 transition-colors hover:text-rose-800">
                      {/youtu\.?be/.test(url) ? "Demo video" : linkLabels[type] || type.replace(/([A-Z])/g, " $1").trim()} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </header>

        {cover && (
          <figure className="mb-10 md:mb-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-stone-200/80 bg-stone-100 shadow-[0_10px_36px_#3826330d]">
              <ExportedImage src={cover} alt={titles[id] || doc.title} fill priority sizes="(max-width: 767px) 100vw, 720px" className="object-cover" style={{ objectPosition: project?.imagePosition || "center" }} />
            </div>
            {flows[id] && (
              <figcaption className="mt-6">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[.14em] text-stone-400">At a glance</p>
                <MiniFlow steps={flows[id]} label={`How ${titles[id] || doc.title} works`} />
              </figcaption>
            )}
          </figure>
        )}

        {doc.star?.result && (
          <section id="results" className="mb-14 scroll-mt-24">
            <p className="section-label mb-2">Outcomes &amp; impact</p>
            <h2 className="font-display mb-4 text-2xl text-stone-900">Results</h2>
            {highlights[id] && (
              <dl className="mb-6 grid divide-y divide-stone-200/80 border-y border-stone-200/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {highlights[id].map(([figure, label]) => (
                  <div key={label} className="flex flex-row-reverse items-baseline justify-end gap-4 py-3.5 sm:flex-col-reverse sm:items-stretch sm:gap-1.5 sm:px-5 sm:py-5 sm:first:pl-0">
                    <dt className="text-xs leading-5 text-stone-500">{label}</dt>
                    <dd className="font-display w-24 shrink-0 text-2xl leading-none text-stone-900 sm:w-auto sm:text-[2rem]">{figure}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="border-l border-rose-200 pl-5">
              <Brief text={doc.star.result} className="text-[15px] leading-8 text-stone-700" />
            </div>
          </section>
        )}

        {doc.id === "holly-world-ecommerce" && <HollyArchitecture />}
        {architectures[id] && <ArchitectureDiagram architecture={architectures[id]} />}

        {doc.id === "linux-serial-port" && <SerialPortDemo />}

        {doc.id === "clchemy" && <ClchemyContent />}
        {doc.id === "sic-assembler" && <AssemblerContent />}

        {gallery.length > 0 && (
          <section id="screenshots" className="mb-14 scroll-mt-24">
            <p className="section-label mb-2">A closer look</p>
            <h2 className="font-display mb-5 text-2xl text-stone-900">Gallery</h2>
            <ProjectGallery images={gallery} title={titles[id] || doc.title} />
          </section>
        )}

        <StarTimeline star={doc.star} buildMap={buildMaps[id]} />

        {doc.techStack && Object.keys(doc.techStack).length > 0 && (
          <section id="tech" className="mb-14 scroll-mt-24">
            <p className="section-label mb-2">Built with</p>
            <h2 className="font-display mb-5 text-2xl text-stone-900">Tech stack</h2>
            <dl className="divide-y divide-stone-200/80 border-y border-stone-200/80">
              {Object.entries(doc.techStack).map(([category, items]) => (
                <div key={category} className="grid gap-1 py-4 sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-6">
                  <dt className="text-sm font-medium capitalize text-stone-800">{category.replace(/([A-Z])/g, " $1").trim()}</dt>
                  <dd className="text-sm leading-7 text-stone-600">{items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 py-7">
          <div>
            <p className="font-display text-lg text-stone-800">Interested in this project?</p>
            <p className="mt-1 text-sm text-stone-500">Happy to walk through the details.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/portfolio" className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-xs font-medium text-stone-600 transition-colors hover:bg-white hover:text-stone-900"><span aria-hidden="true">←</span> All projects</Link>
            <a href="mailto:yuchen880401@gmail.com" className="inline-flex min-h-11 items-center gap-3 rounded-full bg-stone-800 px-5 text-xs font-medium text-white transition-colors hover:bg-stone-700">Let’s talk <span aria-hidden="true">↗</span></a>
          </div>
        </footer>
      </div>
    </div>
  );
}
