import { SlidersHorizontal } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Sticky glassmorphic filter row used above tables and grids. */
export function FilterBar({
  children,
  onReset,
  className,
}: {
  children: ReactNode;
  onReset?: (() => void) | undefined;
  className?: string | undefined;
}) {
  const { t } = useI18n();
  return (
    <div
      className={cn(
        "sticky top-0 z-10 flex flex-wrap items-center gap-2.5 rounded-2xl border border-border/80 bg-surface/85 p-2.5 shadow-soft backdrop-blur-md supports-[backdrop-filter]:bg-surface/75",
        className,
      )}
    >
      <span className="flex items-center gap-2 px-2 text-xs font-semibold text-muted-foreground/80">
        <SlidersHorizontal className="size-3.5" aria-hidden />
        {t("common.filters")}
      </span>
      {children}
      {onReset ? (
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="ms-auto text-xs text-muted-foreground hover:text-foreground"
        >
          {t("common.reset")}
        </Button>
      ) : null}
    </div>
  );
}
