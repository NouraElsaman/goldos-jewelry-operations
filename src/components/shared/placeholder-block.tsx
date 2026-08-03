import { Construction } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Marks a scaffolded region that will be replaced by real functionality
 * during feature implementation.
 */
export function PlaceholderBlock({
  label,
  height = 200,
  className,
}: {
  label?: string | undefined;
  height?: number | undefined;
  className?: string | undefined;
}) {
  const { t } = useI18n();
  return (
    <div
      style={{ minHeight: height }}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border-strong/60 bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,var(--surface-muted)_10px,var(--surface-muted)_20px)] px-6 py-8 text-center",
        className,
      )}
    >
      <Construction className="size-4 text-muted-foreground" aria-hidden />
      <p className="text-sm font-medium text-foreground">
        {label ?? t("common.comingSoon")}
      </p>
      <p className="max-w-sm text-xs text-muted-foreground">
        {t("common.placeholderNote")}
      </p>
    </div>
  );
}
