import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset[direction] }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children?: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function Parallax({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export function FloatingElement({
  children,
  className = "",
  duration = 4,
  distance = 15,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function ScaleOnHover({
  children,
  className = "",
  scale = 1.02,
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GlowPulseProps {
  children?: ReactNode;
  className?: string;
}

export function GlowPulse({ children, className = "" }: GlowPulseProps) {
  return (
    <motion.div
      animate={{
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
