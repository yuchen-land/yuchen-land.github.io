// A layered system diagram drawn from data: each layer is a row of nodes,
// joined to the next layer by a hairline connector with an optional label.
// architecture: { summary, layers: [{ label, via?, nodes: [[name, detail]] }], note? }
export default function ArchitectureDiagram({ architecture, title = "Architecture" }) {
  if (!architecture?.layers?.length) return null;
  return (
    <section id="architecture" className="mb-14 scroll-mt-24">
      <p className="section-label mb-2">System design</p>
      <h2 className="font-display mb-3 text-2xl text-stone-900">{title}</h2>
      {architecture.summary && <p className="mb-6 max-w-2xl text-sm leading-7 text-stone-600">{architecture.summary}</p>}
      <div className="rounded-lg border border-stone-200/80 bg-white/70 p-4 sm:p-7">
        <ol>
          {architecture.layers.map((layer, index) => (
            <li key={layer.label}>
              {index > 0 && (
                <div aria-hidden="true" className="grid sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-5">
                  <span />
                  <div className="flex items-center justify-center gap-3 py-1.5">
                    <span className="relative h-7 w-px bg-stone-300 after:absolute after:-bottom-px after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rotate-45 after:border-b after:border-r after:border-stone-400" />
                    {layer.via && <span className="text-[11px] tracking-wide text-stone-400">{layer.via}</span>}
                  </div>
                </div>
              )}
              <div className="grid gap-2 sm:grid-cols-[112px_minmax(0,1fr)] sm:items-center sm:gap-5">
                <p className="text-[11px] font-medium uppercase tracking-[.14em] text-rose-600/90">{layer.label}</p>
                <ul className="grid gap-2.5" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 150px), 1fr))` }}>
                  {layer.nodes.map(([name, detail]) => (
                    <li key={name} className="rounded-md border border-stone-200 bg-white px-3.5 py-3">
                      <p className="text-sm font-medium text-stone-800">{name}</p>
                      {detail && <p className="mt-1 text-xs leading-5 text-stone-500">{detail}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        {architecture.note && <p className="mt-6 border-t border-stone-200/80 pt-4 text-xs leading-6 text-stone-500">{architecture.note}</p>}
      </div>
    </section>
  );
}
