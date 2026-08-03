import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./router-DG3UxGfP.mjs";
import { t as Button } from "./button-CeGv9o7A.mjs";
import { t as Input } from "./input-CeXGM_CH.mjs";
import { t as logo_ar_default } from "./logo-ar-D1XAwgb9.mjs";
import { $ as ArrowLeft, E as Lock, Q as ArrowRight, f as ShieldAlert, w as Mail } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
import { t as Label } from "./label-B4HagTrf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-D3t-wmrY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { isRTL, setLocale, locale } = useI18n();
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
	const handleSubmit = (e) => {
		e.preventDefault();
		setError(null);
		setIsSubmitting(true);
		setTimeout(() => {
			if (email.trim() === "nourahelaly56@gmail.com" && password === "12345") {
				localStorage.setItem("goldos_auth_token", "temp-mock-jwt-token");
				navigate({ to: "/select-role" });
			} else {
				setError(locale === "ar" ? "البريد الإلكتروني أو كلمة المرور غير صحيحة" : "Invalid email or password");
				setIsSubmitting(false);
			}
		}, 400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, {
		className: "flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "fixed top-0 inset-x-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/80 border-b border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 outline-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_ar_default,
						alt: "جوهرة تك",
						className: "h-9 w-auto object-contain"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLocale(locale === "ar" ? "en" : "ar"),
					className: "rounded-xl border border-border/80 bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-surface-muted transition-all",
					children: locale === "ar" ? "English" : "العربية"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.main, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .26,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "w-full max-w-md space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_ar_default,
							alt: "جوهرة تك",
							className: "h-[64px] w-auto object-contain mx-auto mb-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
							children: locale === "ar" ? "تسجيل الدخول" : "Sign In"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground/80 max-w-xs mx-auto",
							children: locale === "ar" ? "منصة إدارة عمليات الذهب والمجوهرات" : "Jewelry Operations Platform"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border/80 bg-surface p-7 shadow-raised",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4.5",
						noValidate: true,
						children: [
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: -6
								},
								animate: {
									opacity: 1,
									y: 0
								},
								className: "flex items-center gap-2.5 rounded-2xl border border-destructive/30 bg-destructive/8 p-3.5 text-xs font-semibold text-destructive",
								role: "alert",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
									className: "size-4 shrink-0",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: locale === "ar" ? "البريد الإلكتروني" : "Email Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										type: "email",
										required: true,
										placeholder: "nourahelaly56@gmail.com",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										className: "pl-10 font-mono text-sm",
										dir: "ltr"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground/70",
										"aria-hidden": true
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
									children: locale === "ar" ? "كلمة المرور" : "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "password",
										type: "password",
										required: true,
										placeholder: "••••••••",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										className: "pl-10 font-mono text-sm",
										dir: "ltr"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
										className: "pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground/70",
										"aria-hidden": true
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								variant: "gold",
								disabled: isSubmitting,
								className: "w-full h-11 rounded-xl text-sm font-semibold gap-2 shadow-gold mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: locale === "ar" ? "دخول إلى النظام" : "Sign In" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowIcon, {
									className: "size-4",
									"aria-hidden": true
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 border-t border-border/60 pt-4 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground/80 leading-relaxed",
							children: locale === "ar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"بيانات تجريبية: البريد",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-foreground font-semibold",
									children: "nourahelaly56@gmail.com"
								}),
								" ",
								"· كلمة المرور",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-foreground font-semibold",
									children: "12345"
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Demo credentials:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-foreground font-semibold",
									children: "nourahelaly56@gmail.com"
								}),
								" ",
								"· Password",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "font-mono text-foreground font-semibold",
									children: "12345"
								})
							] })
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-8 text-center text-xs text-muted-foreground/70",
				children: ["جوهرة تك · ", (/* @__PURE__ */ new Date()).getFullYear()]
			})
		]
	});
}
//#endregion
export { LoginPage as component };
