"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BookCard from "./BookCard";
import type { Book } from "@/data/books";

const easing = [0.22, 1, 0.36, 1] as const;

/**
 * Catalog grid with an animated genre filter. Books animate in/out with layout
 * transitions as the filter changes.
 */
export default function BooksGrid({
  books,
  genres,
}: {
  books: Book[];
  genres: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...genres];
  const shown =
    active === "All" ? books : books.filter((b) => b.meta?.genre === active);

  return (
    <div>
      <div className="mb-14 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
              active === f
                ? "border-gold text-night"
                : "border-bone-soft/20 text-bone-soft/80 hover:border-gold/50 hover:text-bone"
            }`}
          >
            {active === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gold"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 gap-x-8 gap-y-16 sm:gap-x-12 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((book, i) => (
            <motion.div
              key={book.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: easing, delay: (i % 4) * 0.05 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
