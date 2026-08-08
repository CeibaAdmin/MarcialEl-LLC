"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

/**
 * Newsletter signup. Posts the address to /api/subscribe, which emails it to
 * `site.email`. The route needs RESEND_API_KEY set in the environment — until
 * it is, submissions fail loudly here instead of pretending to succeed.
 */
export default function NewsletterForm() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-2xl border border-gold/30 bg-night-700/60 px-5 py-4 text-sm text-bone-soft">
        {t.newsletter.thanks}
      </p>
    );
  }

  return (
    <div>
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
          placeholder={t.newsletter.placeholder}
          className="w-full rounded-full border border-bone-soft/20 bg-night-700/60 px-5 py-3 text-sm text-bone outline-none transition-colors placeholder:text-bone-soft/40 focus:border-gold"
        />
        <button type="submit" disabled={status === "sending"} className="btn-gold shrink-0 disabled:opacity-60">
          {status === "sending" ? t.newsletter.sending : t.newsletter.subscribe}
        </button>
      </form>
      {status === "error" && (
        <p role="alert" className="mt-3 text-sm text-bone-soft/70">
          {t.newsletter.error}{" "}
          <a href={`mailto:${site.email}`} className="text-gold-light hover:text-gold">
            {site.email}
          </a>
          .
        </p>
      )}
    </div>
  );
}
