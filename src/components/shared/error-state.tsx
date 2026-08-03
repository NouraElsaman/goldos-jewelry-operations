import { AlertTriangle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Standard error surface for failed loaders and queries. */
export function ErrorState({
  title,
  description,
  onRetry,
  className,
}: {
  title?: string | undefined;
  description?: string | undefined;
  onRetry?: (() => void) | undefined;
  className?: string | undefined;
}) {
  const { t } = useI18n();
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center gap-3.5 rounded-2xl border border-destructive/25 bg-destructive/5 px-6 py-12 text-center shadow-soft",
        className,
      )}
    >
      <span className="flex size-12 items-center justify-center rounded-2xl border border-destructive/20 bg-surface text-destructive shadow-hairline">
        <AlertTriangle className="size-5.5" aria-hidden />
      </span>
      <div className="space-y-1">
        <p className="text-base font-semibold tracking-tight text-foreground">
          {title ?? t("common.error")}
        </p>
        <p className="mx-auto max-w-sm text-xs text-muted-foreground/80 leading-relaxed">
          {description ?? t("common.errorBody")}
        </p>
      </div>
      {onRetry ? (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="mt-2.5 h-9 rounded-xl px-4 text-xs font-semibold"
        >
          <RotateCcw className="size-3.5" aria-hidden />
          {t("common.retry")}
        </Button>
      ) : null}
    </div>
  );
}
