import { cn } from "@/lib/utils";
import type { PriceSource } from "@/types/domain";

const sourceConfig: Record<
  PriceSource,
  { label: string; labelAr: string; className: string }
> = {
  manual: {
    label: "Manual",
    labelAr: "يدوي",
    className: "border-info/25 bg-info/10 text-info font-semibold",
  },
  admin_override: {
    label: "Admin",
    labelAr: "مدير",
    className: "border-gold/35 bg-gold-soft/80 text-gold-deep font-semibold",
  },
  mock: {
    label: "Mock",
    labelAr: "تجريبي",
    className:
      "border-border/80 bg-surface-muted/90 text-muted-foreground font-semibold",
  },
  external_api: {
    label: "API",
    labelAr: "API",
    className: "border-success/25 bg-success/10 text-success font-semibold",
  },
};

/**
 * Compact pill badge indicating the origin of a gold price.
 * Business-agnostic: works for any entity with a PriceSource.
 */
export function PriceSourceBadge({
  source,
  locale = "ar",
  className,
}: {
  source: PriceSource;
  locale?: "ar" | "en";
  className?: string;
}) {
  const config = sourceConfig[source];
  const label = locale === "ar" ? config.labelAr : config.label;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap",
        config.className,
        className,
      )}
    >
      {label}
    </span>
  );
}
