import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { cn } from "@/lib/utils";

/** Standard page header: breadcrumbs, title, description and actions. */
export function PageHeader({
  title,
  description,
  actions,
  trail,
  className,
}: {
  title: string;
  description?: string | undefined;
  actions?: ReactNode | undefined;
  trail?: Crumb[] | undefined;
  className?: string | undefined;
}) {
  return (
    <header className={cn("flex flex-col gap-3.5 pb-2", className)}>
      <Breadcrumbs trail={trail} />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-[1.85rem] leading-tight">
            {title}
          </h1>
          {description ? (
            <p className="max-w-3xl text-sm text-muted-foreground/90 leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? (
          <div className="flex shrink-0 flex-wrap items-center gap-2.5">
            {actions}
          </div>
        ) : null}
      </div>
    </header>
  );
}
