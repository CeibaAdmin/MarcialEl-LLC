import type { Metadata } from "next";
import Container from "@/components/Container";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
  description: "The complete collection of books by Marcial.",
};

export default function BooksPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <header className="max-w-2xl">
          <p className="eyebrow">The collection</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold text-ink">Books</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Every title, in one place. Click any cover for the full synopsis and
            where to buy.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </Container>
    </section>
  );
}
