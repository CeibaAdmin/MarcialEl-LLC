import Link from "next/link";
import type { Book } from "@/data/books";
import BookCover from "./BookCover";

export default function BookCard({
  book,
  priority = false,
}: {
  book: Book;
  priority?: boolean;
}) {
  return (
    <article className="group flex flex-col">
      <Link href={`/books/${book.slug}`} className="block">
        <div className="transition-transform duration-300 group-hover:-translate-y-1">
          <BookCover book={book} priority={priority} />
        </div>
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="font-serif text-xl font-semibold text-ink">
          <Link href={`/books/${book.slug}`} className="hover:text-burgundy">
            {book.title}
          </Link>
        </h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-faint">
          {book.tagline}
        </p>
        <div className="mt-3 flex items-center justify-between">
          {book.price && (
            <span className="text-sm font-semibold text-ink">{book.price}</span>
          )}
          <Link
            href={`/books/${book.slug}`}
            className="text-sm font-medium text-burgundy hover:text-burgundy-dark"
          >
            View book →
          </Link>
        </div>
      </div>
    </article>
  );
}
