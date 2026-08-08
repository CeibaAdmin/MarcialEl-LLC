"use client";

import { useLang, type Lang } from "@/lib/i18n";

/** Segmented ES | EN language switch. */
export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang } = useLang();
  const opts: Lang[] = ["es", "en"];

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-bone-soft/20 p-0.5 text-xs font-semibold ${className}`}
    >
      {opts.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setLang(o)}
          aria-pressed={lang === o}
          className={`rounded-full px-3 py-1 uppercase tracking-widest transition-colors ${
            lang === o
              ? "bg-gold text-night"
              : "text-bone-soft/70 hover:text-bone"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
