import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { o as useI18n } from "./router-DG3UxGfP.mjs";
import { t as Button } from "./button-CeGv9o7A.mjs";
import { h as ScanLine, u as ShoppingCart } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./page-header-Cq4ZWKKZ.mjs";
import { t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
import { t as PlaceholderBlock } from "./placeholder-block-BFum21kD.mjs";
import { t as SectionCard } from "./section-card-DQskpnzl.mjs";
import { t as EmptyState } from "./empty-state-BFpNjDkH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cashier-Cnu0DWfB.js
var import_jsx_runtime = require_jsx_runtime();
function CashierPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t("cashier.title"),
		description: t("cashier.subtitle"),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			className: "h-10 gap-2 rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, {
				className: "size-4",
				"aria-hidden": true
			}), t("cashier.searchItem")]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1.6fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
			title: t("cashier.searchItem"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderBlock, { height: 320 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: t("cashier.cart"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: ShoppingCart,
					title: t("cashier.emptyCart"),
					description: t("cashier.emptyCartBody")
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: t("cashier.summary"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderBlock, { height: 160 })
			})]
		})]
	})] });
}
//#endregion
export { CashierPage as component };
