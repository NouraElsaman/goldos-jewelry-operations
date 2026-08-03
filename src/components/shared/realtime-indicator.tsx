import { cn } from "@/lib/utils";

/**
 * Pulsing "live" indicator dot for realtime data surfaces.
 * Use alongside gold prices, activity feeds, or any WebSocket-backed widget.
 * When `active` is false it renders as a static muted dot (paused / offline).
 */
export function RealtimeIndicator({
  active = true,
  label,
  className,
}: {
  active?: boolean | undefined;
  /** Optional accessible label text rendered next to the dot. */
  label?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      aria-label={active ? "Live data" : "Paused"}
    >
      <span className="relative flex size-2">
        {active ? (
          <>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-success shadow-[0_0_6px_0_oklch(0.55_0.13_148/0.5)]" />
          </>
        ) : (
          <span className="inline-flex size-2 rounded-full bg-muted-foreground/60" />
        )}
      </span>
      {label ? (
        <span className="text-xs font-semibold text-muted-foreground">
          {label}
        </span>
      ) : null}
    </span>
  );
}
