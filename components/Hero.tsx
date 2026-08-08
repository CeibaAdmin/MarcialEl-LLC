"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type Variants,
} from "framer-motion";
import Book3D from "./Book3D";
import MagneticButton from "./MagneticButton";
import Container from "./Container";
import type { Book } from "@/data/books";
import { useLang } from "@/lib/i18n";

const easing = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easing } },
};

export default function Hero({ book }: { book: Book }) {
  const { t } = useLang();
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(199,154,84,0.12), transparent 70%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[36rem] w-[36rem] rounded-full bg-burgundy/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-ember/10 blur-[100px]" />
      </div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />

      <Container className="relative grid gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow">
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 font-serif text-6xl font-semibold leading-[0.98] text-bone text-balance sm:text-7xl lg:text-[5.5rem]"
          >
            {t.hero.lead}{" "}
            <span className="text-shimmer">{t.hero.accent}</span>{" "}
            {t.hero.tail}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-7 max-w-md text-lg leading-relaxed text-bone-soft/80"
          >
            {t.hero.sub}
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="/books" variant="gold">
              {t.cta.browse}
            </MagneticButton>
            <MagneticButton href="/about" variant="ghost">
              {t.cta.meet}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: easing, delay: 0.3 }}
          className="mx-auto w-[62%] max-w-[300px] sm:w-[52%] lg:w-full"
        >
          <Book3D book={book} float maxTilt={20} />
        </motion.div>
      </Container>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-bone-soft/30 p-1.5">
          <div className="h-2 w-1 animate-float rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}
