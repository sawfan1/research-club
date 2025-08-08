"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0.8, 0.2, 1] },
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`${className}`}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div variants={childVariants} key={i} className="w-full">
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={childVariants} className="w-full">
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
