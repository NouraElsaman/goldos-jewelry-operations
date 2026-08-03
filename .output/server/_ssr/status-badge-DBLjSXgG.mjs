import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn } from "./router-DG3UxGfP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-badge-DBLjSXgG.js
var import_jsx_runtime = require_jsx_runtime();
var statusBadgeVariants = cva("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-colors", {
	variants: { tone: {
		neutral: "border-border/80 bg-surface-muted/90 text-muted-foreground",
		gold: "border-gold/35 bg-gold-soft/80 text-gold-deep font-semibold",
		success: "border-success/25 bg-success/10 text-success font-semibold",
		warning: "border-warning/30 bg-warning/15 text-warning-foreground font-semibold",
		danger: "border-destructive/25 bg-destructive/10 text-destructive font-semibold",
		info: "border-info/25 bg-info/10 text-info font-semibold"
	} },
	defaultVariants: { tone: "neutral" }
});
function StatusBadge({ children, tone, dot = true, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn(statusBadgeVariants({ tone }), className),
		children: [dot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "size-1.5 rounded-full bg-current opacity-80",
			"aria-hidden": true
		}) : null, children]
	});
}
//#endregion
export { StatusBadge as t };
