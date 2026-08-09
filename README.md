# Marcial — Author & Bookstore Website

The official website for **Marcial** (the pen name of a writer publishing under
**Marcial El LLC**), where readers can browse and buy his books.

Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS**.
Deploys to Vercel with zero configuration.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run lint       # lint
```

## Where to edit content

Almost everything you'll want to change lives in two files — no coding required:

| What | File |
| --- | --- |
| Books (titles, synopses, prices, buy links, covers) | `data/books.ts` |
| Author name, tagline, email, social links, site URL | `lib/site.ts` |
| About-page biography | `app/about/page.tsx` |
| Contact details | `app/contact/page.tsx` |

### Adding or editing a book

Open `data/books.ts` and add an entry to the `books` array. Each book automatically
gets a catalog card and its own page at `/books/<slug>`. Set `featured: true` to also
show it on the home page.

Book covers: until you have real cover images, each book shows a tasteful gradient
placeholder using its `coverFrom` / `coverTo` colors. When you have real art, drop the
image in `/public` (e.g. `public/covers/embers.jpg`) and set
`coverImage: "/covers/embers.jpg"` on the book.

## Pages

- `/` — Home (hero + featured books)
- `/books` — full catalog
- `/books/[slug]` — individual book detail + buy button
- `/about` — the author's story
- `/contact` — newsletter signup + direct contact

## Newsletter signups

The signup form posts to `app/api/subscribe/route.ts`, which does two things through
[Resend](https://resend.com):

1. **Stores the reader as a Resend contact** — the mailing list.
2. **Emails the address to `site.email`** (`lib/site.ts`) so each signup also lands in
   the inbox. Replies go to the subscriber, so you can answer from that notification.

Contacts are global entities keyed by email address, so no audience or segment ID is
needed — the route posts to Resend's top-level `/contacts` endpoint. (The older
`/audiences/{id}/contacts` route and its `audience_id` are deprecated; use **Segments**
if you later want to group contacts.)

### One-time setup

1. Create a Resend account.
2. Create an API key with **Full access** — sending-only keys can send mail but are
   rejected when writing contacts.
3. Add it to the Vercel project (Settings → Environment Variables) and to a local
   `.env.local`:

| Variable | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | Without it the form shows an error instead of silently dropping signups. |
| `NEWSLETTER_FROM_EMAIL` | no | "From" address, e.g. `Marcial <hola@tudominio.com>`. Defaults to Resend's shared `onboarding@resend.dev`, which works before a domain is verified. |

Environment variables only apply to new builds — redeploy after adding them.

### Emailing the list

Resend → **Broadcasts** → write and send. Unsubscribe links are injected by Resend and
unsubscribes are honored automatically, so there's nothing to build. Contacts export to
CSV from the Audience page if you ever switch providers.

Note: until a domain is verified in Resend (Domains → add yours), the shared
`onboarding@resend.dev` sender can only deliver to the account owner's own address. That
covers the signup notifications; verify a domain before sending a broadcast to readers.

## Things to wire up later (optional)

- **Checkout** — "Buy" buttons currently link out (`buyUrl`). To sell on-site, add
  Stripe Checkout.
- **Domain** — point a custom domain in the Vercel project settings, then update
  `site.url` in `lib/site.ts`.

## Deployment

This repo is connected to the **`marcial-el-llc`** Vercel project (Rivera Services
team). Pushing to the default branch triggers a production deployment; pull requests
get preview deployments automatically.
