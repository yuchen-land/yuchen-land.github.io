const stages = [
  ["01 / Source", "Read & parse", "Read input.txt and separate labels, mnemonics and operands. OPTAB supplies instruction lengths, opcodes and formats."],
  ["02 / Pass 1", "Assign addresses", "Advance LOCCTR for instructions and directives, build SYMTAB, and write an intermediate file. Record the program length."],
  ["03 / Pass 2", "Resolve & encode", "Look up symbols, encode formats 1–4, select addressing flags and displacement, and collect relocation addresses."],
  ["04 / Object file", "Package records", "Read the annotated output listing and produce header, text, modification and end records in object_file.txt."],
];
const lessons = [
  ["Hexadecimal parsing", "Using atoi() for symbol addresses produced incorrect displacement calculations. Switching to strtol() with base 16 made the numeric interpretation explicit."],
  ["Negative displacement", "The report describes masking with 0xfff to retain the low 12 bits when formatting a negative displacement. This exposed the importance of two’s complement and field width."],
  ["Parsing assumptions", "An input line without expected leading whitespace exposed a dependency on source formatting. The coursework example was corrected; a more robust tokenizer remains a useful improvement."],
];
export default function AssemblerContent() {
  return (
    <section id="assembler-design" className="mb-12 scroll-mt-24">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-rose-500">Inside the assembler</p>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">From source text to object records</h2>
      <p className="mb-6 text-sm leading-7 text-gray-600">A C implementation for the educational SIC/XE architecture. Two passes separate address assignment from instruction encoding, allowing later-defined symbols to be resolved through an intermediate file and symbol table.</p>
      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        {stages.map(([step, title, text]) => <article key={step} className="rounded-2xl border border-gray-200/70 bg-white/70 p-5"><p className="text-xs font-medium tracking-wide text-rose-500">{step}</p><h3 className="mb-2 mt-3 text-base font-medium text-gray-900">{title}</h3><p className="text-sm leading-6 text-gray-600">{text}</p></article>)}
      </div>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">The details that made it work</h3>
      <div className="mb-8 divide-y divide-gray-200/70">
        {lessons.map(([title, text]) => <article key={title} className="py-4 first:pt-0"><h4 className="mb-2 text-sm font-medium text-gray-900">{title}</h4><p className="text-sm leading-7 text-gray-600">{text}</p></article>)}
      </div>
      <div className="rounded-2xl bg-stone-100/80 p-5 sm:p-6">
        <h3 className="mb-3 text-base font-medium text-gray-900">Scope & next improvements</h3>
        <p className="text-sm leading-7 text-gray-600">The report demonstrates an assembled COPY program and documents instruction formats 1–4, PC/base-relative addressing and relocation records. It also identifies incomplete Pass 2 error handling, three similar parsing functions, and an extra listing-file read before object-file generation. Consolidating parsing and strengthening diagnostics would be the next engineering steps.</p>
        <p className="mt-4 border-t border-stone-200 pt-3 text-xs leading-6 text-gray-500">Based on my Assembler Report: sample input/output, pp. 1–2; functions and data structures, pp. 2–5; assembly pipeline, pp. 6–9; debugging and reflection, pp. 9–12. Images below are cropped from the report; student identification details are excluded.</p>
      </div>
    </section>
  );
}
