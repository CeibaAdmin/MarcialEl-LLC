"use client";

import { motion, type Variants } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
};

/**
 * An eyebrow label above a large serif heading whose words rise into place
 * one after another when scrolled into view.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  const words = title.split(" ");
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={`mt-3 font-serif text-4xl font-semibold leading-[1.05] text-bone sm:text-5xl ${
          align === "center" ? "mx-auto max-w-3xl" : ""
        }`}
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="mr-[0.25em] inline-block overflow-hidden align-bottom"
          >
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </div>
  );
}
