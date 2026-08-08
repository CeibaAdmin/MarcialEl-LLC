"use client";

import Link from "next/link";
import Container from "@/components/Container";
import Book3D from "@/components/Book3D";
import BookCard from "@/components/BookCard";
import Reveal from "@/components/Reveal";
import { availableBooks, buyLinksFor, bookTitle, type Book } from "@/data/books";
import { useLang } from "@/lib/i18n";

export default function BookDetailContent({ book }: { book: Book }) {
  const { lang, t } = useLang();
  const links = buyLinksFor(book);
  const others = availableBooks.filter((b) => b.slug !== book.slug).slice(0, 4);
  const title = bookTitle(book, lang);

  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-32 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[150px]"
          style={{ backgroundColor: book.coverFrom, opacity: 0.18 }}
        />
        <Container className="relative">
          <Link
            href="/books"
            className="text-sm font-medium text-bone-soft/70 transition-colors hover:text-gold-light"
          >
            {t.common.back}
          </Link>

          <div className="mt-10 grid gap-14 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-20">
            {/* Cover + buy panel (sticky on desktop) */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="mx-auto w-[62%] max-w-[300px] lg:w-full">
                <Book3D book={book} maxTilt={18} />
              </div>

              <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-bone-soft/10 bg-night-800/60 p-6 backdrop-blur">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-widest text-bone-soft/60">
                    {book.meta?.format ? book.meta.format[lang] : t.detail.edition}
                  </span>
                  <span className="font-serif text-2xl font-semibold text-gold-light">
                    {book.price[lang]}
                  </span>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full"
                  >
                    {t.common.buyOn} {links[0].label}
                  </a>
                  {links.slice(1).map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost w-full"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-5 block text-center text-xs text-bone-soft/60 transition-colors hover:text-gold-light"
                >
                  {t.common.askSigned}
                </Link>
              </div>
            </div>

            {/* Details */}
            <div>
              {book.meta?.genre && (
                <p className="eyebrow">{book.meta.genre[lang]}</p>
              )}
              <h1 className="mt-3 font-serif text-5xl font-semibold leading-[1.02] text-bone text-balance sm:text-6xl">
                {title}
              </h1>
              {book.subtitle && (
                <p className="mt-3 text-lg text-bone-soft/60">
                  {book.subtitle[lang]}
                </p>
              )}

              {book.excerpt && (
                <p className="mt-8 border-l-2 border-gold/60 pl-6 font-serif text-2xl italic leading-snug text-gold-light">
                  {book.excerpt[lang]}
                </p>
              )}

              <div className="mt-8 space-y-5 text-lg leading-relaxed text-bone-soft/85">
                {book.description[lang].map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {book.meta && (
                <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-bone-soft/10 pt-8 text-sm sm:max-w-lg">
                  {book.meta.published && (
                    <Meta label={t.detail.published} value={book.meta.published} />
                  )}
                  {book.meta.pages && (
                    <Meta label={t.detail.pages} value={String(book.meta.pages)} />
                  )}
                  {book.meta.genre && (
                    <Meta label={t.detail.genre} value={book.meta.genre[lang]} />
                  )}
                  {book.meta.format && (
                    <Meta label={t.detail.format} value={book.meta.format[lang]} />
                  )}
                </dl>
              )}

              {book.praise && book.praise.length > 0 && (
                <div className="mt-12 space-y-6">
                  <p className="eyebrow">{t.detail.praise}</p>
                  {book.praise.map((p, i) => (
                    <blockquote key={i} className="max-w-xl">
                      <p className="font-serif text-xl italic text-bone">
                        &ldquo;{p.quote[lang]}&rdquo;
                      </p>
                      <footer className="mt-2 text-xs uppercase tracking-widest text-gold">
                        {p.source}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {others.length > 0 && (
        <section className="border-t border-bone-soft/10 bg-night-800 py-24">
          <Container>
            <h2 className="font-serif text-3xl font-semibold text-bone">
              {t.detail.moreBy}
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-16 sm:gap-x-12 lg:grid-cols-4">
              {others.map((b, i) => (
                <Reveal key={b.slug} index={i % 4}>
                  <BookCard book={b} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-bone-soft/50">{label}</dt>
      <dd className="mt-1 font-medium text-bone">{value}</dd>
    </div>
  );
}
