"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const DEMO_SRC = "/srv6_proa_demo.html?lang=en";

// Paper benchmarks on the TWAREN topology (same data as the dashboard's comparison table).
const RESULTS = [
  { value: "1–3s", label: "Recovery time", baseline: "~7s with OSPFv3" },
  { value: "0.05%", label: "UDP packet loss", baseline: "0.10% with OSPFv3" },
  { value: "3%", label: "Peak CPU", baseline: "4% with OSPFv3" },
];

const STEPS = [
  ["Set up & transmit", "Choose a topology and algorithm, then start transmission."],
  ["Break a link", "Trigger a failure or select an active link on the map."],
  ["Recover & compare", "Run the algorithm, apply the backup, and inspect the results."],
];

export default function Srv6ProaContent() {
  const frameRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // The iframe can finish loading before React hydrates and attaches onLoad,
  // so check its state once on mount as well.
  useEffect(() => {
    const frame = frameRef.current;
    try {
      const doc = frame?.contentDocument;
      if (doc?.readyState === "complete" && doc.querySelector(".app")) setLoaded(true);
    } catch {
      /* cross-origin: rely on onLoad */
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const frame = frameRef.current;
    const app = frame?.contentDocument?.querySelector(".app");
    if (!app) return;
    const resize = () => {
      frame.style.height = `${Math.ceil(app.getBoundingClientRect().height) + 8}px`;
    };
    const observer = new ResizeObserver(resize);
    observer.observe(app);
    resize();
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#eef2ff_0%,_#fafafa_55%)]">
      <Navbar />
      <main className="mx-auto max-w-[1440px] px-4 pb-12 pt-28 md:px-8 md:pt-32">
        <Link href="/portfolio" className="mb-4 inline-flex min-h-10 items-center gap-2 text-xs text-stone-500 hover:text-indigo-600">← Back to Portfolio</Link>
        <header className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500">Research / Interactive experience</p>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">SRv6 PROA Dashboard</h1>
            <p className="mt-3 text-sm leading-6 text-gray-500">Explore how adaptive routing responds to a broken network link. Follow a packet, trigger a failure, and compare PROA with traditional routing algorithms.</p>
          </div>
          <a href={DEMO_SRC} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 self-start items-center gap-2 rounded-lg border border-indigo-200 bg-white px-4 py-2.5 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-50">Open standalone demo <span aria-hidden="true">↗</span></a>
        </header>

        <section aria-labelledby="research-context" className="mb-5 rounded-xl border border-gray-200/80 bg-white/80 p-4 md:p-5">
          <h2 id="research-context" className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">About the research</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            When a link fails, traditional routing has to wait for the network to reconverge before traffic flows again. PROA is an adaptive path selection method for SDN-enabled SRv6: the controller re-plans the segment list and steers traffic onto a backup path. This dashboard visualizes that recovery and compares it against Dijkstra, OSPFv3 and random path selection.
          </p>
        </section>

        <section aria-labelledby="key-results" className="mb-5">
          <h2 id="key-results" className="sr-only">Key results</h2>
          <dl className="grid grid-cols-3 gap-2 md:gap-3">
            {RESULTS.map(({ value, label, baseline }) => (
              <div key={label} className="rounded-xl border border-emerald-100 bg-white/80 p-3 md:p-4">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400 md:text-[11px]">{label}</dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums text-emerald-600 md:text-3xl">{value}</dd>
                <dd className="mt-1 text-[11px] leading-4 text-gray-500 md:text-xs">vs {baseline}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-[11px] text-stone-500">PROA results from the paper benchmarks on the TWAREN topology. Full comparison inside the dashboard.</p>
        </section>

        <ol aria-label="Demo walkthrough" className="mb-5 grid gap-3 rounded-xl border border-gray-200/80 bg-white/80 p-4 sm:grid-cols-3">
          {STEPS.map(([title, detail], index) => (
            <li key={title} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-semibold text-indigo-600">{index + 1}</span>
              <div><h3 className="text-xs font-semibold text-gray-800">{title}</h3><p className="mt-1 text-xs leading-5 text-gray-500">{detail}</p></div>
            </li>
          ))}
        </ol>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500">
          <span>Interactive simulation · Educational visualization</span>
          <span>中文 / English available inside the dashboard</span>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm" aria-busy={!loaded}>
          {!loaded && (
            <div role="status" className="absolute inset-0 z-10 flex items-center justify-center bg-white">
              <p className="animate-pulse text-sm text-gray-500">Loading interactive dashboard…</p>
            </div>
          )}
          <iframe ref={frameRef} src={DEMO_SRC} onLoad={() => setLoaded(true)} title="Interactive SRv6 routing simulation and algorithm comparison" className="block min-h-[520px] w-full border-0 md:min-h-[700px]" />
        </div>
      </main>
    </div>
  );
}
