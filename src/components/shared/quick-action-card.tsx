import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { cardHover } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Tappable action card that either navigates to a route or fires a callback.
 * Used in quick-action grids, command panels, and onboarding checklists.
 */
export function QuickActionCard({
  icon: Icon,
  label,
  description,
  to,
  onClick,
  disabled = false,
  className,
}: {
  icon: LucideIcon;
  label: string;
  description?: string | undefined;
  /** Route path — when provided, card renders as a <Link>. */
  to?: string | undefined;
  /** Callback — used when the action doesn't navigate (e.g. opens a modal). */
  onClick?: (() => void) | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
}) {
  const inner = (
    <span className="flex flex-col gap-3">
      <span
        className={cn(
          "flex size-10 items-center justify-center rounded-xl border border-border/80 bg-surface-muted/80 text-gold-deep transition-all duration-200 group-hover:border-gold/40 group-hover:bg-gold-soft/80 group-hover:scale-[1.03]",
        )}
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="space-y-0.5">
        <span className="block text-sm font-semibold text-foreground group-hover:text-gold-deep transition-colors">
          {label}
        </span>
        {description ? (
          <span className="block text-xs text-muted-foreground/80">
            {description}
          </span>
        ) : null}
      </span>
    </span>
  );

  const baseClass = cn(
    "group relative flex flex-col rounded-2xl border border-border bg-surface p-5 text-start shadow-soft transition-all duration-200 hover:border-gold/30 hover:shadow-raised",
    disabled && "pointer-events-none opacity-50",
    className,
  );

  if (to) {
    return (
      <motion.div {...cardHover} className={baseClass}>
        <Link
          to={to as never}
          className="absolute inset-0 rounded-2xl"
          aria-label={label}
        />
        {inner}
      </motion.div>
    );
  }

  return (
    <motion.button {...cardHover} onClick={onClick} className={baseClass}>
      {inner}
    </motion.button>
  );
}
