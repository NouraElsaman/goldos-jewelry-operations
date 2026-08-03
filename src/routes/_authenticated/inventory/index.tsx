import { getCurrentRole } from "@/lib/auth";
import { canAccessRoute, canEdit } from "@/lib/rbac";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import {
  DataTable,
  PageHeader,
  PaginationBar,
  PlaceholderBlock,
  SearchInput,
  StatusBadge,
  TableContainer,
  type DataTableColumn,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatWeight } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { PageTransition } from "@/lib/motion";
import { useDebouncedValue } from "@/hooks/use-debounced-value";
import { queryKeys, services } from "@/services";
import type { InventoryItem } from "@/types/domain";

export const Route = createFileRoute("/_authenticated/inventory/")({
  beforeLoad: () => {
    const role = getCurrentRole();
    if (!canAccessRoute(role, "/inventory")) {
      throw redirect({ to: "/dashboard" });
    }
  },
  head: () => ({
    meta: [
      { title: "المخزون — جوهرة تك" },
      {
        name: "description",
        content: "تتبع حركات مخزون الذهب والمجوهرات والأدراج.",
      },
      { property: "og:title", content: "المخزون — جوهرة تك" },
      {
        property: "og:description",
        content:
          "Track jewelry items, trays and stock movements across every karat.",
      },
    ],
  }),
  component: InventoryPage,
});

function InventoryPage() {
  const { t, locale } = useI18n();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Debounce search input to avoid firing a new query on every keystroke.
  const debouncedSearch = useDebouncedValue(search, 350);

  // Reset to page 1 whenever the search term changes.
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.inventory.list({
      page,
      pageSize: 10,
      search: debouncedSearch || undefined,
    }),
    queryFn: () =>
      services.inventory.list({
        page,
        pageSize: 10,
        search: debouncedSearch || undefined,
      }),
  });

  // Column definitions are memoized — they only rebuild when the locale or
  // the translation function reference changes (i.e. on a language switch).
  const columns = useMemo<DataTableColumn<InventoryItem>[]>(
    () => [
      {
        id: "sku",
        header: t("table.sku"),
        cell: (row) => <span className="font-mono text-xs">{row.sku}</span>,
      },
      { id: "name", header: t("table.item"), cell: (row) => row.name },
      {
        id: "karat",
        header: t("table.karat"),
        cell: (row) => `${row.karat}K`,
        numeric: true,
      },
      {
        id: "weight",
        header: t("table.weight"),
        cell: (row) => formatWeight(row.netWeight, locale),
        numeric: true,
      },
      {
        id: "status",
        header: t("table.status"),
        cell: (row) => (
          <StatusBadge tone={row.status === "in_stock" ? "success" : "gold"}>
            {row.status === "in_stock"
              ? t("status.inStock")
              : t("status.reserved")}
          </StatusBadge>
        ),
      },
    ],
    [t, locale],
  );

  return (
    <PageTransition>
      <PageHeader
        title={t("inventory.title")}
        description={t("inventory.subtitle")}
        actions={
          canEdit(getCurrentRole(), "/inventory") && (
            <Button className="h-10 gap-2 rounded-xl">
              <Plus className="size-4" aria-hidden />
              {t("inventory.addItem")}
            </Button>
          )
        }
      />

      <Tabs defaultValue="table" className="gap-4">
        <TabsList className="rounded-xl">
          <TabsTrigger value="table" className="rounded-lg">
            {t("inventory.tableView")}
          </TabsTrigger>
          <TabsTrigger value="trays" className="rounded-lg">
            {t("inventory.trayView")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="table">
          <TableContainer
            toolbar={
              <SearchInput
                value={search}
                onValueChange={setSearch}
                placeholder={t("common.search")}
                className="max-w-xs"
              />
            }
            footer={
              <PaginationBar
                page={page}
                pageCount={Math.max(
                  1,
                  Math.ceil((data?.total ?? 0) / (data?.pageSize ?? 10)),
                )}
                onPageChange={setPage}
              />
            }
          >
            <DataTable
              columns={columns}
              rows={data?.items ?? []}
              isLoading={isLoading}
              getRowId={(row) => row.id}
              emptyTitle={t("common.empty")}
              emptyDescription={t("common.placeholderNote")}
            />
          </TableContainer>
        </TabsContent>

        <TabsContent value="trays">
          <PlaceholderBlock height={320} />
        </TabsContent>
      </Tabs>
    </PageTransition>
  );
}
