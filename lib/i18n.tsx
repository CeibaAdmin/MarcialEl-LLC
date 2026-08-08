"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// ---------------------------------------------------------------------------
// BILINGUAL SYSTEM (Spanish default, English toggle)
// ---------------------------------------------------------------------------
// All user-visible UI strings live in the `dict` below. Book content lives in
// data/books.ts using the `Loc` type. Use `useLang()` in client components to
// read the current language, switch it, and get the `t` dictionary.
// ---------------------------------------------------------------------------

export type Lang = "es" | "en";

/** A piece of text available in both languages. */
export type Loc = { es: string; en: string };

/** Pick the right language out of a Loc (or a plain string). */
export function pick(value: Loc | string, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}

type Dict = (typeof dict)["es"];

const dict = {
  es: {
    nav: { home: "Inicio", books: "Libros", about: "Autor", contact: "Contacto", shop: "Ver libros" },
    cta: {
      browse: "Explorar la colección",
      meet: "Conoce a Marcial",
      read: "Leer los libros",
      contact: "Escríbeme",
      readFull: "Leer la historia completa",
    },
    common: {
      seeAll: "Ver todos los libros →",
      readMore: "Leer más →",
      back: "← Todos los libros",
      from: "Desde",
      buyOn: "Comprar en",
      askSigned: "¿Ejemplares firmados? Escríbeme →",
    },
    hero: {
      eyebrow: "Autor · Novelista · Ensayista",
      lead: "Historias que",
      accent: "encienden el alma",
      tail: "y se quedan contigo.",
      sub: "El hogar oficial de Marcial — narrativa y ensayo sobre la mente, el ego y la libertad. Entra y encuentra tu próximo libro.",
    },
    collection: { eyebrow: "La estantería", title: "La Colección" },
    spotlight: { eyebrow: "Lo más reciente", discover: "Descubre este libro" },
    author: {
      eyebrow: "El autor",
      title: "Escribir bajo otro nombre",
      body: "Marcial es el seudónimo de un escritor que ha dedicado la vida a observar — la mente, sus prisiones y sus despertares. Los libros reunidos aquí son el resultado: lúcidos, luminosos y hechos para releerse.",
      stats: [
        { value: "9", label: "Libros publicados" },
        { value: "ES", label: "Idioma original" },
        { value: "2024", label: "Última publicación" },
      ],
    },
    newsletter: {
      eyebrow: "Sigue de cerca la obra",
      title: "Sé el primero en saber cuándo llega el próximo libro",
      body: "Los nuevos títulos son escasos y valen la espera. Déjame tu correo y lo sabrás aquí primero — sin spam, nunca.",
      placeholder: "tucorreo@ejemplo.com",
      subscribe: "Suscribirme",
      thanks: "Gracias — ya estás en la lista. (Demostración: este formulario aún no está conectado a un servicio de correo.)",
    },
    books: {
      eyebrow: "La colección",
      title: "Todos los libros, en un solo lugar",
      sub: "Pasa el cursor sobre cualquier portada para darle vida, y entra para leer la historia completa y saber dónde comprar.",
      all: "Todos",
    },
    detail: {
      edition: "Edición",
      published: "Publicado",
      pages: "Páginas",
      genre: "Género",
      format: "Formato",
      isbn: "ISBN",
      praise: "Elogios",
      moreBy: "Más de Marcial",
    },
    about: {
      eyebrow: "Sobre el autor",
      title: "La historia detrás del nombre",
      paragraphs: [
        "Marcial es el seudónimo de un escritor que ha dedicado la vida a escuchar — a la mente, a sus prisiones y a sus despertares.",
        "(MARCADOR DE POSICIÓN) Añade aquí la biografía real: de dónde viene el autor, qué lo llevó a escribir, los temas a los que regresa, y por qué eligió publicar bajo seudónimo.",
        "(MARCADOR DE POSICIÓN) Un último párrafo puede hablar del oficio y las influencias — los autores que lo formaron y qué pueden esperar los lectores de sus libros.",
      ],
      quote: "«Escribo bajo otro nombre para que las historias lleguen sin mí de por medio.»",
    },
    contact: {
      nlEyebrow: "Mantente cerca",
      nlTitle: "El próximo libro",
      nlBody: "Los nuevos títulos son escasos y valen la espera. Déjame tu correo y serás el primero en saber cuándo llega el próximo — sin spam, nunca.",
      helloEyebrow: "Saluda",
      helloTitle: "Ponte en contacto",
      helloBody: "Para ejemplares firmados, invitaciones a eventos, prensa o derechos, escríbeme directamente.",
      emailLabel: "Correo",
      placeholderTag: "(marcador de posición)",
      publisherLabel: "Editorial / derechos",
      publisherValue: "Añade aquí el contacto del agente o la editorial.",
    },
    footer: {
      tagline: "Narrativa y ensayo sobre la mente, el ego y la libertad.",
      explore: "Explorar",
      joinList: "Únete a la lista de lectores",
      rights: (y: number) => `© ${y} Marcial El LLC. Todos los derechos reservados.`,
      penNote: "Publicado bajo el seudónimo Marcial.",
    },
    notFound: {
      eyebrow: "Se perdió el hilo",
      title: "Página no encontrada",
      body: "Esta página se salió del mapa. Volvamos a los libros.",
      home: "Volver al inicio",
    },
    scrollCue: "Desplázate para descubrir más",
  },

  en: {
    nav: { home: "Home", books: "Books", about: "Author", contact: "Contact", shop: "Shop books" },
    cta: {
      browse: "Browse the collection",
      meet: "Meet Marcial",
      read: "Read the books",
      contact: "Get in touch",
      readFull: "Read the full story",
    },
    common: {
      seeAll: "See all books →",
      readMore: "Read more →",
      back: "← All books",
      from: "From",
      buyOn: "Buy on",
      askSigned: "Ask about signed copies →",
    },
    hero: {
      eyebrow: "Author · Novelist · Essayist",
      lead: "Stories that",
      accent: "light up the soul",
      tail: "and stay with you.",
      sub: "The official home of Marcial — fiction and essays on the mind, the ego, and freedom. Step inside and find your next book.",
    },
    collection: { eyebrow: "The shelf", title: "The Collection" },
    spotlight: { eyebrow: "The latest", discover: "Discover this book" },
    author: {
      eyebrow: "The author",
      title: "Writing under another name",
      body: "Marcial is the pen name of a writer who has spent a lifetime observing — the mind, its prisons, and its awakenings. The books gathered here are the result: lucid, luminous, and made to be reread.",
      stats: [
        { value: "9", label: "Books published" },
        { value: "ES", label: "Original language" },
        { value: "2024", label: "Latest release" },
      ],
    },
    newsletter: {
      eyebrow: "Stay close to the work",
      title: "Be first to know when the next book arrives",
      body: "New releases are rare and worth the wait. Leave your email and you'll hear it here first — no spam, ever.",
      placeholder: "you@example.com",
      subscribe: "Subscribe",
      thanks: "Thank you — you're on the list. (Demo only: this form isn't connected to an email service yet.)",
    },
    books: {
      eyebrow: "The collection",
      title: "Every book, in one place",
      sub: "Hover any cover to bring it to life, then step inside for the full story and where to buy.",
      all: "All",
    },
    detail: {
      edition: "Edition",
      published: "Published",
      pages: "Pages",
      genre: "Genre",
      format: "Format",
      isbn: "ISBN",
      praise: "Praise",
      moreBy: "More by Marcial",
    },
    about: {
      eyebrow: "About the author",
      title: "The story behind the name",
      paragraphs: [
        "Marcial is the pen name of a writer who has spent a lifetime listening — to the mind, to its prisons, and to its awakenings.",
        "(PLACEHOLDER) Add the real biography here: where the author grew up, what drew them to writing, the themes they return to, and why they chose to publish under a pseudonym.",
        "(PLACEHOLDER) A closing paragraph can speak to craft and influences — the writers who shaped them and what readers can expect from the books.",
      ],
      quote: "“I write under another name so the stories can arrive without me in the way.”",
    },
    contact: {
      nlEyebrow: "Stay in the loop",
      nlTitle: "The next book",
      nlBody: "New releases are rare and worth the wait. Leave your email and you'll be the first to know when the next one arrives — no spam, ever.",
      helloEyebrow: "Say hello",
      helloTitle: "Get in touch",
      helloBody: "For signed copies, event invitations, press, or rights inquiries, reach out directly.",
      emailLabel: "Email",
      placeholderTag: "(placeholder)",
      publisherLabel: "Publisher / rights",
      publisherValue: "Add agent or publisher contact here.",
    },
    footer: {
      tagline: "Fiction and essays on the mind, the ego, and freedom.",
      explore: "Explore",
      joinList: "Join the reader list",
      rights: (y: number) => `© ${y} Marcial El LLC. All rights reserved.`,
      penNote: "Written under the pen name Marcial.",
    },
    notFound: {
      eyebrow: "Lost the thread",
      title: "Page not found",
      body: "This page wandered off the map. Let's get you back to the books.",
      home: "Return home",
    },
    scrollCue: "Scroll to discover more",
  },
};

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "marcial-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es"); // Spanish default

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const value: LangContextValue = {
    lang,
    setLang,
    toggle: () => setLang(lang === "es" ? "en" : "es"),
    t: dict[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
