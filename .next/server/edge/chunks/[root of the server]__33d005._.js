(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__33d005._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/lib/prisma.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@prisma/client/default.js [middleware] (ecmascript)");
;
const prisma = global.prisma || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) global.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}}),
"[project]/src/lib/data.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getUserByEmail": (()=>getUserByEmail),
    "getUserById": (()=>getUserById),
    "obtenerPedido": (()=>obtenerPedido),
    "obtenerPedidos": (()=>obtenerPedidos),
    "obtenerPizza": (()=>obtenerPizza),
    "obtenerPizzas": (()=>obtenerPizzas),
    "obtenerRepartidor": (()=>obtenerRepartidor),
    "obtenerRepartidores": (()=>obtenerRepartidores)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/prisma.js [middleware] (ecmascript)");
'use server';
;
async function getUserById(id) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].user.findUnique({
        where: {
            id
        }
    });
    return user;
}
async function getUserByEmail(email) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].user.findUnique({
        where: {
            email
        }
    });
    return user;
}
async function obtenerRepartidores() {
    const repartidores = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].repartidor.findMany();
    return repartidores;
}
async function obtenerRepartidor(id) {
    const repartidor = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].repartidor.findUnique({
        where: {
            id: +id
        }
    });
    return repartidor;
}
// ---------------------   PEDIDOS -----------------------
async function obtenerPedidos() {
    const pedidos = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].pedido.findMany({
        include: {
            repartidor: true,
            pizzas: true
        }
    });
    return pedidos;
}
async function obtenerPedido(id) {
    const pedido = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].pedido.findUnique({
        where: {
            id: +id
        },
        include: {
            repartidor: true,
            pizzas: true
        }
    });
    return pedido;
}
// ---------------------   PIZZAS -----------------------
async function obtenerPizzas() {
    const pizzas = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].pizza.findMany();
    return pizzas;
}
async function obtenerPizza(id) {
    const pizza = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].pizza.findUnique({
        where: {
            id: +id
        }
    });
    return pizza;
}
;
}}),
"[project]/src/auth.config.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth/core/providers/google.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth/core/providers/github.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$discord$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth/core/providers/discord.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth/core/providers/credentials.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/data.js [middleware] (ecmascript)");
;
;
;
;
;
const __TURBOPACK__default__export__ = {
    providers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$discord$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])({
            async authorize (credentials) {
                console.log('AUTHORIZE');
                const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getUserByEmail"])(credentials.email);
                return user;
            }
        })
    ]
};
}}),
"[project]/src/middleware.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Run on edge
__turbopack_esm__({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$config$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/auth.config.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [middleware] (ecmascript) <locals>");
;
;
const { auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$config$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = auth((req)=>{
    console.log(`MIDDLEWARE`, req.nextUrl.pathname, req.auth);
    if (!req.auth) {
        const callbackUrl = req.nextUrl.pathname + req.nextUrl.search;
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        return Response.redirect(req.nextUrl.origin + `/auth/login?callbackUrl=${encodedCallbackUrl}`);
    }
});
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - images
     * - auth
     * - about
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - $ (home page)
     */ '/((?!api|images|auth|about|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)'
    ]
} // export const config = {
 //   matcher: [
 //     "/dashboard(.*)",
 //     "/admin(.*)",
 //     "/proveedores(.*)",
 //     "/productos(.*)",
 //   ],
 // };
;
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__33d005._.js.map