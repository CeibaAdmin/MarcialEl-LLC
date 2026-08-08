"use client";

import { motion } from "framer-motion";

/**
 * Subtle cinematic page transition. A `template` re-mounts on every navigation,
 * so this animates each new route in. Reduced-motion users get an instant show.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
