"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home", path: "M3 10l9-7 9 7M5 9v12h5v-7h4v7h5V9" },
  { href: "/portfolio", label: "Portfolio", path: "M9 6V4h6v2M3 7h18v14H3V7zm0 5a24 24 0 0018 0M10 12h4" },
  { href: "/about", label: "About", path: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM4 21v-2a8 8 0 0116 0v2" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);
  const interactingRef = useRef(false);

  const scheduleHide = useCallback(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!interactingRef.current) setVisible(false);
    }, 2200);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setVisible(true);
      scheduleHide();
    };
    setVisible(true);
    scheduleHide();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timerRef.current);
    };
  }, [pathname, scheduleHide]);

  return (
    <nav
      aria-label="Mobile navigation"
      onPointerEnter={() => { interactingRef.current = true; setVisible(true); clearTimeout(timerRef.current); }}
      onPointerLeave={() => { interactingRef.current = false; scheduleHide(); }}
      onTouchStart={() => { setVisible(true); clearTimeout(timerRef.current); }}
      onTouchEnd={scheduleHide}
      onFocusCapture={() => { interactingRef.current = true; setVisible(true); clearTimeout(timerRef.current); }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          interactingRef.current = false;
          scheduleHide();
        }
      }}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-stone-200/80 bg-white/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden transition-transform duration-300 motion-reduce:transition-none ${visible ? "translate-y-0" : "translate-y-full focus-within:translate-y-0"}`}>
      <div className="mx-auto grid h-16 max-w-md grid-cols-3">
        {items.map((item) => {
          const active = item.href === "/"
            ? pathname === "/"
            : item.href === "/portfolio"
              ? pathname.startsWith("/portfolio") || pathname.startsWith("/projects/") || pathname.startsWith("/srv6-proa")
              : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-rose-400 ${active ? "text-rose-500" : "text-stone-500 hover:text-rose-500"}`}>
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 1.9 : 1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d={item.path} />
              </svg>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
