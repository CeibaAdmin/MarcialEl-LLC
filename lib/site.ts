// ---------------------------------------------------------------------------
// SITE CONFIG
// ---------------------------------------------------------------------------
// Central place for author name, taglines, links and contact details so you
// only change them once. PLACEHOLDER values — replace with the real details.
// ---------------------------------------------------------------------------

export const site = {
  penName: "Marcial",
  legalName: "Marcial El LLC",
  tagline: "Novels, poems, and essays on memory, exile, and home.",
  // Short cinematic hero copy.
  hero: {
    eyebrow: "Author · Novelist · Poet",
    headlineLead: "Stories that",
    headlineAccent: "burn slowly",
    headlineTail: "and stay with you.",
    sub: "The official home of Marcial — literary fiction and poetry about memory, exile, and the fires we carry home. Step inside and find your next book.",
  },
  description:
    "The official home of Marcial — author of literary fiction and poetry. Browse the books, read the story behind the pen name, and get word when the next one lands.",
  // Base URL of the live site (used for SEO metadata). Update after you point a domain.
  url: "https://marcial-el-llc.vercel.app",
  email: "hello@example.com",
  social: {
    instagram: "", // e.g. "https://instagram.com/marcial.writes"
    goodreads: "",
    x: "",
  },
  // Small stat lines shown in the author band. PLACEHOLDER.
  stats: [
    { value: "4", label: "Books published" },
    { value: "9", label: "Languages" },
    { value: "2024", label: "Latest release" },
  ],
  // Praise / press quotes for the scrolling ribbon + about page. PLACEHOLDER.
  praise: [
    { quote: "A voice of rare and quiet devastation.", source: "The Harbor Review" },
    { quote: "Prose that reads like remembered light.", source: "Lantern & Ink" },
    { quote: "You finish each book changed.", source: "Field Notes Quarterly" },
    { quote: "One of the essential writers of exile.", source: "The Coastal Letter" },
    { quote: "Luminous, unhurried, unforgettable.", source: "Margins Magazine" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
