import type { Lang, Loc } from "@/lib/i18n";

// ---------------------------------------------------------------------------
// BOOK CATALOG — Marcial's real books
// ---------------------------------------------------------------------------
// Titles and cover images are REAL. Taglines, descriptions, excerpts, prices,
// genres and buy links are clearly-marked BILINGUAL PLACEHOLDERS — replace them
// with the real details (same shape, no code changes needed).
//
// To edit: change the Spanish (`es`) and English (`en`) text in each field.
// Book titles show the Spanish title as primary; `titleEn` is a draft English
// translation shown in English mode — refine as you like.
// ---------------------------------------------------------------------------

export type BuyLink = { label: string; url: string };
export type Praise = { quote: Loc; source: string };

export type Book = {
  slug: string;
  titleEs: string;
  titleEn: string;
  subtitle?: Loc;
  tagline: Loc;
  description: { es: string[]; en: string[] };
  excerpt?: Loc;
  price: Loc;
  buyUrl: string;
  buyLinks?: BuyLink[];
  coverImage: string;
  /** Accent colors used for ambient glow / procedural fallback. */
  coverFrom: string;
  coverTo: string;
  meta?: { pages?: number; published?: string; genre?: Loc; format?: Loc; isbn?: string };
  praise?: Praise[];
  featured?: boolean;
};

// Shorthand placeholder builders keep the list readable.
const P = "$14.99";
const PRICE: Loc = { es: "14,99 €", en: "$14.99" };
const FICCION: Loc = { es: "Ficción", en: "Fiction" };
const CRECIMIENTO: Loc = { es: "Crecimiento personal", en: "Personal growth" };
const FORMAT: Loc = { es: "Tapa blanda", en: "Paperback" };

function links(slug: string): BuyLink[] {
  return [
    { label: "Amazon", url: `https://example.com/amazon/${slug}` },
    { label: "Bookshop.org", url: `https://example.com/bookshop/${slug}` },
  ];
}

export const books: Book[] = [
  {
    slug: "el-pacto-invisible",
    titleEs: "El Pacto Invisible",
    titleEn: "The Invisible Pact",
    tagline: {
      es: "PLACEHOLDER — Un pacto silencioso que decide una vida entera.",
      en: "PLACEHOLDER — A silent pact that decides an entire life.",
    },
    description: {
      es: [
        "MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de El Pacto Invisible.",
        "Un segundo párrafo puede ampliar la premisa, el tono y lo que encontrará el lector.",
      ],
      en: [
        "PLACEHOLDER. Replace this with the real synopsis of The Invisible Pact.",
        "A second paragraph can expand on the premise, the tone, and what the reader will find.",
      ],
    },
    excerpt: {
      es: "«Todo trato tiene un precio; los invisibles, el más alto.»",
      en: "“Every bargain has a price; the invisible ones cost the most.”",
    },
    price: PRICE,
    buyUrl: "https://example.com/buy/el-pacto-invisible",
    buyLinks: links("el-pacto-invisible"),
    coverImage: "/covers/el-pacto-invisible.png",
    coverFrom: "#c9a15a",
    coverTo: "#171310",
    meta: { genre: FICCION, format: FORMAT },
    featured: true,
  },
  {
    slug: "el-tonto-iluminado",
    titleEs: "El Tonto Iluminado",
    titleEn: "The Enlightened Fool",
    tagline: {
      es: "PLACEHOLDER — La sabiduría que se esconde detrás de la ingenuidad.",
      en: "PLACEHOLDER — The wisdom hidden behind naivety.",
    },
    description: {
      es: [
        "MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de El Tonto Iluminado.",
        "Un segundo párrafo puede hablar del mensaje central del libro.",
      ],
      en: [
        "PLACEHOLDER. Replace this with the real synopsis of The Enlightened Fool.",
        "A second paragraph can speak to the book's central message.",
      ],
    },
    excerpt: {
      es: "«A veces el que menos sabe es el que más ve.»",
      en: "“Sometimes the one who knows least sees the most.”",
    },
    price: PRICE,
    buyUrl: "https://example.com/buy/el-tonto-iluminado",
    buyLinks: links("el-tonto-iluminado"),
    coverImage: "/covers/el-tonto-iluminado.png",
    coverFrom: "#d8a24a",
    coverTo: "#1a140c",
    meta: { genre: CRECIMIENTO, format: FORMAT },
    featured: true,
  },
  {
    slug: "el-banquete-del-ego",
    titleEs: "El Banquete del Ego",
    titleEn: "The Banquet of the Ego",
    tagline: {
      es: "PLACEHOLDER — Cuando el ego se sienta a la mesa, nadie queda saciado.",
      en: "PLACEHOLDER — When the ego takes a seat, no one leaves satisfied.",
    },
    description: {
      es: [
        "MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de El Banquete del Ego.",
        "Un segundo párrafo puede describir el viaje interior que propone el libro.",
      ],
      en: [
        "PLACEHOLDER. Replace this with the real synopsis of The Banquet of the Ego.",
        "A second paragraph can describe the inner journey the book proposes.",
      ],
    },
    excerpt: {
      es: "«El ego nunca tiene suficiente; por eso siempre tiene hambre.»",
      en: "“The ego never has enough; that is why it is always hungry.”",
    },
    price: PRICE,
    buyUrl: "https://example.com/buy/el-banquete-del-ego",
    buyLinks: links("el-banquete-del-ego"),
    coverImage: "/covers/el-banquete-del-ego.png",
    coverFrom: "#b8543f",
    coverTo: "#1a100c",
    meta: { genre: CRECIMIENTO, format: FORMAT },
    featured: true,
  },
  {
    slug: "el-despertar-de-los-sonadores",
    titleEs: "El Despertar de los Soñadores",
    titleEn: "The Awakening of the Dreamers",
    subtitle: { es: "Libros que alegran el alma", en: "Books that gladden the soul" },
    tagline: {
      es: "PLACEHOLDER — Un despertar para quienes se atreven a soñar despiertos.",
      en: "PLACEHOLDER — An awakening for those who dare to dream awake.",
    },
    description: {
      es: [
        "MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de El Despertar de los Soñadores.",
        "Un segundo párrafo puede hablar de la esperanza y la luz que ofrece el libro.",
      ],
      en: [
        "PLACEHOLDER. Replace this with the real synopsis of The Awakening of the Dreamers.",
        "A second paragraph can speak to the hope and light the book offers.",
      ],
    },
    excerpt: {
      es: "«Soñar no es huir del mundo, es aprender a habitarlo.»",
      en: "“To dream is not to flee the world, but to learn to inhabit it.”",
    },
    price: PRICE,
    buyUrl: "https://example.com/buy/el-despertar-de-los-sonadores",
    buyLinks: links("el-despertar-de-los-sonadores"),
    coverImage: "/covers/el-despertar-de-los-sonadores.png",
    coverFrom: "#2f9e8f",
    coverTo: "#141a1f",
    meta: { genre: CRECIMIENTO, format: FORMAT },
    featured: true,
  },
  {
    slug: "el-hombre-que-no-sabia-que-perdonaba",
    titleEs: "El Hombre que no Sabía que Perdonaba",
    titleEn: "The Man Who Didn't Know He Forgave",
    tagline: {
      es: "PLACEHOLDER — Una historia sobre el perdón que llega sin avisar.",
      en: "PLACEHOLDER — A story about the forgiveness that arrives unannounced.",
    },
    description: {
      es: [
        "MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de El Hombre que no Sabía que Perdonaba.",
        "Un segundo párrafo puede describir a los personajes y el conflicto central.",
      ],
      en: [
        "PLACEHOLDER. Replace this with the real synopsis of The Man Who Didn't Know He Forgave.",
        "A second paragraph can describe the characters and the central conflict.",
      ],
    },
    excerpt: {
      es: "«Perdonó tanto tiempo sin saberlo que olvidó cómo guardar rencor.»",
      en: "“He forgave so long without knowing it that he forgot how to hold a grudge.”",
    },
    price: PRICE,
    buyUrl: "https://example.com/buy/el-hombre-que-no-sabia-que-perdonaba",
    buyLinks: links("el-hombre-que-no-sabia-que-perdonaba"),
    coverImage: "/covers/el-hombre-que-no-sabia-que-perdonaba.png",
    coverFrom: "#7b6cc0",
    coverTo: "#14121f",
    meta: { genre: FICCION, format: FORMAT },
    featured: true,
  },
  {
    slug: "el-mensaje-a-traves-de-la-puerta",
    titleEs: "El Mensaje a través de la Puerta",
    titleEn: "The Message Through the Door",
    tagline: {
      es: "PLACEHOLDER — Una puerta, un mensaje, y todo lo que cambia después.",
      en: "PLACEHOLDER — A door, a message, and everything that changes after.",
    },
    description: {
      es: [
        "MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de El Mensaje a través de la Puerta.",
        "Un segundo párrafo puede insinuar el misterio sin revelarlo.",
      ],
      en: [
        "PLACEHOLDER. Replace this with the real synopsis of The Message Through the Door.",
        "A second paragraph can hint at the mystery without giving it away.",
      ],
    },
    excerpt: {
      es: "«Algunas puertas solo se abren desde dentro.»",
      en: "“Some doors only open from the inside.”",
    },
    price: PRICE,
    buyUrl: "https://example.com/buy/el-mensaje-a-traves-de-la-puerta",
    buyLinks: links("el-mensaje-a-traves-de-la-puerta"),
    coverImage: "/covers/el-mensaje-a-traves-de-la-puerta.png",
    coverFrom: "#3f7bb0",
    coverTo: "#0f1620",
    meta: { genre: FICCION, format: FORMAT },
    featured: true,
  },
  {
    slug: "la-revolucion-de-la-risa",
    titleEs: "La Revolución de la Risa",
    titleEn: "The Revolution of Laughter",
    tagline: {
      es: "PLACEHOLDER — Reír como acto de libertad y de rebeldía.",
      en: "PLACEHOLDER — Laughter as an act of freedom and rebellion.",
    },
    description: {
      es: [
        "MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de La Revolución de la Risa.",
        "Un segundo párrafo puede transmitir el tono luminoso y liberador del libro.",
      ],
      en: [
        "PLACEHOLDER. Replace this with the real synopsis of The Revolution of Laughter.",
        "A second paragraph can convey the bright, liberating tone of the book.",
      ],
    },
    excerpt: {
      es: "«Quien ríe de verdad ya no le teme a nadie.»",
      en: "“Whoever truly laughs no longer fears anyone.”",
    },
    price: PRICE,
    buyUrl: "https://example.com/buy/la-revolucion-de-la-risa",
    buyLinks: links("la-revolucion-de-la-risa"),
    coverImage: "/covers/la-revolucion-de-la-risa.png",
    coverFrom: "#d1a13e",
    coverTo: "#1a150b",
    meta: { genre: CRECIMIENTO, format: FORMAT },
  },
  {
    slug: "prisioneros-dementes",
    titleEs: "Prisioneros De...mentes",
    titleEn: "Prisoners of the Mind",
    tagline: {
      es: "PLACEHOLDER — Las cárceles más difíciles son las que no se ven.",
      en: "PLACEHOLDER — The hardest prisons are the ones you cannot see.",
    },
    description: {
      es: [
        "MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de Prisioneros De...mentes.",
        "Un segundo párrafo puede jugar con el doble sentido del título.",
      ],
      en: [
        "PLACEHOLDER. Replace this with the real synopsis of Prisoners of the Mind.",
        "A second paragraph can play with the title's double meaning.",
      ],
    },
    excerpt: {
      es: "«Nadie está tan preso como el que cree que es libre.»",
      en: "“No one is as imprisoned as the one who believes he is free.”",
    },
    price: PRICE,
    buyUrl: "https://example.com/buy/prisioneros-dementes",
    buyLinks: links("prisioneros-dementes"),
    coverImage: "/covers/prisioneros-dementes.png",
    coverFrom: "#9a4038",
    coverTo: "#160f0e",
    meta: { genre: FICCION, format: FORMAT },
  },
  {
    slug: "condenado-a-morir-en-libertad",
    titleEs: "Condenado a Morir en Libertad",
    titleEn: "Condemned to Die Free",
    tagline: {
      es: "PLACEHOLDER — La libertad también puede ser una sentencia.",
      en: "PLACEHOLDER — Freedom, too, can be a sentence.",
    },
    description: {
      es: [
        "MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de Condenado a Morir en Libertad.",
        "Un segundo párrafo puede plantear la paradoja que da título al libro.",
      ],
      en: [
        "PLACEHOLDER. Replace this with the real synopsis of Condemned to Die Free.",
        "A second paragraph can lay out the paradox at the heart of the title.",
      ],
    },
    excerpt: {
      es: "«Me dieron la libertad como quien dicta una condena.»",
      en: "“They gave me freedom the way one hands down a sentence.”",
    },
    price: PRICE,
    buyUrl: "https://example.com/buy/condenado-a-morir-en-libertad",
    buyLinks: links("condenado-a-morir-en-libertad"),
    coverImage: "/covers/condenado-a-morir-en-libertad.png",
    coverFrom: "#8a8f98",
    coverTo: "#111316",
    meta: { genre: FICCION, format: FORMAT },
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export const featuredBooks = books.filter((b) => b.featured);

/** Display title for the current language (Spanish primary, English draft). */
export function bookTitle(book: Book, lang: Lang): string {
  return lang === "es" ? book.titleEs : book.titleEn;
}

/** All buy links for a book, falling back to the single buyUrl. */
export function buyLinksFor(book: Book): BuyLink[] {
  if (book.buyLinks && book.buyLinks.length > 0) return book.buyLinks;
  return [{ label: "Amazon", url: book.buyUrl }];
}

/** Unique genres (as Loc) for the catalog filter, deduped by Spanish key. */
export function genreList(): Loc[] {
  const seen = new Set<string>();
  const out: Loc[] = [];
  for (const b of books) {
    const g = b.meta?.genre;
    if (g && !seen.has(g.es)) {
      seen.add(g.es);
      out.push(g);
    }
  }
  return out;
}

// Retained for reference; not used now that every book has a real cover.
export const PLACEHOLDER_PRICE = P;
