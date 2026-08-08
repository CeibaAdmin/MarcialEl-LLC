import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind the pen name ${site.penName}.`,
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <p className="eyebrow">About the author</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold text-ink">
          The story behind the name
        </h1>

        {/* PLACEHOLDER BIO — replace with Marcial's real story. */}
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            <span className="font-serif text-2xl text-ink">Marcial</span> is the pen
            name of a writer who has spent a lifetime listening — to harbors, to
            grandmothers, to the quiet rooms where families keep their histories.
          </p>
          <p>
            (PLACEHOLDER) Add the real biography here: where the author grew up, what
            drew them to writing, the themes they return to, any awards or previous
            work, and why they chose to publish under a pseudonym.
          </p>
          <p>
            (PLACEHOLDER) A second paragraph can speak to the author&rsquo;s craft and
            influences — the writers who shaped them, the discipline of their daily
            practice, and what readers can expect from the books.
          </p>
          <blockquote className="border-l-2 border-burgundy pl-6 font-serif text-2xl italic text-ink">
            &ldquo;I write under another name so the stories can arrive without me in
            the way.&rdquo;
          </blockquote>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/books"
            className="rounded-full bg-burgundy px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-burgundy-dark"
          >
            Read the books
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-ink/20 px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </section>
  );
}
