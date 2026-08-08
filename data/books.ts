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

export type BuyLink = {
  /** Retailer name shown on the button, e.g. "Amazon". */
  label: string;
  /** Full URL to the book on that retailer. */
  url: string;
};

export type Praise = {
  quote: string;
  source: string;
};

export type Book = {
  /** URL-safe id, used in the address /books/<slug>. Keep it lowercase-with-dashes. */
  slug: string;
  title: string;
  subtitle?: string;
  /** Short one-liner shown on cards. */
  tagline: string;
  /** Full synopsis shown on the book's detail page. Supports multiple paragraphs. */
  description: string[];
  /** Optional pull-quote excerpt from the book, shown on the detail page. */
  excerpt?: string;
  /** e.g. "$18.99". Leave empty ("") to hide the price. */
  price: string;
  /** Primary buy link (fallback if `buyLinks` is empty). */
  buyUrl: string;
  /** Multiple retailer links for the buy panel. If empty, `buyUrl` is used. */
  buyLinks?: BuyLink[];
  /** Optional real cover image in /public, e.g. "/covers/embers.jpg". */
  coverImage?: string;
  /** Gradient colors for the procedural cover when there's no coverImage. */
  coverFrom: string;
  coverTo: string;
  /** Metadata shown on the detail page. */
  meta?: {
    pages?: number;
    published?: string;
    genre?: string;
    format?: string;
    isbn?: string;
  };
  /** Per-book praise quotes. PLACEHOLDER. */
  praise?: Praise[];
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
    excerpt:
      "“Some fires you carry not to keep warm, but so the dark knows your name.”",
    price: "$18.99",
    buyUrl: "https://example.com/buy/the-weight-of-embers",
    buyLinks: [
      { label: "Amazon", url: "https://example.com/amazon/the-weight-of-embers" },
      { label: "Bookshop.org", url: "https://example.com/bookshop/the-weight-of-embers" },
      { label: "Barnes & Noble", url: "https://example.com/bn/the-weight-of-embers" },
    ],
    coverFrom: "#8a3346",
    coverTo: "#3f1622",
    meta: {
      pages: 312,
      published: "2024",
      genre: "Literary Fiction",
      format: "Hardcover",
    },
    praise: [
      { quote: "A novel that smolders and then blazes.", source: "The Harbor Review" },
      { quote: "Marcial writes grief like no one else.", source: "Margins Magazine" },
    ],
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
    excerpt:
      "“We are the salt our mothers wept; we season everything we touch.”",
    price: "$14.99",
    buyUrl: "https://example.com/buy/salt-and-other-inheritances",
    buyLinks: [
      { label: "Amazon", url: "https://example.com/amazon/salt" },
      { label: "Bookshop.org", url: "https://example.com/bookshop/salt" },
    ],
    coverFrom: "#20666f",
    coverTo: "#0d2b30",
    meta: {
      pages: 96,
      published: "2023",
      genre: "Poetry",
      format: "Paperback",
    },
    praise: [
      { quote: "Poems that read like remembered light.", source: "Lantern & Ink" },
    ],
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
    excerpt:
      "“Every map is a wish disguised as a fact.”",
    price: "$19.99",
    buyUrl: "https://example.com/buy/the-cartographers-daughter",
    buyLinks: [
      { label: "Amazon", url: "https://example.com/amazon/cartographers-daughter" },
      { label: "Bookshop.org", url: "https://example.com/bookshop/cartographers-daughter" },
      { label: "Apple Books", url: "https://example.com/apple/cartographers-daughter" },
    ],
    coverFrom: "#4a3768",
    coverTo: "#1d1330",
    meta: {
      pages: 344,
      published: "2022",
      genre: "Literary Fiction",
      format: "Hardcover",
    },
    praise: [
      { quote: "A shimmering, unforgettable mystery.", source: "Field Notes Quarterly" },
    ],
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
    excerpt:
      "“To pay attention is the first and last act of love.”",
    price: "$16.99",
    buyUrl: "https://example.com/buy/letters-to-no-one",
    buyLinks: [
      { label: "Amazon", url: "https://example.com/amazon/letters-to-no-one" },
      { label: "Bookshop.org", url: "https://example.com/bookshop/letters-to-no-one" },
    ],
    coverFrom: "#7a5a28",
    coverTo: "#2f2110",
    meta: {
      pages: 208,
      published: "2021",
      genre: "Essays",
      format: "Paperback",
    },
    praise: [
      { quote: "The essential writer of exile on his craft.", source: "The Coastal Letter" },
    ],
    featured: false,
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export const featuredBooks = books.filter((b) => b.featured);

/** All buy links for a book, falling back to the single buyUrl. */
export function buyLinksFor(book: Book): BuyLink[] {
  if (book.buyLinks && book.buyLinks.length > 0) return book.buyLinks;
  return [{ label: "Buy the book", url: book.buyUrl }];
}

/** Unique genres for filtering the catalog. */
export const genres = Array.from(
  new Set(books.map((b) => b.meta?.genre).filter(Boolean)),
) as string[];
