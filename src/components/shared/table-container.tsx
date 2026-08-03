import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Frames a table with an optional toolbar and footer, no rounded-corner bleed. */
export function TableContainer({
  toolbar,
  footer,
  children,
  className,
}: {
  toolbar?: ReactNode | undefined;
  footer?: ReactNode | undefined;
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-surface shadow-soft",
        className,
      )}
    >
      {toolbar ? (
        <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3">
          {toolbar}
        </div>
      ) : null}
      {children}
      {footer ? (
        <div className="border-t border-border px-4 py-3">{footer}</div>
      ) : null}
    </div>
  );
}
