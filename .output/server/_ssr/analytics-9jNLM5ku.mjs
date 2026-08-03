import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { o as useI18n } from "./router-DG3UxGfP.mjs";
import { t as PageHeader } from "./page-header-Cq4ZWKKZ.mjs";
import { t as ChartContainer } from "./chart-container-D803bb3t.mjs";
import { t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
import { t as PlaceholderBlock } from "./placeholder-block-BFum21kD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-9jNLM5ku.js
var import_jsx_runtime = require_jsx_runtime();
function AnalyticsPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t("analytics.title"),
		description: t("analytics.subtitle")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			title: t("analytics.revenueTrend"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderBlock, { height: 280 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			title: t("analytics.weightByKarat"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderBlock, { height: 280 })
		})]
	})] });
}
//#endregion
export { AnalyticsPage as component };
