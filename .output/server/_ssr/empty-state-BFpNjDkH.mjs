import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as cn } from "./router-DG3UxGfP.mjs";
import { A as Inbox } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/empty-state-BFpNjDkH.js
var import_jsx_runtime = require_jsx_runtime();
/** Empty state with the primary action inside it. */
function EmptyState({ title, description, icon: Icon = Inbox, action, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col items-center justify-center gap-3.5 rounded-2xl border border-dashed border-border/80 bg-surface-muted/30 px-6 py-14 text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-12 items-center justify-center rounded-2xl border border-border/80 bg-surface text-gold-deep shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5.5",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base font-semibold tracking-tight text-foreground",
					children: title
				}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-sm text-xs text-muted-foreground/80 leading-relaxed",
					children: description
				}) : null]
			}),
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: action
			}) : null
		]
	});
}
//#endregion
export { EmptyState as t };
