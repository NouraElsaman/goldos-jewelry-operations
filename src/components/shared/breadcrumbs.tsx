import { Link, useRouterState, type LinkProps } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

import { findNavItem } from "@/config/navigation";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  to?: NonNullable<LinkProps["to"]> | undefined;
};

/**
 * Breadcrumb system. Derives the trail from the active route by default and
 * accepts extra crumbs for nested detail views.
 */
export function Breadcrumbs({
  trail = [],
  className,
}: {
  trail?: Crumb[] | undefined;
  className?: string | undefined;
}) {
  const { t, isRTL } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = findNavItem(pathname);
  const Chevron = isRTL ? ChevronLeft : ChevronRight;

  const crumbs: Crumb[] = [
    ...(current && current.to !== "/"
      ? [{ label: t(current.labelKey), to: current.to }]
      : []),
    ...trail,
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5 text-xs font-medium", className)}
    >
      <Link
        to="/"
        className="flex items-center gap-1.5 text-muted-foreground/80 transition-colors hover:text-gold-deep"
      >
        <Home className="size-3.5" aria-hidden />
        <span>{t("common.breadcrumbHome")}</span>
      </Link>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <span
            key={`${crumb.label}-${index}`}
            className="flex items-center gap-1.5"
          >
            <Chevron className="size-3 text-muted-foreground/50" aria-hidden />
            {crumb.to && !isLast ? (
              <Link
                to={crumb.to}
                className="text-muted-foreground/80 transition-colors hover:text-gold-deep"
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                className={cn(isLast && "font-semibold text-foreground")}
                aria-current="page"
              >
                {crumb.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
