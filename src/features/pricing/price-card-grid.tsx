import { motion } from "motion/react";
import { Coins } from "lucide-react";

import {
  PriceChangeIndicator,
  PriceSourceBadge,
  RealtimeIndicator,
} from "@/components/shared";
import {
  formatChangePct,
  getPriceDirection,
} from "@/features/pricing/pricing-engine";
import type { GoldPrice } from "@/types/domain";
import type { Locale } from "@/lib/i18n";
import { formatMoney, formatDate } from "@/lib/format";
import { cardHover } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Individual karat price card.
 * Full-detail: current rate, day change, source badge, last-update label.
 * Prepared for realtime: pass `isLive` when WebSocket is active.
 */
function PriceCard({
  price,
  locale,
  isLive = false,
}: {
  price: GoldPrice;
  locale: Locale;
  isLive?: boolean;
}) {
  const direction = getPriceDirection(price.changePct);
  const changePctStr = formatChangePct(price.changePct);

  return (
    <motion.article
      {...cardHover}
      className={cn(
        "group flex flex-col justify-between gap-4 rounded-2xl border border-border bg-surface p-5.5 shadow-soft transition-all duration-200 hover:border-border-strong hover:shadow-raised",
        direction === "up" && "hover:border-success/30",
        direction === "down" && "hover:border-destructive/30",
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft/80 text-gold-deep shadow-hairline">
            <Coins className="size-5" aria-hidden />
          </span>
          <div>
            <p className="text-base font-bold tracking-tight text-foreground">
              عيار {price.karat}
            </p>
            <p className="text-xs font-semibold text-muted-foreground/80">
              {price.karat}K
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {price.source ? (
            <PriceSourceBadge source={price.source} locale={locale} />
          ) : null}
          <RealtimeIndicator active={isLive} />
        </div>
      </div>

      {/* Rate */}
      <div>
        <p
          data-numeric
          className="text-2xl font-bold tracking-tight text-foreground sm:text-[1.65rem] leading-none"
        >
          {formatMoney(price.rate, locale)}
        </p>
        <p className="mt-1 text-xs text-muted-foreground/80">
          {locale === "ar" ? "لكل جرام" : "per gram"}
        </p>
      </div>

      {/* Change */}
      <div className="flex items-center justify-between border-t border-border/60 pt-3">
        <PriceChangeIndicator changePct={changePctStr} direction={direction} />
        <time className="text-xs text-muted-foreground/80">
          {formatDate(price.date, locale)}
        </time>
      </div>
    </motion.article>
  );
}

/**
 * Gold price card grid — 5 karats in a responsive grid.
 * Pure presentation: receives today's prices from the route.
 */
export function PriceCardGrid({
  prices,
  isLoading,
  isLive = false,
  locale,
}: {
  prices: GoldPrice[];
  isLoading: boolean;
  isLive?: boolean;
  locale: Locale;
}) {
  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5.5 shadow-soft"
          >
            <div className="flex items-start justify-between">
              <Skeleton className="size-10 rounded-xl" />
              <Skeleton className="h-5 w-14 rounded-full" />
            </div>
            <Skeleton className="h-8 w-32 rounded-xl" />
            <Skeleton className="h-4 w-20 rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {prices.map((price) => (
        <PriceCard
          key={price.karat}
          price={price}
          locale={locale}
          isLive={isLive}
        />
      ))}
    </div>
  );
}
