import { a as __toESM } from "../_runtime.mjs";
import { n as Controller, r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { i as cn, o as useI18n } from "./router-DG3UxGfP.mjs";
import { t as Button } from "./button-CeGv9o7A.mjs";
import { t as Input } from "./input-CeXGM_CH.mjs";
import { t as appConfig } from "./app-DaSg3NUE.mjs";
import { K as ChevronDown, U as ChevronUp, a as Upload, q as Check } from "../_libs/lucide-react.mjs";
import { t as services } from "./services-ma1md5hz.mjs";
import { t as PageHeader } from "./page-header-Cq4ZWKKZ.mjs";
import { t as PageTransition } from "./motion-components-D3lvW4Ya.mjs";
import { t as SectionCard } from "./section-card-DQskpnzl.mjs";
import { t as Label } from "./label-B4HagTrf.mjs";
import { a as numberType, c as unionType, i as literalType, n as coerce, o as objectType, r as enumType, s as stringType, t as booleanType } from "../_libs/zod.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BeILi6qL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-BRibnAhh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Field chrome shared by every input: label, description, error, a11y wiring.
* Inputs stay dumb; validation comes from React Hook Form + Zod.
*/
function FieldShell({ id, label, description, error, required, className, children }) {
	const describedBy = [description ? `${id}-description` : null, error ? `${id}-error` : null].filter(Boolean).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("space-y-2", className),
		"data-invalid": error ? "" : void 0,
		children: [
			label ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor: id,
				className: "text-sm font-medium text-foreground",
				children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-destructive",
					children: " *"
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-describedby": describedBy || void 0,
				children
			}),
			description && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${id}-description`,
				className: "text-xs text-muted-foreground",
				children: description
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${id}-error`,
				role: "alert",
				className: "text-xs font-medium text-destructive",
				children: error
			}) : null
		]
	});
}
/**
* Bridges React Hook Form to any presentational control while keeping the
* shared label/description/error chrome in one place.
*/
function ControlledField({ control, name, label, description, required, className, render }) {
	const id = `field-${String(name)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, {
		control,
		name,
		render: ({ field, fieldState }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
			id,
			label,
			description,
			required,
			className,
			error: fieldState.error?.message,
			children: render({
				id,
				value: field.value,
				onChange: field.onChange,
				onBlur: field.onBlur,
				invalid: Boolean(fieldState.error)
			})
		})
	});
}
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var invalidRing = "aria-invalid:border-destructive aria-invalid:ring-destructive/20";
function TextField(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlledField, {
		...props,
		render: ({ id, value, onChange, onBlur, invalid }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			value: value ?? "",
			placeholder: props.placeholder,
			disabled: props.disabled,
			"aria-invalid": invalid,
			onBlur,
			onChange: (event) => onChange(event.target.value),
			className: cn("h-11 rounded-xl", invalidRing)
		})
	});
}
function PasswordField(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlledField, {
		...props,
		render: ({ id, value, onChange, onBlur, invalid }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			type: "password",
			value: value ?? "",
			placeholder: props.placeholder,
			disabled: props.disabled,
			"aria-invalid": invalid,
			onBlur,
			onChange: (event) => onChange(event.target.value),
			className: cn("h-11 rounded-xl", invalidRing)
		})
	});
}
function NumericField({ step, suffix, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlledField, {
		...props,
		render: ({ id, value, onChange, onBlur, invalid }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id,
				type: "number",
				inputMode: "decimal",
				step,
				value: value === void 0 || value === null ? "" : String(value),
				placeholder: props.placeholder,
				disabled: props.disabled,
				"aria-invalid": invalid,
				onBlur,
				onChange: (event) => onChange(event.target.value === "" ? void 0 : Number(event.target.value)),
				"data-numeric": true,
				className: cn("h-11 rounded-xl pe-14", invalidRing)
			}), suffix ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute inset-y-0 end-3 flex items-center text-xs font-medium text-muted-foreground",
				children: suffix
			}) : null]
		})
	});
}
function CurrencyField(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumericField, {
		...props,
		step: "0.01",
		suffix: appConfig.currency
	});
}
function SelectField({ options, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlledField, {
		...props,
		render: ({ id, value, onChange, invalid }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value: value ?? "",
			onValueChange: onChange,
			disabled: props.disabled ?? false,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				id,
				"aria-invalid": invalid,
				className: cn("!h-11 rounded-xl", invalidRing),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: props.placeholder })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option.value,
				children: option.label
			}, option.value)) })]
		})
	});
}
function CheckboxField(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlledField, {
		...props,
		label: void 0,
		render: ({ id, value, onChange, invalid }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: id,
			className: "flex items-center gap-3 text-sm text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
				id,
				checked: Boolean(value),
				disabled: props.disabled,
				"aria-invalid": invalid,
				onCheckedChange: (checked) => onChange(checked === true)
			}), props.label]
		})
	});
}
function TextareaField(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlledField, {
		...props,
		render: ({ id, value, onChange, onBlur, invalid }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
			id,
			rows: 4,
			value: value ?? "",
			placeholder: props.placeholder,
			disabled: props.disabled,
			"aria-invalid": invalid,
			onBlur,
			onChange: (event) => onChange(event.target.value),
			className: cn("rounded-xl", invalidRing)
		})
	});
}
/**
* Reusable Zod primitives. Business rules live in feature modules; these are
* only shape/format guards shared by every form.
*/
var requiredString = (message = "Required") => stringType().trim().min(1, message);
stringType().trim().email("Enter a valid email address");
numberType({ invalid_type_error: "Enter a number" }).min(0, "Must be zero or more").refine((value) => Number.isFinite(value), "Invalid amount");
numberType({ invalid_type_error: "Enter a weight" }).min(0, "Must be zero or more");
unionType([
	literalType(24),
	literalType(22),
	literalType(21),
	literalType(18)
]);
stringType().trim().min(4, "Scan or type a valid code").max(64, "Code is too long");
appConfig.moneyPrecision, appConfig.weightPrecision;
var storeSchema = objectType({
	shopNameAr: requiredString(),
	shopName: requiredString(),
	ownerName: requiredString(),
	email: stringType().email("البريد الإلكتروني غير صحيح"),
	phone: stringType().regex(/^01[0125][0-9]{8}$/, "يجب أن يكون رقم هاتف مصري صحيح"),
	commercialRegister: stringType().regex(/^\d+$/, "يجب أن يحتوي على أرقام فقط"),
	taxId: stringType().regex(/^\d+$/, "يجب أن يحتوي على أرقام فقط"),
	governorate: requiredString(),
	city: requiredString(),
	address: requiredString(),
	currency: stringType()
});
var receiptSchema = objectType({
	receiptHeader: requiredString(),
	receiptFooter: requiredString(),
	returnPolicy: requiredString()
});
var pricingSchema = objectType({
	vatRate: coerce.number().min(0).max(100),
	vatOnManufacturingOnly: booleanType(),
	defaultManufacturingCost: coerce.number().min(0),
	roundingMode: enumType([
		"none",
		"nearest_pound",
		"nearest_5_pounds"
	])
});
var securitySchema = objectType({
	currentPassword: requiredString(),
	newPassword: stringType().min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل"),
	confirmPassword: requiredString()
}).refine((data) => data.newPassword === data.confirmPassword, {
	message: "كلمات المرور غير متطابقة",
	path: ["confirmPassword"]
});
function SettingsPage() {
	const { t } = useI18n();
	const queryClient = useQueryClient();
	const { data: settings, isLoading } = useQuery({
		queryKey: ["settings"],
		queryFn: () => services.settings.get()
	});
	const updateMutation = useMutation({
		mutationFn: (newSettings) => services.settings.update(newSettings),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["settings"] });
			toast.success(t("common.save"));
		}
	});
	const [logoPreview, setLogoPreview] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleLogoUpload = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setLogoPreview(url);
		}
	};
	const storeForm = useForm({
		resolver: u(storeSchema),
		mode: "onChange"
	});
	const receiptForm = useForm({
		resolver: u(receiptSchema),
		mode: "onChange"
	});
	const pricingForm = useForm({
		resolver: u(pricingSchema),
		mode: "onChange"
	});
	const securityForm = useForm({
		resolver: u(securitySchema),
		mode: "onChange"
	});
	(0, import_react.useEffect)(() => {
		if (settings) {
			storeForm.reset(settings);
			receiptForm.reset(settings);
			pricingForm.reset(settings);
			if (settings.logoUrl) setLogoPreview(settings.logoUrl);
		}
	}, [
		settings,
		storeForm,
		receiptForm,
		pricingForm
	]);
	const isAnyDirty = storeForm.formState.isDirty || receiptForm.formState.isDirty || pricingForm.formState.isDirty || securityForm.formState.isDirty;
	(0, import_react.useEffect)(() => {
		const handleBeforeUnload = (e) => {
			if (isAnyDirty) {
				e.preventDefault();
				e.returnValue = "";
			}
		};
		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => window.removeEventListener("beforeunload", handleBeforeUnload);
	}, [isAnyDirty]);
	if (isLoading) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: t("settings.title"),
		description: t("settings.subtitle")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
		defaultValue: "store",
		className: "gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
				className: "rounded-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "store",
						className: "rounded-lg",
						children: "معلومات المحل"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "receipt",
						className: "rounded-lg",
						children: "الفاتورة"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "pricing",
						className: "rounded-lg",
						children: "التسعير والضرائب"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "security",
						className: "rounded-lg",
						children: "الأمان"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "store",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "معلومات المحل",
					description: "البيانات الأساسية للمحل والتي تظهر في التقارير والفواتير.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: storeForm.handleSubmit((data) => updateMutation.mutate(data)),
						className: "grid gap-6 md:grid-cols-2 max-w-4xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2 flex items-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-24 shrink-0 items-center justify-center rounded-2xl border border-dashed border-border bg-surface-muted/50 overflow-hidden cursor-pointer hover:bg-surface-muted transition-colors",
									onClick: () => fileInputRef.current?.click(),
									children: logoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: logoPreview,
										alt: "Logo",
										className: "size-full object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-6 text-muted-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-medium",
											children: "شعار المحل"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "صورة بصيغة PNG أو JPG. يفضل خلفية شفافة."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											ref: fileInputRef,
											className: "hidden",
											accept: "image/*",
											onChange: handleLogoUpload
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								control: storeForm.control,
								name: "shopNameAr",
								label: "اسم المحل (بالعربية)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								control: storeForm.control,
								name: "shopName",
								label: "اسم المحل (بالإنجليزية)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								control: storeForm.control,
								name: "ownerName",
								label: "اسم المالك"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								control: storeForm.control,
								name: "email",
								label: "البريد الإلكتروني"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								control: storeForm.control,
								name: "phone",
								label: "رقم الهاتف"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "opacity-70 pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									control: storeForm.control,
									name: "currency",
									label: "العملة"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								control: storeForm.control,
								name: "commercialRegister",
								label: "السجل التجاري"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								control: storeForm.control,
								name: "taxId",
								label: "البطاقة الضريبية"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								control: storeForm.control,
								name: "governorate",
								label: "المحافظة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								control: storeForm.control,
								name: "city",
								label: "المدينة / المنطقة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									control: storeForm.control,
									name: "address",
									label: "العنوان بالتفصيل"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: !storeForm.formState.isDirty || !storeForm.formState.isValid || updateMutation.isPending,
									className: "h-11 w-32 rounded-xl",
									children: updateMutation.isPending ? "جاري الحفظ..." : t("common.save")
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "receipt",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "إعدادات الفاتورة",
					description: "النصوص والسياسات التي تظهر أسفل فواتير العملاء.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: receiptForm.handleSubmit((data) => updateMutation.mutate(data)),
						className: "grid gap-6 max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextareaField, {
								control: receiptForm.control,
								name: "receiptHeader",
								label: "ترويسة الفاتورة",
								placeholder: "أهلاً بك في جوهرة تك..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextareaField, {
								control: receiptForm.control,
								name: "receiptFooter",
								label: "تذييل الفاتورة",
								placeholder: "شكراً لزيارتكم..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextareaField, {
								control: receiptForm.control,
								name: "returnPolicy",
								label: "سياسة الاسترجاع والاستبدال",
								placeholder: "الاسترجاع خلال ١٤ يوم..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: !receiptForm.formState.isDirty || !receiptForm.formState.isValid || updateMutation.isPending,
								className: "h-11 w-32 rounded-xl",
								children: updateMutation.isPending ? "جاري الحفظ..." : t("common.save")
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "pricing",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "التسعير والضرائب",
					description: "إعدادات ضريبة القيمة المضافة والمصنعية الافتراضية.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: pricingForm.handleSubmit((data) => updateMutation.mutate(data)),
						className: "grid gap-6 max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyField, {
									control: pricingForm.control,
									name: "defaultManufacturingCost",
									label: "المصنعية الافتراضية (للجرام)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									control: pricingForm.control,
									name: "vatRate",
									label: "نسبة ضريبة القيمة المضافة (%)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "-mt-3 text-xs text-muted-foreground",
								children: "المصنعية الافتراضية هي قيمة استرشادية ويمكن تغييرها لكل صنف على حدة."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxField, {
								control: pricingForm.control,
								name: "vatOnManufacturingOnly",
								label: "تطبيق الضريبة على المصنعية فقط (وليس على الذهب)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								control: pricingForm.control,
								name: "roundingMode",
								label: "تقريب الإجمالي",
								options: [
									{
										value: "none",
										label: "بدون تقريب"
									},
									{
										value: "nearest_pound",
										label: "لأقرب جنيه"
									},
									{
										value: "nearest_5_pounds",
										label: "لأقرب ٥ جنيهات"
									}
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: !pricingForm.formState.isDirty || !pricingForm.formState.isValid || updateMutation.isPending,
								className: "h-11 w-32 rounded-xl mt-2",
								children: updateMutation.isPending ? "جاري الحفظ..." : t("common.save")
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "security",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "الأمان",
					description: "تغيير كلمة المرور الخاصة بحسابك.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: securityForm.handleSubmit(() => {
							toast.success("تم تغيير كلمة المرور بنجاح");
							securityForm.reset();
						}),
						className: "grid gap-5 max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordField, {
								control: securityForm.control,
								name: "currentPassword",
								label: "كلمة المرور الحالية"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordField, {
								control: securityForm.control,
								name: "newPassword",
								label: "كلمة المرور الجديدة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordField, {
								control: securityForm.control,
								name: "confirmPassword",
								label: "تأكيد كلمة المرور الجديدة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								disabled: !securityForm.formState.isDirty || !securityForm.formState.isValid,
								className: "h-11 w-32 rounded-xl mt-2",
								children: "تحديث كلمة المرور"
							})
						]
					})
				})
			})
		]
	})] });
}
//#endregion
export { SettingsPage as component };
