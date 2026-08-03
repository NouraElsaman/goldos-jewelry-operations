import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Elevated content container used for every page section. */
export function SectionCard({
  title,
  description,
  actions,
  footer,
  children,
  padded = true,
  className,
  contentClassName,
}: {
  title?: ReactNode | undefined;
  description?: ReactNode | undefined;
  actions?: ReactNode | undefined;
  footer?: ReactNode | undefined;
  children?: ReactNode | undefined;
  padded?: boolean | undefined;
  className?: string | undefined;
  contentClassName?: string | undefined;
}) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-200 hover:shadow-raised/50",
        className,
      )}
    >
      {title || actions ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 px-6 py-4.5">
          <div className="space-y-0.5">
            {title ? (
              <h2 className="text-base font-semibold tracking-tight text-foreground">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="text-xs text-muted-foreground/80">{description}</p>
            ) : null}
          </div>
          {actions ? (
            <div className="flex items-center gap-2">{actions}</div>
          ) : null}
        </div>
      ) : null}
      <div className={cn(padded && "p-6", contentClassName)}>{children}</div>
      {footer ? (
        <div className="border-t border-border/60 bg-surface-muted/50 px-6 py-3.5 text-xs text-muted-foreground">
          {footer}
        </div>
      ) : null}
    </section>
  );
}
