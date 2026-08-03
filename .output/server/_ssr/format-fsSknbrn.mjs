import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as cn } from "./router-DG3UxGfP.mjs";
import { t as appConfig } from "./app-DaSg3NUE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-fsSknbrn.js
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-xl bg-surface-muted/90 border border-border/40", className),
		...props
	});
}
var localeTag = {
	ar: "ar-EG",
	en: "en-US"
};
/** Money formatting — always 2 decimals, currency-aware, locale-aware. */
function formatMoney(value, locale = "en") {
	return new Intl.NumberFormat(localeTag[locale], {
		style: "currency",
		currency: appConfig.currency,
		minimumFractionDigits: appConfig.moneyPrecision,
		maximumFractionDigits: appConfig.moneyPrecision
	}).format(value);
}
/** Weight formatting — always 3 decimals, grams. */
function formatWeight(value, locale = "en") {
	const n = new Intl.NumberFormat(localeTag[locale], {
		minimumFractionDigits: appConfig.weightPrecision,
		maximumFractionDigits: appConfig.weightPrecision
	}).format(value);
	return locale === "ar" ? `${n} جم` : `${n} g`;
}
function formatNumber(value, locale = "en") {
	return new Intl.NumberFormat(localeTag[locale]).format(value);
}
function formatDate(value, locale = "en") {
	const date = typeof value === "string" ? new Date(value) : value;
	return new Intl.DateTimeFormat(localeTag[locale], { dateStyle: "medium" }).format(date);
}
function formatTime(value, locale = "en") {
	const date = typeof value === "string" ? new Date(value) : value;
	return new Intl.DateTimeFormat(localeTag[locale], { timeStyle: "short" }).format(date);
}
//#endregion
export { formatTime as a, formatNumber as i, formatDate as n, formatWeight as o, formatMoney as r, Skeleton as t };
