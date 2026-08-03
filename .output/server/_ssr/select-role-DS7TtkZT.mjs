import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn, o as useI18n } from "./router-DG3UxGfP.mjs";
import { t as Button } from "./button-CeGv9o7A.mjs";
import { t as logo_ar_default } from "./logo-ar-D1XAwgb9.mjs";
import { $ as ArrowLeft, H as CircleCheck, I as Crown, Q as ArrowRight, u as ShoppingCart, x as Package } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/select-role-DS7TtkZT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ROLES = [
	{
		id: "owner",
		titleAr: "مالك المحل",
		titleEn: "Store Owner",
		descAr: "صلاحية كاملة لإدارة التقارير، المستخدمين، والميزانية والمخزون.",
		descEn: "Full system access to analytics, reports, inventory, and users.",
		icon: Crown
	},
	{
		id: "cashier",
		titleAr: "الكاشير",
		titleEn: "Cashier",
		descAr: "مخصص لإجراء عمليات البيع، الفواتير، وحسابات النقدية والبطاقة.",
		descEn: "Dedicated to point of sale, invoices, cash and card transactions.",
		icon: ShoppingCart
	},
	{
		id: "inventory_manager",
		titleAr: "مسؤول المخزون",
		titleEn: "Inventory Manager",
		descAr: "مخصص لتسجيل الأصناف، جرد الأدراج، وتحديث أسعار الذهب اليومية.",
		descEn: "Dedicated to item registration, tray reconciliation, and daily gold rates.",
		icon: Package
	}
];
function SelectRolePage() {
	const { isRTL, locale } = useI18n();
	const navigate = useNavigate();
	const [selectedRole, setSelectedRole] = (0, import_react.useState)("owner");
	const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
	const handleContinue = () => {
		localStorage.setItem("goldos_user_role", selectedRole);
		navigate({ to: "/dashboard" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, {
		className: "flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-2xl space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_ar_default,
							alt: "جوهرة تك",
							className: "h-[56px] w-auto object-contain mx-auto mb-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
							children: locale === "ar" ? "اختر الدور الوظيفي" : "Select Your Operating Role"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground/80 max-w-md mx-auto leading-relaxed",
							children: locale === "ar" ? "اختر مساحة العمل المخصصة لدورك اليومي داخل محل الذهب" : "Choose the workspace tailored for your daily responsibilities"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: ROLES.map((role) => {
						const Icon = role.icon;
						const isSelected = selectedRole === role.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							type: "button",
							whileHover: { y: -3 },
							whileTap: { scale: .98 },
							onClick: () => setSelectedRole(role.id),
							className: cn("group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-surface p-6 text-start shadow-soft transition-all duration-200 cursor-pointer", isSelected && "border-gold-deep/80 ring-2 ring-gold/40 bg-gold-soft/25 shadow-raised"),
							children: [isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-4 end-4 text-gold-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "size-5",
									"aria-hidden": true
								})
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-surface-muted/80 text-foreground/80 transition-colors group-hover:border-gold/40 group-hover:bg-gold-soft/80 group-hover:text-gold-deep", isSelected && "border-gold/40 bg-gold-soft text-gold-deep shadow-hairline"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5.5",
										"aria-hidden": true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-base font-bold tracking-tight text-foreground",
										children: locale === "ar" ? role.titleAr : role.titleEn
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground/80 leading-relaxed",
										children: locale === "ar" ? role.descAr : role.descEn
									})]
								})]
							})]
						}, role.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "gold",
						onClick: handleContinue,
						className: "h-12 w-full max-w-sm rounded-xl text-base font-semibold gap-2 shadow-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locale === "ar" ? "المتابعة إلى لوحة التحكم" : "Continue to Dashboard" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowIcon, {
							className: "size-4.5",
							"aria-hidden": true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground/70",
						children: locale === "ar" ? "يمكنك تغيير الدور أو الصلاحيات لاحقًا من الإعدادات" : "Role and permissions can be adjusted later in Settings"
					})]
				})
			]
		})
	});
}
//#endregion
export { SelectRolePage as component };
