import { J as ChartColumn, N as FileText, O as LayoutDashboard, g as Scale, p as Settings, r as Users, u as ShoppingCart, x as Package, z as Coins } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/navigation-8PeP7KoL.js
/**
* Navigation order mirrors the real daily workflow of the shop:
* start of day -> the all-day screen -> stock work -> rate -> end of day,
* then analysis, then administration.
*/
var navigation = [
	{
		id: "daily",
		labelKey: "nav.group.daily",
		items: [
			{
				to: "/dashboard",
				labelKey: "nav.dashboard",
				icon: LayoutDashboard
			},
			{
				to: "/cashier",
				labelKey: "nav.cashier",
				icon: ShoppingCart,
				shortcut: "N"
			},
			{
				to: "/inventory",
				labelKey: "nav.inventory",
				icon: Package,
				shortcut: "I"
			},
			{
				to: "/gold-prices",
				labelKey: "nav.goldPrices",
				icon: Coins
			},
			{
				to: "/reconciliation",
				labelKey: "nav.reconciliation",
				icon: Scale
			}
		]
	},
	{
		id: "insights",
		labelKey: "nav.group.insights",
		items: [{
			to: "/reports",
			labelKey: "nav.reports",
			icon: FileText
		}, {
			to: "/analytics",
			labelKey: "nav.analytics",
			icon: ChartColumn
		}]
	},
	{
		id: "admin",
		labelKey: "nav.group.admin",
		items: [{
			to: "/users",
			labelKey: "nav.users",
			icon: Users
		}, {
			to: "/settings",
			labelKey: "nav.settings",
			icon: Settings
		}]
	}
];
var flatNavigation = navigation.flatMap((group) => group.items);
function findNavItem(pathname) {
	return flatNavigation.find((item) => pathname.startsWith(item.to));
}
//#endregion
export { flatNavigation as n, navigation as r, findNavItem as t };
