import { site } from "@/lib/site";

// ---------------------------------------------------------------------------
// NEWSLETTER SIGNUP → email notification
// ---------------------------------------------------------------------------
// Every submission of the newsletter form is emailed to `site.email` so the new
// subscriber lands in the inbox. Sending goes through Resend (https://resend.com)
// over plain fetch — no extra dependency.
//
// Required env var (set it in the Vercel project → Settings → Environment
// Variables, and in `.env.local` for local dev):
//
//   RESEND_API_KEY=re_...
//
// Optional: NEWSLETTER_FROM_EMAIL — the "From" address. Defaults to Resend's
// shared onboarding sender, which works without verifying a domain. Once a
// custom domain is verified in Resend, set this to e.g. "Marcial <hola@tudominio.com>".
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

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
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

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error(`[subscribe] Resend responded ${res.status}: ${detail}`);
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
