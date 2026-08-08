"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import { nav, site } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.penName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-burgundy ${
                isActive(item.href) ? "text-burgundy" : "text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/books"
            className="rounded-full bg-burgundy px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-burgundy-dark"
          >
            Shop books
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink/10 bg-paper md:hidden">
          <Container className="flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base font-medium ${
                  isActive(item.href) ? "text-burgundy" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
