import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as cn } from "./router-DG3UxGfP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chart-container-D803bb3t.js
var import_jsx_runtime = require_jsx_runtime();
/** Consistent frame for every chart: title, controls and a fixed plot area. */
function ChartContainer({ title, description, actions, height = 280, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-2xl border border-border bg-surface p-6 shadow-soft transition-shadow hover:shadow-raised/50", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3 pb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold tracking-tight text-foreground",
					children: title
				}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground/80",
					children: description
				}) : null]
			}), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: actions
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 w-full",
			style: { height },
			children
		})]
	});
}
//#endregion
export { ChartContainer as t };
