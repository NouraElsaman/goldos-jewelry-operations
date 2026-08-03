import type { ReactNode } from "react";

import { EmptyState } from "./empty-state";
import { TableSkeleton } from "./loading-skeletons";
import { cn } from "@/lib/utils";

export type DataTableColumn<T> = {
  id: string;
  header: ReactNode;
  cell: (row: T) => ReactNode;
  align?: "start" | "end" | "center" | undefined;
  /** Right-aligned numeric column with tabular figures. */
  numeric?: boolean | undefined;
  className?: string | undefined;
  width?: string | undefined;
};

const alignClass = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
} as const;

/**
 * Premium data table primitive: sticky header, hairline rows, numeric
 * alignment, loading and empty states. Data fetching stays with the caller.
 */
export function DataTable<T>({
  columns,
  rows,
  getRowId,
  isLoading = false,
  emptyTitle,
  emptyDescription,
  emptyAction,
  onRowClick,
  className,
}: {
  columns: DataTableColumn<T>[];
  rows: T[];
  getRowId: (row: T, index: number) => string;
  isLoading?: boolean | undefined;
  emptyTitle: string;
  emptyDescription?: string | undefined;
  emptyAction?: ReactNode | undefined;
  onRowClick?: ((row: T) => void) | undefined;
  className?: string | undefined;
}) {
  if (isLoading) {
    return (
      <div className="p-6">
        <TableSkeleton columns={columns.length} />
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="p-6">
        <EmptyState
          title={emptyTitle}
          description={emptyDescription}
          action={emptyAction}
        />
      </div>
    );
  }

  return (
    <div className={cn("scrollbar-slim w-full overflow-x-auto", className)}>
      <table className="w-full border-collapse text-sm">
        <thead className="sticky top-0 z-10 bg-surface-muted/90 backdrop-blur-md">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                scope="col"
                style={column.width ? { width: column.width } : undefined}
                className={cn(
                  "border-b border-border/70 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80",
                  alignClass[
                    column.align ?? (column.numeric ? "end" : "start")
                  ],
                  column.className,
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={getRowId(row, index)}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              className={cn(
                "border-b border-border/60 transition-colors last:border-0 hover:bg-surface-muted/40",
                onRowClick && "cursor-pointer hover:bg-gold-soft/20",
              )}
            >
              {columns.map((column) => (
                <td
                  key={column.id}
                  data-numeric={column.numeric ? "" : undefined}
                  className={cn(
                    "px-4 py-3.5 text-foreground",
                    alignClass[
                      column.align ?? (column.numeric ? "end" : "start")
                    ],
                    column.className,
                  )}
                >
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
