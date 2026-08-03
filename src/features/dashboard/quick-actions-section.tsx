import {
  Coins,
  FileText,
  Package,
  Scale,
  ShoppingCart,
  Users,
} from "lucide-react";

import { QuickActionCard, SectionCard } from "@/components/shared";
import type { TranslationKey } from "@/lib/i18n";

type ActionDef = {
  id: string;
  labelKey: TranslationKey;
  descKey: TranslationKey;
  icon: typeof ShoppingCart;
  to: string;
};

const ACTIONS: ActionDef[] = [
  {
    id: "sale",
    labelKey: "quickAction.newSale",
    descKey: "quickAction.newSale.desc",
    icon: ShoppingCart,
    to: "/cashier/",
  },
  {
    id: "inventory",
    labelKey: "quickAction.addInventory",
    descKey: "quickAction.addInventory.desc",
    icon: Package,
    to: "/inventory/",
  },
  {
    id: "price",
    labelKey: "quickAction.setPrice",
    descKey: "quickAction.setPrice.desc",
    icon: Coins,
    to: "/gold-prices/",
  },
  {
    id: "reconcile",
    labelKey: "quickAction.reconcile",
    descKey: "quickAction.reconcile.desc",
    icon: Scale,
    to: "/reconciliation/",
  },
  {
    id: "reports",
    labelKey: "quickAction.reports",
    descKey: "quickAction.reports.desc",
    icon: FileText,
    to: "/reports/",
  },
  {
    id: "users",
    labelKey: "quickAction.users",
    descKey: "quickAction.users.desc",
    icon: Users,
    to: "/users/",
  },
];

/**
 * Quick-action card grid.
 * All routes are stable — updating them here requires no changes elsewhere.
 * Pure presentation: no service calls, no state.
 */
export function QuickActionsSection({
  t,
  title,
}: {
  t: (key: TranslationKey) => string;
  title: string;
}) {
  return (
    <SectionCard title={title}>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {ACTIONS.map((action) => (
          <QuickActionCard
            key={action.id}
            icon={action.icon}
            label={t(action.labelKey)}
            description={t(action.descKey)}
            to={action.to}
          />
        ))}
      </div>
    </SectionCard>
  );
}
