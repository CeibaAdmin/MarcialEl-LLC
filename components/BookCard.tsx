import Link from "next/link";
import type { Book } from "@/data/books";
import Book3D from "./Book3D";

export default function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex flex-col">
      <Link
        href={`/books/${book.slug}`}
        className="block"
        aria-label={`View ${book.title}`}
      >
        <Book3D book={book} maxTilt={14} />
      </Link>

      <div className="mt-7 flex flex-1 flex-col">
        <h3 className="font-serif text-2xl font-semibold leading-tight text-bone">
          <Link href={`/books/${book.slug}`} className="hover:text-gold-light">
            {book.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-bone-soft/80">
          {book.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between">
          {book.price && (
            <span className="text-sm font-semibold text-gold">{book.price}</span>
          )}
          <Link
            href={`/books/${book.slug}`}
            className="text-sm font-medium text-bone-soft transition-colors hover:text-gold-light"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
