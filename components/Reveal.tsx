"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing, delay: i * 0.09 },
  }),
};

/**
 * Fades + rises its children into view on scroll. Pass `index` to stagger a
 * sequence of siblings. Respects reduced motion automatically (framer-motion
 * reads the user's preference and skips transforms).
 */
export default function Reveal({
  children,
  index = 0,
  className = "",
  as = "div",
  amount = 0.3,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
  amount?: number;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}
