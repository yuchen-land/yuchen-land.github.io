import Brief from "@/components/Brief";

const bullet = "relative pl-4 before:absolute before:left-0 before:top-[.8em] before:h-px before:w-2 before:bg-rose-300";
const toggle = "inline-flex min-h-10 cursor-pointer list-none items-center gap-2 text-xs font-medium text-stone-500 transition-colors hover:text-rose-600 [&::-webkit-details-marker]:hidden";

const journeySteps = [
  { key: "situation", title: "Background" },
  { key: "task", title: "Goals & constraints" },
  { key: "action", title: "Implementation" },
];

// The project story as quiet label / text rows, always visible.
export default function StarTimeline({ star, buildMap }) {
  const steps = journeySteps.filter((step) => star?.[step.key]?.length);
  if (!steps.length) return null;

  return (
    <section id="star" className="mb-14 scroll-mt-24">
      <p className="section-label mb-2">The story</p>
      <h2 className="font-display mb-5 text-2xl text-stone-900">Project journey</h2>
      <dl className="divide-y divide-stone-200/80 border-y border-stone-200/80">
        {steps.map((step) => (
          <div key={step.key} className="grid gap-2 py-5 sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-6">
            <dt className="text-sm font-medium text-stone-800">{step.title}</dt>
            <dd className="text-sm leading-7 text-stone-600">
              {step.key === "action" && buildMap?.length ? (
                <>
                  <ul className="grid gap-px overflow-hidden rounded-md border border-stone-200 bg-stone-200 sm:grid-cols-2">
                    {buildMap.map(([area, line], index) => (
                      <li key={area} className={`bg-white px-4 py-3.5 ${buildMap.length % 2 && index === buildMap.length - 1 ? "sm:col-span-2" : ""}`}>
                        <p className="text-[11px] font-medium uppercase tracking-[.14em] text-rose-600/90">{area}</p>
                        <p className="mt-1 text-[13px] leading-6 text-stone-700">{line}</p>
                      </li>
                    ))}
                  </ul>
                  <details className="group mt-3">
                    <summary className="inline-flex min-h-10 cursor-pointer list-none items-center gap-2 text-xs font-medium text-stone-500 transition-colors hover:text-rose-600 [&::-webkit-details-marker]:hidden">
                      Full implementation notes <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <ul className="mt-2 space-y-2">
                      {star.action.map((item) => (
                        <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[.8em] before:h-px before:w-2 before:bg-rose-300">{item}</li>
                      ))}
                    </ul>
                  </details>
                </>
              ) : Array.isArray(star[step.key]) ? (
                <>
                  <ul className="space-y-2">
                    {star[step.key].slice(0, 3).map((item) => (
                      <li key={item} className={bullet}>{item}</li>
                    ))}
                  </ul>
                  {star[step.key].length > 3 && (
                    <details className="group">
                      <summary className={toggle}>
                        {star[step.key].length - 3} more <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
                      </summary>
                      <ul className="mt-1 space-y-2">
                        {star[step.key].slice(3).map((item) => (
                          <li key={item} className={bullet}>{item}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </>
              ) : <Brief text={star[step.key]} />}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
