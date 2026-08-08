"use client";

import Container from "@/components/Container";
import BooksGrid from "@/components/BooksGrid";
import SectionHeading from "@/components/SectionHeading";
import ComingSoon from "@/components/ComingSoon";
import { availableBooks, genreList } from "@/data/books";
import { useLang } from "@/lib/i18n";

export default function BooksContent() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[30rem] w-[30rem] rounded-full bg-burgundy/15 blur-[130px]"
      />
      <Container className="relative">
        <header className="max-w-2xl">
          <SectionHeading eyebrow={t.books.eyebrow} title={t.books.title} />
          <p className="mt-5 text-lg leading-relaxed text-bone-soft/80">
            {t.books.sub}
          </p>
        </header>

        <div className="mt-16">
          <BooksGrid books={availableBooks} genres={genreList()} />
        </div>
      </Container>

      <ComingSoon />
    </section>
  );
}
