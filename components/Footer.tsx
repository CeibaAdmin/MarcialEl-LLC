import Link from "next/link";
import Container from "./Container";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = 2026; // Update yearly, or wire to build-time date if preferred.

  return (
    <footer className="mt-24 border-t border-ink/10 bg-paper-soft">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-xl font-semibold text-ink">{site.penName}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-faint">{site.tagline}</p>
        </div>

        <nav className="flex flex-col gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-burgundy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>

      <div className="border-t border-ink/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Written under the pen name {site.penName}.</p>
        </Container>
      </div>
    </footer>
  );
}
