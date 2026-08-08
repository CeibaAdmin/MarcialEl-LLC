import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind the pen name ${site.penName}.`,
};

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-0 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[130px]"
      />
      <Container className="relative max-w-3xl">
        <SectionHeading eyebrow="About the author" title="The story behind the name" />

        {/* PLACEHOLDER BIO — replace with Marcial's real story. */}
        <div className="mt-10 space-y-7 text-lg leading-relaxed text-bone-soft/85">
          <Reveal>
            <p>
              <span className="font-serif text-2xl text-bone">Marcial</span> is the
              pen name of a writer who has spent a lifetime listening — to harbors,
              to grandmothers, to the quiet rooms where families keep their
              histories.
            </p>
          </Reveal>
          <Reveal index={1}>
            <p>
              (PLACEHOLDER) Add the real biography here: where the author grew up,
              what drew them to writing, the themes they return to, any awards or
              previous work, and why they chose to publish under a pseudonym.
            </p>
          </Reveal>
          <Reveal index={2}>
            <blockquote className="border-l-2 border-gold pl-6 font-serif text-3xl italic leading-snug text-gold-light">
              &ldquo;I write under another name so the stories can arrive without
              me in the way.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal index={3}>
            <p>
              (PLACEHOLDER) A closing paragraph can speak to craft and influences —
              the writers who shaped them, the discipline of their daily practice,
              and what readers can expect from the books.
            </p>
          </Reveal>
        </div>

        <Reveal index={4}>
          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/books" className="btn-gold">
              Read the books
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
