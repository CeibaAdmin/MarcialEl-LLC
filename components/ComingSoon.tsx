"use client";

import Link from "next/link";
import Container from "./Container";
import BookCard from "./BookCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { upcomingBooks } from "@/data/books";
import { useLang } from "@/lib/i18n";

/**
 * "Próximamente / Coming soon" — upcoming titles with placeholder covers,
 * a badge, and a newsletter nudge. Nothing here is for sale yet.
 */
export default function ComingSoon() {
  const { t } = useLang();
  if (upcomingBooks.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[40rem] max-w-[90%] -translate-x-1/2 rounded-[50%] bg-gold/5 blur-[130px]"
      />
      <Container className="relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.coming.eyebrow} title={t.coming.title} />
          <Reveal>
            <Link
              href="/contact"
              className="text-sm font-medium text-bone-soft transition-colors hover:text-gold-light"
            >
              {t.coming.notify}
            </Link>
          </Reveal>
        </div>

        <Reveal index={1}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone-soft/80">
            {t.coming.body}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-16 sm:gap-x-12 lg:grid-cols-3">
          {upcomingBooks.map((book, i) => (
            <Reveal key={book.slug} index={i % 3}>
              <BookCard book={book} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
