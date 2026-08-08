"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FeaturedSpotlight from "@/components/FeaturedSpotlight";
import Marquee from "@/components/Marquee";
import NewsletterForm from "@/components/NewsletterForm";
import ComingSoon from "@/components/ComingSoon";
import { books, featuredBooks } from "@/data/books";
import { useLang } from "@/lib/i18n";

export default function HomeContent() {
  const { t } = useLang();
  const lead = featuredBooks[0] ?? books[0];
  const collection = (featuredBooks.length ? featuredBooks : books).slice(0, 6);

  return (
    <>
      <Hero book={lead} />

      {/* The Collection */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow={t.collection.eyebrow} title={t.collection.title} />
            <Reveal>
              <Link
                href="/books"
                className="text-sm font-medium text-bone-soft transition-colors hover:text-gold-light"
              >
                {t.common.seeAll}
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

      {/* Coming soon */}
      <ComingSoon />

      {/* Author band */}
      <section className="relative overflow-hidden bg-night-800 py-28">
        <Container className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-bone-soft/10">
              <Image
                src="/marcial.png"
                alt="Marcial en una firma de libros"
                fill
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-cover object-[center_20%]"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-night-900/50 to-transparent"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow={t.author.eyebrow} title={t.author.title} />
            <Reveal index={1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-bone-soft/80">
                {t.author.body}
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-10 flex gap-10">
                {t.author.stats.map((s) => (
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
                {t.cta.readFull}
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
            eyebrow={t.newsletter.eyebrow}
            title={t.newsletter.title}
            align="center"
          />
          <Reveal index={1}>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-bone-soft/80">
              {t.newsletter.body}
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
