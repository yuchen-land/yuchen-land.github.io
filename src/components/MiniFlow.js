// A quiet, at-a-glance pipeline: stops on a hairline.
// Wide screens read left to right; phones get a vertical list so no label is squeezed or broken.
// steps: [[stage, name], ...] — keep names short so four stops fit a card.
export default function MiniFlow({ steps, label = "How it works" }) {
  if (!steps?.length) return null;
  return (
    <ol aria-label={label} className="flex flex-col sm:grid sm:gap-x-2" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
      {steps.map(([stage, name], index) => {
        const last = index === steps.length - 1;
        return (
          <li key={stage} className={`relative min-w-0 pl-5 sm:pb-0 sm:pl-0 ${last ? "" : "pb-3"}`}>
            {/* phone: vertical rail */}
            <span aria-hidden="true" className="absolute left-0 top-[5px] h-[7px] w-[7px] rounded-full border border-rose-300 bg-white sm:hidden" />
            {!last && <span aria-hidden="true" className="absolute bottom-[-3px] left-[3px] top-[15px] w-px bg-stone-200 sm:hidden" />}
            {/* wider screens: horizontal rail */}
            <div aria-hidden="true" className="relative mb-2 hidden h-[7px] sm:block">
              {!last && <span className="absolute left-[11px] -right-2 top-1/2 h-px -translate-y-1/2 bg-stone-200" />}
              <span className="absolute left-0 top-0 h-[7px] w-[7px] rounded-full border border-rose-300 bg-white" />
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 sm:block">
              <p className="w-[5.75rem] shrink-0 text-[10px] font-medium uppercase tracking-[.14em] text-rose-600/90 sm:w-auto">{stage}</p>
              <p className="min-w-0 flex-1 text-xs font-medium leading-[1.45] text-stone-700 sm:mt-0.5 sm:pr-1 sm:leading-[1.35]">{name}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
