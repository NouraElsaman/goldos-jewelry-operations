import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { i as cn, o as useI18n } from "./router-DG3UxGfP.mjs";
import { c as getCurrentRole } from "./router-DG3UxGfP2.mjs";
import { a as formatTime, i as formatNumber, o as formatWeight, r as formatMoney, t as Skeleton } from "./format-fsSknbrn.mjs";
import { C as Minus, F as DollarSign, H as CircleCheck, N as FileText, V as CircleX, Y as Boxes, Z as ArrowUpRight, _ as RefreshCw, c as TrendingDown, g as Scale, k as Info, o as TriangleAlert, r as Users, s as TrendingUp, t as Zap, u as ShoppingCart, v as Receipt, x as Package, z as Coins } from "../_libs/lucide-react.mjs";
import { t as services } from "./services-ma1md5hz.mjs";
import { t as queryKeys } from "./query-keys-nZ6Wk2Ze.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./page-header-Cq4ZWKKZ.mjs";
import { t as ChartContainer } from "./chart-container-D803bb3t.mjs";
import { a as fadeUp, i as cardHover, n as StaggerGroup, o as staggerList, r as StaggerItem, t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
import { t as SectionCard } from "./section-card-DQskpnzl.mjs";
import { t as StatusBadge } from "./status-badge-DBLjSXgG.mjs";
import { n as DonutChartWidget, r as RealtimeIndicator, t as AreaChartWidget } from "./chart-widgets-B_kM9UEX.mjs";
import { n as TableContainer, t as DataTable } from "./data-table-wQVLPhEH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-3vzC6FAT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusStyles = {
	online: "bg-success shadow-[0_0_8px_0_oklch(0.55_0.13_148/0.4)]",
	offline: "bg-destructive shadow-[0_0_8px_0_oklch(0.56_0.16_26/0.4)]",
	degraded: "bg-warning shadow-[0_0_8px_0_oklch(0.72_0.13_72/0.4)]",
	unknown: "bg-muted-foreground/60"
};
var statusLabels = {
	online: "Online",
	offline: "Offline",
	degraded: "Degraded",
	unknown: "Unknown"
};
/**
* Compact status dot + label chip for system health monitoring.
* Accepts an optional translated label override for RTL support.
* Reusable in system health panels, topbar status strips, and tooltips.
*/
function SystemHealthChip({ label, status, statusLabel, className }) {
	const resolvedLabel = statusLabel ?? statusLabels[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface px-4 py-3 shadow-hairline transition-all duration-150 hover:border-border-strong hover:shadow-soft", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("size-2 rounded-full transition-all", statusStyles[status], status === "online" && "animate-pulse"),
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("text-xs font-semibold", status === "online" && "text-success", status === "offline" && "text-destructive", status === "degraded" && "text-warning-foreground", status === "unknown" && "text-muted-foreground"),
				children: resolvedLabel
			})]
		})]
	});
}
/**
* Primary KPI tile. Used across Dashboard, Analytics, and any summary view.
*
* Props:
* - `label`    — metric name
* - `value`    — primary formatted value (caller formats with locale)
* - `hint`     — secondary label (e.g. "vs yesterday")
* - `icon`     — LucideIcon
* - `trend`    — direction + percentage string
* - `badge`    — optional ReactNode slot (status chip, alert count, etc.)
* - `accent`   — gold tint variant (highlight most-important KPI)
* - `loading`  — shows skeleton instead of values
*/
function KpiCard({ label, value, hint, icon: Icon, trend, badge, accent = false, loading = false, className }) {
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col justify-between gap-3.5 rounded-2xl border border-border bg-surface p-5.5 shadow-soft", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "size-9.5 rounded-xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-32 rounded-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3.5 w-20" })
		]
	});
	const TrendIcon = trend?.direction === "up" ? TrendingUp : trend?.direction === "down" ? TrendingDown : Minus;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		...cardHover,
		className: cn("group relative flex flex-col justify-between gap-3.5 rounded-2xl border border-border bg-surface p-5.5 shadow-soft transition-all duration-200 hover:border-border-strong hover:shadow-raised", accent && "border-gold/35 bg-gold-soft/30 hover:border-gold/50", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground/80",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [badge ? badge : null, Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("flex size-9.5 items-center justify-center rounded-xl border border-border/80 bg-surface-muted/80 text-muted-foreground transition-colors group-hover:border-gold/30 group-hover:bg-gold-soft/80 group-hover:text-gold-deep", accent && "border-gold/30 bg-surface text-gold-deep"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4.5",
							"aria-hidden": true
						})
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-numeric": true,
				className: "text-2xl font-bold tracking-tight text-foreground sm:text-[1.6rem] leading-none",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs",
				children: [trend ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("inline-flex items-center gap-1 font-semibold", trend.direction === "up" && "text-success", trend.direction === "down" && "text-destructive", trend.direction === "flat" && "text-muted-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendIcon, {
						className: "size-3.5",
						"aria-hidden": true
					}), trend.value]
				}) : null, hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground/80",
					children: hint
				}) : null]
			})
		]
	});
}
/**
* Single row in an activity feed.
* Receives fully-resolved display data (no business logic).
*/
function ActivityItem({ icon, title, subtitle, time, meta, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
		variants: fadeUp,
		className: cn("flex items-start gap-3.5 py-3.5", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 flex size-8.5 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-surface-muted/80 text-foreground/80 shadow-hairline",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 space-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-semibold text-foreground",
					children: title
				}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs text-muted-foreground/80",
					children: subtitle
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-col items-end gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
					className: "text-xs text-muted-foreground/80",
					children: time
				}), meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold text-gold-deep",
					children: meta
				}) : null]
			})
		]
	});
}
/**
* Scrollable activity feed with stagger animation, loading skeleton,
* empty state, and optional Load More callback.
* Fully agnostic — caller maps domain events to `ActivityItemData`.
*/
function ActivityTimeline({ items, isLoading = false, emptyMessage = "No activity yet", onLoadMore, loadMoreLabel = "Load more", className }) {
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("space-y-4", className),
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3 py-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-0.5 size-8.5 rounded-xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/2 rounded-lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-1/3 rounded-lg" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-12 rounded-lg" })
			]
		}, i))
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("py-8 text-center text-sm text-muted-foreground", className),
		children: emptyMessage
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
			initial: "hidden",
			animate: "visible",
			variants: staggerList,
			className: "divide-y divide-border/60",
			role: "list",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityItem, {
				icon: item.icon,
				title: item.title,
				subtitle: item.subtitle,
				time: item.at,
				meta: item.meta
			}, item.id))
		}), onLoadMore ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
			...cardHover,
			onClick: onLoadMore,
			className: "mt-3.5 self-center rounded-xl border border-border/60 px-4 py-2 text-xs font-semibold text-muted-foreground transition-all hover:border-border hover:bg-surface-muted hover:text-foreground",
			children: loadMoreLabel
		}) : null]
	});
}
var severityConfig = {
	info: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
			className: "size-4",
			"aria-hidden": true
		}),
		ring: "border-info/25 bg-info/5",
		badge: "bg-info/10 text-info font-semibold",
		text: "text-info"
	},
	success: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
			className: "size-4",
			"aria-hidden": true
		}),
		ring: "border-success/25 bg-success/5",
		badge: "bg-success/10 text-success font-semibold",
		text: "text-success"
	},
	warning: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
			className: "size-4",
			"aria-hidden": true
		}),
		ring: "border-warning/30 bg-warning/8",
		badge: "bg-warning/15 text-gold-foreground font-semibold",
		text: "text-warning-foreground"
	},
	error: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
			className: "size-4",
			"aria-hidden": true
		}),
		ring: "border-destructive/25 bg-destructive/5",
		badge: "bg-destructive/10 text-destructive font-semibold",
		text: "text-destructive"
	},
	critical: {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
			className: "size-4",
			"aria-hidden": true
		}),
		ring: "border-destructive/50 bg-destructive/10 shadow-soft",
		badge: "bg-destructive text-destructive-foreground font-semibold",
		text: "text-destructive"
	}
};
/**
* Severity-aware alert card.
* Supports all five severity levels: info, success, warning, error, critical.
* Reusable across dashboard, inventory alerts, AI detection events, and system notices.
*/
function AlertCard({ severity, title, description, time, actionLabel, onAction, className }) {
	const config = severityConfig[severity];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		...cardHover,
		role: "alert",
		className: cn("flex gap-3.5 rounded-2xl border p-4.5 shadow-hairline transition-shadow hover:shadow-soft", config.ring, className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 shrink-0", config.text),
			children: config.icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1 space-y-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-foreground",
						children: title
					}), time ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
						className: "shrink-0 text-xs text-muted-foreground/80",
						children: time
					}) : null]
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground/90 leading-relaxed",
					children: description
				}) : null,
				actionLabel && onAction ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onAction,
					className: cn("mt-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all hover:opacity-85 active:scale-95", config.badge),
					children: actionLabel
				}) : null
			]
		})]
	});
}
/**
* Tappable action card that either navigates to a route or fires a callback.
* Used in quick-action grids, command panels, and onboarding checklists.
*/
function QuickActionCard({ icon: Icon, label, description, to, onClick, disabled = false, className }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("flex size-10 items-center justify-center rounded-xl border border-border/80 bg-surface-muted/80 text-gold-deep transition-all duration-200 group-hover:border-gold/40 group-hover:bg-gold-soft/80 group-hover:scale-[1.03]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-5",
				"aria-hidden": true
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "space-y-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-semibold text-foreground group-hover:text-gold-deep transition-colors",
				children: label
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-xs text-muted-foreground/80",
				children: description
			}) : null]
		})]
	});
	const baseClass = cn("group relative flex flex-col rounded-2xl border border-border bg-surface p-5 text-start shadow-soft transition-all duration-200 hover:border-gold/30 hover:shadow-raised", disabled && "pointer-events-none opacity-50", className);
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		...cardHover,
		className: baseClass,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			className: "absolute inset-0 rounded-2xl",
			"aria-label": label
		}), inner]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		...cardHover,
		onClick,
		className: baseClass,
		children: inner
	});
}
/**
* Executive KPI grid — eight business metrics in a responsive 4-column grid.
* Pure presentation: receives pre-fetched data, emits nothing.
* All labels come through i18n (no hardcoded strings).
*/
function KpiSection({ data, isLoading, t, locale }) {
	const cards = (0, import_react.useMemo)(() => [
		{
			id: "revenue",
			labelKey: "dashboard.revenue",
			value: formatMoney(data?.revenueToday ?? 0, locale),
			hint: t("dashboard.vsYesterday"),
			icon: Receipt,
			trend: {
				value: "+4.2%",
				direction: "up"
			},
			accent: true
		},
		{
			id: "purchases",
			labelKey: "dashboard.purchases",
			value: formatMoney(data?.purchasesToday ?? 0, locale),
			hint: t("dashboard.vsYesterday"),
			icon: ShoppingCart,
			trend: {
				value: "+1.8%",
				direction: "up"
			}
		},
		{
			id: "transactions",
			labelKey: "dashboard.transactions",
			value: formatNumber(data?.transactionsToday ?? 0, locale),
			icon: Coins,
			trend: {
				value: "+2",
				direction: "up"
			}
		},
		{
			id: "inventoryValue",
			labelKey: "dashboard.inventoryValue",
			value: formatMoney(data?.inventoryValue ?? 0, locale),
			icon: Package
		},
		{
			id: "inventoryWeight",
			labelKey: "dashboard.inventoryWeight",
			value: formatWeight(data?.inventoryWeight ?? 0, locale),
			icon: Scale
		},
		{
			id: "goldChange",
			labelKey: "dashboard.goldChange",
			value: data?.prices?.[0]?.changePct != null ? `${data.prices[0].changePct > 0 ? "+" : ""}${data.prices[0].changePct.toFixed(1)}%` : "—",
			icon: TrendingUp,
			trend: data?.prices?.[0]?.changePct != null ? {
				value: `${Math.abs(data.prices[0].changePct).toFixed(1)}%`,
				direction: data.prices[0].changePct >= 0 ? "up" : "down"
			} : void 0
		},
		{
			id: "reconciliation",
			labelKey: "dashboard.reconciliationStatus",
			value: t("dashboard.openReconciliation"),
			icon: TriangleAlert,
			trend: {
				value: "معلق",
				direction: "flat"
			}
		},
		{
			id: "users",
			labelKey: "dashboard.activeUsers",
			value: formatNumber(3, locale),
			icon: Users
		}
	], [
		data,
		t,
		locale
	]);
	const role = getCurrentRole();
	const visibleCards = (0, import_react.useMemo)(() => {
		if (role === "owner") return cards;
		if (role === "cashier") return cards.filter((c) => [
			"revenue",
			"purchases",
			"transactions",
			"goldChange"
		].includes(c.id));
		if (role === "inventory_manager") return cards.filter((c) => [
			"inventoryValue",
			"inventoryWeight",
			"goldChange",
			"reconciliation"
		].includes(c.id));
		return [];
	}, [cards, role]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerGroup, {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
		children: visibleCards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
			label: t(card.labelKey),
			value: card.value,
			hint: card.hint,
			icon: card.icon,
			trend: card.trend,
			badge: card.badge,
			accent: card.accent,
			loading: isLoading
		}) }, card.id))
	});
}
function PriceRow({ price, locale }) {
	const change = price.changePct ?? 0;
	const TrendIcon = change > 0 ? TrendingUp : change < 0 ? TrendingDown : Minus;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-muted/40 px-4 py-3.5 transition-colors hover:bg-accent/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-9 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft text-gold-deep",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, {
					className: "size-4",
					"aria-hidden": true
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-semibold text-foreground",
				children: ["عيار ", price.karat]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [price.karat, "K"]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-numeric": true,
				className: "text-base font-semibold tracking-tight text-foreground",
				children: formatMoney(price.rate, locale)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium", change > 0 && "bg-success/10 text-success", change < 0 && "bg-destructive/10 text-destructive", change === 0 && "bg-muted text-muted-foreground"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendIcon, {
						className: "size-3",
						"aria-hidden": true
					}),
					change > 0 ? "+" : "",
					change.toFixed(1),
					"%"
				]
			})]
		})]
	});
}
/**
* Gold price panel — displays today's rate for each karat with trend.
* Designed for realtime updates: pass `isLive=true` when WebSocket is active.
* No fetching: parent supplies `prices`.
*/
function GoldPricePanel({ prices, isLoading, isLive = false, lastUpdated, title, description, locale }) {
	const lastUpdateFormatted = lastUpdated ? formatTime(lastUpdated, locale) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
		title,
		description,
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [lastUpdateFormatted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: lastUpdateFormatted
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RealtimeIndicator, { active: isLive })]
		}),
		children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 animate-pulse rounded-xl bg-surface-muted" }, i))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: prices.map((price) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceRow, {
				price,
				locale
			}, price.karat))
		})
	});
}
/**
* Dashboard chart section: revenue area chart + karat distribution donut.
* Reuses shared AreaChartWidget and DonutChartWidget primitives.
* No fetching — receives analytics data from the route.
*/
function ChartSection({ analytics, isLoading, t, locale }) {
	const revenueData = analytics?.revenueTrend ?? [];
	const karatData = (analytics?.weightByKarat ?? []).map((d, i) => ({
		label: d.label,
		value: d.value,
		color: [
			"var(--color-gold)",
			"var(--color-chart-2)",
			"var(--color-chart-3)",
			"var(--color-chart-4)"
		][i % 4]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			title: t("analytics.revenueTrend"),
			description: t("dashboard.vsYesterday"),
			className: "lg:col-span-2",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1 text-xs text-success",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					className: "size-3.5",
					"aria-hidden": true
				}), "+4.2%"]
			}),
			children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-60 w-full animate-pulse rounded-xl bg-surface-muted" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaChartWidget, {
				data: revenueData,
				height: 240,
				valueFormatter: (v) => formatMoney(v, locale)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			title: t("analytics.weightByKarat"),
			description: t("common.grams"),
			children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-60 w-full animate-pulse rounded-xl bg-surface-muted" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonutChartWidget, {
				data: karatData,
				height: 240,
				valueFormatter: (v) => `${v.toFixed(1)} جم`
			})
		})]
	});
}
/** Maps domain event types to Lucide icons. */
var typeIcon = {
	sale: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, {
		className: "size-4",
		"aria-hidden": true
	}),
	purchase: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
		className: "size-4",
		"aria-hidden": true
	}),
	inventory_change: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
		className: "size-4",
		"aria-hidden": true
	}),
	price_update: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
		className: "size-4",
		"aria-hidden": true
	}),
	reconciliation: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
		className: "size-4",
		"aria-hidden": true
	}),
	user_action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, {
		className: "size-4",
		"aria-hidden": true
	}),
	system: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
		className: "size-4",
		"aria-hidden": true
	})
};
/**
* Converts raw ActivityEvent[] from the service into the display shape
* expected by the business-agnostic ActivityTimeline component.
*/
function toActivityItems(events, locale) {
	return events.map((event) => ({
		id: event.id,
		icon: typeIcon[event.type],
		title: event.title,
		subtitle: event.subtitle,
		at: formatTime(event.at, locale),
		meta: event.meta
	}));
}
/**
* Activity section — maps domain events to display items, renders timeline.
* Separation: type→icon mapping lives HERE (domain knowledge), not in the
* shared ActivityTimeline component (which is domain-agnostic).
*/
function ActivitySection({ events, isLoading, t, locale }) {
	const items = toActivityItems(events, locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
		title: t("dashboard.activity"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityTimeline, {
			items,
			isLoading,
			emptyMessage: t("common.empty"),
			loadMoreLabel: t("activity.loadMore")
		})
	});
}
var severityOrder = {
	critical: 0,
	error: 1,
	warning: 2,
	info: 3,
	success: 4
};
/**
* Alerts section — sorted by severity, then time.
* Routes action buttons to the relevant pages.
* Receives pre-fetched alerts from the route — no service calls.
*/
function AlertsSection({ alerts, isLoading, t, locale }) {
	const navigate = useNavigate();
	const sorted = [...alerts].sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
		title: t("dashboard.alerts"),
		children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 animate-pulse rounded-xl bg-surface-muted" }, i))
		}) : sorted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-6 text-center text-sm text-muted-foreground",
			children: t("common.empty")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: sorted.map((alert) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertCard, {
				severity: alert.severity,
				title: alert.title,
				description: alert.description,
				time: formatTime(alert.at, locale),
				actionLabel: alert.actionLabel,
				onAction: alert.actionLabel ? () => {
					if (alert.actionLabel?.includes("مطابقة") || alert.actionLabel?.includes("Reconcil")) navigate({ to: "/reconciliation/" });
					else if (alert.actionLabel?.includes("مخزون") || alert.actionLabel?.includes("Inventory")) navigate({ to: "/inventory/" });
				} : void 0
			}, alert.id))
		})
	});
}
var cashierNames = {
	usr_1: "فيصل الأصالة",
	usr_2: "نورة حمدان",
	usr_3: "طارق صالح"
};
var paymentLabels = {
	cash: "payment.cash",
	card: "payment.card",
	transfer: "payment.transfer"
};
/**
* Recent transactions table — last N invoices in a premium DataTable.
* Columns: invoice #, time, payment, cashier, total, status.
* Prepared for sorting / pagination / search (props pre-wired, no-op for now).
* No fetching — receives invoices[] from the route.
*/
function RecentTransactionsSection({ invoices, isLoading, t, locale, title }) {
	const columns = (0, import_react.useMemo)(() => [
		{
			id: "number",
			header: t("table.sku"),
			cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs font-medium text-foreground",
				children: row.number
			}),
			width: "9rem"
		},
		{
			id: "time",
			header: t("common.today"),
			cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
				className: "text-muted-foreground",
				children: formatTime(row.createdAt, locale)
			}),
			width: "6rem"
		},
		{
			id: "payment",
			header: t("payment.cash").replace("نقداً", "الدفع"),
			cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
				tone: "neutral",
				children: t(paymentLabels[row.paymentMethod])
			})
		},
		{
			id: "cashier",
			header: t("table.name"),
			cell: (row) => cashierNames[row.cashierId] ?? row.cashierId
		},
		{
			id: "subtotal",
			header: t("table.weight"),
			numeric: true,
			cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: formatMoney(row.subtotal, locale)
			})
		},
		{
			id: "total",
			header: t("dashboard.revenue"),
			numeric: true,
			cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-foreground",
				children: formatMoney(row.total, locale)
			})
		}
	], [t, locale]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
		title,
		padded: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns,
			rows: invoices,
			getRowId: (row) => row.id,
			isLoading,
			emptyTitle: t("common.empty"),
			emptyDescription: t("common.placeholderNote")
		}) })
	});
}
var ACTIONS = [
	{
		id: "sale",
		labelKey: "quickAction.newSale",
		descKey: "quickAction.newSale.desc",
		icon: ShoppingCart,
		to: "/cashier/"
	},
	{
		id: "inventory",
		labelKey: "quickAction.addInventory",
		descKey: "quickAction.addInventory.desc",
		icon: Package,
		to: "/inventory/"
	},
	{
		id: "price",
		labelKey: "quickAction.setPrice",
		descKey: "quickAction.setPrice.desc",
		icon: Coins,
		to: "/gold-prices/"
	},
	{
		id: "reconcile",
		labelKey: "quickAction.reconcile",
		descKey: "quickAction.reconcile.desc",
		icon: Scale,
		to: "/reconciliation/"
	},
	{
		id: "reports",
		labelKey: "quickAction.reports",
		descKey: "quickAction.reports.desc",
		icon: FileText,
		to: "/reports/"
	},
	{
		id: "users",
		labelKey: "quickAction.users",
		descKey: "quickAction.users.desc",
		icon: Users,
		to: "/users/"
	}
];
/**
* Quick-action card grid.
* All routes are stable — updating them here requires no changes elsewhere.
* Pure presentation: no service calls, no state.
*/
function QuickActionsSection({ t, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
		title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3",
			children: ACTIONS.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionCard, {
				icon: action.icon,
				label: t(action.labelKey),
				description: t(action.descKey),
				to: action.to
			}, action.id))
		})
	});
}
/**
* System health section.
* All services are currently placeholders wired to mock statuses.
* Future: receive statuses from a health-check query.
* No fetching — receives data or uses built-in defaults.
*/
function SystemHealthSection({ t, title, services }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
		title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-2 sm:grid-cols-2 md:grid-cols-3",
			children: (services ?? [
				{
					id: "api",
					label: "API Server",
					status: "online",
					statusLabelKey: "health.online"
				},
				{
					id: "db",
					label: "Database",
					status: "online",
					statusLabelKey: "health.online"
				},
				{
					id: "env",
					label: "Environment",
					status: "online",
					statusLabelKey: "health.online"
				},
				{
					id: "ai",
					label: "AI Service",
					status: "unknown",
					statusLabelKey: "health.unknown"
				},
				{
					id: "camera",
					label: "Camera System",
					status: "unknown",
					statusLabelKey: "health.unknown"
				},
				{
					id: "yolo",
					label: "YOLO Pipeline",
					status: "unknown",
					statusLabelKey: "health.unknown"
				}
			]).map((svc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemHealthChip, {
				label: svc.label,
				status: svc.status,
				statusLabel: t(svc.statusLabelKey)
			}, svc.id))
		})
	});
}
/**
* Dashboard route — the single orchestration layer for /dashboard.
*/
function DashboardPage() {
	const { t, locale } = useI18n();
	const { data: dashboard, isLoading: dashLoading } = useQuery({
		queryKey: queryKeys.dashboard(),
		queryFn: () => services.dashboard.summary()
	});
	const { data: analytics, isLoading: analyticsLoading } = useQuery({
		queryKey: queryKeys.analytics.summary(),
		queryFn: () => services.analytics.summary()
	});
	const { data: invoicesPage, isLoading: invoicesLoading } = useQuery({
		queryKey: queryKeys.sales.invoices({ pageSize: 5 }),
		queryFn: () => services.sales.listInvoices({ pageSize: 5 })
	});
	const prices = dashboard?.prices ?? [];
	const activity = dashboard?.recentActivity ?? [];
	const alerts = dashboard?.alerts ?? [];
	const invoices = invoicesPage?.items ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: t("dashboard.title"),
			description: t("dashboard.subtitle")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiSection, {
			data: dashboard,
			isLoading: dashLoading,
			t,
			locale
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldPricePanel, {
			prices,
			isLoading: dashLoading,
			isLive: false,
			lastUpdated: dashboard?.prices?.[0]?.date,
			title: t("dashboard.goldToday"),
			description: t("goldPrices.subtitle"),
			locale
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartSection, {
			analytics,
			isLoading: analyticsLoading,
			t,
			locale
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivitySection, {
					events: activity,
					isLoading: dashLoading,
					t,
					locale
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertsSection, {
				alerts,
				isLoading: dashLoading,
				t,
				locale
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentTransactionsSection, {
			invoices,
			isLoading: invoicesLoading,
			t,
			locale,
			title: t("dashboard.recentTransactions")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionsSection, {
				t,
				title: t("dashboard.quickActions")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemHealthSection, {
				t,
				title: t("dashboard.systemHealth")
			})]
		})
	] });
}
//#endregion
export { DashboardPage as component };
