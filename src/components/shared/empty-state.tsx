import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Empty state with the primary action inside it. */
export function EmptyState({
  title,
  description,
  icon: Icon = Inbox,
  action,
  className,
}: {
  title: string;
  description?: string | undefined;
  icon?: LucideIcon | undefined;
  action?: ReactNode | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3.5 rounded-2xl border border-dashed border-border/80 bg-surface-muted/30 px-6 py-14 text-center",
        className,
      )}
    >
      <span className="flex size-12 items-center justify-center rounded-2xl border border-border/80 bg-surface text-gold-deep shadow-soft">
        <Icon className="size-5.5" aria-hidden />
      </span>
      <div className="space-y-1">
        <p className="text-base font-semibold tracking-tight text-foreground">
          {title}
        </p>
        {description ? (
          <p className="mx-auto max-w-sm text-xs text-muted-foreground/80 leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
