import { site } from "@/lib/site";

/**
 * Infinite horizontal ribbon of praise quotes. Pure CSS animation (respects
 * reduced motion via the global media query, which pauses the animation).
 */
export default function Marquee() {
  const items = site.praise;
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="group relative flex overflow-hidden border-y border-bone-soft/10 py-6">
      <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14">
        {loop.map((p, i) => (
          <div key={i} className="flex shrink-0 items-center gap-14">
            <span className="flex items-baseline gap-4 whitespace-nowrap">
              <span className="font-serif text-xl italic text-bone/90 sm:text-2xl">
                &ldquo;{p.quote}&rdquo;
              </span>
              <span className="text-xs uppercase tracking-widest text-gold">
                {p.source}
              </span>
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
