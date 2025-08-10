import * as React from "react";
import { cn } from "@/lib/utils";

export interface NeobrutalistButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const NeobrutalistButton = React.forwardRef<
  HTMLButtonElement,
  NeobrutalistButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-none",
        "border-2 border-black bg-blue-700 px-6 py-3 text-base font-bold text-white",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 ease-in-out",
        "hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        "active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
NeobrutalistButton.displayName = "NeobrutalistButton";

export { NeobrutalistButton };
