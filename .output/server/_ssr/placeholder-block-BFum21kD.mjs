import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as cn, o as useI18n } from "./router-DG3UxGfP.mjs";
import { R as Construction } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/placeholder-block-BFum21kD.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Marks a scaffolded region that will be replaced by real functionality
* during feature implementation.
*/
function PlaceholderBlock({ label, height = 200, className }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { minHeight: height },
		className: cn("flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border-strong/60 bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,var(--surface-muted)_10px,var(--surface-muted)_20px)] px-6 py-8 text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Construction, {
				className: "size-4 text-muted-foreground",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-foreground",
				children: label ?? t("common.comingSoon")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-xs text-muted-foreground",
				children: t("common.placeholderNote")
			})
		]
	});
}
//#endregion
export { PlaceholderBlock as t };
