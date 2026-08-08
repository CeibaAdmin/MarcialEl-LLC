"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { Book } from "@/data/books";

const DEPTH = 40; // px — page thickness / spine width

/**
 * An interactive, procedurally-designed 3D book. Tilts toward the cursor with
 * spring physics, reveals a spine and page edges, and renders a premium cover
 * from each book's gradient colors (or a real image when `coverImage` is set).
 */
export default function Book3D({
  book,
  className = "",
  float = false,
  maxTilt = 18,
}: {
  book: Book;
  className?: string;
  float?: boolean;
  maxTilt?: number;
}) {
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(20);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    ry.set((px - 0.5) * 2 * maxTilt);
    rx.set(-(py - 0.5) * 2 * maxTilt);
    gx.set(px * 100);
    gy.set(py * 100);
  }

  function reset() {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(20);
  }

  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.28), rgba(255,255,255,0) 55%)`;
  const spineDark = book.coverTo;

  return (
    <div className={`perspective ${className}`}>
      <div className={float ? "animate-float" : ""}>
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={reset}
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
          className="relative aspect-[2/3] w-full"
        >
          {/* Drop shadow on the ground */}
          <div
            aria-hidden
            className="absolute -bottom-6 left-1/2 h-8 w-[80%] -translate-x-1/2 rounded-[50%] bg-black/60 blur-xl"
            style={{ transform: "translateZ(-30px) translateX(-50%)" }}
          />

          {/* Left spine face */}
          <div
            aria-hidden
            className="absolute left-0 top-0 h-full"
            style={{
              width: DEPTH,
              transformOrigin: "left center",
              transform: "rotateY(90deg)",
              background: `linear-gradient(${spineDark}, #0a0908)`,
              boxShadow: "inset -6px 0 10px rgba(0,0,0,0.6)",
            }}
          />

          {/* Right page-edges face */}
          <div
            aria-hidden
            className="absolute right-0 top-0 h-full overflow-hidden"
            style={{
              width: DEPTH,
              transformOrigin: "right center",
              transform: "rotateY(-90deg)",
              backgroundColor: "#efe7d6",
              backgroundImage:
                "repeating-linear-gradient(to right, #d8cdb6 0px, #efe7d6 1px, #efe7d6 3px)",
            }}
          />

          {/* Front cover */}
          <div
            className="absolute inset-0 overflow-hidden rounded-sm rounded-l-[2px]"
            style={{
              transform: `translateZ(${DEPTH / 2}px)`,
              backgroundImage: `linear-gradient(150deg, ${book.coverFrom}, ${book.coverTo})`,
              boxShadow:
                "0 30px 60px -20px rgba(0,0,0,0.8), 0 10px 20px -10px rgba(0,0,0,0.6)",
            }}
          >
            {book.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <ProceduralCover book={book} />
            )}

            {/* binding shadow near spine */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/40 to-transparent"
            />
            {/* moving glare */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-screen"
              style={{ backgroundImage: glare }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProceduralCover({ book }: { book: Book }) {
  return (
    <div className="relative flex h-full flex-col justify-between p-[8%] text-bone">
      {/* subtle texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* inner gold frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[6%] rounded-[2px] border border-gold/30"
      />

      <div className="relative flex items-center justify-between">
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-gold-light/90 sm:text-[0.65rem]">
          Marcial
        </span>
        <span aria-hidden className="text-gold/70">
          ✦
        </span>
      </div>

      <div className="relative">
        <h3 className="font-serif text-[1.5rem] font-semibold leading-[1.05] drop-shadow-sm sm:text-[1.75rem]">
          {book.title}
        </h3>
        {book.subtitle && (
          <p className="mt-2 text-[0.55rem] uppercase tracking-[0.25em] text-bone/70 sm:text-[0.65rem]">
            {book.subtitle}
          </p>
        )}
      </div>

      <div className="relative flex items-center gap-2">
        <span className="h-px w-8 bg-gold/50" />
        <span className="text-[0.5rem] uppercase tracking-[0.25em] text-bone/60 sm:text-[0.6rem]">
          {book.meta?.genre ?? "Fiction"}
        </span>
      </div>
    </div>
  );
}
