// Animation variants and easing functions
export const defaultEasing = [0.16, 1, 0.3, 1] as const

export const quickSpring = {
  type: "spring" as const,
  damping: 20,
  stiffness: 300,
}

export const defaultSpring = {
  type: "spring" as const,
  damping: 25,
  stiffness: 250,
}

// Stagger Container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
      ease: defaultEasing,
    },
  },
}

// Slide Up Animation
export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: defaultSpring,
  },
}

// Pop-in Animation
export const popIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: quickSpring,
  },
}

// Fade In Up
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: defaultEasing,
    },
  },
}
