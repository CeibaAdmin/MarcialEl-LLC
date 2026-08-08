import type { Metadata } from "next";
import Container from "@/components/Container";
import BooksGrid from "@/components/BooksGrid";
import SectionHeading from "@/components/SectionHeading";
import { books, genres } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
  description: "The complete collection of books by Marcial.",
};

export default function BooksPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-40">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[30rem] w-[30rem] rounded-full bg-burgundy/15 blur-[130px]"
      />
      <Container className="relative">
        <header className="max-w-2xl">
          <SectionHeading eyebrow="The collection" title="Every book, in one place" />
          <p className="mt-5 text-lg leading-relaxed text-bone-soft/80">
            Novels, poems, and essays. Hover any cover to bring it to life, then
            step inside for the full story and where to buy.
          </p>
        </header>

        <div className="mt-16">
          <BooksGrid books={books} genres={genres} />
        </div>
      </Container>
    </section>
  );
}
