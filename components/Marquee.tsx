"use client";

import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";

/**
 * Infinite horizontal ribbon of praise quotes. Pure CSS animation (paused under
 * reduced motion via the global media query).
 */
export default function Marquee() {
  const { lang } = useLang();
  const items = site.praise;
  const loop = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden border-y border-bone-soft/10 py-6">
      <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14">
        {loop.map((p, i) => (
          <div key={i} className="flex shrink-0 items-center gap-14">
            <span className="font-serif text-xl italic text-bone/90 sm:text-2xl whitespace-nowrap">
              &ldquo;{p[lang]}&rdquo;
            </span>
            <span aria-hidden className="text-gold/50">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
