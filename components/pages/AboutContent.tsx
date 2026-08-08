"use client";

import Link from "next/link";
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
      <Container className="relative max-w-3xl">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="mt-10 space-y-7 text-lg leading-relaxed text-bone-soft/85">
          <Reveal>
            <p>{t.about.paragraphs[0]}</p>
          </Reveal>
          <Reveal index={1}>
            <p>{t.about.paragraphs[1]}</p>
          </Reveal>
          <Reveal index={2}>
            <blockquote className="border-l-2 border-gold pl-6 font-serif text-3xl italic leading-snug text-gold-light">
              {t.about.quote}
            </blockquote>
          </Reveal>
          <Reveal index={3}>
            <p>{t.about.paragraphs[2]}</p>
          </Reveal>
        </div>

        <Reveal index={4}>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/books" className="btn-gold">
              {t.cta.read}
            </Link>
            <Link href="/contact" className="btn-ghost">
              {t.cta.contact}
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
