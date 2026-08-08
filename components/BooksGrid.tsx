"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BookCard from "./BookCard";
import type { Book } from "@/data/books";
import { useLang, type Loc } from "@/lib/i18n";

const easing = [0.22, 1, 0.36, 1] as const;

/**
 * Catalog grid with an animated genre filter. Genres are compared by their
 * language-independent Spanish key; labels render in the current language.
 */
export default function BooksGrid({
  books,
  genres,
}: {
  books: Book[];
  genres: Loc[];
}) {
  const { lang, t } = useLang();
  const [active, setActive] = useState<string>("all"); // "all" or a genre.es key

  const filters = [{ key: "all", label: t.books.all }, ...genres.map((g) => ({ key: g.es, label: g[lang] }))];
  const shown =
    active === "all" ? books : books.filter((b) => b.meta?.genre?.es === active);

  return (
    <div>
      <div className="mb-14 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`relative rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
              active === f.key
                ? "border-gold text-night"
                : "border-bone-soft/20 text-bone-soft/80 hover:border-gold/50 hover:text-bone"
            }`}
          >
            {active === f.key && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gold"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {f.label}
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
