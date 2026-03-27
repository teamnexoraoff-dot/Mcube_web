import { motion } from "framer-motion";
import { ReactNode } from "react";

export type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  direction?: "up" | "down" | "left" | "right" | "none"; // Kept for backwards compatibility
}

export function Reveal({ children, delay = 0, className = "", variant = "fade-up", direction }: RevealProps) {
  
  // Backwards compatibility for direction prop
  let activeVariant = variant;
  if (direction) {
    if (direction === "left") activeVariant = "fade-left";
    if (direction === "right") activeVariant = "fade-right";
    if (direction === "down") activeVariant = "fade-up"; 
  }

  const variants = {
    "fade-up": {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 }
    },
    "fade-left": {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 }
    },
    "fade-right": {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 }
    },
    "scale": {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 }
    },
    "fade": {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    }
  };

  return (
    <motion.div
      initial={variants[activeVariant].initial}
      whileInView={variants[activeVariant].animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // OutExpo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
