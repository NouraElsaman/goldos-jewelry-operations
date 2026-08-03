import { getCurrentRole } from "@/lib/auth";
import { canAccessRoute } from "@/lib/rbac";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { useMemo } from "react";

import {
  DataTable,
  PageHeader,
  StatusBadge,
  TableContainer,
  type DataTableColumn,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { formatWeight } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { PageTransition } from "@/lib/motion";
import { queryKeys, services } from "@/services";
import type { ReconciliationRow } from "@/types/domain";

export const Route = createFileRoute("/_authenticated/reconciliation/")({
  beforeLoad: () => {
    const role = getCurrentRole();
    if (!canAccessRoute(role, "/reconciliation")) {
      throw redirect({ to: "/dashboard" });
    }
  },
  head: () => ({
    meta: [
      { title: "مطابقة الأوزان — جوهرة تك" },
      {
        name: "description",
        content: "مطابقة الأوزان وإغلاق اليوم الفعلي لمحلات الذهب.",
      },
      { property: "og:title", content: "مطابقة الأوزان — جوهرة تك" },
      {
        property: "og:description",
        content:
          "Close the day by comparing expected and counted gold weight per karat.",
      },
    ],
  }),
  component: ReconciliationPage,
});

function ReconciliationPage() {
  const { t, locale } = useI18n();
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.reconciliation.currentDay(),
    queryFn: () => services.reconciliation.currentDay(),
  });

  // Memoized — rebuilds only on locale or language switch.
  const columns = useMemo<DataTableColumn<ReconciliationRow>[]>(
    () => [
      {
        id: "karat",
        header: t("common.karat"),
        cell: (row) => `${row.karat}K`,
      },
      {
        id: "expected",
        header: t("reconciliation.expected"),
        cell: (row) => formatWeight(row.expected, locale),
        numeric: true,
      },
      {
        id: "counted",
        header: t("reconciliation.actual"),
        cell: (row) =>
          row.counted === null ? "—" : formatWeight(row.counted, locale),
        numeric: true,
      },
      {
        id: "variance",
        header: t("reconciliation.variance"),
        cell: (row) =>
          row.variance === null ? "—" : formatWeight(row.variance, locale),
        numeric: true,
      },
      {
        id: "status",
        header: t("table.status"),
        cell: (row) => (
          <StatusBadge tone={row.status === "open" ? "gold" : "neutral"}>
            {row.status === "open" ? t("status.pending") : t("status.locked")}
          </StatusBadge>
        ),
      },
    ],
    [t, locale],
  );

  return (
    <PageTransition>
      <PageHeader
        title={t("reconciliation.title")}
        description={t("reconciliation.subtitle")}
        actions={
          <Button className="h-10 gap-2 rounded-xl">
            <Lock className="size-4" aria-hidden />
            {t("reconciliation.closeDay")}
          </Button>
        }
      />

      <TableContainer>
        <DataTable
          columns={columns}
          rows={data ?? []}
          isLoading={isLoading}
          getRowId={(row) => String(row.karat)}
          emptyTitle={t("common.empty")}
          emptyDescription={t("common.placeholderNote")}
        />
      </TableContainer>
    </PageTransition>
  );
}
