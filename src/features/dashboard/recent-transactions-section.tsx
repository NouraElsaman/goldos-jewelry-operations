import { useMemo } from "react";

import {
  DataTable,
  SectionCard,
  StatusBadge,
  TableContainer,
} from "@/components/shared";
import type { DataTableColumn } from "@/components/shared";
import type { Invoice, PaymentMethod } from "@/types/domain";
import type { TranslationKey, Locale } from "@/lib/i18n";
import { formatMoney, formatTime } from "@/lib/format";

const cashierNames: Record<string, string> = {
  usr_1: "فيصل الأصالة",
  usr_2: "نورة حمدان",
  usr_3: "طارق صالح",
};

const paymentLabels: Record<PaymentMethod, TranslationKey> = {
  cash: "payment.cash",
  card: "payment.card",
  transfer: "payment.transfer",
};

/**
 * Recent transactions table — last N invoices in a premium DataTable.
 * Columns: invoice #, time, payment, cashier, total, status.
 * Prepared for sorting / pagination / search (props pre-wired, no-op for now).
 * No fetching — receives invoices[] from the route.
 */
export function RecentTransactionsSection({
  invoices,
  isLoading,
  t,
  locale,
  title,
}: {
  invoices: Invoice[];
  isLoading: boolean;
  t: (key: TranslationKey) => string;
  locale: Locale;
  title: string;
}) {
  const columns = useMemo<DataTableColumn<Invoice>[]>(
    () => [
      {
        id: "number",
        header: t("table.sku"),
        cell: (row) => (
          <span className="font-mono text-xs font-medium text-foreground">
            {row.number}
          </span>
        ),
        width: "9rem",
      },
      {
        id: "time",
        header: t("common.today"),
        cell: (row) => (
          <time className="text-muted-foreground">
            {formatTime(row.createdAt, locale)}
          </time>
        ),
        width: "6rem",
      },
      {
        id: "payment",
        header: t("payment.cash").replace("نقداً", "الدفع"),
        cell: (row) => (
          <StatusBadge tone="neutral">
            {t(paymentLabels[row.paymentMethod])}
          </StatusBadge>
        ),
      },
      {
        id: "cashier",
        header: t("table.name"),
        cell: (row) => cashierNames[row.cashierId] ?? row.cashierId,
      },
      {
        id: "subtotal",
        header: t("table.weight"),
        numeric: true,
        cell: (row) => (
          <span className="text-muted-foreground">
            {formatMoney(row.subtotal, locale)}
          </span>
        ),
      },
      {
        id: "total",
        header: t("dashboard.revenue"),
        numeric: true,
        cell: (row) => (
          <span className="font-semibold text-foreground">
            {formatMoney(row.total, locale)}
          </span>
        ),
      },
    ],
    [t, locale],
  );

  return (
    <SectionCard title={title} padded={false}>
      <TableContainer>
        <DataTable
          columns={columns}
          rows={invoices}
          getRowId={(row) => row.id}
          isLoading={isLoading}
          emptyTitle={t("common.empty")}
          emptyDescription={t("common.placeholderNote")}
        />
      </TableContainer>
    </SectionCard>
  );
}
