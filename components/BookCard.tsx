"use client";

import Link from "next/link";
import type { Book } from "@/data/books";
import { bookTitle } from "@/data/books";
import { useLang } from "@/lib/i18n";
import Book3D from "./Book3D";

export default function BookCard({ book }: { book: Book }) {
  const { lang, t } = useLang();
  const title = bookTitle(book, lang);

  // Coming-soon cards: not clickable, badge on cover, no price/buy.
  if (book.comingSoon) {
    return (
      <article className="flex flex-col">
        <Book3D book={book} maxTilt={12} badge={t.coming.badge} />
        <div className="mt-7 flex flex-1 flex-col">
          <h3 className="font-serif text-2xl font-semibold leading-tight text-bone">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-bone-soft/80">
            {book.tagline[lang]}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              {t.coming.badge}
            </span>
            <Link
              href="/contact"
              className="text-sm font-medium text-bone-soft transition-colors hover:text-gold-light"
            >
              {t.coming.notify}
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col">
      <Link href={`/books/${book.slug}`} className="block" aria-label={title}>
        <Book3D book={book} maxTilt={14} />
      </Link>

      <div className="mt-7 flex flex-1 flex-col">
        <h3 className="font-serif text-2xl font-semibold leading-tight text-bone">
          <Link href={`/books/${book.slug}`} className="hover:text-gold-light">
            {title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-bone-soft/80">
          {book.tagline[lang]}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-gold">
            {book.price[lang]}
          </span>
          <Link
            href={`/books/${book.slug}`}
            className="text-sm font-medium text-bone-soft transition-colors hover:text-gold-light"
          >
            {t.common.readMore}
          </Link>
        </div>
      </div>
    </article>
  );
}
