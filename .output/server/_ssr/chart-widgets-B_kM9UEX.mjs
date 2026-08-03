import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as cn } from "./router-DG3UxGfP.mjs";
import { a as Area, c as Cell, d as Legend, i as XAxis, l as ResponsiveContainer, n as PieChart, o as CartesianGrid, r as YAxis, s as Pie, t as AreaChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chart-widgets-B_kM9UEX.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Pulsing "live" indicator dot for realtime data surfaces.
* Use alongside gold prices, activity feeds, or any WebSocket-backed widget.
* When `active` is false it renders as a static muted dot (paused / offline).
*/
function RealtimeIndicator({ active = true, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5", className),
		"aria-label": active ? "Live data" : "Paused",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative flex size-2",
			children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-success shadow-[0_0_6px_0_oklch(0.55_0.13_148/0.5)]" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex size-2 rounded-full bg-muted-foreground/60" })
		}), label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold text-muted-foreground",
			children: label
		}) : null]
	});
}
/**
* Reusable Recharts wrappers.
*
* Business-agnostic chart primitives used across Dashboard, Analytics, Reports.
* No domain knowledge — callers supply data and labels.
*
* Using Recharts v2 which is already installed in the project.
*/
var CHART_COLORS = [
	"var(--color-gold)",
	"var(--color-chart-2)",
	"var(--color-chart-3)",
	"var(--color-chart-4)",
	"var(--color-chart-5)"
];
function ChartTooltip({ active, payload, label, formatter }) {
	if (!active || !payload?.length) return null;
	const value = payload[0].value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border/80 bg-surface/95 px-3.5 py-2.5 text-xs shadow-floating backdrop-blur-md",
		children: [label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-0.5 font-medium text-muted-foreground/80",
			children: label
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			"data-numeric": true,
			className: "text-sm font-bold text-foreground",
			children: formatter ? formatter(value) : value.toLocaleString()
		})]
	});
}
function AreaChartWidget({ data, height = 240, color = CHART_COLORS[0], valueFormatter, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-full", className),
		style: { height },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data: data.map((d) => ({
					name: d.label,
					value: d.value
				})),
				margin: {
					top: 4,
					right: 4,
					left: -16,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "areaGradient",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "5%",
							stopColor: color,
							stopOpacity: .2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "95%",
							stopColor: color,
							stopOpacity: 0
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						vertical: false,
						stroke: "var(--color-border)",
						strokeDasharray: "4 2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "name",
						tick: {
							fontSize: 11,
							fill: "var(--color-muted-foreground)"
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: {
							fontSize: 11,
							fill: "var(--color-muted-foreground)"
						},
						axisLine: false,
						tickLine: false,
						tickFormatter: valueFormatter
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { formatter: valueFormatter }),
						cursor: {
							stroke: "var(--color-border)",
							strokeWidth: 1
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "value",
						stroke: color,
						strokeWidth: 2,
						fill: "url(#areaGradient)",
						dot: false,
						activeDot: {
							r: 4,
							fill: color
						}
					})
				]
			})
		})
	});
}
function DonutChartWidget({ data, height = 240, valueFormatter, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-full", className),
		style: { height },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: data.map((d) => ({
						name: d.label,
						value: d.value
					})),
					cx: "50%",
					cy: "50%",
					innerRadius: "55%",
					outerRadius: "80%",
					paddingAngle: 3,
					dataKey: "value",
					children: data.map((slice, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: slice.color ?? CHART_COLORS[index % CHART_COLORS.length] }, slice.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { formatter: valueFormatter }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
					iconType: "circle",
					iconSize: 8,
					wrapperStyle: { fontSize: 11 },
					formatter: (value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "var(--color-muted-foreground)" },
						children: value
					})
				})
			] })
		})
	});
}
//#endregion
export { DonutChartWidget as n, RealtimeIndicator as r, AreaChartWidget as t };
