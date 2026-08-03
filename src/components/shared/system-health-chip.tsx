import { cn } from "@/lib/utils";

export type HealthStatus = "online" | "offline" | "degraded" | "unknown";

const statusStyles: Record<HealthStatus, string> = {
  online: "bg-success shadow-[0_0_8px_0_oklch(0.55_0.13_148/0.4)]",
  offline: "bg-destructive shadow-[0_0_8px_0_oklch(0.56_0.16_26/0.4)]",
  degraded: "bg-warning shadow-[0_0_8px_0_oklch(0.72_0.13_72/0.4)]",
  unknown: "bg-muted-foreground/60",
};

const statusLabels: Record<HealthStatus, string> = {
  online: "Online",
  offline: "Offline",
  degraded: "Degraded",
  unknown: "Unknown",
};

/**
 * Compact status dot + label chip for system health monitoring.
 * Accepts an optional translated label override for RTL support.
 * Reusable in system health panels, topbar status strips, and tooltips.
 */
export function SystemHealthChip({
  label,
  status,
  statusLabel,
  className,
}: {
  label: string;
  status: HealthStatus;
  /** Override the default English status label (for i18n). */
  statusLabel?: string | undefined;
  className?: string | undefined;
}) {
  const resolvedLabel = statusLabel ?? statusLabels[status];

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface px-4 py-3 shadow-hairline transition-all duration-150 hover:border-border-strong hover:shadow-soft",
        className,
      )}
    >
      <span className="text-sm font-medium text-foreground">{label}</span>
      <span className="flex items-center gap-2">
        <span
          className={cn(
            "size-2 rounded-full transition-all",
            statusStyles[status],
            status === "online" && "animate-pulse",
          )}
          aria-hidden
        />
        <span
          className={cn(
            "text-xs font-semibold",
            status === "online" && "text-success",
            status === "offline" && "text-destructive",
            status === "degraded" && "text-warning-foreground",
            status === "unknown" && "text-muted-foreground",
          )}
        >
          {resolvedLabel}
        </span>
      </span>
    </div>
  );
}
