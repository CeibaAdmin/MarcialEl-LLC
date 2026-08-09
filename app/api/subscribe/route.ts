import { site } from "@/lib/site";

// ---------------------------------------------------------------------------
// NEWSLETTER SIGNUP → Resend contact (+ notification email)
// ---------------------------------------------------------------------------
// Each submission does two things:
//   1. Stores the address as a Resend contact — the reader list. Mail it later
//      from Resend → Broadcasts; unsubscribe links are handled there.
//   2. Emails the address to `site.email` so the signup also lands in the inbox.
//
// Both go through Resend over plain fetch — no extra dependency. Contacts are
// global entities keyed by email address (the older per-audience endpoint and
// its audience_id are deprecated), so no audience or segment id is needed here.
//
// Env vars (Vercel → Settings → Environment Variables, and `.env.local` locally):
//
//   RESEND_API_KEY=re_...          required — nothing sends or stores without it
//   NEWSLETTER_FROM_EMAIL=...      optional — defaults to Resend's shared sender,
//                                  which works without verifying a domain
// ---------------------------------------------------------------------------

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_FROM = "Marcial <onboarding@resend.dev>";

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Never drop a subscriber silently: record it in the deployment logs and
    // tell the client the signup did not go through.
    console.error(`[subscribe] RESEND_API_KEY is not set — signup not delivered: ${email}`);
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  // 1. Store the reader. This is the part that makes a mailing list; the
  //    notification below is a convenience. A repeat address is not an error —
  //    Resend returns the existing contact, and nobody re-subscribing should
  //    ever see a failure.
  const stored = await fetch("https://api.resend.com/contacts", {
    method: "POST",
    headers,
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (!stored.ok) {
    const detail = await stored.text().catch(() => "");
    console.error(`[subscribe] Resend contacts responded ${stored.status}: ${detail}`);
    return Response.json({ ok: false, error: "signup_failed" }, { status: 502 });
  }

  // 2. Notify the author. Best-effort: the contact is stored, so the signup
  //    succeeded even when this email fails.
  const notified = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers,
    body: JSON.stringify({
      from: process.env.NEWSLETTER_FROM_EMAIL || DEFAULT_FROM,
      to: [site.email],
      reply_to: email,
      subject: `Nueva suscripción: ${email}`,
      text: [
        "Nueva suscripción a la lista de lectores.",
        "",
        `Correo: ${email}`,
        `Origen: ${site.url}`,
      ].join("\n"),
    }),
  });

  if (!notified.ok) {
    const detail = await notified.text().catch(() => "");
    console.error(`[subscribe] Resend emails responded ${notified.status}: ${detail}`);
  }

  return Response.json({ ok: true });
}
