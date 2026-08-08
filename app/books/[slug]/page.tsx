import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import BookCover from "@/components/BookCover";
import BookCard from "@/components/BookCard";
import { books, getBook } from "@/data/books";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return { title: "Book not found" };
  return {
    title: book.title,
    description: book.tagline,
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const others = books.filter((b) => b.slug !== book.slug).slice(0, 4);

  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <Link
            href="/books"
            className="text-sm font-medium text-ink-faint transition-colors hover:text-burgundy"
          >
            ← All books
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <div className="mx-auto w-full max-w-[280px] lg:mx-0">
              <BookCover book={book} priority />
            </div>

            <div>
              {book.meta?.genre && <p className="eyebrow">{book.meta.genre}</p>}
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="mt-2 text-lg text-ink-faint">{book.subtitle}</p>
              )}

              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                {book.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={book.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-burgundy px-8 py-3 text-sm font-medium text-paper transition-colors hover:bg-burgundy-dark"
                >
                  Buy the book{book.price ? ` — ${book.price}` : ""}
                </a>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-burgundy hover:text-burgundy-dark"
                >
                  Ask about signed copies →
                </Link>
              </div>

              {book.meta && (
                <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ink/10 pt-8 text-sm sm:max-w-md">
                  {book.meta.published && (
                    <div>
                      <dt className="text-ink-faint">Published</dt>
                      <dd className="mt-1 font-medium text-ink">
                        {book.meta.published}
                      </dd>
                    </div>
                  )}
                  {book.meta.pages && (
                    <div>
                      <dt className="text-ink-faint">Pages</dt>
                      <dd className="mt-1 font-medium text-ink">{book.meta.pages}</dd>
                    </div>
                  )}
                  {book.meta.genre && (
                    <div>
                      <dt className="text-ink-faint">Genre</dt>
                      <dd className="mt-1 font-medium text-ink">{book.meta.genre}</dd>
                    </div>
                  )}
                  {book.meta.isbn && (
                    <div>
                      <dt className="text-ink-faint">ISBN</dt>
                      <dd className="mt-1 font-medium text-ink">{book.meta.isbn}</dd>
                    </div>
                  )}
                </dl>
              )}
            </div>
          </div>
        </Container>
      </section>

      {others.length > 0 && (
        <section className="bg-paper-soft py-16">
          <Container>
            <h2 className="font-serif text-3xl font-semibold text-ink">
              More by Marcial
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
              {others.map((b) => (
                <BookCard key={b.slug} book={b} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
