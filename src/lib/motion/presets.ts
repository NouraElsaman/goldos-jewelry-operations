/**
 * Shared motion system. All animations reference these presets so the whole
 * product moves with one personality: subtle, fast, purposeful.
 */
import type { Transition, Variants } from "motion/react";

export const duration = {
  fast: 0.12,
  base: 0.18,
  slow: 0.26,
} as const;

export const easing = [0.22, 1, 0.36, 1] as const;

export const transition: Record<
  "fast" | "base" | "slow" | "spring",
  Transition
> = {
  fast: { duration: duration.fast, ease: easing },
  base: { duration: duration.base, ease: easing },
  slow: { duration: duration.slow, ease: easing },
  spring: { type: "spring", stiffness: 380, damping: 32, mass: 0.7 },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.base },
  exit: { opacity: 0, transition: transition.fast },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: transition.slow },
  exit: { opacity: 0, y: -6, transition: transition.fast },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: transition.spring },
  exit: { opacity: 0, scale: 0.98, transition: transition.fast },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: transition.slow },
  exit: { opacity: 0, x: -8, transition: transition.fast },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...transition.slow, staggerChildren: 0.035 },
  },
  exit: { opacity: 0, y: -4, transition: transition.fast },
};

export const staggerList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
};

/** Hover treatment for interactive cards. */
export const cardHover = {
  whileHover: { y: -2, transition: transition.fast },
  whileTap: { y: 0, scale: 0.995, transition: transition.fast },
} as const;
