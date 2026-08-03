import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { o as useI18n } from "./router-DG3UxGfP.mjs";
import { t as Button } from "./button-CeGv9o7A.mjs";
import { N as FileText, P as Download } from "../_libs/lucide-react.mjs";
import { t as services } from "./services-ma1md5hz.mjs";
import { t as queryKeys } from "./query-keys-nZ6Wk2Ze.mjs";
import { t as PageHeader } from "./page-header-Cq4ZWKKZ.mjs";
import { n as StaggerGroup, r as StaggerItem, t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
import { t as SectionCard } from "./section-card-DQskpnzl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports-Bix4fKcJ.js
var import_jsx_runtime = require_jsx_runtime();
function ReportsPage() {
	const { t } = useI18n();
	const { data } = useQuery({
		queryKey: queryKeys.reports.available(),
		queryFn: () => services.reports.available()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t("reports.title"),
		description: t("reports.subtitle")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerGroup, {
		className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
		children: (data ?? []).map((report) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
			className: "h-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft text-gold-deep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "size-4",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-foreground",
							children: t(report.titleKey)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t(report.descriptionKey)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "h-9 w-fit gap-2 rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}), t("common.export")]
					})
				]
			})
		}) }, report.id))
	})] });
}
//#endregion
export { ReportsPage as component };
