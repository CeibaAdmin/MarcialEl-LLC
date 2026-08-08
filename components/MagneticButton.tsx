"use client";

import Link from "next/link";
import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A link/button that subtly pulls toward the cursor on hover — a premium
 * micro-interaction. Falls back to a normal static control with reduced motion
 * (the spring simply rests at 0).
 */
export default function MagneticButton({
  href,
  children,
  className = "",
  variant = "gold",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "gold" | "ghost";
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    variant === "gold"
      ? "bg-gold text-night hover:bg-gold-light"
      : "border border-bone-soft/25 text-bone hover:border-gold/60 hover:text-gold-light";

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors duration-300 ${base} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {inner}
    </Link>
  );
}
