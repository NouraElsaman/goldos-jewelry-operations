import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { i as cn } from "./router-DG3UxGfP.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/motion-components-D3lvW4Ya.js
var import_jsx_runtime = require_jsx_runtime();
var duration = {
	fast: .12,
	base: .18,
	slow: .26
};
var easing = [
	.22,
	1,
	.36,
	1
];
var transition = {
	fast: {
		duration: duration.fast,
		ease: easing
	},
	base: {
		duration: duration.base,
		ease: easing
	},
	slow: {
		duration: duration.slow,
		ease: easing
	},
	spring: {
		type: "spring",
		stiffness: 380,
		damping: 32,
		mass: .7
	}
};
transition.base, transition.fast;
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 8
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: transition.slow
	},
	exit: {
		opacity: 0,
		y: -6,
		transition: transition.fast
	}
};
transition.spring, transition.fast;
transition.slow, transition.fast;
var pageTransition = {
	hidden: {
		opacity: 0,
		y: 6
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			...transition.slow,
			staggerChildren: .035
		}
	},
	exit: {
		opacity: 0,
		y: -4,
		transition: transition.fast
	}
};
var staggerList = {
	hidden: {},
	visible: { transition: {
		staggerChildren: .045,
		delayChildren: .02
	} }
};
/** Hover treatment for interactive cards. */
var cardHover = {
	whileHover: {
		y: -2,
		transition: transition.fast
	},
	whileTap: {
		y: 0,
		scale: .995,
		transition: transition.fast
	}
};
/** Wraps page content with the shared enter/exit transition. */
function PageTransition({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		animate: "visible",
		exit: "exit",
		variants: pageTransition,
		className: cn("flex flex-col gap-8", className),
		children
	});
}
/** Staggered container for lists and card grids. */
function StaggerGroup({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		animate: "visible",
		variants: staggerList,
		className,
		children
	});
}
function StaggerItem({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants: fadeUp,
		className,
		children
	});
}
//#endregion
export { fadeUp as a, cardHover as i, StaggerGroup as n, staggerList as o, StaggerItem as r, PageTransition as t };
