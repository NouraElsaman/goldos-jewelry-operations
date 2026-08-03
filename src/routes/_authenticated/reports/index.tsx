import { getCurrentRole } from "@/lib/auth";
import { canAccessRoute } from "@/lib/rbac";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";

import { PageHeader, SectionCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { PageTransition, StaggerGroup, StaggerItem } from "@/lib/motion";
import { queryKeys, services } from "@/services";

export const Route = createFileRoute("/_authenticated/reports/")({
  beforeLoad: () => {
    const role = getCurrentRole();
    if (!canAccessRoute(role, "/reports")) {
      throw redirect({ to: "/dashboard" });
    }
  },
  head: () => ({
    meta: [
      { title: "التقارير — جوهرة تك" },
      {
        name: "description",
        content: "التقارير المالية والضريبية لمحلات الذهب.",
      },
      { property: "og:title", content: "التقارير — جوهرة تك" },
      {
        property: "og:description",
        content:
          "Printable and exportable operational reports for sales, stock and tax.",
      },
    ],
  }),
  component: ReportsPage,
});

function ReportsPage() {
  const { t } = useI18n();
  const { data } = useQuery({
    queryKey: queryKeys.reports.available(),
    queryFn: () => services.reports.available(),
  });

  return (
    <PageTransition>
      <PageHeader
        title={t("reports.title")}
        description={t("reports.subtitle")}
      />

      <StaggerGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {(data ?? []).map((report) => (
          <StaggerItem key={report.id}>
            <SectionCard className="h-full">
              <div className="flex flex-col gap-4">
                <span className="flex size-10 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft text-gold-deep">
                  <FileText className="size-4" aria-hidden />
                </span>
                <div className="space-y-1">
                  {/*
                   * report.titleKey and report.descriptionKey are now typed as
                   * TranslationKey (see services/contracts.ts), so no cast is needed.
                   */}
                  <h2 className="text-sm font-semibold text-foreground">
                    {t(report.titleKey)}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {t(report.descriptionKey)}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="h-9 w-fit gap-2 rounded-xl"
                >
                  <Download className="size-4" aria-hidden />
                  {t("common.export")}
                </Button>
              </div>
            </SectionCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </PageTransition>
  );
}
