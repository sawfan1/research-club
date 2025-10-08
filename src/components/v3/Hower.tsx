"use client"

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Readex_Pro } from "next/font/google";

const readex_pro = Readex_Pro({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Hower = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "outline-1 outline-black my-6 group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
        className,
        readex_pro.className
      )}
      {...props}
      onClick={() => window.open("https://docs.google.com/forms/d/12Dn_g5E5VYWW8QnKYL5X_AJgrzxLPxzjKloz7oU1xMQ", "_blank")}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

Hower.displayName = "InteractiveHoverButton";
