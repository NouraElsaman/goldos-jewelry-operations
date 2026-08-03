import { a as __toESM } from "../_runtime.mjs";
import { r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as cn, o as useI18n } from "./router-DG3UxGfP.mjs";
import { c as getCurrentRole, s as canEdit } from "./router-DG3UxGfP2.mjs";
import { t as Button } from "./button-CeGv9o7A.mjs";
import { t as Input } from "./input-CeXGM_CH.mjs";
import { n as formatDate, r as formatMoney, t as Skeleton } from "./format-fsSknbrn.mjs";
import { C as Minus, D as LoaderCircle, c as TrendingDown, s as TrendingUp, z as Coins } from "../_libs/lucide-react.mjs";
import { t as services } from "./services-ma1md5hz.mjs";
import { t as queryKeys } from "./query-keys-nZ6Wk2Ze.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageHeader } from "./page-header-Cq4ZWKKZ.mjs";
import { t as ChartContainer } from "./chart-container-D803bb3t.mjs";
import { i as cardHover, t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
import { t as SectionCard } from "./section-card-DQskpnzl.mjs";
import { r as RealtimeIndicator, t as AreaChartWidget } from "./chart-widgets-B_kM9UEX.mjs";
import { n as TableContainer, t as DataTable } from "./data-table-wQVLPhEH.mjs";
import { t as Label } from "./label-B4HagTrf.mjs";
import { a as numberType, o as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gold-prices-aqnxXN71.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sourceConfig = {
	manual: {
		label: "Manual",
		labelAr: "يدوي",
		className: "border-info/25 bg-info/10 text-info font-semibold"
	},
	admin_override: {
		label: "Admin",
		labelAr: "مدير",
		className: "border-gold/35 bg-gold-soft/80 text-gold-deep font-semibold"
	},
	mock: {
		label: "Mock",
		labelAr: "تجريبي",
		className: "border-border/80 bg-surface-muted/90 text-muted-foreground font-semibold"
	},
	external_api: {
		label: "API",
		labelAr: "API",
		className: "border-success/25 bg-success/10 text-success font-semibold"
	}
};
/**
* Compact pill badge indicating the origin of a gold price.
* Business-agnostic: works for any entity with a PriceSource.
*/
function PriceSourceBadge({ source, locale = "ar", className }) {
	const config = sourceConfig[source];
	const label = locale === "ar" ? config.labelAr : config.label;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap", config.className, className),
		children: label
	});
}
/**
* Inline price change indicator: icon + formatted percentage.
* Larger and more prominent than TrendBadge — designed for price-focused UIs.
* Business-agnostic: works for any numeric change value.
*/
function PriceChangeIndicator({ changePct, direction, className }) {
	const Icon = direction === "up" ? TrendingUp : direction === "down" ? TrendingDown : Minus;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 text-sm font-semibold", direction === "up" && "text-success", direction === "down" && "text-destructive", direction === "flat" && "text-muted-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-4",
			"aria-hidden": true
		}), changePct]
	});
}
/** All karats this shop supports, in display order. */
var SUPPORTED_KARATS = [
	24,
	22,
	21,
	18,
	14
];
function getPriceDirection(changePct) {
	if (changePct == null || changePct === 0) return "flat";
	return changePct > 0 ? "up" : "down";
}
function formatChangePct(changePct) {
	if (changePct == null) return "—";
	return `${changePct > 0 ? "+" : ""}${changePct.toFixed(2)}%`;
}
function groupPricesByDate(prices) {
	const map = /* @__PURE__ */ new Map();
	for (const p of prices) {
		const existing = map.get(p.date) ?? {
			date: p.date,
			rates: {},
			changePcts: {},
			source: p.source
		};
		existing.rates[p.karat] = p.rate;
		if (p.changePct !== void 0) existing.changePcts[p.karat] = p.changePct;
		map.set(p.date, existing);
	}
	return Array.from(map.values()).sort((a, b) => b.date.localeCompare(a.date));
}
/**
* Extracts a karat's trend series from history for a line/area chart.
* Returns { label: date, value: rate }[]
*/
function extractKaratTrend(prices, karat) {
	return prices.filter((p) => p.karat === karat).sort((a, b) => a.date.localeCompare(b.date)).map((p) => ({
		label: p.date.slice(5),
		value: p.rate
	}));
}
/**
* Individual karat price card.
* Full-detail: current rate, day change, source badge, last-update label.
* Prepared for realtime: pass `isLive` when WebSocket is active.
*/
function PriceCard({ price, locale, isLive = false }) {
	const direction = getPriceDirection(price.changePct);
	const changePctStr = formatChangePct(price.changePct);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		...cardHover,
		className: cn("group flex flex-col justify-between gap-4 rounded-2xl border border-border bg-surface p-5.5 shadow-soft transition-all duration-200 hover:border-border-strong hover:shadow-raised", direction === "up" && "hover:border-success/30", direction === "down" && "hover:border-destructive/30"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft/80 text-gold-deep shadow-hairline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, {
							className: "size-5",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base font-bold tracking-tight text-foreground",
						children: ["عيار ", price.karat]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold text-muted-foreground/80",
						children: [price.karat, "K"]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [price.source ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceSourceBadge, {
						source: price.source,
						locale
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RealtimeIndicator, { active: isLive })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				"data-numeric": true,
				className: "text-2xl font-bold tracking-tight text-foreground sm:text-[1.65rem] leading-none",
				children: formatMoney(price.rate, locale)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground/80",
				children: locale === "ar" ? "لكل جرام" : "per gram"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-t border-border/60 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceChangeIndicator, {
					changePct: changePctStr,
					direction
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
					className: "text-xs text-muted-foreground/80",
					children: formatDate(price.date, locale)
				})]
			})
		]
	});
}
/**
* Gold price card grid — 5 karats in a responsive grid.
* Pure presentation: receives today's prices from the route.
*/
function PriceCardGrid({ prices, isLoading, isLive = false, locale }) {
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5.5 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "size-10 rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-14 rounded-full" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-32 rounded-xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-20 rounded-lg" })
			]
		}, i))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
		children: prices.map((price) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceCard, {
			price,
			locale,
			isLive
		}, price.karat))
	});
}
var KARAT_COLORS = {
	24: "var(--color-gold)",
	22: "var(--color-chart-2)",
	21: "var(--color-chart-3)",
	18: "var(--color-chart-4)",
	14: "var(--color-chart-5)"
};
/**
* Karat selector tab strip — switches which karat trend is displayed.
*/
function KaratTabs({ active, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1 rounded-xl bg-surface-muted p-1",
		children: SUPPORTED_KARATS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => onChange(k),
			className: cn("rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors", active === k ? "bg-surface text-foreground shadow-hairline" : "text-muted-foreground hover:text-foreground"),
			children: [k, "K"]
		}, k))
	});
}
/**
* Price trend chart — area chart for selected karat, karat tab switcher.
* Uses the pricing engine's extractKaratTrend() to prepare chart data.
* Reuses shared AreaChartWidget. No fetching.
*/
function PriceTrendChart({ history, isLoading, t, locale }) {
	const [activeKarat, setActiveKarat] = (0, import_react.useState)(24);
	const chartData = (0, import_react.useMemo)(() => extractKaratTrend(history, activeKarat), [history, activeKarat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
		title: t("goldPrices.trendChart"),
		description: t("goldPrices.trendDesc"),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KaratTabs, {
			active: activeKarat,
			onChange: setActiveKarat
		}),
		children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-60 w-full animate-pulse rounded-xl bg-surface-muted" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaChartWidget, {
			data: chartData,
			height: 240,
			color: KARAT_COLORS[activeKarat],
			valueFormatter: (v) => formatMoney(v, locale)
		})
	});
}
/**
* Historical price table.
* Groups flat GoldPrice[] by date → one row per day with all karats as columns.
* Memoized columns; grouping computed once per data change.
* Supports pagination via parent's page/pageSize state.
*/
function PriceHistoryTable({ prices, isLoading, t, locale }) {
	const rows = (0, import_react.useMemo)(() => groupPricesByDate(prices), [prices]);
	const columns = (0, import_react.useMemo)(() => [
		{
			id: "date",
			header: t("table.status").replace("الحالة", "التاريخ").replace("Status", "Date"),
			width: "9rem",
			cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
				className: "font-medium text-foreground",
				children: formatDate(row.date, locale)
			})
		},
		...SUPPORTED_KARATS.map((karat) => ({
			id: `k${karat}`,
			header: `${karat}K`,
			numeric: true,
			cell: (row) => {
				const rate = row.rates[karat];
				const changePct = row.changePcts[karat];
				if (rate == null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "—"
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-end gap-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"data-numeric": true,
						className: "text-sm font-semibold text-foreground",
						children: formatMoney(rate, locale)
					}), changePct !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceChangeIndicator, {
						changePct: formatChangePct(changePct),
						direction: getPriceDirection(changePct),
						className: "text-xs"
					}) : null]
				});
			}
		})),
		{
			id: "source",
			header: t("table.status").replace("الحالة", "المصدر").replace("Status", "Source"),
			cell: (row) => row.source ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceSourceBadge, {
				source: row.source,
				locale
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "—"
			})
		}
	], [t, locale]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
		title: t("goldPrices.history"),
		padded: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns,
			rows,
			getRowId: (row) => row.date,
			isLoading,
			emptyTitle: t("common.empty"),
			emptyDescription: t("common.placeholderNote")
		}) })
	});
}
var rateSchema = numberType({ invalid_type_error: "يجب إدخال رقم" }).positive("يجب أن يكون السعر أكبر من صفر").max(1e4, "السعر مرتفع جداً").multipleOf(.01, "يُسمح بمنزلتين عشريتين كحد أقصى");
var setPricesSchema = objectType({ rates: objectType({
	24: rateSchema,
	22: rateSchema,
	21: rateSchema,
	18: rateSchema,
	14: rateSchema
}) });
/**
* Set Today's Prices form — all 5 karats in one submit.
* Validates with Zod; loading/success/error states included.
* No service calls: `onSubmit` callback owned by the route/feature.
*/
function SetPricesForm({ defaultValues, onSubmit, isSubmitting, t }) {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: u(setPricesSchema),
		defaultValues: defaultValues ?? { rates: {
			24: 0,
			22: 0,
			21: 0,
			18: 0,
			14: 0
		} }
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
		title: t("goldPrices.setToday"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(onSubmit),
			noValidate: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
				children: SUPPORTED_KARATS.map((karat) => {
					const key = karat;
					const error = errors.rates?.[key];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								htmlFor: `rate-${karat}`,
								className: cn("flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", error && "text-destructive"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-6 items-center justify-center rounded-lg border border-gold/30 bg-gold-soft/80 text-xs font-bold text-gold-deep",
										children: karat
									}),
									"عيار ",
									karat
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: `rate-${karat}`,
									type: "number",
									step: "0.01",
									min: "0",
									placeholder: "0.00",
									dir: "ltr",
									className: cn("pe-12 text-end font-mono font-semibold text-foreground", error && "border-destructive focus-visible:ring-destructive"),
									...register(`rates.${karat}`, { valueAsNumber: true })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pointer-events-none absolute inset-y-0 end-3.5 flex items-center text-xs font-semibold text-muted-foreground/70",
									children: "ج.م"
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-destructive",
								children: error.message
							}) : null
						]
					}, karat);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground/80",
					children: t("goldPrices.formNote")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					variant: "gold",
					disabled: isSubmitting,
					className: "h-10 min-w-36 gap-2 rounded-xl text-sm font-semibold",
					children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "size-4 animate-spin",
						"aria-hidden": true
					}) : null, t("common.save")]
				})]
			})]
		})
	});
}
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
function GoldPricesPage() {
	const { t, locale } = useI18n();
	const queryClient = useQueryClient();
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const { data: todayPrices = [], isLoading: todayLoading } = useQuery({
		queryKey: queryKeys.goldPrices.today(),
		queryFn: () => services.goldPrices.today()
	});
	const { data: historyPage, isLoading: historyLoading } = useQuery({
		queryKey: queryKeys.goldPrices.history({ pageSize: 30 }),
		queryFn: () => services.goldPrices.history({ pageSize: 30 })
	});
	const historyPrices = historyPage?.items ?? [];
	const { mutateAsync: setPrices } = useMutation({
		mutationFn: (input) => services.goldPrices.setMultiple({
			rates: input.rates,
			source: "manual"
		}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.goldPrices.today() });
			queryClient.invalidateQueries({ queryKey: ["gold-prices", "history"] });
		}
	});
	const handleSetPrices = async (values) => {
		setIsSubmitting(true);
		try {
			await setPrices(values);
			toast.success(locale === "ar" ? "تم تحديث الأسعار بنجاح" : "Prices updated successfully");
		} catch {
			toast.error(locale === "ar" ? "تعذّر حفظ الأسعار" : "Failed to save prices");
		} finally {
			setIsSubmitting(false);
		}
	};
	const defaultRates = todayPrices.reduce((acc, p) => ({
		...acc,
		[p.karat]: p.rate
	}), {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: t("goldPrices.title"),
			description: t("goldPrices.subtitle")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceCardGrid, {
			prices: todayPrices,
			isLoading: todayLoading,
			isLive: false,
			locale
		}),
		canEdit(getCurrentRole(), "/gold-prices") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetPricesForm, {
			defaultValues: Object.keys(defaultRates).length > 0 ? { rates: defaultRates } : void 0,
			onSubmit: handleSetPrices,
			isSubmitting,
			t
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTrendChart, {
			history: historyPrices,
			isLoading: historyLoading,
			t,
			locale
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceHistoryTable, {
			prices: historyPrices,
			isLoading: historyLoading,
			t,
			locale
		})
	] });
}
//#endregion
export { GoldPricesPage as component };
