import { appConfig } from "@/config/app";
import type { Locale } from "@/lib/i18n";

const localeTag: Record<Locale, string> = { ar: "ar-EG", en: "en-US" };

/** Money formatting — always 2 decimals, currency-aware, locale-aware. */
export function formatMoney(value: number, locale: Locale = "en"): string {
  return new Intl.NumberFormat(localeTag[locale], {
    style: "currency",
    currency: appConfig.currency,
    minimumFractionDigits: appConfig.moneyPrecision,
    maximumFractionDigits: appConfig.moneyPrecision,
  }).format(value);
}

/** Weight formatting — always 3 decimals, grams. */
export function formatWeight(value: number, locale: Locale = "en"): string {
  const n = new Intl.NumberFormat(localeTag[locale], {
    minimumFractionDigits: appConfig.weightPrecision,
    maximumFractionDigits: appConfig.weightPrecision,
  }).format(value);
  return locale === "ar" ? `${n} جم` : `${n} g`;
}

export function formatNumber(value: number, locale: Locale = "en"): string {
  return new Intl.NumberFormat(localeTag[locale]).format(value);
}

export function formatPercent(value: number, locale: Locale = "en"): string {
  return new Intl.NumberFormat(localeTag[locale], {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatDate(
  value: Date | string,
  locale: Locale = "en",
): string {
  const date = typeof value === "string" ? new Date(value) : value;
  return new Intl.DateTimeFormat(localeTag[locale], {
    dateStyle: "medium",
  }).format(date);
}

export function formatTime(
  value: Date | string,
  locale: Locale = "en",
): string {
  const date = typeof value === "string" ? new Date(value) : value;
  return new Intl.DateTimeFormat(localeTag[locale], {
    timeStyle: "short",
  }).format(date);
}
