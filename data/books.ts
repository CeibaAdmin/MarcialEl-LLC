// ---------------------------------------------------------------------------
// BOOK CATALOG
// ---------------------------------------------------------------------------
// This is the single source of truth for every book shown on the site.
// To add / edit a book, just edit this array. Each book automatically gets:
//   - a card on the Home page (if `featured: true`)
//   - a card on the /books catalog
//   - its own detail page at /books/<slug>
//
// PLACEHOLDER CONTENT: titles, synopses, prices and buy links below are
// examples. Replace them with Marcial's real book details. When you have real
// cover images, drop them in /public and set `coverImage: "/your-cover.jpg"`.
// ---------------------------------------------------------------------------

export type Book = {
  /** URL-safe id, used in the address /books/<slug>. Keep it lowercase-with-dashes. */
  slug: string;
  title: string;
  subtitle?: string;
  /** Short one-liner shown on cards. */
  tagline: string;
  /** Full synopsis shown on the book's detail page. Supports multiple paragraphs. */
  description: string[];
  /** e.g. "$18.99". Leave empty ("") to hide the price. */
  price: string;
  /** Where the "Buy" button sends readers (Amazon, your store, etc.). */
  buyUrl: string;
  /** Optional real cover image in /public, e.g. "/covers/embers.jpg". */
  coverImage?: string;
  /** Fallback gradient colors used when there's no coverImage (Tailwind color values). */
  coverFrom: string;
  coverTo: string;
  /** Metadata shown on the detail page. */
  meta?: {
    pages?: number;
    published?: string;
    genre?: string;
    isbn?: string;
  };
  /** Show this book on the Home page. */
  featured?: boolean;
};

export const books: Book[] = [
  {
    slug: "the-weight-of-embers",
    title: "The Weight of Embers",
    subtitle: "A Novel",
    tagline: "A slow-burning story of memory, exile, and the fires we carry home.",
    description: [
      "PLACEHOLDER SYNOPSIS. When Amara returns to the coastal town she fled a decade ago, she finds it exactly as she left it — and nothing like she remembers. The house still smells of woodsmoke. The neighbors still keep their secrets close.",
      "Over one restless summer, she must decide which memories to tend and which to finally let burn out. A meditation on the things we inherit and the things we choose, told in Marcial's spare, luminous prose.",
    ],
    price: "$18.99",
    buyUrl: "https://example.com/buy/the-weight-of-embers",
    coverFrom: "#7b2d3b",
    coverTo: "#5e212c",
    meta: {
      pages: 312,
      published: "2024",
      genre: "Literary Fiction",
    },
    featured: true,
  },
  {
    slug: "salt-and-other-inheritances",
    title: "Salt & Other Inheritances",
    subtitle: "Poems",
    tagline: "Fifty poems about the sea, the family table, and everything passed down.",
    description: [
      "PLACEHOLDER SYNOPSIS. A collection tracing the tides between generations — grandmothers and grandsons, harbors and departures.",
      "Each poem is a small vessel for grief and gratitude alike, charting how love survives translation across languages, oceans, and years.",
    ],
    price: "$14.99",
    buyUrl: "https://example.com/buy/salt-and-other-inheritances",
    coverFrom: "#1f4b52",
    coverTo: "#133035",
    meta: {
      pages: 96,
      published: "2023",
      genre: "Poetry",
    },
    featured: true,
  },
  {
    slug: "the-cartographers-daughter",
    title: "The Cartographer's Daughter",
    subtitle: "A Novel",
    tagline: "She mapped every coastline but her own — until the maps began to lie.",
    description: [
      "PLACEHOLDER SYNOPSIS. In a city built on borrowed rivers, a young mapmaker discovers her late father's charts contain places that do not exist — and people who should not.",
      "A lyrical mystery about the stories we draw to make sense of a shifting world, and the courage it takes to redraw them.",
    ],
    price: "$19.99",
    buyUrl: "https://example.com/buy/the-cartographers-daughter",
    coverFrom: "#3d2c52",
    coverTo: "#241733",
    meta: {
      pages: 344,
      published: "2022",
      genre: "Literary Fiction",
    },
    featured: true,
  },
  {
    slug: "letters-to-no-one",
    title: "Letters to No One",
    subtitle: "Essays",
    tagline: "A writer's notebook on solitude, craft, and the discipline of hope.",
    description: [
      "PLACEHOLDER SYNOPSIS. Part memoir, part manifesto — a series of unsent letters on what it means to keep writing when no one is reading yet.",
      "Intimate and bracing, these essays make the case that attention is the truest form of love.",
    ],
    price: "$16.99",
    buyUrl: "https://example.com/buy/letters-to-no-one",
    coverFrom: "#5c4326",
    coverTo: "#3a2916",
    meta: {
      pages: 208,
      published: "2021",
      genre: "Essays",
    },
    featured: false,
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export const featuredBooks = books.filter((b) => b.featured);
