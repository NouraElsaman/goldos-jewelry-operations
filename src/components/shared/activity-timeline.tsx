import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cardHover, fadeUp, staggerList } from "@/lib/motion";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export type ActivityItemData = {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle?: string | undefined;
  /** ISO-8601 timestamp */
  at: string;
  meta?: string | undefined;
};

/**
 * Single row in an activity feed.
 * Receives fully-resolved display data (no business logic).
 */
export function ActivityItem({
  icon,
  title,
  subtitle,
  time,
  meta,
  className,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string | undefined;
  /** Pre-formatted time string (caller handles locale). */
  time: string;
  meta?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <motion.li
      variants={fadeUp}
      className={cn("flex items-start gap-3.5 py-3.5", className)}
    >
      {/* Icon column */}
      <span className="mt-0.5 flex size-8.5 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-surface-muted/80 text-foreground/80 shadow-hairline">
        {icon}
      </span>

      {/* Content column */}
      <div className="min-w-0 flex-1 space-y-0.5">
        <p className="truncate text-sm font-semibold text-foreground">
          {title}
        </p>
        {subtitle ? (
          <p className="truncate text-xs text-muted-foreground/80">
            {subtitle}
          </p>
        ) : null}
      </div>

      {/* Right-side metadata */}
      <div className="flex shrink-0 flex-col items-end gap-0.5">
        <time className="text-xs text-muted-foreground/80">{time}</time>
        {meta ? (
          <span className="text-xs font-semibold text-gold-deep">{meta}</span>
        ) : null}
      </div>
    </motion.li>
  );
}

/**
 * Scrollable activity feed with stagger animation, loading skeleton,
 * empty state, and optional Load More callback.
 * Fully agnostic — caller maps domain events to `ActivityItemData`.
 */
export function ActivityTimeline({
  items,
  isLoading = false,
  emptyMessage = "No activity yet",
  onLoadMore,
  loadMoreLabel = "Load more",
  className,
}: {
  items: ActivityItemData[];
  isLoading?: boolean | undefined;
  emptyMessage?: string | undefined;
  onLoadMore?: (() => void) | undefined;
  loadMoreLabel?: string | undefined;
  className?: string | undefined;
}) {
  if (isLoading) {
    return (
      <div className={cn("space-y-4", className)}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-start gap-3 py-2">
            <Skeleton className="mt-0.5 size-8.5 rounded-xl" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-1/2 rounded-lg" />
              <Skeleton className="h-3 w-1/3 rounded-lg" />
            </div>
            <Skeleton className="h-3 w-12 rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <p
        className={cn(
          "py-8 text-center text-sm text-muted-foreground",
          className,
        )}
      >
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={staggerList}
        className="divide-y divide-border/60"
        role="list"
      >
        {items.map((item) => (
          <ActivityItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            time={item.at}
            meta={item.meta}
          />
        ))}
      </motion.ul>

      {onLoadMore ? (
        <motion.button
          {...cardHover}
          onClick={onLoadMore}
          className="mt-3.5 self-center rounded-xl border border-border/60 px-4 py-2 text-xs font-semibold text-muted-foreground transition-all hover:border-border hover:bg-surface-muted hover:text-foreground"
        >
          {loadMoreLabel}
        </motion.button>
      ) : null}
    </div>
  );
}
