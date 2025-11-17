"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

export function Dialog({ children }: { children: React.ReactNode }) {
  return <DialogPrimitive.Root>{children}</DialogPrimitive.Root>;
}

export function DialogTrigger({
  children,
  ...props
}: DialogPrimitive.DialogTriggerProps) {
  return (
    <DialogPrimitive.Trigger asChild {...props}>
      {children}
    </DialogPrimitive.Trigger>
  );
}

export function DialogContent({
  children,
  className,
  ...props
}: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      {/* Overlay */}
      <DialogPrimitive.Overlay
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm",
          "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
        )}
      />

      {/* Content */}
      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "rounded-xl p-6 shadow-xl w-[90%] max-w-md",
          "bg-[var(--color-bg)] text-[var(--color-text)]",
          "transition-all border border-[var(--color-primary)]/20",

          // Animations
          "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut",
          className
        )}
        {...props}
      >
        {children}

        <DialogPrimitive.Close className="absolute right-4 top-4 text-[var(--color-text)] hover:opacity-70 transition">
          <X className="w-5 h-5" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogTitle({
  className,
  ...props
}: DialogPrimitive.DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      className={cn("text-xl font-bold", className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: DialogPrimitive.DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm opacity-80 mt-2", className)}
      {...props}
    />
  );
}
