import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]"
      />
      <Container className="relative max-w-xl text-center">
        <p className="eyebrow">Lost the thread</p>
        <h1 className="mt-4 font-serif text-7xl font-semibold text-bone">404</h1>
        <p className="mt-4 text-lg leading-relaxed text-bone-soft/80">
          This page has wandered off the map. Let&rsquo;s get you back to the
          books.
        </p>
        <div className="mt-10">
          <Link href="/" className="btn-gold">
            Return home
          </Link>
        </div>
      </Container>
    </section>
  );
}
