// Shows the first sentence up front and tucks the rest behind a quiet "More detail" toggle,
// so a page can be scanned quickly without losing the full text.
export default function Brief({ text, className = "", moreLabel = "More detail" }) {
  if (!text) return null;
  const match = text.match(/^(.+?[.!?])\s+(\S[\s\S]*)$/);
  if (!match) return <p className={className}>{text}</p>;
  return (
    <div>
      <p className={className}>{match[1]}</p>
      <details className="group">
        <summary className="inline-flex min-h-10 cursor-pointer list-none items-center gap-2 text-xs font-medium text-stone-500 transition-colors hover:text-rose-600 [&::-webkit-details-marker]:hidden">
          {moreLabel} <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <p className={`${className} mt-1`}>{match[2]}</p>
      </details>
    </div>
  );
}
