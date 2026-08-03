import type { ListParams } from "./types";

/** Central query-key factory so cache invalidation stays predictable. */
export const queryKeys = {
  dashboard: () => ["dashboard", "summary"] as const,
  goldPrices: {
    today: () => ["gold-prices", "today"] as const,
    history: (params?: ListParams) =>
      ["gold-prices", "history", params ?? {}] as const,
  },
  inventory: {
    list: (params?: ListParams) => ["inventory", "list", params ?? {}] as const,
    detail: (id: string) => ["inventory", "detail", id] as const,
  },
  sales: {
    invoices: (params?: ListParams) =>
      ["sales", "invoices", params ?? {}] as const,
  },
  reconciliation: {
    currentDay: () => ["reconciliation", "current-day"] as const,
  },
  reports: {
    available: () => ["reports", "available"] as const,
  },
  analytics: {
    summary: () => ["analytics", "summary"] as const,
  },
  users: {
    list: (params?: ListParams) => ["users", "list", params ?? {}] as const,
  },
  settings: {
    get: () => ["settings"] as const,
  },
  auth: {
    currentUser: () => ["auth", "current-user"] as const,
  },
} as const;
