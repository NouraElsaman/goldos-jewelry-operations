import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Info, XCircle, Zap } from "lucide-react";
import { motion } from "motion/react";

import { cardHover } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { AlertSeverity } from "@/services/contracts";

const severityConfig: Record<
  AlertSeverity,
  { icon: ReactNode; ring: string; badge: string; text: string }
> = {
  info: {
    icon: <Info className="size-4" aria-hidden />,
    ring: "border-info/25 bg-info/5",
    badge: "bg-info/10 text-info font-semibold",
    text: "text-info",
  },
  success: {
    icon: <CheckCircle2 className="size-4" aria-hidden />,
    ring: "border-success/25 bg-success/5",
    badge: "bg-success/10 text-success font-semibold",
    text: "text-success",
  },
  warning: {
    icon: <AlertTriangle className="size-4" aria-hidden />,
    ring: "border-warning/30 bg-warning/8",
    badge: "bg-warning/15 text-gold-foreground font-semibold",
    text: "text-warning-foreground",
  },
  error: {
    icon: <XCircle className="size-4" aria-hidden />,
    ring: "border-destructive/25 bg-destructive/5",
    badge: "bg-destructive/10 text-destructive font-semibold",
    text: "text-destructive",
  },
  critical: {
    icon: <Zap className="size-4" aria-hidden />,
    ring: "border-destructive/50 bg-destructive/10 shadow-soft",
    badge: "bg-destructive text-destructive-foreground font-semibold",
    text: "text-destructive",
  },
};

/**
 * Severity-aware alert card.
 * Supports all five severity levels: info, success, warning, error, critical.
 * Reusable across dashboard, inventory alerts, AI detection events, and system notices.
 */
export function AlertCard({
  severity,
  title,
  description,
  time,
  actionLabel,
  onAction,
  className,
}: {
  severity: AlertSeverity;
  title: string;
  description?: string | undefined;
  /** Pre-formatted time string */
  time?: string | undefined;
  actionLabel?: string | undefined;
  onAction?: (() => void) | undefined;
  className?: string | undefined;
}) {
  const config = severityConfig[severity];

  return (
    <motion.div
      {...cardHover}
      role="alert"
      className={cn(
        "flex gap-3.5 rounded-2xl border p-4.5 shadow-hairline transition-shadow hover:shadow-soft",
        config.ring,
        className,
      )}
    >
      {/* Icon */}
      <span className={cn("mt-0.5 shrink-0", config.text)}>{config.icon}</span>

      {/* Content */}
      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          {time ? (
            <time className="shrink-0 text-xs text-muted-foreground/80">
              {time}
            </time>
          ) : null}
        </div>
        {description ? (
          <p className="text-xs text-muted-foreground/90 leading-relaxed">
            {description}
          </p>
        ) : null}
        {actionLabel && onAction ? (
          <button
            onClick={onAction}
            className={cn(
              "mt-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all hover:opacity-85 active:scale-95",
              config.badge,
            )}
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </motion.div>
  );
}
