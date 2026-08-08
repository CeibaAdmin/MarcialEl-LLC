import Image from "next/image";
import type { Book } from "@/data/books";

/**
 * Renders a book's cover. Uses the real image if `coverImage` is set,
 * otherwise falls back to a tasteful gradient placeholder with the title.
 */
export default function BookCover({
  book,
  priority = false,
}: {
  book: Book;
  priority?: boolean;
}) {
  if (book.coverImage) {
    return (
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-lg shadow-ink/20 ring-1 ring-ink/10">
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 300px"
        />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[2/3] w-full flex-col justify-between overflow-hidden rounded-md p-5 text-paper shadow-lg shadow-ink/20 ring-1 ring-ink/10"
      style={{
        backgroundImage: `linear-gradient(150deg, ${book.coverFrom}, ${book.coverTo})`,
      }}
    >
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-paper/70">
        Marcial
      </span>
      <div>
        <p className="font-serif text-lg font-semibold leading-tight">
          {book.title}
        </p>
        {book.subtitle && (
          <p className="mt-1 text-xs uppercase tracking-widest text-paper/70">
            {book.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
