import { Coins, TrendingDown, TrendingUp, Minus } from "lucide-react";

import { RealtimeIndicator, SectionCard } from "@/components/shared";
import type { GoldPrice } from "@/types/domain";
import type { Locale, TranslationKey } from "@/lib/i18n";
import { formatMoney, formatTime } from "@/lib/format";
import { cn } from "@/lib/utils";

function PriceRow({ price, locale }: { price: GoldPrice; locale: Locale }) {
  const change = price.changePct ?? 0;
  const TrendIcon = change > 0 ? TrendingUp : change < 0 ? TrendingDown : Minus;
  const trendColor =
    change > 0
      ? "text-success"
      : change < 0
        ? "text-destructive"
        : "text-muted-foreground";

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-muted/40 px-4 py-3.5 transition-colors hover:bg-accent/40">
      {/* Karat badge */}
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft text-gold-deep">
          <Coins className="size-4" aria-hidden />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">
            عيار {price.karat}
          </p>
          <p className="text-xs text-muted-foreground">{price.karat}K</p>
        </div>
      </div>

      {/* Price + trend */}
      <div className="flex items-center gap-3">
        <p
          data-numeric
          className="text-base font-semibold tracking-tight text-foreground"
        >
          {formatMoney(price.rate, locale)}
        </p>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
            change > 0 && "bg-success/10 text-success",
            change < 0 && "bg-destructive/10 text-destructive",
            change === 0 && "bg-muted text-muted-foreground",
          )}
        >
          <TrendIcon className="size-3" aria-hidden />
          {change > 0 ? "+" : ""}
          {change.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}

/**
 * Gold price panel — displays today's rate for each karat with trend.
 * Designed for realtime updates: pass `isLive=true` when WebSocket is active.
 * No fetching: parent supplies `prices`.
 */
export function GoldPricePanel({
  prices,
  isLoading,
  isLive = false,
  lastUpdated,
  title,
  description,
  locale,
}: {
  prices: GoldPrice[];
  isLoading: boolean;
  isLive?: boolean | undefined;
  lastUpdated?: string | undefined;
  title: string;
  description?: string | undefined;
  locale: Locale;
}) {
  const lastUpdateFormatted = lastUpdated
    ? formatTime(lastUpdated, locale)
    : null;

  return (
    <SectionCard
      title={title}
      description={description}
      actions={
        <div className="flex items-center gap-3">
          {lastUpdateFormatted ? (
            <span className="text-xs text-muted-foreground">
              {lastUpdateFormatted}
            </span>
          ) : null}
          <RealtimeIndicator active={isLive} />
        </div>
      }
    >
      {isLoading ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-16 animate-pulse rounded-xl bg-surface-muted"
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {prices.map((price) => (
            <PriceRow key={price.karat} price={price} locale={locale} />
          ))}
        </div>
      )}
    </SectionCard>
  );
}
