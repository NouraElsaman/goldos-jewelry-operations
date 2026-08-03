import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { i as cn, o as useI18n } from "./router-DG3UxGfP.mjs";
import { c as getCurrentRole, s as canEdit } from "./router-DG3UxGfP2.mjs";
import { t as Button } from "./button-CeGv9o7A.mjs";
import { t as Input } from "./input-CeXGM_CH.mjs";
import { o as formatWeight } from "./format-fsSknbrn.mjs";
import { G as ChevronLeft, W as ChevronRight, m as Search, n as X, y as Plus } from "../_libs/lucide-react.mjs";
import { t as services } from "./services-ma1md5hz.mjs";
import { t as queryKeys } from "./query-keys-nZ6Wk2Ze.mjs";
import { t as PageHeader } from "./page-header-Cq4ZWKKZ.mjs";
import { t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
import { t as PlaceholderBlock } from "./placeholder-block-BFum21kD.mjs";
import { t as StatusBadge } from "./status-badge-DBLjSXgG.mjs";
import { n as TableContainer, t as DataTable } from "./data-table-wQVLPhEH.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BeILi6qL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inventory-BLUNKmRL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Search input with leading icon and clear affordance. */
function SearchInput({ value, onValueChange, placeholder, autoFocus = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex-1", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				className: "pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-muted-foreground/70 ltr:left-3.5 rtl:right-3.5",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "search",
				value,
				autoFocus,
				placeholder,
				onChange: (e) => onValueChange(e.target.value),
				className: "h-10 rounded-xl border-border bg-surface shadow-hairline transition-all duration-150 focus-visible:border-gold-deep/40 focus-visible:ring-3 ltr:pl-9.5 ltr:pr-9.5 rtl:pr-9.5 rtl:pl-9.5"
			}),
			value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onValueChange(""),
				"aria-label": "Clear",
				className: "absolute top-1/2 flex size-5.5 -translate-y-1/2 items-center justify-center rounded-full bg-surface-muted text-muted-foreground transition-colors hover:bg-border hover:text-foreground ltr:right-2.5 rtl:left-2.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					className: "size-3",
					"aria-hidden": true
				})
			}) : null
		]
	});
}
/** Page navigation for tables and lists. */
function PaginationBar({ page, pageCount, onPageChange, className }) {
	const { t, isRTL } = useI18n();
	const Prev = isRTL ? ChevronRight : ChevronLeft;
	const Next = isRTL ? ChevronLeft : ChevronRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center justify-between gap-3 px-2 py-1", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			"data-numeric": true,
			className: "text-xs font-medium text-muted-foreground/80",
			children: [
				t("common.page"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: page
				}),
				" ",
				t("common.of"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: Math.max(pageCount, 1)
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				disabled: page <= 1,
				onClick: () => onPageChange(page - 1),
				className: "h-8 rounded-lg px-3 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prev, {
					className: "size-3.5",
					"aria-hidden": true
				}), t("common.previous")]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				disabled: page >= pageCount,
				onClick: () => onPageChange(page + 1),
				className: "h-8 rounded-lg px-3 text-xs",
				children: [t("common.next"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Next, {
					className: "size-3.5",
					"aria-hidden": true
				})]
			})]
		})]
	});
}
/** Debounces fast-changing values (search inputs, filters). */
function useDebouncedValue(value, delayMs = 250) {
	const [debounced, setDebounced] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebounced(value), delayMs);
		return () => clearTimeout(timer);
	}, [value, delayMs]);
	return debounced;
}
function InventoryPage() {
	const { t, locale } = useI18n();
	const [search, setSearch] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(1);
	const debouncedSearch = useDebouncedValue(search, 350);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [debouncedSearch]);
	const { data, isLoading } = useQuery({
		queryKey: queryKeys.inventory.list({
			page,
			pageSize: 10,
			search: debouncedSearch || void 0
		}),
		queryFn: () => services.inventory.list({
			page,
			pageSize: 10,
			search: debouncedSearch || void 0
		})
	});
	const columns = (0, import_react.useMemo)(() => [
		{
			id: "sku",
			header: t("table.sku"),
			cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: row.sku
			})
		},
		{
			id: "name",
			header: t("table.item"),
			cell: (row) => row.name
		},
		{
			id: "karat",
			header: t("table.karat"),
			cell: (row) => `${row.karat}K`,
			numeric: true
		},
		{
			id: "weight",
			header: t("table.weight"),
			cell: (row) => formatWeight(row.netWeight, locale),
			numeric: true
		},
		{
			id: "status",
			header: t("table.status"),
			cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
				tone: row.status === "in_stock" ? "success" : "gold",
				children: row.status === "in_stock" ? t("status.inStock") : t("status.reserved")
			})
		}
	], [t, locale]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t("inventory.title"),
		description: t("inventory.subtitle"),
		actions: canEdit(getCurrentRole(), "/inventory") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			className: "h-10 gap-2 rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
				className: "size-4",
				"aria-hidden": true
			}), t("inventory.addItem")]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
		defaultValue: "table",
		className: "gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
				className: "rounded-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "table",
					className: "rounded-lg",
					children: t("inventory.tableView")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "trays",
					className: "rounded-lg",
					children: t("inventory.trayView")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "table",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableContainer, {
					toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchInput, {
						value: search,
						onValueChange: setSearch,
						placeholder: t("common.search"),
						className: "max-w-xs"
					}),
					footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationBar, {
						page,
						pageCount: Math.max(1, Math.ceil((data?.total ?? 0) / (data?.pageSize ?? 10))),
						onPageChange: setPage
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
						columns,
						rows: data?.items ?? [],
						isLoading,
						getRowId: (row) => row.id,
						emptyTitle: t("common.empty"),
						emptyDescription: t("common.placeholderNote")
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "trays",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderBlock, { height: 320 })
			})
		]
	})] });
}
//#endregion
export { InventoryPage as component };
