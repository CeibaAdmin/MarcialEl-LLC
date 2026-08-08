"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export default function AboutContent() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-0 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[130px]"
      />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-bone-soft/10 lg:sticky lg:top-28">
              <Image
                src="/marcial.png"
                alt="Marcial en una firma de libros"
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                className="object-cover object-[center_18%]"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-night-900/50 to-transparent"
              />
            </div>
          </Reveal>

          {/* Story */}
          <div className="max-w-2xl">
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

            <div className="mt-8 space-y-7 text-lg leading-relaxed text-bone-soft/85">
              <Reveal>
                <p>{t.about.paragraphs[0]}</p>
              </Reveal>
              <Reveal index={1}>
                <p>{t.about.paragraphs[1]}</p>
              </Reveal>
              <Reveal index={2}>
                <blockquote className="border-l-2 border-gold pl-6 font-serif text-2xl italic leading-snug text-gold-light sm:text-3xl">
                  {t.about.quote}
                </blockquote>
              </Reveal>
              <Reveal index={3}>
                <p>{t.about.paragraphs[2]}</p>
              </Reveal>
            </div>

            <Reveal index={4}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/books" className="btn-gold">
                  {t.cta.read}
                </Link>
                <Link href="/contact" className="btn-ghost">
                  {t.cta.contact}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
