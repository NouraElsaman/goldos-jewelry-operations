import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-colors",
  {
    variants: {
      tone: {
        neutral: "border-border/80 bg-surface-muted/90 text-muted-foreground",
        gold: "border-gold/35 bg-gold-soft/80 text-gold-deep font-semibold",
        success: "border-success/25 bg-success/10 text-success font-semibold",
        warning:
          "border-warning/30 bg-warning/15 text-warning-foreground font-semibold",
        danger:
          "border-destructive/25 bg-destructive/10 text-destructive font-semibold",
        info: "border-info/25 bg-info/10 text-info font-semibold",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export type StatusTone = NonNullable<
  VariantProps<typeof statusBadgeVariants>["tone"]
>;

export function StatusBadge({
  children,
  tone,
  dot = true,
  className,
}: {
  children: ReactNode;
  tone?: StatusTone | undefined;
  dot?: boolean | undefined;
  className?: string | undefined;
}) {
  return (
    <span className={cn(statusBadgeVariants({ tone }), className)}>
      {dot ? (
        <span
          className="size-1.5 rounded-full bg-current opacity-80"
          aria-hidden
        />
      ) : null}
      {children}
    </span>
  );
}

export { statusBadgeVariants };
