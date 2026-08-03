import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn, o as useI18n } from "./router-DG3UxGfP.mjs";
import { G as ChevronLeft, W as ChevronRight, j as House } from "../_libs/lucide-react.mjs";
import { t as findNavItem } from "./navigation-8PeP7KoL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-Cq4ZWKKZ.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Breadcrumb system. Derives the trail from the active route by default and
* accepts extra crumbs for nested detail views.
*/
function Breadcrumbs({ trail = [], className }) {
	const { t, isRTL } = useI18n();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const current = findNavItem(pathname);
	const Chevron = isRTL ? ChevronLeft : ChevronRight;
	const crumbs = [...current && current.to !== "/" ? [{
		label: t(current.labelKey),
		to: current.to
	}] : [], ...trail];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Breadcrumb",
		className: cn("flex items-center gap-1.5 text-xs font-medium", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "flex items-center gap-1.5 text-muted-foreground/80 transition-colors hover:text-gold-deep",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
				className: "size-3.5",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("common.breadcrumbHome") })]
		}), crumbs.map((crumb, index) => {
			const isLast = index === crumbs.length - 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chevron, {
					className: "size-3 text-muted-foreground/50",
					"aria-hidden": true
				}), crumb.to && !isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: crumb.to,
					className: "text-muted-foreground/80 transition-colors hover:text-gold-deep",
					children: crumb.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn(isLast && "font-semibold text-foreground"),
					"aria-current": "page",
					children: crumb.label
				})]
			}, `${crumb.label}-${index}`);
		})]
	});
}
/** Standard page header: breadcrumbs, title, description and actions. */
function PageHeader({ title, description, actions, trail, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("flex flex-col gap-3.5 pb-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { trail }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight text-foreground sm:text-[1.85rem] leading-tight",
					children: title
				}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl text-sm text-muted-foreground/90 leading-relaxed",
					children: description
				}) : null]
			}), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				children: actions
			}) : null]
		})]
	});
}
//#endregion
export { PageHeader as t };
