import type { Lang, Loc } from "@/lib/i18n";

// ---------------------------------------------------------------------------
// BOOK CATALOG — Marcial's real books
// ---------------------------------------------------------------------------
// Titles, cover images, prices, Amazon buy links, descriptions and the Spanish
// taglines are REAL (the taglines come from the covers themselves; the Spanish
// descriptions come from the Amazon listings, the English ones are translations
// of those). Excerpts are still clearly-marked BILINGUAL PLACEHOLDERS.
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

/**
 * Amazon.com list price in USD, formatted per language — Spanish uses the local
 * convention (comma decimal, trailing symbol), English the US one. Both state
 * the same dollar amount, which is what the Amazon buy button charges.
 */
function usd(amount: string): Loc {
  return { es: `${amount.replace(".", ",")} $`, en: `$${amount}` };
}

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

// Placeholder synopsis paragraphs (bilingual), used by the coming-soon titles
// until their real copy exists.
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
    description: {
      es: [
        "Una obra espiritual, filosófica y humorística sobre reírse del ego para volver a casa.",
        "La iluminación no está en las montañas ni en promesas de paz eterna: está en esa risa capaz de romper el hechizo del miedo. En este libro, Tadeo y Marcial se adentran en un diálogo tan lúcido como delirantemente humano, donde la espiritualidad deja de ser solemnidad para convertirse en una forma radical de libertad.",
        "Entre reflexiones provocadoras, humor afilado y una ternura inesperada, descubrirás que el sufrimiento puede ser una comedia mal dirigida, que el ego se desarma mejor con una carcajada que con una doctrina, y que la vida no pide ser escapada, sino atravesada con los ojos abiertos y el corazón menos rígido.",
        "Espiritualidad sin solemnidad. Humor como camino de conciencia. Una invitación a amar el caos de estar vivos.",
        "Este libro no predica: sacude, abraza y provoca. Es ideal para lectores que buscan una mirada diferente sobre la conciencia, el ego, el miedo y la libertad interior; para quienes disfrutan de la filosofía con alma, la espiritualidad irreverente y los textos que iluminan sin dejar de reír.",
        "Bienvenido al laberinto. La salida no está fuera: está en aprender a recorrerlo con una carcajada.",
      ],
      en: [
        "A spiritual, philosophical and humorous work about laughing at the ego to find the way home.",
        "Enlightenment is not in the mountains, nor in promises of eternal peace: it is in the laughter that can break the spell of fear. In this book, Tadeo and Marcial enter a dialogue as lucid as it is deliriously human, where spirituality stops being solemn and becomes a radical form of freedom.",
        "Between provocative reflections, sharp humor and an unexpected tenderness, you will discover that suffering can be a badly directed comedy, that the ego is disarmed better by a burst of laughter than by a doctrine, and that life does not ask to be escaped, but crossed with open eyes and a less rigid heart.",
        "Spirituality without solemnity. Humor as a path to awareness. An invitation to love the chaos of being alive.",
        "This book does not preach: it shakes, embraces and provokes. It is for readers looking for a different view of consciousness, the ego, fear and inner freedom; for those who enjoy philosophy with soul, irreverent spirituality, and writing that illuminates without stopping laughing.",
        "Welcome to the labyrinth. The way out is not outside: it is in learning to walk it with a laugh.",
      ],
    },
    excerpt: {
      es: "«Todo trato tiene un precio; los invisibles, el más alto.»",
      en: "“Every bargain has a price; the invisible ones cost the most.”",
    },
    price: usd("13.70"),
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
    description: {
      es: [
        "Una novela de crecimiento espiritual que demuestra que la iluminación comienza con una carcajada.",
        "Balvino es un hombre común —como tú, como cualquiera— que pasó más de medio siglo atrapado en el ego, los miedos y las decisiones que pesan. Vivió entre dramas, máscaras y expectativas, convencido de que la vida era algo que debía entender, controlar y ganar. Hasta que, rozando los 60, descubre una verdad tan simple como demoledora: la vida no se entiende… se ríe.",
        "A través de su nacimiento, su infancia torpe, sus errores, pérdidas y tropiezos, Balvino recorre el camino que nadie enseña: el de reírse de la importancia personal, desmontar el falso yo y soltar la solemnidad espiritual. Porque aquí no hay gurús ni mandamientos, sino una travesía honesta y cómica hacia la claridad interior.",
        "En estas páginas encontrarás:",
        "• Humor afilado que incomoda al ego",
        "• Filosofía accesible sin discursos pesados",
        "• Espiritualidad sin túnicas ni poses",
        "• Verdades que liberan… entre carcajadas",
        "Esta no es una historia sobre volverse especial. Es sobre dejar de vivir como un tonto.",
        "Ideal para lectores de narrativa espiritual contemporánea y para quienes buscan crecimiento personal sin solemnidad. Si estás listo para desaprender, soltar y descubrir que la iluminación está más cerca de una risa que de una meditación eterna… abre este libro. Tu ego no saldrá ileso. Tu alma, sí.",
      ],
      en: [
        "A novel of spiritual growth showing that enlightenment begins with a burst of laughter.",
        "Balvino is an ordinary man — like you, like anyone — who spent more than half a century trapped in his ego, his fears and the decisions that weigh. He lived among dramas, masks and expectations, convinced that life was something to be understood, controlled and won. Until, nearing 60, he discovers a truth as simple as it is devastating: life is not understood… it is laughed at.",
        "Through his birth, his clumsy childhood, his mistakes, losses and stumbles, Balvino walks the road no one teaches: laughing at self-importance, dismantling the false self, and letting go of spiritual solemnity. Because there are no gurus here and no commandments, only an honest, comic passage toward inner clarity.",
        "In these pages you will find:",
        "• Sharp humor that unsettles the ego",
        "• Accessible philosophy without heavy lecturing",
        "• Spirituality with no robes and no poses",
        "• Truths that set you free… between laughs",
        "This is not a story about becoming special. It is about no longer living like a fool.",
        "For readers of contemporary spiritual fiction and anyone seeking personal growth without solemnity. If you are ready to unlearn, to let go, and to discover that enlightenment is closer to a laugh than to an eternal meditation… open this book. Your ego will not come out unharmed. Your soul will.",
      ],
    },
    excerpt: {
      es: "«A veces el que menos sabe es el que más ve.»",
      en: "“Sometimes the one who knows least sees the most.”",
    },
    price: usd("17.09"),
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
    description: {
      es: [
        "Una obra de despertar espiritual e ironía filosófica que desmonta al ego a través de la risa.",
        "¿Qué pasaría si el verdadero obstáculo no fuera tu dolor, tu pasado o tus fracasos… sino el personaje que has defendido toda la vida? En «El Banquete del Ego», Marcial no ofrece fórmulas de autoayuda ni promesas de transformación instantánea. Ofrece algo más incómodo y más liberador: una confrontación lúcida con la historia que te has contado sobre ti mismo.",
        "A través de figuras insólitas, intensas y profundamente humanas —un hombre que presiente tragedias, una mujer atrapada en sus pensamientos, órganos cargados de rabia, heridas emocionales y monstruos nacidos del alma moderna— este libro construye un espejo feroz, simbólico y revelador. Te reirás de sus excesos, de sus miedos y de sus contradicciones… hasta descubrir que todos hablan de ti.",
        "Una sátira espiritual afilada y provocadora. Un viaje hacia la sombra, la máscara y la liberación interior. Una invitación a soltar el drama personal sin perder profundidad.",
        "Ideal para lectores de espiritualidad contemporánea, ensayo transformador y ficción filosófica con humor, «El Banquete del Ego» es una obra para quienes están listos para mirar su personaje de frente y, por fin, dejar de adorarlo. Porque a veces el despertar no llega en silencio… sino entre carcajadas.",
      ],
      en: [
        "A work of spiritual awakening and philosophical irony that dismantles the ego through laughter.",
        "What if the real obstacle were not your pain, your past or your failures… but the character you have defended all your life? In “The Banquet of the Ego,” Marcial offers no self-help formulas and no promises of instant transformation. He offers something more uncomfortable and more liberating: a lucid confrontation with the story you have told yourself about yourself.",
        "Through strange, intense and deeply human figures — a man who senses tragedies, a woman trapped in her own thoughts, organs loaded with rage, emotional wounds and monsters born of the modern soul — this book builds a fierce, symbolic, revealing mirror. You will laugh at their excesses, their fears and their contradictions… until you realize they are all talking about you.",
        "A sharp, provocative spiritual satire. A journey toward the shadow, the mask and inner liberation. An invitation to let go of personal drama without losing depth.",
        "For readers of contemporary spirituality, transformative essays and philosophical fiction with humor, “The Banquet of the Ego” is for those ready to look their character in the face and, at last, stop worshipping it. Because sometimes awakening does not arrive in silence… but in laughter.",
      ],
    },
    excerpt: {
      es: "«El ego nunca tiene suficiente; por eso siempre tiene hambre.»",
      en: "“The ego never has enough; that is why it is always hungry.”",
    },
    price: usd("17.36"),
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
    description: {
      es: [
        "La profunda fe que atraviesa este libro desde la primera hasta la última página conmueve sin dejar lugar a ninguna duda.",
        "Sin embargo, son justamente las dudas y los cuestionamientos los que hacen que el protagonista emprenda un profundo viaje introspectivo y autocrítico con el fin de «despertarse», acompañado de personajes que lo ayudan, lo provocan, lo interpelan, lo desafían en pos de que él consiga su objetivo, pleno de humanidad, compasión y respeto.",
        "Un mundo sin fronteras, un mundo más justo, un mundo donde todos sean iguales ante Dios.",
        "¿Cómo no acompañar semejante viaje? ¿Cómo no involucrarse en el despertar que nos propone el autor?",
      ],
      en: [
        "The deep faith running through this book from the first page to the last is moving beyond any doubt.",
        "And yet it is precisely doubt and questioning that send the protagonist on a searching, self-critical journey in order to “wake up,” accompanied by characters who help him, provoke him, challenge and confront him so that he reaches his goal — a journey full of humanity, compassion and respect.",
        "A world without borders, a fairer world, a world where all are equal before God.",
        "How could you not travel alongside it? How could you not take part in the awakening the author proposes?",
      ],
    },
    excerpt: {
      es: "«Soñar no es huir del mundo, es aprender a habitarlo.»",
      en: "“To dream is not to flee the world, but to learn to inhabit it.”",
    },
    price: usd("11.00"),
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
    description: {
      es: [
        "Una novela contemporánea sobre tres hombres rotos, el peso de la culpa y el poder incómodo del perdón.",
        "Marcial busca justicia. George busca consuelo. Peter intenta no romperse mientras hace reír a todos. Tres hombres, tres heridas y una misma certeza: se puede huir del dolor durante años, pero tarde o temprano la vida encuentra la forma de ponerte frente a ti mismo.",
        "Unidos por un fuego que no pidieron, descubrirán que el perdón no es una palabra fácil ni una salida cómoda. Es una grieta. Una batalla íntima. Una luz brutal que obliga a mirar de frente la culpa, la rabia, el miedo y todas esas historias que nos contamos para no despertar.",
        "Tres vidas marcadas por el silencio. Una herida que respira bajo la piel. Un viaje hacia la redención, la risa y la verdad.",
        "«El hombre que no sabía… que perdonaba» no habla de héroes, sino de seres humanos que no sabían amarse sin defensa, quedarse cuando dolía ni detenerse antes de destruir lo que más querían.",
        "Una novela intensa, emocional y luminosa para lectores que buscan historias sobre culpa, perdón, redención, vínculos humanos y segundas oportunidades. Porque el dolor no siempre es lo que nos rompe: a veces, lo que nos destruye es seguir huyendo de nosotros mismos.",
      ],
      en: [
        "A contemporary novel about three broken men, the weight of guilt, and the uncomfortable power of forgiveness.",
        "Marcial wants justice. George wants comfort. Peter tries not to fall apart while making everyone laugh. Three men, three wounds and one shared certainty: you can run from pain for years, but sooner or later life finds a way to put you face to face with yourself.",
        "Bound together by a fire they never asked for, they discover that forgiveness is no easy word and no comfortable way out. It is a fracture. An intimate battle. A brutal light that forces you to look straight at guilt, rage, fear and all the stories we tell ourselves in order not to wake up.",
        "Three lives marked by silence. A wound breathing beneath the skin. A journey toward redemption, laughter and truth.",
        "“The Man Who Didn't Know… He Forgave” is not about heroes, but about human beings who did not know how to love without their defenses, how to stay when it hurt, or how to stop before destroying what they loved most.",
        "An intense, emotional, luminous novel for readers drawn to stories of guilt, forgiveness, redemption, human bonds and second chances. Because pain is not always what breaks us: sometimes what destroys us is running from ourselves.",
      ],
    },
    excerpt: {
      es: "«Perdonó tanto tiempo sin saberlo que olvidó cómo guardar rencor.»",
      en: "“He forgave so long without knowing it that he forgot how to hold a grudge.”",
    },
    price: usd("14.84"),
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
    description: {
      es: [
        "Transmitir el mensaje a través de la puerta no es tarea sencilla: que condenados por los peores crímenes acepten escuchar lo que el Señor del universo tiene para decir, a través de las palabras de Marcial, no es fácil, y tomará semanas lograrlo.",
        "En esta obra nos encontramos con personajes con historias cargadas de realidades. Abrirán sus corazones, contarán por qué hicieron lo que hicieron; podemos encontrarnos con almas capaces de aceptar el perdón y de compartirlo con sus vecinos de piso.",
      ],
      en: [
        "Carrying the message through the door is no simple task: getting men condemned for the worst crimes to agree to hear what the Lord of the universe has to say, through Marcial's words, is not easy, and it will take weeks.",
        "In this book we meet characters whose stories are loaded with reality. They open their hearts and tell why they did what they did; we find souls capable of accepting forgiveness — and of sharing it with the neighbors on their cell block.",
      ],
    },
    excerpt: {
      es: "«Algunas puertas solo se abren desde dentro.»",
      en: "“Some doors only open from the inside.”",
    },
    price: usd("14.00"),
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
    description: {
      es: [
        "Un manifiesto de despertar espiritual que desarma el ego a través de la risa y la conciencia.",
        "Durante años te enseñaron que despertar requería esfuerzo, disciplina y convertirse en alguien mejor. Así comenzaste a actuar: éxito, fortaleza, profundidad, espiritualidad. Y sin darte cuenta, te agotaste sosteniendo un personaje. En «La Revolución de la Risa», Marcial propone una mirada directa y sin concesiones al ego inteligente, al ego espiritual y al ego exitoso, revelando cómo el drama humano se sostiene por una simple pero poderosa ilusión: la identificación.",
        "Este no es un libro de autoayuda. No hay métodos ni promesas. Hay algo más incómodo… y más liberador. Una invitación a ver con claridad. Y cuando ves de verdad, sucede algo inesperado: ríes. No por evasión, sino por comprensión. Una risa que desinfla el orgullo, rompe la tensión interna y expone que el personaje nunca fuiste tú.",
        "• Una confrontación honesta con el ego.",
        "• Una nueva forma de entender el despertar.",
        "• Una invitación a soltar el peso de ser «alguien».",
        "Ideal para lectores de espiritualidad contemporánea, conciencia plena y desarrollo interior profundo, este libro es para quienes están listos para dejar de buscar y empezar a ver. Porque la verdadera revolución no ocurre fuera… sino cuando te atreves a reír en medio del drama humano.",
      ],
      en: [
        "A manifesto of spiritual awakening that disarms the ego through laughter and awareness.",
        "For years you were taught that waking up took effort, discipline and becoming someone better. So you started performing: success, strength, depth, spirituality. And without noticing, you exhausted yourself holding up a character. In “The Revolution of Laughter,” Marcial takes a direct, unsparing look at the clever ego, the spiritual ego and the successful ego, revealing how the human drama is held up by one simple, powerful illusion: identification.",
        "This is not a self-help book. There are no methods and no promises. There is something more uncomfortable… and more liberating. An invitation to see clearly. And when you truly see, something unexpected happens: you laugh. Not to escape, but because you understand. A laugh that deflates pride, breaks the inner tension, and exposes that the character was never you.",
        "• An honest confrontation with the ego.",
        "• A new way of understanding awakening.",
        "• An invitation to put down the weight of being “someone.”",
        "For readers of contemporary spirituality, mindfulness and deep inner work, this book is for those ready to stop searching and start seeing. Because the real revolution does not happen outside… but when you dare to laugh in the middle of the human drama.",
      ],
    },
    excerpt: {
      es: "«Quien ríe de verdad ya no le teme a nadie.»",
      en: "“Whoever truly laughs no longer fears anyone.”",
    },
    price: usd("13.72"),
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
    description: {
      es: [
        "Una novela impactante sobre la libertad interior y las cárceles invisibles.",
        "Hay cárceles hechas de muros… y otras construidas con culpa, miedo, deseo o silencio. En esta historia intensa y conmovedora, ambas conviven y se enfrentan en un escenario tan real como simbólico: un pabellón donde los días pesan, los secretos arden, y cada alma lucha por respirar.",
        "En medio del encierro físico, un grupo de hombres comienza a atravesar otro tipo de prisión: la que vive en la mente y en el alma. Lo que parece un relato carcelario se transforma en una profunda exploración sobre el perdón, la conciencia y la posibilidad —real y cruda— de sanar desde dentro.",
        "• Una historia que duele… y alivia.",
        "• Personajes que se desnudan hasta llegar a lo esencial.",
        "• Reflexiones que abren puertas donde solo veías muros.",
        "Ideal para lectores de novelas humanas, transformadoras y con profundidad emocional, «Prisioneros De...mentes» no es solo una historia que se lee, es una experiencia que se siente. Si buscas un libro que te rete, te conmueva y te deje pensando mucho después de la última página… esta es tu próxima lectura.",
      ],
      en: [
        "A striking novel about inner freedom and invisible prisons.",
        "There are prisons made of walls… and others built from guilt, fear, desire or silence. In this intense, moving story the two live side by side and collide in a setting as real as it is symbolic: a cell block where the days weigh, the secrets burn, and every soul fights to breathe.",
        "Inside the physical confinement, a group of men begins to cross another kind of prison: the one that lives in the mind and in the soul. What looks like a prison story becomes a deep exploration of forgiveness, awareness, and the real, raw possibility of healing from within.",
        "• A story that hurts… and relieves.",
        "• Characters who strip themselves down to what is essential.",
        "• Reflections that open doors where you saw only walls.",
        "For readers of human, transformative novels with emotional depth, “Prisoners of the Mind” is not only a story you read, it is an experience you feel. If you want a book that challenges you, moves you and leaves you thinking long after the last page… this is your next read.",
      ],
    },
    excerpt: {
      es: "«Nadie está tan preso como el que cree que es libre.»",
      en: "“No one is as imprisoned as the one who believes he is free.”",
    },
    price: usd("17.31"),
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
    description: {
      es: [
        "Marcial es condenado a la pena de muerte por un asesinato múltiple, agravado por canibalismo, al comerse parte del rostro y del pecho de una de sus víctimas.",
        "Su estado de inconsciencia, producido por la ingesta de una droga, es el detonante que evidencia la diferencia entre la inconsciencia normal en que vive la mayoría de la humanidad y la inconsciencia por el efecto de drogas que potencializan a la bestia en que se convierte la persona, cuando su alma se olvida definitivamente de lo que es, para caer en los engaños del ego, como ocurre en casi toda la vida de las personas, que les lleva a buscar la felicidad en lo que se obtiene o en lo que se hace.",
        "El hombre es un ser espiritual, dotado de alma y cuerpo. Cuando el alma permanece inmóvil, se deteriora; como el agua que, siendo un símbolo de pureza y una fuente de vida, estancada se pudre y se convierte en una fuente de contagio y muerte; el alma que no escoge al espíritu en el interior de cada uno en que vive va directo a la muerte, arrastrando a todo lo que encuentra a su paso, incluyendo a los seres que dice amar.",
        "Sin embargo, siempre hay esperanza, y esto es lo que ocurre con Marcial, que camina a la muerte, pero que al final logra enrumbarse por el Camino a la Verdad.",
      ],
      en: [
        "Marcial is sentenced to death for a multiple murder, aggravated by cannibalism, having eaten part of the face and chest of one of his victims.",
        "His unconscious state, brought on by taking a drug, is the trigger that reveals the difference between the ordinary unconsciousness most of humanity lives in and the unconsciousness caused by drugs that amplify the beast a person becomes when the soul forgets for good what it is, falling into the deceptions of the ego — as happens across almost all of people's lives, leading them to look for happiness in what they get or in what they do.",
        "Man is a spiritual being, endowed with soul and body. When the soul stays motionless, it decays; like water, a symbol of purity and a source of life, which turns foul when stagnant and becomes a source of contagion and death. The soul that does not choose the spirit living within it walks straight toward death, dragging along everything in its path, including the people it claims to love.",
        "And yet there is always hope, and that is what happens to Marcial, who walks toward death but in the end finds his way onto the Road to Truth.",
      ],
    },
    excerpt: {
      es: "«Me dieron la libertad como quien dicta una condena.»",
      en: "“They gave me freedom the way one hands down a sentence.”",
    },
    price: usd("59.52"),
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
