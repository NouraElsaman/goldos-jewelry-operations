globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/analytics-Cg_9H1nq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"297-jQzuLg5NmGRQkuOPItVGmnbGd14\"",
		"mtime": "2026-08-03T22:28:03.457Z",
		"size": 663,
		"path": "../public/assets/analytics-Cg_9H1nq.js"
	},
	"/assets/app-BMQUG_56.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf-hFV6AkqIwTkNGujELt5lpyI8gb4\"",
		"mtime": "2026-08-03T22:28:03.457Z",
		"size": 207,
		"path": "../public/assets/app-BMQUG_56.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-03T14:35:42.255Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/button-D7sdZ_MT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6cf-9ybvdtPRibBpMD2YyATNybRTeRI\"",
		"mtime": "2026-08-03T22:28:03.473Z",
		"size": 1743,
		"path": "../public/assets/button-D7sdZ_MT.js"
	},
	"/assets/cashier--nAyZFQs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ab-HuIegQ0U2sUcHT9bdS3mdn1rfuY\"",
		"mtime": "2026-08-03T22:28:03.473Z",
		"size": 1451,
		"path": "../public/assets/cashier--nAyZFQs.js"
	},
	"/assets/arrow-right-BSbwTN3h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"115-O1f9Djvy8arsy7HFy5qFDT80sq8\"",
		"mtime": "2026-08-03T22:28:03.471Z",
		"size": 277,
		"path": "../public/assets/arrow-right-BSbwTN3h.js"
	},
	"/assets/chart-container-N2gLKOBA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"319-vQt6vmTV1cFJNNw4I7gzWUOfhnE\"",
		"mtime": "2026-08-03T22:28:03.474Z",
		"size": 793,
		"path": "../public/assets/chart-container-N2gLKOBA.js"
	},
	"/assets/circle-check-C8ANdzSC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-czSoiovBuOzSkzwIz9J59rmfe00\"",
		"mtime": "2026-08-03T22:28:03.476Z",
		"size": 178,
		"path": "../public/assets/circle-check-C8ANdzSC.js"
	},
	"/assets/createLucideIcon-WUCt_1L4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"762-z5Q5YWHYMipt2HINWHjVnTBz32Y\"",
		"mtime": "2026-08-03T22:28:03.476Z",
		"size": 1890,
		"path": "../public/assets/createLucideIcon-WUCt_1L4.js"
	},
	"/assets/data-table-OW-rO60l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f2-gbNIsEBSEvsllj7WJ22IMvp0cH8\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 2290,
		"path": "../public/assets/data-table-OW-rO60l.js"
	},
	"/assets/dashboard-XCJjmdLR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"562a-bf6nAl6r8ghNEANLHwZs3i22AXE\"",
		"mtime": "2026-08-03T22:28:03.476Z",
		"size": 22058,
		"path": "../public/assets/dashboard-XCJjmdLR.js"
	},
	"/assets/dist--6S0vuBz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b4c-2e+CW0wBcBNaixbfk1k2Sq5/kVE\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 2892,
		"path": "../public/assets/dist--6S0vuBz.js"
	},
	"/assets/dist-3SuycPLI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c3d-rM4JgVnHh1MGOgGDALSY0vCB4uk\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 11325,
		"path": "../public/assets/dist-3SuycPLI.js"
	},
	"/assets/dist-BlF9WkUr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"289-YKCltdYrb6+SFrtTQ9+pFRM3FgI\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 649,
		"path": "../public/assets/dist-BlF9WkUr.js"
	},
	"/assets/empty-state-CQroAlKn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"473-gMSE8hin0nxONBPHYsjPFnpTiYw\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 1139,
		"path": "../public/assets/empty-state-CQroAlKn.js"
	},
	"/assets/es2015-Czumr6D8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4278-rQVoyDwtUwgEc/nuvjWjOVD3jyk\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 17016,
		"path": "../public/assets/es2015-Czumr6D8.js"
	},
	"/assets/format-B4sWshK4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fa-Vb4EshlqqPCkB8ifxfKZz9D7Hoc\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 1018,
		"path": "../public/assets/format-B4sWshK4.js"
	},
	"/assets/gold-prices-CoJhZ7ir.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"294f-r2HgcWzzkFKkmx82bBHphGmj5Z8\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 10575,
		"path": "../public/assets/gold-prices-CoJhZ7ir.js"
	},
	"/assets/i18n-provider-dU-lty_Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb21-hn3xPnl9FkH1XFmJSyAm6EfQAd0\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 52001,
		"path": "../public/assets/i18n-provider-dU-lty_Y.js"
	},
	"/assets/input-0afl6mqF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a6-/n95jUYoX13DLbntR/xZHKnLEro\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 678,
		"path": "../public/assets/input-0afl6mqF.js"
	},
	"/assets/inventory-DsBf1oPG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12eb-5giHhD1uUtMOtbDfoa01eNKO5t0\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 4843,
		"path": "../public/assets/inventory-DsBf1oPG.js"
	},
	"/assets/label-Bmd6Ar2B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2af-TXi6nBvin+uag4ugIpxLEyQY7vI\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 687,
		"path": "../public/assets/label-Bmd6Ar2B.js"
	},
	"/assets/link-Cmrgtpsv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6871-uPlEJ2cWWnohy9MpbHs4axbiu1Q\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 26737,
		"path": "../public/assets/link-Cmrgtpsv.js"
	},
	"/assets/chart-widgets-Dn_CHlke.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63c92-o+OWgppZW6Ac60f98mmL1+yboFM\"",
		"mtime": "2026-08-03T22:28:03.475Z",
		"size": 408722,
		"path": "../public/assets/chart-widgets-Dn_CHlke.js"
	},
	"/assets/index-B07nKoyQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"62ead-VgB094vijgPmusU38BobvrlDssc\"",
		"mtime": "2026-08-03T22:28:03.457Z",
		"size": 405165,
		"path": "../public/assets/index-B07nKoyQ.js"
	},
	"/assets/lock-LPei0FyK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce-G4JZR+rqctUDmVWauM4EPPdQBZw\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 206,
		"path": "../public/assets/lock-LPei0FyK.js"
	},
	"/assets/login-Daby2LYB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16ae-TSaRKkb5j+Gj6CUpOwkvsqYDOHY\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 5806,
		"path": "../public/assets/login-Daby2LYB.js"
	},
	"/assets/logo-ar-D6NiQQp2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34-BCSNUFA25cxQChCAHo14mMrYHfk\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 52,
		"path": "../public/assets/logo-ar-D6NiQQp2.js"
	},
	"/assets/logo-ar-q0U_Upd1.png": {
		"type": "image/png",
		"etag": "\"f8b6-x4M+qNQcqh2pxsqu4hlamJ2i+8Q\"",
		"mtime": "2026-08-03T22:28:03.501Z",
		"size": 63670,
		"path": "../public/assets/logo-ar-q0U_Upd1.png"
	},
	"/assets/motion-components-Di3jMfzr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1da7a-KAldY8g3cC4uG6Pa4SlJmQkmIHU\"",
		"mtime": "2026-08-03T22:28:03.477Z",
		"size": 121466,
		"path": "../public/assets/motion-components-Di3jMfzr.js"
	},
	"/assets/navigation-I8-hvozh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"88c-wUb8OeA0cU2pNKptsRhkc3Mswio\"",
		"mtime": "2026-08-03T22:28:03.488Z",
		"size": 2188,
		"path": "../public/assets/navigation-I8-hvozh.js"
	},
	"/assets/page-header-7RRLF3eQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86c-U7h7Csvu2u7vusLvnl/gv2kilCk\"",
		"mtime": "2026-08-03T22:28:03.488Z",
		"size": 2156,
		"path": "../public/assets/page-header-7RRLF3eQ.js"
	},
	"/assets/placeholder-block-C8zVxRJV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"478-lI/4pv4tsz8EuTJm06E7ZQUeSUw\"",
		"mtime": "2026-08-03T22:28:03.489Z",
		"size": 1144,
		"path": "../public/assets/placeholder-block-C8zVxRJV.js"
	},
	"/assets/query-keys-EhLyoRZ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22f-DE2UG2Ji4kRhec+12bJ+rV72R3A\"",
		"mtime": "2026-08-03T22:28:03.490Z",
		"size": 559,
		"path": "../public/assets/query-keys-EhLyoRZ3.js"
	},
	"/assets/reconciliation-DQNwFWMb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"682-7xpgsnevqgDj1oF0JBd9cwC1rLU\"",
		"mtime": "2026-08-03T22:28:03.491Z",
		"size": 1666,
		"path": "../public/assets/reconciliation-DQNwFWMb.js"
	},
	"/assets/routes-BPC7Q4oz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"556f-0IVsSAwQs23S4R5uZ9ckdwen+Fs\"",
		"mtime": "2026-08-03T22:28:03.492Z",
		"size": 21871,
		"path": "../public/assets/routes-BPC7Q4oz.js"
	},
	"/assets/reports-B4EqmVsf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"678-FmEDTzaE7MGMbKURifmNsimYrIs\"",
		"mtime": "2026-08-03T22:28:03.492Z",
		"size": 1656,
		"path": "../public/assets/reports-B4EqmVsf.js"
	},
	"/assets/section-card-DTR_Lgan.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f5-Y6KWR+2Etob+Thj2dCg+yb+WIfE\"",
		"mtime": "2026-08-03T22:28:03.493Z",
		"size": 1013,
		"path": "../public/assets/section-card-DTR_Lgan.js"
	},
	"/assets/select-role-BQkwuFuZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11c2-v47MvqnkkKzHyNTiFKwD8K+DZHM\"",
		"mtime": "2026-08-03T22:28:03.494Z",
		"size": 4546,
		"path": "../public/assets/select-role-BQkwuFuZ.js"
	},
	"/assets/services-CknJjrRQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b46-nohDPtQ4zDOvUicmhuSqpPStj0Q\"",
		"mtime": "2026-08-03T22:28:03.495Z",
		"size": 19270,
		"path": "../public/assets/services-CknJjrRQ.js"
	},
	"/assets/settings-BRohYAOi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a6d-uZQQscYT5lN+lsUD/eqNPUfW7Ns\"",
		"mtime": "2026-08-03T22:28:03.495Z",
		"size": 39533,
		"path": "../public/assets/settings-BRohYAOi.js"
	},
	"/assets/shield-check-BW9BwhGs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-I0n3Hg/Kb+w4QsXN68lySbmsouk\"",
		"mtime": "2026-08-03T22:28:03.496Z",
		"size": 320,
		"path": "../public/assets/shield-check-BW9BwhGs.js"
	},
	"/assets/status-badge-nePEcrp7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b0-OUA5ns32acTLKmLW1v02h6AgdK4\"",
		"mtime": "2026-08-03T22:28:03.497Z",
		"size": 944,
		"path": "../public/assets/status-badge-nePEcrp7.js"
	},
	"/assets/shopping-cart-B03HPHG6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"263-a+qCxadjlee+QSqnZcXojzGmBJs\"",
		"mtime": "2026-08-03T22:28:03.496Z",
		"size": 611,
		"path": "../public/assets/shopping-cart-B03HPHG6.js"
	},
	"/assets/tabs-D9Mu0XD7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2b-QoMxgvTdYMGI5NOnBK/5ux9mIOE\"",
		"mtime": "2026-08-03T22:28:03.497Z",
		"size": 3627,
		"path": "../public/assets/tabs-D9Mu0XD7.js"
	},
	"/assets/types-C1hfRBGQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16cba-y/uixxnt3KnC6ElLUbIJ0DcTjYc\"",
		"mtime": "2026-08-03T22:28:03.498Z",
		"size": 93370,
		"path": "../public/assets/types-C1hfRBGQ.js"
	},
	"/assets/styles-C9doOHl-.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bb0e-k3jXEFZKcloV1QRDBjjFWL9otYA\"",
		"mtime": "2026-08-03T22:28:03.502Z",
		"size": 113422,
		"path": "../public/assets/styles-C9doOHl-.css"
	},
	"/assets/users-BOl_UtwD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1413-swm2CTn7dJ3mR6R0cmqvb2HF/aU\"",
		"mtime": "2026-08-03T22:28:03.499Z",
		"size": 5139,
		"path": "../public/assets/users-BOl_UtwD.js"
	},
	"/assets/users-C0amhj9m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"422-yeqQhZwWVC44EYRfnKaZy3emGjs\"",
		"mtime": "2026-08-03T22:28:03.499Z",
		"size": 1058,
		"path": "../public/assets/users-C0amhj9m.js"
	},
	"/assets/x-BFsSDoXo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"113-gj/8Wq7Ph2kS2xXdRcBQTKDBm5o\"",
		"mtime": "2026-08-03T22:28:03.501Z",
		"size": 275,
		"path": "../public/assets/x-BFsSDoXo.js"
	},
	"/assets/_authenticated-D8jp5jOQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11746-Hlgo9DVvZwK75R5n9XN+zwkcszk\"",
		"mtime": "2026-08-03T22:28:03.457Z",
		"size": 71494,
		"path": "../public/assets/_authenticated-D8jp5jOQ.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_pq6Gjj = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_pq6Gjj
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
