import { getCurrentRole } from "@/lib/auth";
import { canAccessRoute } from "@/lib/rbac";
import { createFileRoute, redirect } from "@tanstack/react-router";

import {
  ChartContainer,
  PageHeader,
  PlaceholderBlock,
} from "@/components/shared";
import { useI18n } from "@/lib/i18n";
import { PageTransition } from "@/lib/motion";

export const Route = createFileRoute("/_authenticated/analytics/")({
  beforeLoad: () => {
    const role = getCurrentRole();
    if (!canAccessRoute(role, "/analytics")) {
      throw redirect({ to: "/dashboard" });
    }
  },
  head: () => ({
    meta: [
      { title: "التحليلات — جوهرة تك" },
      {
        name: "description",
        content: "تحليلات الأداء وحركة المبيعات والأوزان.",
      },
      { property: "og:title", content: "التحليلات — جوهرة تك" },
      {
        property: "og:description",
        content:
          "Revenue trends, karat mix and item performance for the jewelry shop.",
      },
    ],
  }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const { t } = useI18n();

  return (
    <PageTransition>
      <PageHeader
        title={t("analytics.title")}
        description={t("analytics.subtitle")}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartContainer title={t("analytics.revenueTrend")}>
          <PlaceholderBlock height={280} />
        </ChartContainer>
        <ChartContainer title={t("analytics.weightByKarat")}>
          <PlaceholderBlock height={280} />
        </ChartContainer>
      </div>
    </PageTransition>
  );
}
