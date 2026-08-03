import {
  Boxes,
  Coins,
  DollarSign,
  RefreshCw,
  Scale,
  ShoppingCart,
  Tag,
  TrendingUp,
} from "lucide-react";

import { ActivityTimeline, SectionCard } from "@/components/shared";
import type { ActivityItemData } from "@/components/shared";
import type { ActivityEvent, ActivityEventType } from "@/services/contracts";
import type { TranslationKey } from "@/lib/i18n";
import { formatTime } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import type { ReactNode } from "react";

/** Maps domain event types to Lucide icons. */
const typeIcon: Record<ActivityEventType, ReactNode> = {
  sale: <DollarSign className="size-4" aria-hidden />,
  purchase: <ShoppingCart className="size-4" aria-hidden />,
  inventory_change: <Boxes className="size-4" aria-hidden />,
  price_update: <TrendingUp className="size-4" aria-hidden />,
  reconciliation: <Scale className="size-4" aria-hidden />,
  user_action: <Coins className="size-4" aria-hidden />,
  system: <RefreshCw className="size-4" aria-hidden />,
};

/**
 * Converts raw ActivityEvent[] from the service into the display shape
 * expected by the business-agnostic ActivityTimeline component.
 */
function toActivityItems(
  events: ActivityEvent[],
  locale: Locale,
): ActivityItemData[] {
  return events.map((event) => ({
    id: event.id,
    icon: typeIcon[event.type],
    title: event.title,
    subtitle: event.subtitle,
    at: formatTime(event.at, locale),
    meta: event.meta,
  }));
}

/**
 * Activity section — maps domain events to display items, renders timeline.
 * Separation: type→icon mapping lives HERE (domain knowledge), not in the
 * shared ActivityTimeline component (which is domain-agnostic).
 */
export function ActivitySection({
  events,
  isLoading,
  t,
  locale,
}: {
  events: ActivityEvent[];
  isLoading: boolean;
  t: (key: TranslationKey) => string;
  locale: Locale;
}) {
  const items = toActivityItems(events, locale);

  return (
    <SectionCard title={t("dashboard.activity")}>
      <ActivityTimeline
        items={items}
        isLoading={isLoading}
        emptyMessage={t("common.empty")}
        loadMoreLabel={t("activity.loadMore")}
      />
    </SectionCard>
  );
}
