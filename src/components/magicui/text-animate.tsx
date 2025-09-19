"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react";
import { ElementType, memo, useMemo } from "react";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateProps extends MotionProps {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: ElementType;
  by?: AnimationType;
  startOnView?: boolean;
  once?: boolean;
  animation?: AnimationVariant;
}

const STAGGER: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const QUICK_TRANSITION = { duration: 0.3 };

const defaultContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const defaultItem: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

// Animation presets
const animations: Record<
  AnimationVariant,
  { container: Variants; item: Variants }
> = {
  fadeIn: {
    container: defaultContainer,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: QUICK_TRANSITION },
      exit: { opacity: 0, y: 20, transition: QUICK_TRANSITION },
    },
  },
  blurIn: {
    container: defaultContainer,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: { opacity: 1, filter: "blur(0px)", transition: QUICK_TRANSITION },
      exit: { opacity: 0, filter: "blur(10px)", transition: QUICK_TRANSITION },
    },
  },
  blurInUp: {
    container: defaultContainer,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { y: QUICK_TRANSITION, opacity: { duration: 0.4 }, filter: QUICK_TRANSITION },
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
        transition: { y: QUICK_TRANSITION, opacity: { duration: 0.4 }, filter: QUICK_TRANSITION },
      },
    },
  },
  blurInDown: {
    container: defaultContainer,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { y: QUICK_TRANSITION, opacity: { duration: 0.4 }, filter: QUICK_TRANSITION },
      },
    },
  },
  slideUp: {
    container: defaultContainer,
    item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: QUICK_TRANSITION },
      exit: { y: -20, opacity: 0, transition: QUICK_TRANSITION },
    },
  },
  slideDown: {
    container: defaultContainer,
    item: {
      hidden: { y: -20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: QUICK_TRANSITION },
      exit: { y: 20, opacity: 0, transition: QUICK_TRANSITION },
    },
  },
  slideLeft: {
    container: defaultContainer,
    item: {
      hidden: { x: 20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: QUICK_TRANSITION },
      exit: { x: -20, opacity: 0, transition: QUICK_TRANSITION },
    },
  },
  slideRight: {
    container: defaultContainer,
    item: {
      hidden: { x: -20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: QUICK_TRANSITION },
      exit: { x: 20, opacity: 0, transition: QUICK_TRANSITION },
    },
  },
  scaleUp: {
    container: defaultContainer,
    item: {
      hidden: { scale: 0.5, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: { ...QUICK_TRANSITION, scale: { type: "spring", damping: 15, stiffness: 300 } },
      },
      exit: { scale: 0.5, opacity: 0, transition: QUICK_TRANSITION },
    },
  },
  scaleDown: {
    container: defaultContainer,
    item: {
      hidden: { scale: 1.5, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: { ...QUICK_TRANSITION, scale: { type: "spring", damping: 15, stiffness: 300 } },
      },
      exit: { scale: 1.5, opacity: 0, transition: QUICK_TRANSITION },
    },
  },
};

// Helper to resolve final variants
function resolveVariants({
  variants,
  animation,
  delay,
  duration,
  segmentCount,
}: {
  variants?: Variants;
  animation?: AnimationVariant;
  delay: number;
  duration: number;
  segmentCount: number;
}) {
  if (variants) {
    return {
      container: {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            opacity: { duration: 0.01, delay },
            delayChildren: delay,
            staggerChildren: duration / segmentCount,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: duration / segmentCount,
            staggerDirection: -1,
          },
        },
      },
      item: variants,
    };
  }
  if (animation) {
    return {
      container: {
        ...animations[animation].container,
        show: {
          ...animations[animation].container.show,
          transition: {
            delayChildren: delay,
            staggerChildren: duration / segmentCount,
          },
        },
        exit: {
          ...animations[animation].container.exit,
          transition: {
            staggerChildren: duration / segmentCount,
            staggerDirection: -1,
          },
        },
      },
      item: animations[animation].item,
    };
  }
  return { container: defaultContainer, item: defaultItem };
}

const TextAnimateBase = ({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = true,
  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateProps) => {
  const MotionComponent = motion.create(Component);

  // Memoized text splitting
  const segments = useMemo(() => {
    switch (by) {
      case "word":
        return children.split(/(\s+)/);
      case "character":
        return children.split("");
      case "line":
        return children.split("\n");
      case "text":
      default:
        return [children];
    }
  }, [children, by]);

  const finalVariants = resolveVariants({
    variants,
    animation,
    delay,
    duration,
    segmentCount: segments.length,
  });

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        viewport={{ once }}
        {...props}
      >
        {segments.map((segment, i) =>
          // Render spaces as plain text (no animation overhead)
          by === "word" && segment.trim() === "" ? (
            <span key={`space-${i}`}>{segment}</span>
          ) : (
            <motion.span
              key={`${by}-${segment}-${i}`}
              variants={finalVariants.item}
              custom={i * STAGGER[by]}
              className={cn(
                by === "line" ? "block" : "inline-block whitespace-pre",
                segmentClassName
              )}
            >
              {segment}
            </motion.span>
          )
        )}
      </MotionComponent>
    </AnimatePresence>
  );
};

export const TextAnimate = memo(TextAnimateBase);
