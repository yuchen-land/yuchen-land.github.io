"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ExportedImage from "next-image-export-optimizer";

// Editorial gallery: figures keep their natural proportions (nothing is cropped),
// captions sit quietly underneath, and any figure opens in a lightbox.
export default function ProjectGallery({ images = [], title = "Project" }) {
  const [active, setActive] = useState(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const open = active !== null;
  const many = images.length > 1;

  const close = useCallback(() => {
    setActive(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback((delta) => {
    setActive((index) => (index === null ? index : (index + delta + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  if (!images.length) return null;
  const current = open ? images[active] : null;

  return (
    <>
      <div className={many ? "gap-5 sm:columns-2" : ""}>
        {images.map((image, index) => (
          <figure key={image.src} className={`mb-6 break-inside-avoid ${many && index === 0 ? "[column-span:all]" : ""}`}>
            <button
              type="button"
              onClick={(event) => { triggerRef.current = event.currentTarget; setActive(index); }}
              aria-label={`Enlarge: ${image.alt || title}`}
              className="group block w-full cursor-zoom-in overflow-hidden rounded-md border border-stone-200/80 bg-white transition-shadow hover:shadow-[0_8px_28px_#3826330f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
            >
              <ExportedImage
                src={image.src}
                alt={image.alt || title}
                width={1600}
                height={1000}
                sizes={many && index > 0 ? "(max-width: 639px) 100vw, 360px" : "(max-width: 767px) 100vw, 720px"}
                className="block h-auto w-full"
                style={{ width: "100%", height: "auto" }}
              />
            </button>
            <figcaption className="mt-2.5 flex gap-3 text-xs leading-5 text-stone-500">
              <span aria-hidden="true" className="shrink-0 font-medium tracking-[.14em] text-rose-600/90">{String(index + 1).padStart(2, "0")}</span>
              <span>{(image.caption || image.alt || "").replace(/^Figure \d+\s*[—–-]\s*/, "")}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {open && typeof document !== "undefined" && createPortal(
        <div role="dialog" aria-modal="true" aria-label={`${title} image viewer`} className="fixed inset-0 z-[100] flex flex-col bg-stone-950/92 backdrop-blur-sm" onClick={close}>
          <div className="flex items-center justify-between px-5 py-4 text-xs text-white/70" onClick={(event) => event.stopPropagation()}>
            <span className="tracking-[.14em]">{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
            <button ref={closeRef} type="button" onClick={close} className="inline-flex min-h-11 items-center rounded-full px-4 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70">Close</button>
          </div>
          <div className="relative mx-auto min-h-0 w-full max-w-6xl flex-1 px-4" onClick={(event) => event.stopPropagation()}>
            <ExportedImage key={current.src} src={current.src} alt={current.alt || title} fill sizes="100vw" className="object-contain" />
          </div>
          <div className="flex items-center justify-between gap-4 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4" onClick={(event) => event.stopPropagation()}>
            {many ? <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70">←</button> : <span className="w-11" />}
            <p className="max-w-xl text-center text-xs leading-5 text-white/70">{current.caption || current.alt}</p>
            {many ? <button type="button" onClick={() => step(1)} aria-label="Next image" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70">→</button> : <span className="w-11" />}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
