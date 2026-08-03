import { getCurrentRole } from "@/lib/auth";
import { canAccessRoute, canEdit } from "@/lib/rbac";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { toast } from "sonner";

import { PageHeader } from "@/components/shared";
import { PageTransition } from "@/lib/motion";
import { useI18n } from "@/lib/i18n";
import { queryKeys, services } from "@/services";

// Pricing feature components
import { PriceCardGrid } from "@/features/pricing/price-card-grid";
import { PriceTrendChart } from "@/features/pricing/price-trend-chart";
import { PriceHistoryTable } from "@/features/pricing/price-history-table";
import { SetPricesForm } from "@/features/pricing/set-prices-form";
import type { SetPricesFormValues } from "@/features/pricing/set-prices-form";

export const Route = createFileRoute("/_authenticated/gold-prices/")({
  beforeLoad: () => {
    const role = getCurrentRole();
    if (!canAccessRoute(role, "/gold-prices")) {
      throw redirect({ to: "/dashboard" });
    }
  },
  head: () => ({
    meta: [
      { title: "أسعار الذهب — جوهرة تك" },
      {
        name: "description",
        content: "تحديد ومراجعة أسعار الذهب اليومية بالجنيه المصري لكل عيار.",
      },
      { property: "og:title", content: "أسعار الذهب — جوهرة تك" },
      {
        property: "og:description",
        content:
          "Set and review the daily gold rate for every karat. Full price history and trend charts.",
      },
    ],
  }),
  component: GoldPricesPage,
});

/**
 * Gold Prices route — orchestration layer for the Pricing Engine module.
 *
 * Responsibilities:
 *   ✓ Fire today's prices query
 *   ✓ Fire price history query (for table + chart)
 *   ✓ Own the setMultiple mutation + cache invalidation
 *   ✓ Handle loading / error states
 *   ✓ Pass typed data to feature components
 *
 * Prohibited:
 *   ✗ Business calculations (those live in pricing-engine.ts)
 *   ✗ Formatting logic
 *   ✗ Direct chart or table primitives
 */
function GoldPricesPage() {
  const { t, locale } = useI18n();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── Queries ───────────────────────────────────────────────────────────────
  const { data: todayPrices = [], isLoading: todayLoading } = useQuery({
    queryKey: queryKeys.goldPrices.today(),
    queryFn: () => services.goldPrices.today(),
  });

  const { data: historyPage, isLoading: historyLoading } = useQuery({
    queryKey: queryKeys.goldPrices.history({ pageSize: 30 }),
    queryFn: () => services.goldPrices.history({ pageSize: 30 }),
  });

  const historyPrices = historyPage?.items ?? [];

  // ── Mutations ─────────────────────────────────────────────────────────────
  const { mutateAsync: setPrices } = useMutation({
    mutationFn: (input: SetPricesFormValues) =>
      services.goldPrices.setMultiple({
        rates: input.rates,
        source: "manual",
      }),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.goldPrices.today(),
      });
      void queryClient.invalidateQueries({
        queryKey: ["gold-prices", "history"],
      });
    },
  });

  // ── Form handler ──────────────────────────────────────────────────────────
  const handleSetPrices = async (values: SetPricesFormValues) => {
    setIsSubmitting(true);
    try {
      await setPrices(values);
      toast.success(
        locale === "ar"
          ? "تم تحديث الأسعار بنجاح"
          : "Prices updated successfully",
      );
    } catch {
      toast.error(
        locale === "ar" ? "تعذّر حفظ الأسعار" : "Failed to save prices",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Default form values from today's prices ───────────────────────────────
  const defaultRates = todayPrices.reduce(
    (acc, p) => ({ ...acc, [p.karat]: p.rate }),
    {} as Partial<Record<number, number>>,
  );

  return (
    <PageTransition>
      {/* ── Page header ───────────────────────────────────────────────────── */}
      <PageHeader
        title={t("goldPrices.title")}
        description={t("goldPrices.subtitle")}
      />

      {/* ── Section 1: Today's price cards (5 karats) ───────────────────── */}
      <PriceCardGrid
        prices={todayPrices}
        isLoading={todayLoading}
        isLive={false}
        locale={locale}
      />

      {/* ── Section 2: Set prices form ────────────────────────────────────── */}
      {canEdit(getCurrentRole(), "/gold-prices") && (
        <SetPricesForm
          defaultValues={
            Object.keys(defaultRates).length > 0
              ? { rates: defaultRates as SetPricesFormValues["rates"] }
              : undefined
          }
          onSubmit={handleSetPrices}
          isSubmitting={isSubmitting}
          t={t}
        />
      )}

      {/* ── Section 3: Price trend chart ──────────────────────────────────── */}
      <PriceTrendChart
        history={historyPrices}
        isLoading={historyLoading}
        t={t}
        locale={locale}
      />

      {/* ── Section 4: Historical prices table ───────────────────────────── */}
      <PriceHistoryTable
        prices={historyPrices}
        isLoading={historyLoading}
        t={t}
        locale={locale}
      />
    </PageTransition>
  );
}
