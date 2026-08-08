import type { Lang, Loc } from "@/lib/i18n";

// ---------------------------------------------------------------------------
// BOOK CATALOG — Marcial's real books
// ---------------------------------------------------------------------------
// Titles, cover images, Amazon buy links and the Spanish taglines are REAL (the
// taglines come from the covers themselves). Descriptions, excerpts and prices
// are clearly-marked BILINGUAL PLACEHOLDERS — replace them with the real details
// (same shape, no code changes needed).
//
// The last 3 entries are `comingSoon: true` — upcoming titles with no cover yet
// and not for sale. They render in the "Próximamente / Coming soon" section.
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
  coverImage?: string;
  /** Accent colors used for ambient glow / procedural fallback cover. */
  coverFrom: string;
  coverTo: string;
  meta?: { pages?: number; published?: string; genre?: Loc; format?: Loc; isbn?: string };
  praise?: Praise[];
  featured?: boolean;
  /** Upcoming title: no cover/price, shown in the Coming soon section. */
  comingSoon?: boolean;
};

const PRICE: Loc = { es: "14,99 €", en: "$14.99" };
const FICCION: Loc = { es: "Ficción", en: "Fiction" };
const CRECIMIENTO: Loc = { es: "Crecimiento personal", en: "Personal growth" };
const FORMAT: Loc = { es: "Tapa blanda", en: "Paperback" };

/**
 * Canonical Amazon product URL for an ASIN (search/tracking query params from
 * the shared listing URLs are stripped — /dp/<asin> resolves to the same page).
 */
function amazon(asin: string): string {
  return `https://www.amazon.com/dp/${asin}`;
}

// Placeholder synopsis paragraphs (bilingual). Replace per book with real copy.
function ph(titleEs: string, titleEn: string): { es: string[]; en: string[] } {
  return {
    es: [
      `MARCADOR DE POSICIÓN. Sustituye este texto por la sinopsis real de «${titleEs}».`,
      "Un segundo párrafo puede ampliar la premisa, el tono y lo que encontrará el lector.",
    ],
    en: [
      `PLACEHOLDER. Replace this with the real synopsis of “${titleEn}”.`,
      "A second paragraph can expand on the premise, the tone, and what the reader will find.",
    ],
  };
}

export const books: Book[] = [
  {
    slug: "el-pacto-invisible",
    titleEs: "El Pacto Invisible",
    titleEn: "The Invisible Pact",
    tagline: {
      es: "Lo que no ves te condiciona.",
      en: "What you don't see shapes you.",
    },
    description: ph("El Pacto Invisible", "The Invisible Pact"),
    excerpt: {
      es: "«Todo trato tiene un precio; los invisibles, el más alto.»",
      en: "“Every bargain has a price; the invisible ones cost the most.”",
    },
    price: PRICE,
    buyUrl: amazon("8410907224"),
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
      es: "La verdad que duele, pero te libera.",
      en: "The truth that hurts, but sets you free.",
    },
    description: ph("El Tonto Iluminado", "The Enlightened Fool"),
    excerpt: {
      es: "«A veces el que menos sabe es el que más ve.»",
      en: "“Sometimes the one who knows least sees the most.”",
    },
    price: PRICE,
    buyUrl: amazon("8410905957"),
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
      es: "Un viaje al centro de la ilusión.",
      en: "A journey to the center of the illusion.",
    },
    description: ph("El Banquete del Ego", "The Banquet of the Ego"),
    excerpt: {
      es: "«El ego nunca tiene suficiente; por eso siempre tiene hambre.»",
      en: "“The ego never has enough; that is why it is always hungry.”",
    },
    price: PRICE,
    buyUrl: amazon("841090649X"),
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
      es: "Atrévete a recordar quién eres.",
      en: "Dare to remember who you are.",
    },
    description: ph("El Despertar de los Soñadores", "The Awakening of the Dreamers"),
    excerpt: {
      es: "«Soñar no es huir del mundo, es aprender a habitarlo.»",
      en: "“To dream is not to flee the world, but to learn to inhabit it.”",
    },
    price: PRICE,
    buyUrl: amazon("8410284782"),
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
      es: "Cómo soltar sin olvidar y sanar de verdad.",
      en: "How to let go without forgetting — and truly heal.",
    },
    description: ph(
      "El Hombre que no Sabía que Perdonaba",
      "The Man Who Didn't Know He Forgave",
    ),
    excerpt: {
      es: "«Perdonó tanto tiempo sin saberlo que olvidó cómo guardar rencor.»",
      en: "“He forgave so long without knowing it that he forgot how to hold a grudge.”",
    },
    price: PRICE,
    buyUrl: amazon("8410907216"),
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
      es: "Hay respuestas esperando del otro lado.",
      en: "There are answers waiting on the other side.",
    },
    description: ph("El Mensaje a través de la Puerta", "The Message Through the Door"),
    excerpt: {
      es: "«Algunas puertas solo se abren desde dentro.»",
      en: "“Some doors only open from the inside.”",
    },
    price: PRICE,
    buyUrl: amazon("8410392844"),
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
      es: "La seriedad también es una enfermedad.",
      en: "Seriousness, too, is a disease.",
    },
    description: ph("La Revolución de la Risa", "The Revolution of Laughter"),
    excerpt: {
      es: "«Quien ríe de verdad ya no le teme a nadie.»",
      en: "“Whoever truly laughs no longer fears anyone.”",
    },
    price: PRICE,
    buyUrl: amazon("8410906481"),
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
      es: "Rompe tus cárceles invisibles.",
      en: "Break your invisible prisons.",
    },
    description: ph("Prisioneros De...mentes", "Prisoners of the Mind"),
    excerpt: {
      es: "«Nadie está tan preso como el que cree que es libre.»",
      en: "“No one is as imprisoned as the one who believes he is free.”",
    },
    price: PRICE,
    buyUrl: amazon("8410905094"),
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
      es: "El silencio también puede ser una cárcel.",
      en: "Silence, too, can be a prison.",
    },
    description: ph("Condenado a Morir en Libertad", "Condemned to Die Free"),
    excerpt: {
      es: "«Me dieron la libertad como quien dicta una condena.»",
      en: "“They gave me freedom the way one hands down a sentence.”",
    },
    price: PRICE,
    buyUrl: amazon("1662488785"),
    coverImage: "/covers/condenado-a-morir-en-libertad.png",
    coverFrom: "#8a8f98",
    coverTo: "#111316",
    meta: { genre: FICCION, format: FORMAT },
  },

  // --- Coming soon (no cover yet, not for sale) --------------------------
  {
    slug: "la-liberacion-de-los-que-se-rien-despiertos",
    titleEs: "La Liberación de los que se Ríen Despiertos",
    titleEn: "The Liberation of Those Who Laugh Awake",
    tagline: {
      es: "Reír despierto es el primer acto de libertad.",
      en: "To laugh awake is the first act of freedom.",
    },
    description: ph(
      "La Liberación de los que se Ríen Despiertos",
      "The Liberation of Those Who Laugh Awake",
    ),
    price: { es: "", en: "" },
    buyUrl: "",
    coverFrom: "#d1a13e",
    coverTo: "#1a150b",
    meta: { genre: CRECIMIENTO },
    comingSoon: true,
  },
  {
    slug: "el-arte-de-despertar-sin-tomarse-la-vida-demasiado-en-serio",
    titleEs: "El Arte de Despertar sin Tomarse la Vida Demasiado en Serio",
    titleEn: "The Art of Waking Up Without Taking Life Too Seriously",
    tagline: {
      es: "Despertar también puede ser ligero.",
      en: "Waking up can be light, too.",
    },
    description: ph(
      "El Arte de Despertar sin Tomarse la Vida Demasiado en Serio",
      "The Art of Waking Up Without Taking Life Too Seriously",
    ),
    price: { es: "", en: "" },
    buyUrl: "",
    coverFrom: "#2f9e8f",
    coverTo: "#141a1f",
    meta: { genre: CRECIMIENTO },
    comingSoon: true,
  },
  {
    slug: "la-liberacion-de-los-profesionales-del-sufrimiento",
    titleEs: "La Liberación de los Profesionales del Sufrimiento",
    titleEn: "The Liberation of the Professionals of Suffering",
    tagline: {
      es: "Para quienes han hecho del dolor un oficio.",
      en: "For those who have made a profession of pain.",
    },
    description: ph(
      "La Liberación de los Profesionales del Sufrimiento",
      "The Liberation of the Professionals of Suffering",
    ),
    price: { es: "", en: "" },
    buyUrl: "",
    coverFrom: "#7b6cc0",
    coverTo: "#14121f",
    meta: { genre: CRECIMIENTO },
    comingSoon: true,
  },
];

export const availableBooks = books.filter((b) => !b.comingSoon);
export const upcomingBooks = books.filter((b) => b.comingSoon);
export const featuredBooks = availableBooks.filter((b) => b.featured);

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

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
  for (const b of availableBooks) {
    const g = b.meta?.genre;
    if (g && !seen.has(g.es)) {
      seen.add(g.es);
      out.push(g);
    }
  }
  return out;
}
