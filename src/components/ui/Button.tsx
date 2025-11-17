import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/cn";

type Variant = "solid" | "soft" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  solid: "bg-[var(--color-primary)] text-[var(--color-text)]",
  soft: "bg-[var(--color-primary)]/20 text-[var(--color-primary)]",
  outline:
    "border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent",
  ghost:
    "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-md",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant = "solid", size = "md", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md",
          // variant styles
          variantClasses[variant],
          // size styles
          sizeClasses[size],
          // interactive states
          "hover:opacity-90 active:scale-[0.97] transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
