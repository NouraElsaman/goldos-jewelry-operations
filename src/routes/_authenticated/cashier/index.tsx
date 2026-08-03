import { getCurrentRole } from "@/lib/auth";
import { canAccessRoute } from "@/lib/rbac";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { ScanLine, ShoppingCart } from "lucide-react";

import {
  EmptyState,
  PageHeader,
  PlaceholderBlock,
  SectionCard,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { PageTransition } from "@/lib/motion";

export const Route = createFileRoute("/_authenticated/cashier/")({
  beforeLoad: () => {
    const role = getCurrentRole();
    if (!canAccessRoute(role, "/cashier")) {
      throw redirect({ to: "/dashboard" });
    }
  },
  head: () => ({
    meta: [
      { title: "الكاشير — جوهرة تك" },
      {
        name: "description",
        content: "إصدار الفواتير ونقطة بيع الذهب والمجوهرات.",
      },
      { property: "og:title", content: "الكاشير — جوهرة تك" },
      {
        property: "og:description",
        content:
          "Point of sale workspace for scanning items, building carts and issuing invoices.",
      },
    ],
  }),
  component: CashierPage,
});

function CashierPage() {
  const { t } = useI18n();

  return (
    <PageTransition>
      <PageHeader
        title={t("cashier.title")}
        description={t("cashier.subtitle")}
        actions={
          <Button className="h-10 gap-2 rounded-xl">
            <ScanLine className="size-4" aria-hidden />
            {t("cashier.searchItem")}
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <SectionCard title={t("cashier.searchItem")}>
          <PlaceholderBlock height={320} />
        </SectionCard>
        <div className="flex flex-col gap-6">
          <SectionCard title={t("cashier.cart")}>
            <EmptyState
              icon={ShoppingCart}
              title={t("cashier.emptyCart")}
              description={t("cashier.emptyCartBody")}
            />
          </SectionCard>
          <SectionCard title={t("cashier.summary")}>
            <PlaceholderBlock height={160} />
          </SectionCard>
        </div>
      </div>
    </PageTransition>
  );
}
