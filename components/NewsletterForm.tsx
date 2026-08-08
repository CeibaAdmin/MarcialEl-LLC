"use client";

import { useState } from "react";

/**
 * Placeholder newsletter signup. It does NOT send anywhere yet — it just shows a
 * confirmation. To make it real, POST the email to your provider (Mailchimp,
 * ConvertKit, Buttondown, Resend, etc.) inside `handleSubmit`, or point the
 * <form action> at a Next.js route handler / server action.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to a real email provider.
    setDone(true);
  }

  if (done) {
    return (
      <p className="rounded-lg bg-paper-soft px-5 py-4 text-sm text-ink-soft">
        Thanks — you&rsquo;re on the list. (Demo only: this form isn&rsquo;t
        connected to an email service yet.)
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-full border border-ink/20 bg-paper px-5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-burgundy"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-burgundy px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-burgundy-dark"
      >
        Subscribe
      </button>
    </form>
  );
}
