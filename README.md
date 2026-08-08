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

The signup form posts to `app/api/subscribe/route.ts`, which emails each new
subscriber's address to `site.email` (`lib/site.ts`) through
[Resend](https://resend.com).

Set these in the Vercel project (Settings → Environment Variables) and in a local
`.env.local`:

| Variable | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | From the Resend dashboard. Without it the form shows an error instead of silently dropping signups. |
| `NEWSLETTER_FROM_EMAIL` | no | "From" address, e.g. `Marcial <hola@tudominio.com>`. Defaults to Resend's shared `onboarding@resend.dev`, which works before a domain is verified. |

Replies go to the subscriber, so you can answer straight from the notification email.

## Things to wire up later (optional)

- **Checkout** — "Buy" buttons currently link out (`buyUrl`). To sell on-site, add
  Stripe Checkout.
- **Domain** — point a custom domain in the Vercel project settings, then update
  `site.url` in `lib/site.ts`.

## Deployment

This repo is connected to the **`marcial-el-llc`** Vercel project (Rivera Services
team). Pushing to the default branch triggers a production deployment; pull requests
get preview deployments automatically.
