"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Book3D from "./Book3D";
import Container from "./Container";
import type { Book } from "@/data/books";

/**
 * A cinematic, scroll-driven showcase of a single lead title. The cover and
 * copy drift at different speeds as the section passes through the viewport.
 */
export default function FeaturedSpotlight({ book }: { book: Book }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const coverY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.4]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      <motion.div
        aria-hidden
        style={{ scale: glowScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]"
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <motion.div style={{ y: coverY }} className="order-2 mx-auto w-[60%] max-w-[280px] lg:order-1 lg:w-full">
          <Book3D book={book} maxTilt={16} />
        </motion.div>

        <motion.div style={{ y: textY, opacity: titleOpacity }} className="order-1 lg:order-2">
          <p className="eyebrow">The latest</p>
          <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight text-bone sm:text-6xl">
            {book.title}
          </h2>
          {book.excerpt && (
            <p className="mt-6 max-w-md font-serif text-2xl italic leading-snug text-gold-light">
              {book.excerpt}
            </p>
          )}
          <p className="mt-6 max-w-md leading-relaxed text-bone-soft/80">
            {book.description[0]}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href={`/books/${book.slug}`} className="btn-gold">
              Discover this book
            </Link>
            {book.price && (
              <span className="text-sm text-bone-soft/70">
                From <span className="font-semibold text-bone">{book.price}</span>
              </span>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
