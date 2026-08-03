import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { A as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { i as cn, n as I18nProvider } from "./router-DG3UxGfP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DG3UxGfP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-C9doOHl-.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
/**
* Application-wide providers. Global state is deliberately minimal:
* server state lives in TanStack Query, locale lives in one context.
*/
function AppProviders({ queryClient, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
			delayDuration: 200,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-center",
				richColors: true,
				closeButton: true
			})]
		}) })
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "جوهرة تك — منصة إدارة محلات الذهب والمجوهرات" },
			{
				name: "description",
				content: "جوهرة تك هي منصة التشغيل الرقمية المتكاملة لمحلات الذهب والمجوهرات: تسعير، مخزون، كاشير ومطابقة الأوزان."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
/**
* Root component: only owns global providers.
*
* AppShell (sidebar, topbar, command palette) is intentionally NOT here.
* It lives in routes/_authenticated.tsx so that public pages (login, etc.)
* can render without it.
*/
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppProviders, {
		queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$12 = () => import("./routes-CsWKo09e.mjs");
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "جوهرة تك — منصة إدارة محلات الذهب والمجوهرات في مصر" },
		{
			name: "description",
			content: "جوهرة تك منصة تشغيل متكاملة لإدارة محلات الذهب والمجوهرات في مصر. إدارة المخزون، الأسعار اليومية، الكاشير، والتقارير."
		},
		{
			property: "og:title",
			content: "جوهرة تك — منصة إدارة محلات الذهب والمجوهرات"
		},
		{
			property: "og:description",
			content: "جوهرة تك منصة تشغيل متكاملة لإدارة محلات الذهب والمجوهرات في مصر."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("../_authenticated-DZVDptz7.mjs");
/**
* Authenticated layout route.
*
* Checks mock auth status in localStorage. If unauthenticated, redirects to /login.
*/
var Route$11 = createFileRoute("/_authenticated")({
	beforeLoad: async () => {
		if (typeof window !== "undefined") {
			if (!localStorage.getItem("goldos_auth_token")) throw redirect({ to: "/login" });
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./login-D3t-wmrY.mjs");
var Route$10 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "تسجيل الدخول — جوهرة تك" }, {
		name: "description",
		content: "منصة إدارة عمليات محلات الذهب والمجوهرات في مصر."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./select-role-DS7TtkZT.mjs");
var Route$9 = createFileRoute("/select-role")({
	head: () => ({ meta: [{ title: "اختيار الدور — جوهرة تك" }, {
		name: "description",
		content: "حدد دورك الوظيفي للبدء في استخدام منصة جوهرة تك."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var PermissionMatrix = {
	owner: {
		"/dashboard": {
			canView: true,
			canEdit: true
		},
		"/cashier": {
			canView: true,
			canEdit: true
		},
		"/inventory": {
			canView: true,
			canEdit: true
		},
		"/gold-prices": {
			canView: true,
			canEdit: true
		},
		"/reconciliation": {
			canView: true,
			canEdit: true
		},
		"/reports": {
			canView: true,
			canEdit: true
		},
		"/analytics": {
			canView: true,
			canEdit: true
		},
		"/users": {
			canView: true,
			canEdit: true
		},
		"/settings": {
			canView: true,
			canEdit: true
		}
	},
	cashier: {
		"/dashboard": {
			canView: true,
			canEdit: true
		},
		"/cashier": {
			canView: true,
			canEdit: true
		},
		"/inventory": {
			canView: true,
			canEdit: false
		},
		"/gold-prices": {
			canView: true,
			canEdit: false
		},
		"/reconciliation": {
			canView: false,
			canEdit: false
		},
		"/reports": {
			canView: false,
			canEdit: false
		},
		"/analytics": {
			canView: false,
			canEdit: false
		},
		"/users": {
			canView: false,
			canEdit: false
		},
		"/settings": {
			canView: false,
			canEdit: false
		}
	},
	inventory_manager: {
		"/dashboard": {
			canView: true,
			canEdit: true
		},
		"/cashier": {
			canView: false,
			canEdit: false
		},
		"/inventory": {
			canView: true,
			canEdit: true
		},
		"/gold-prices": {
			canView: true,
			canEdit: false
		},
		"/reconciliation": {
			canView: true,
			canEdit: true
		},
		"/reports": {
			canView: false,
			canEdit: false
		},
		"/analytics": {
			canView: false,
			canEdit: false
		},
		"/users": {
			canView: false,
			canEdit: false
		},
		"/settings": {
			canView: false,
			canEdit: false
		}
	}
};
/**
* Retrieves the current active role from storage.
* This abstracts away localStorage so it can be replaced with JWT decoding later.
*/
function getCurrentRole() {
	if (typeof window === "undefined") return null;
	const role = localStorage.getItem("goldos_user_role");
	if (role === "owner" || role === "cashier" || role === "inventory_manager") return role;
	return null;
}
function canAccessRoute(role, route) {
	if (!role) return false;
	return PermissionMatrix[role][route].canView;
}
function canEdit(role, resource) {
	if (!role) return false;
	return PermissionMatrix[role][resource].canEdit;
}
var $$splitComponentImporter$8 = () => import("./analytics-9jNLM5ku.mjs");
var Route$8 = createFileRoute("/_authenticated/analytics/")({
	beforeLoad: () => {
		if (!canAccessRoute(getCurrentRole(), "/analytics")) throw redirect({ to: "/dashboard" });
	},
	head: () => ({ meta: [
		{ title: "التحليلات — جوهرة تك" },
		{
			name: "description",
			content: "تحليلات الأداء وحركة المبيعات والأوزان."
		},
		{
			property: "og:title",
			content: "التحليلات — جوهرة تك"
		},
		{
			property: "og:description",
			content: "Revenue trends, karat mix and item performance for the jewelry shop."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./cashier-Cnu0DWfB.mjs");
var Route$7 = createFileRoute("/_authenticated/cashier/")({
	beforeLoad: () => {
		if (!canAccessRoute(getCurrentRole(), "/cashier")) throw redirect({ to: "/dashboard" });
	},
	head: () => ({ meta: [
		{ title: "الكاشير — جوهرة تك" },
		{
			name: "description",
			content: "إصدار الفواتير ونقطة بيع الذهب والمجوهرات."
		},
		{
			property: "og:title",
			content: "الكاشير — جوهرة تك"
		},
		{
			property: "og:description",
			content: "Point of sale workspace for scanning items, building carts and issuing invoices."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./dashboard-3vzC6FAT.mjs");
var Route$6 = createFileRoute("/_authenticated/dashboard/")({
	beforeLoad: () => {
		if (!canAccessRoute(getCurrentRole(), "/dashboard")) throw redirect({ to: "/dashboard" });
	},
	head: () => ({ meta: [
		{ title: "لوحة التحكم — جوهرة تك" },
		{
			name: "description",
			content: "نظرة عامة يومية على أسعار الذهب، الإيرادات، قيمة المخزون وحركة المحل."
		},
		{
			property: "og:title",
			content: "لوحة التحكم — جوهرة تك"
		},
		{
			property: "og:description",
			content: "Daily overview of gold prices, revenue, inventory value and shop activity."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
/**
* Dashboard route — the single orchestration layer for /dashboard.
*/
var $$splitComponentImporter$5 = () => import("./gold-prices-aqnxXN71.mjs");
var Route$5 = createFileRoute("/_authenticated/gold-prices/")({
	beforeLoad: () => {
		if (!canAccessRoute(getCurrentRole(), "/gold-prices")) throw redirect({ to: "/dashboard" });
	},
	head: () => ({ meta: [
		{ title: "أسعار الذهب — جوهرة تك" },
		{
			name: "description",
			content: "تحديد ومراجعة أسعار الذهب اليومية بالجنيه المصري لكل عيار."
		},
		{
			property: "og:title",
			content: "أسعار الذهب — جوهرة تك"
		},
		{
			property: "og:description",
			content: "Set and review the daily gold rate for every karat. Full price history and trend charts."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
/**
* Gold Prices route — orchestration layer for the Pricing Engine module.
*
* Responsibilities:
*   ✓ Fire today's prices query
*   ✓ Fire price history query (for table + chart)
*   ✓ Own the setMultiple mutation + cache invalidation
*   ✓ Handle loading / error states
*   ✓ Pass typed data to feature components
*
* Prohibited:
*   ✗ Business calculations (those live in pricing-engine.ts)
*   ✗ Formatting logic
*   ✗ Direct chart or table primitives
*/
var $$splitComponentImporter$4 = () => import("./inventory-BLUNKmRL.mjs");
var Route$4 = createFileRoute("/_authenticated/inventory/")({
	beforeLoad: () => {
		if (!canAccessRoute(getCurrentRole(), "/inventory")) throw redirect({ to: "/dashboard" });
	},
	head: () => ({ meta: [
		{ title: "المخزون — جوهرة تك" },
		{
			name: "description",
			content: "تتبع حركات مخزون الذهب والمجوهرات والأدراج."
		},
		{
			property: "og:title",
			content: "المخزون — جوهرة تك"
		},
		{
			property: "og:description",
			content: "Track jewelry items, trays and stock movements across every karat."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./reconciliation-Dz6vryub.mjs");
var Route$3 = createFileRoute("/_authenticated/reconciliation/")({
	beforeLoad: () => {
		if (!canAccessRoute(getCurrentRole(), "/reconciliation")) throw redirect({ to: "/dashboard" });
	},
	head: () => ({ meta: [
		{ title: "مطابقة الأوزان — جوهرة تك" },
		{
			name: "description",
			content: "مطابقة الأوزان وإغلاق اليوم الفعلي لمحلات الذهب."
		},
		{
			property: "og:title",
			content: "مطابقة الأوزان — جوهرة تك"
		},
		{
			property: "og:description",
			content: "Close the day by comparing expected and counted gold weight per karat."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./reports-Bix4fKcJ.mjs");
var Route$2 = createFileRoute("/_authenticated/reports/")({
	beforeLoad: () => {
		if (!canAccessRoute(getCurrentRole(), "/reports")) throw redirect({ to: "/dashboard" });
	},
	head: () => ({ meta: [
		{ title: "التقارير — جوهرة تك" },
		{
			name: "description",
			content: "التقارير المالية والضريبية لمحلات الذهب."
		},
		{
			property: "og:title",
			content: "التقارير — جوهرة تك"
		},
		{
			property: "og:description",
			content: "Printable and exportable operational reports for sales, stock and tax."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./settings-BRibnAhh.mjs");
var Route$1 = createFileRoute("/_authenticated/settings/")({
	beforeLoad: () => {
		if (!canAccessRoute(getCurrentRole(), "/settings")) throw redirect({ to: "/dashboard" });
	},
	head: () => ({ meta: [{ title: "الإعدادات — جوهرة تك" }, {
		name: "description",
		content: "إعدادات النظام والأسعار."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./users-BhEoDLHT.mjs");
var Route = createFileRoute("/_authenticated/users/")({
	beforeLoad: () => {
		if (!canAccessRoute(getCurrentRole(), "/users")) throw redirect({ to: "/dashboard" });
	},
	head: () => ({ meta: [
		{ title: "المستخدمون والأدوار — جوهرة تك" },
		{
			name: "description",
			content: "إدارة فريق العمل، الصلاحيات والأدوار للمالك والكاشير ومسؤول المخزون."
		},
		{
			property: "og:title",
			content: "المستخدمون والأدوار — جوهرة تك"
		},
		{
			property: "og:description",
			content: "Manage shop staff, roles and access for owners, cashiers and stock managers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AuthenticatedRoute = Route$11.update({
	id: "/_authenticated",
	getParentRoute: () => Route$13
});
var LoginRoute = Route$10.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$13
});
var SelectRoleRoute = Route$9.update({
	id: "/select-role",
	path: "/select-role",
	getParentRoute: () => Route$13
});
var AuthenticatedRouteChildren = {
	AuthenticatedAnalyticsIndexRoute: Route$8.update({
		id: "/analytics/",
		path: "/analytics/",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedCashierIndexRoute: Route$7.update({
		id: "/cashier/",
		path: "/cashier/",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedDashboardIndexRoute: Route$6.update({
		id: "/dashboard/",
		path: "/dashboard/",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedGoldPricesIndexRoute: Route$5.update({
		id: "/gold-prices/",
		path: "/gold-prices/",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedInventoryIndexRoute: Route$4.update({
		id: "/inventory/",
		path: "/inventory/",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedReconciliationIndexRoute: Route$3.update({
		id: "/reconciliation/",
		path: "/reconciliation/",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedReportsIndexRoute: Route$2.update({
		id: "/reports/",
		path: "/reports/",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedSettingsIndexRoute: Route$1.update({
		id: "/settings/",
		path: "/settings/",
		getParentRoute: () => AuthenticatedRoute
	}),
	AuthenticatedUsersIndexRoute: Route.update({
		id: "/users/",
		path: "/users/",
		getParentRoute: () => AuthenticatedRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRoute: AuthenticatedRoute._addFileChildren(AuthenticatedRouteChildren),
	LoginRoute,
	SelectRoleRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { TooltipTrigger as a, getCurrentRole as c, TooltipProvider as i, getRouter as l, Tooltip as n, canAccessRoute as o, TooltipContent as r, canEdit as s, PermissionMatrix as t, router_exports as u };
