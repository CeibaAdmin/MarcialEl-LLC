import type { Loc } from "@/lib/i18n";

// ---------------------------------------------------------------------------
// SITE CONFIG
// ---------------------------------------------------------------------------
// Author name, links, SEO copy, and the praise quotes for the scrolling ribbon.
// UI strings live in lib/i18n.tsx; book content lives in data/books.ts.
// ---------------------------------------------------------------------------

export const site = {
  penName: "Marcial",
  legalName: "Marcial El LLC",
  // SEO copy (Spanish is the default language).
  tagline: "Narrativa y ensayo sobre la mente, el ego y la libertad.",
  description:
    "El hogar oficial de Marcial — autor de narrativa y ensayo. Explora los libros, conoce la historia detrás del seudónimo y entérate cuando llegue el próximo.",
  url: "https://marcial-el-llc.vercel.app",
  // Public contact address — also where newsletter signups are delivered
  // (see app/api/subscribe/route.ts).
  email: "marcialelllc@gmail.com",
  social: {
    instagram: "", // e.g. "https://instagram.com/marcial.escribe"
    goodreads: "",
    x: "",
  },
  // Praise / press quotes for the scrolling ribbon. PLACEHOLDER (bilingual).
  praise: [
    { es: "Una voz de rara y serena hondura.", en: "A voice of rare and quiet depth." },
    { es: "Prosa que se lee como luz recordada.", en: "Prose that reads like remembered light." },
    { es: "Terminas cada libro transformado.", en: "You finish each book changed." },
    { es: "Uno de los autores esenciales sobre la mente.", en: "One of the essential writers on the mind." },
    { es: "Luminoso, sereno, inolvidable.", en: "Luminous, calm, unforgettable." },
  ] as Loc[],
};
