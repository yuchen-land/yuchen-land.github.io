const loop = [
  ["01", "Choose & gather", "Four players choose distinct characters, then follow the story and instructions together on a shared screen."],
  ["02", "Move & scan", "Players move on the physical board. QR codes connect colored spaces and selected item cards to app events."],
  ["03", "Think & answer", "Timed questions introduce C++ through multiple choice, draggable programming blocks and mixed challenges."],
  ["04", "Reflect & replay", "Immediate scores and ranking make progress visible. Incorrect answers can be revisited after the game."],
];

export default function ClchemyContent() {
  return (
    <section id="game-design" className="mb-12 scroll-mt-24">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-rose-500">From tabletop to code</p>
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Learning through shared play</h2>
      <p className="mb-6 text-sm leading-7 text-gray-600">Clchemy places introductory programming inside an alchemy adventure. The physical board creates face-to-face interaction; the app handles questions, timing and feedback. C++ is the learning subject, while Unity and C# power the application.</p>
      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        {loop.map(([number, title, text]) => (
          <article key={number} className="rounded-2xl border border-gray-200/70 bg-white/70 p-5">
            <span className="text-xs font-medium tracking-widest text-rose-400">{number}</span>
            <h3 className="mb-2 mt-3 text-base font-medium text-gray-900">{title}</h3>
            <p className="text-sm leading-6 text-gray-600">{text}</p>
          </article>
        ))}
      </div>
      <div className="rounded-2xl bg-stone-100/80 p-5 sm:p-6">
        <h3 className="mb-3 text-base font-medium text-gray-900">What informed the design</h3>
        <p className="text-sm leading-7 text-gray-600">An early survey collected 87 responses: 82.8% found game-based learning appealing, and 70.1% preferred learning with friends. These discovery findings supported a social, four-player format; they are not measures of the finished game’s learning effectiveness.</p>
        <p className="mt-3 text-sm leading-7 text-gray-600">Playtest feedback highlighted clear instructions and the value of observing other players’ answers. A useful next step would be a larger pre/post learning study to evaluate knowledge retention.</p>
        <p className="mt-4 border-t border-stone-200 pt-3 text-xs leading-6 text-gray-500">Adapted from the team’s 2021 capstone report, Clchemy 繼承者 — C++ 程式語言學習 APP 桌遊. Discovery: pp. 1–4; game design and implementation: pp. 10–20; evaluation and reflection: pp. 21–23. Figures below are extracted from the original report.</p>
      </div>
    </section>
  );
}
