import Link from "next/link";
import Container from "@/components/Container";
import BookCard from "@/components/BookCard";
import { featuredBooks } from "@/data/books";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Author · Novelist · Poet</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              Stories that linger
              <br />
              like woodsmoke.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/books"
                className="rounded-full bg-burgundy px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-burgundy-dark"
              >
                Browse the books
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-ink/20 px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
              >
                Meet Marcial
              </Link>
            </div>
          </div>

          {/* Decorative stacked covers */}
          <div className="relative hidden justify-center lg:flex">
            <div className="grid w-full max-w-md grid-cols-2 gap-5">
              {featuredBooks.slice(0, 2).map((book, i) => (
                <div key={book.slug} className={i === 1 ? "mt-10" : ""}>
                  <BookCard book={book} priority />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured books */}
      <section className="py-8">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">The shelf</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-ink">
                Featured books
              </h2>
            </div>
            <Link
              href="/books"
              className="hidden text-sm font-medium text-burgundy hover:text-burgundy-dark sm:block"
            >
              See all books →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-3">
            {featuredBooks.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link
              href="/books"
              className="text-sm font-medium text-burgundy hover:text-burgundy-dark"
            >
              See all books →
            </Link>
          </div>
        </Container>
      </section>

      {/* Quote / invitation */}
      <section className="mt-16 bg-paper-soft py-20">
        <Container className="max-w-3xl text-center">
          <p className="font-serif text-3xl font-medium leading-snug text-ink sm:text-4xl">
            &ldquo;We write to make a home out of the things we cannot keep.&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-ink-faint">
            — Marcial
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="rounded-full bg-burgundy px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-burgundy-dark"
            >
              Get word of the next book
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
