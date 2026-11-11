const journeySteps = [
  { key: "situation", title: "Background", letter: "S" },
  { key: "task", title: "Goals & constraints", letter: "T" },
  { key: "action", title: "Implementation", letter: "A" },
];

export default function StarTimeline({ star }) {
  const steps = journeySteps.filter((step) => star?.[step.key]?.length);
  if (!steps.length) return null;

  return (
    <section id="star" className="mb-12 scroll-mt-24">
      <details className="group rounded-2xl border border-stone-200 bg-white/60 shadow-sm">
        <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-400 [&::-webkit-details-marker]:hidden">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Project Journey</h2>
            <p className="mt-1 text-xs text-stone-500">Background, goals, and implementation details</p>
          </div>
          <span aria-hidden="true" className="text-stone-400 transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div className="space-y-6 border-t border-stone-200 p-5 md:p-6">
          {steps.map((step) => (
            <div key={step.key}>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
                <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-50 text-xs text-rose-500">{step.letter}</span>
                {step.title}
              </h3>
              {Array.isArray(star[step.key]) ? (
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600 marker:text-rose-300">
                  {star[step.key].map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : <p className="text-sm leading-7 text-gray-600">{star[step.key]}</p>}
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
