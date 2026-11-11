"use client";

import { useState } from "react";

const views = {
  runtime: {
    label: "Runtime & data",
    flows: [
      {
        title: "01 / Catalog request path",
        steps: [
          ["Experience", "Storefront", "Next.js · React · next-intl. Discovery across five languages."],
          ["Server", "Catalog services", "Server-side filtering and shared query caching."],
          ["Persistence", "Neon PostgreSQL", "Drizzle ORM queries and versioned schema migrations."],
        ],
        fallback: "Catalog query fails → bundled JSON snapshot",
        note: "Supported catalog reads fall back to the deployed snapshot. Browsing can continue, but recent database edits may be absent. This does not provide database writes or a backup for every feature.",
        caption: "Catalog edits trigger cache revalidation. Cached reads reduce repeated queries; filtering and field selection limit data transfer.",
      },
      {
        title: "02 / Media request path",
        steps: [
          ["Client", "Browser", "Requests images and media independently of catalog queries."],
          ["Delivery", "Cloudflare Workers", "Media gateway with edge caching and request controls."],
          ["Storage", "Cloudflare R2", "Object storage for processed images and media."],
        ],
        caption: "Arrows show request direction; content returns along the same path. Cache hits can be served before reaching the database or object storage.",
      },
    ],
    tradeoff: "Separate catalog and media delivery so each can be maintained independently. Use cached reads to control database traffic, and accept a potentially older catalog snapshot when availability matters more than immediate freshness.",
  },
  delivery: {
    label: "Delivery pipeline",
    flows: [
      {
        title: "01 / Code to release",
        steps: [
          ["Develop", "Reviewed changes", "Human-led, AI-assisted work guided by project rules."],
          ["Validate", "GitHub Actions", "Catalog and i18n checks, lint, type checks, tests, and build."],
          ["Verify", "Staging checks", "Deployment smoke tests exercise key visitor journeys."],
        ],
        fallback: "Verified candidate → controlled production release",
        note: "Verify the release and retain a rollback path. Database and catalog changes need their own recovery plan; reverting an application deployment alone does not reverse stored data.",
      },
      {
        title: "02 / Catalog image preparation",
        steps: [
          ["Process", "WebP assets", "Node.js and Sharp prepare images for the storefront."],
          ["Store", "R2 upload", "Processed assets are uploaded to object storage."],
          ["Connect", "Catalog references", "Update image references and validate catalog consistency."],
        ],
      },
    ],
    tradeoff: "AI assistance speeds up implementation; repeatable validation and staging checks provide evidence for release decisions. Catalog content, translations, and media references are checked alongside application code.",
  },
};

function Flow({ flow }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-stone-500">{flow.title}</h3>
      <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {flow.steps.map(([label, title, description], index) => (
          <li key={title} className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row">
            {index > 0 && <span aria-hidden="true" className="self-center text-stone-300"><span className="sm:hidden">↓</span><span className="hidden sm:inline">→</span></span>}
            <div className="min-w-0 flex-1 rounded-xl border border-stone-200 bg-white p-3">
              <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-rose-500">{label}</p>
              <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-stone-500">{description}</p>
            </div>
          </li>
        ))}
      </ol>
      {flow.fallback && (
        <div className="mt-3 rounded-xl border border-dashed border-amber-200 bg-amber-50/60 p-3">
          <h4 className="text-xs font-semibold text-amber-900">{flow.fallback}</h4>
          <p className="mt-1 text-xs leading-relaxed text-amber-900/70">{flow.note}</p>
        </div>
      )}
      {flow.caption && <p className="mt-3 text-xs leading-relaxed text-stone-500">{flow.caption}</p>}
    </div>
  );
}

export default function HollyArchitecture() {
  const [view, setView] = useState("runtime");
  return (
    <section id="architecture" className="mb-20 scroll-mt-24">
      <div className="mb-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-rose-500">System design</p>
        <h2 className="text-xl font-semibold text-gray-900">Architecture</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">A multilingual storefront with independent media delivery, resilient catalog reads, and a verified release workflow.</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/70 shadow-sm">
        <div role="group" aria-label="Architecture views" className="flex flex-wrap gap-2 border-b border-stone-200 p-3">
          {Object.entries(views).map(([id, item]) => (
            <button key={id} type="button" aria-pressed={view === id} aria-controls="holly-architecture-view" onClick={() => setView(id)} className={`min-h-11 rounded-lg px-4 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400 ${view === id ? "bg-gray-900 text-white" : "text-stone-500 hover:bg-stone-100"}`}>
              {item.label}
            </button>
          ))}
        </div>
        <div id="holly-architecture-view" className="space-y-6 p-4 sm:p-6">
          {views[view].flows.map((flow) => <Flow key={flow.title} flow={flow} />)}
          <div className="border-t border-stone-200 pt-4">
            <h3 className="text-sm font-semibold text-gray-800">The engineering tradeoff</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{views[view].tradeoff}</p>
          </div>
        </div>
        <p className="border-t border-stone-200 px-4 py-3 text-[11px] leading-relaxed text-stone-400 sm:px-6">Public architecture overview · November 2026 · Operational identifiers and security configuration omitted.</p>
      </div>
    </section>
  );
}
