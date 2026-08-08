import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container className="max-w-xl text-center">
        <p className="eyebrow">Lost the thread</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          The page you&rsquo;re looking for has wandered off. Let&rsquo;s get you
          back to the books.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-full bg-burgundy px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-burgundy-dark"
          >
            Return home
          </Link>
        </div>
      </Container>
    </section>
  );
}
