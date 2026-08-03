import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { o as useI18n } from "./router-DG3UxGfP.mjs";
import { t as Button } from "./button-CeGv9o7A.mjs";
import { o as formatWeight } from "./format-fsSknbrn.mjs";
import { E as Lock } from "../_libs/lucide-react.mjs";
import { t as services } from "./services-ma1md5hz.mjs";
import { t as queryKeys } from "./query-keys-nZ6Wk2Ze.mjs";
import { t as PageHeader } from "./page-header-Cq4ZWKKZ.mjs";
import { t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
import { t as StatusBadge } from "./status-badge-DBLjSXgG.mjs";
import { n as TableContainer, t as DataTable } from "./data-table-wQVLPhEH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reconciliation-Dz6vryub.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReconciliationPage() {
	const { t, locale } = useI18n();
	const { data, isLoading } = useQuery({
		queryKey: queryKeys.reconciliation.currentDay(),
		queryFn: () => services.reconciliation.currentDay()
	});
	const columns = (0, import_react.useMemo)(() => [
		{
			id: "karat",
			header: t("common.karat"),
			cell: (row) => `${row.karat}K`
		},
		{
			id: "expected",
			header: t("reconciliation.expected"),
			cell: (row) => formatWeight(row.expected, locale),
			numeric: true
		},
		{
			id: "counted",
			header: t("reconciliation.actual"),
			cell: (row) => row.counted === null ? "—" : formatWeight(row.counted, locale),
			numeric: true
		},
		{
			id: "variance",
			header: t("reconciliation.variance"),
			cell: (row) => row.variance === null ? "—" : formatWeight(row.variance, locale),
			numeric: true
		},
		{
			id: "status",
			header: t("table.status"),
			cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
				tone: row.status === "open" ? "gold" : "neutral",
				children: row.status === "open" ? t("status.pending") : t("status.locked")
			})
		}
	], [t, locale]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t("reconciliation.title"),
		description: t("reconciliation.subtitle"),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			className: "h-10 gap-2 rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
				className: "size-4",
				"aria-hidden": true
			}), t("reconciliation.closeDay")]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		rows: data ?? [],
		isLoading,
		getRowId: (row) => String(row.karat),
		emptyTitle: t("common.empty"),
		emptyDescription: t("common.placeholderNote")
	}) })] });
}
//#endregion
export { ReconciliationPage as component };
