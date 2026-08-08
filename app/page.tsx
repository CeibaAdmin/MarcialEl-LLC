import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";
import Marquee from "@/components/Marquee";
import NewsletterForm from "@/components/NewsletterForm";
import { books, featuredBooks } from "@/data/books";
import { site } from "@/lib/site";

export default function HomePage() {
  const lead = featuredBooks[0] ?? books[0];
  const collection = featuredBooks.length ? featuredBooks : books;

  return (
    <>
      <Hero book={lead} />

      {/* The Collection */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="The shelf" title="The Collection" />
            <Reveal>
              <Link
                href="/books"
                className="text-sm font-medium text-bone-soft transition-colors hover:text-gold-light"
              >
                See all books →
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-16 sm:gap-x-12 lg:grid-cols-3">
            {collection.map((book, i) => (
              <Reveal key={book.slug} index={i % 3}>
                <BookCard book={book} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Scroll-driven featured title */}
      <FeaturedSpotlight book={lead} />

      {/* Author band */}
      <section className="relative overflow-hidden bg-night-800 py-28">
        <Container className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-bone-soft/10">
              {/* Portrait placeholder — drop a real photo at /public and swap this. */}
              <div className="absolute inset-0 bg-gradient-to-br from-night-600 to-night-900" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-8xl text-gold/30">M</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-xs uppercase tracking-widest text-bone-soft/50">
                Portrait placeholder
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="The author" title="Writing under another name" />
            <Reveal index={1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-bone-soft/80">
                Marcial is the pen name of a writer who has spent a lifetime
                listening — to harbors, to grandmothers, to the quiet rooms where
                families keep their histories. The books gathered here are the
                result: unhurried, luminous, and made to be reread.
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-10 flex gap-10">
                {site.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-serif text-4xl font-semibold text-gold-light">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-bone-soft/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal index={3}>
              <Link href="/about" className="btn-ghost mt-10">
                Read the full story
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Praise ribbon */}
      <div className="py-8">
        <Marquee />
      </div>

      {/* Newsletter CTA */}
      <section className="py-28">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            eyebrow="Stay close to the work"
            title="Be first to know when the next book arrives"
            align="center"
          />
          <Reveal index={1}>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-bone-soft/80">
              New releases are rare and worth the wait. Leave your email and
              you&rsquo;ll hear it here first — no spam, ever.
            </p>
          </Reveal>
          <Reveal index={2}>
            <div className="mx-auto mt-10 max-w-md">
              <NewsletterForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
