export const GSAP_DEFAULTS = {
  duration: 0.8,
  ease: "power3.out",
} as const

export const FADE_UP = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  duration: 0.8,
} as const

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  duration: 0.6,
} as const

export const STAGGER = {
  default: 0.1,
  slow: 0.2,
  fast: 0.05,
} as const

export const SCROLL_TRIGGER_DEFAULTS = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
} as const