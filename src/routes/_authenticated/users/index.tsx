import { getCurrentRole } from "@/lib/auth";
import { canAccessRoute } from "@/lib/rbac";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { UserPlus } from "lucide-react";
import { useMemo } from "react";

import {
  DataTable,
  PageHeader,
  StatusBadge,
  TableContainer,
  type DataTableColumn,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { PageTransition } from "@/lib/motion";
import { queryKeys, services } from "@/services";
import type { AppUser } from "@/types/domain";

export const Route = createFileRoute("/_authenticated/users/")({
  beforeLoad: () => {
    const role = getCurrentRole();
    if (!canAccessRoute(role, "/users")) {
      throw redirect({ to: "/dashboard" });
    }
  },
  head: () => ({
    meta: [
      { title: "المستخدمون والأدوار — جوهرة تك" },
      {
        name: "description",
        content:
          "إدارة فريق العمل، الصلاحيات والأدوار للمالك والكاشير ومسؤول المخزون.",
      },
      { property: "og:title", content: "المستخدمون والأدوار — جوهرة تك" },
      {
        property: "og:description",
        content:
          "Manage shop staff, roles and access for owners, cashiers and stock managers.",
      },
    ],
  }),
  component: UsersPage,
});

import { ShieldCheck, Lock } from "lucide-react";
import { PermissionMatrix } from "@/lib/rbac";
import { Card } from "@/components/ui/card";

function UsersPage() {
  const { t } = useI18n();

  const features = [
    { key: "/dashboard", label: t("nav.dashboard") },
    { key: "/cashier", label: t("nav.cashier") },
    { key: "/inventory", label: t("nav.inventory") },
    { key: "/gold-prices", label: t("nav.goldPrices") },
    { key: "/reconciliation", label: t("nav.reconciliation") },
    { key: "/reports", label: t("nav.reports") },
    { key: "/analytics", label: t("nav.analytics") },
    { key: "/users", label: t("nav.users") },
    { key: "/settings", label: t("nav.settings") },
  ] as const;

  return (
    <PageTransition>
      <PageHeader title={t("users.title")} description={t("users.subtitle")} />

      <div className="flex flex-col gap-8 max-w-5xl mx-auto py-8">
        {/* Luxury Empty State */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-12 px-4 rounded-3xl border border-gold/20 bg-gradient-to-b from-surface to-background shadow-sm">
          <div className="flex items-center justify-center size-20 rounded-full bg-gold-soft border border-gold/30">
            <ShieldCheck className="size-10 text-gold-deep" strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              إدارة المستخدمين والأدوار
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
              هذه الواجهة قيد التطوير. قمنا بتجهيز مصفوفة الصلاحيات الأساسية
              لتكون الأساس في إدارة فريق العمل.
            </p>
          </div>
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground shadow-sm">
              <Lock className="size-4 text-muted-foreground" />
              <span>Coming in Sprint 8</span>
            </div>
          </div>
        </div>

        {/* Permission Matrix Preview */}
        <Card className="overflow-hidden border-border bg-surface shadow-sm rounded-2xl">
          <div className="border-b border-border bg-muted/30 px-6 py-4">
            <h3 className="font-semibold text-foreground">
              مصفوفة الصلاحيات (معاينة)
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              توضيح الصلاحيات المبدئية لكل دور في النظام.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead>
                <tr className="border-b border-border bg-background/50">
                  <th className="px-6 py-4 font-medium text-muted-foreground">
                    القسم
                  </th>
                  <th className="px-6 py-4 font-medium text-center text-amber-700">
                    المالك
                  </th>
                  <th className="px-6 py-4 font-medium text-center text-emerald-700">
                    الكاشير
                  </th>
                  <th className="px-6 py-4 font-medium text-center text-blue-700">
                    مسؤول المخزون
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {features.map((feature) => {
                  const o = PermissionMatrix.owner[feature.key];
                  const c = PermissionMatrix.cashier[feature.key];
                  const i = PermissionMatrix.inventory_manager[feature.key];

                  const renderAccess = (perms: {
                    canView: boolean;
                    canEdit: boolean;
                  }) => {
                    if (!perms.canView)
                      return (
                        <span className="text-muted-foreground/30 font-medium">
                          ❌
                        </span>
                      );
                    if (!perms.canEdit)
                      return (
                        <span className="text-sky-600 font-medium text-xs bg-sky-50 px-2 py-1 rounded-md border border-sky-100">
                          🔍 قراءة فقط
                        </span>
                      );
                    return (
                      <span className="text-emerald-600 font-medium">✅</span>
                    );
                  };

                  return (
                    <tr
                      key={feature.key}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-6 py-3 font-medium text-foreground">
                        {feature.label}
                      </td>
                      <td className="px-6 py-3 text-center">
                        {renderAccess(o)}
                      </td>
                      <td className="px-6 py-3 text-center">
                        {renderAccess(c)}
                      </td>
                      <td className="px-6 py-3 text-center">
                        {renderAccess(i)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}
