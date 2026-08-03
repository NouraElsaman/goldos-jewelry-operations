import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as cn } from "./router-DG3UxGfP.mjs";
import { t as Skeleton } from "./format-fsSknbrn.mjs";
import { t as EmptyState } from "./empty-state-BFpNjDkH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-table-wQVLPhEH.js
var import_jsx_runtime = require_jsx_runtime();
/** Frames a table with an optional toolbar and footer, no rounded-corner bleed. */
function TableContainer({ toolbar, footer, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-2xl border border-border bg-surface shadow-soft", className),
		children: [
			toolbar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-2 border-b border-border px-4 py-3",
				children: toolbar
			}) : null,
			children,
			footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border px-4 py-3",
				children: footer
			}) : null
		]
	});
}
function TableSkeleton({ rows = 6, columns = 5, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-full rounded-lg" }), Array.from({ length: rows }).map((_, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			style: { gridTemplateColumns: `repeat(${columns}, 1fr)` },
			children: Array.from({ length: columns }).map((__, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-full" }, c))
		}, r))]
	});
}
var alignClass = {
	start: "text-start",
	center: "text-center",
	end: "text-end"
};
/**
* Premium data table primitive: sticky header, hairline rows, numeric
* alignment, loading and empty states. Data fetching stays with the caller.
*/
function DataTable({ columns, rows, getRowId, isLoading = false, emptyTitle, emptyDescription, emptyAction, onRowClick, className }) {
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { columns: columns.length })
	});
	if (rows.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: emptyTitle,
			description: emptyDescription,
			action: emptyAction
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("scrollbar-slim w-full overflow-x-auto", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full border-collapse text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "sticky top-0 z-10 bg-surface-muted/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					scope: "col",
					style: column.width ? { width: column.width } : void 0,
					className: cn("border-b border-border/70 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80", alignClass[column.align ?? (column.numeric ? "end" : "start")], column.className),
					children: column.header
				}, column.id)) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				onClick: onRowClick ? () => onRowClick(row) : void 0,
				className: cn("border-b border-border/60 transition-colors last:border-0 hover:bg-surface-muted/40", onRowClick && "cursor-pointer hover:bg-gold-soft/20"),
				children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					"data-numeric": column.numeric ? "" : void 0,
					className: cn("px-4 py-3.5 text-foreground", alignClass[column.align ?? (column.numeric ? "end" : "start")], column.className),
					children: column.cell(row)
				}, column.id))
			}, getRowId(row, index))) })]
		})
	});
}
//#endregion
export { TableContainer as n, DataTable as t };
