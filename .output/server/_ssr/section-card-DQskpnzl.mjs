import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as cn } from "./router-DG3UxGfP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-card-DQskpnzl.js
var import_jsx_runtime = require_jsx_runtime();
/** Elevated content container used for every page section. */
function SectionCard({ title, description, actions, footer, children, padded = true, className, contentClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-200 hover:shadow-raised/50", className),
		children: [
			title || actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 border-b border-border/70 px-6 py-4.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-0.5",
					children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold tracking-tight text-foreground",
						children: title
					}) : null, description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground/80",
						children: description
					}) : null]
				}), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: actions
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn(padded && "p-6", contentClassName),
				children
			}),
			footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border/60 bg-surface-muted/50 px-6 py-3.5 text-xs text-muted-foreground",
				children: footer
			}) : null
		]
	});
}
//#endregion
export { SectionCard as t };
