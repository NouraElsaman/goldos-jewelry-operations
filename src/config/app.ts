/**
 * Static app configuration. Values here are presentation-level defaults for
 * the shell; business configuration moves to the Settings module later.
 *
 * Domain types (Karat, UserRole, etc.) live exclusively in src/types/domain.ts.
 * Do not re-export them from this file.
 */
export const appConfig = {
  name: "جوهرة تك",
  shopName: "Al Asala Jewelry",
  shopNameAr: "مجوهرات الأصالة",
  currency: "EGP",
  karats: [24, 22, 21, 18] as const,
  weightPrecision: 3,
  moneyPrecision: 2,
  defaultPageSize: 10,
} as const;
