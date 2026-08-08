import Link from "next/link";
import Container from "./Container";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = 2026; // Update yearly if desired.

  return (
    <footer className="relative mt-32 border-t border-bone-soft/10 bg-night-800">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[40rem] max-w-[90%] -translate-x-1/2 rounded-[50%] bg-gold/10 blur-3xl"
      />
      <Container className="relative">
        <div className="flex flex-col gap-10 py-16 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-3xl font-semibold text-bone">
              {site.penName}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-bone-soft/70">
              {site.tagline}
            </p>
            <Link href="/contact" className="btn-ghost mt-6">
              Join the reader list
            </Link>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-gold">Explore</p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-bone-soft/80 transition-colors hover:text-gold-light"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hairline" />

        <div className="flex flex-col gap-2 py-8 text-xs text-bone-soft/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Written under the pen name {site.penName}.</p>
        </div>
      </Container>
    </footer>
  );
}
