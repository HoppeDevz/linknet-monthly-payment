"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PG_MAX_POOL_CONNECTIONS = exports.PG_IDLE_TIMEOUT = exports.PG_DATABASE = exports.PG_PASSWORD = exports.PG_USER = exports.PG_PORT = exports.PG_HOST = exports.MERCADOPAGO_PENDING_BACKURL = exports.MERCADOPAGO_FAILURE_BACKURL = exports.MERCADOPAGO_SUCCESS_BACKURL = exports.MERCADOPAGO_PAYMENT_BACKURLS = exports.MERCADOPAGO_ACCESS_TOKEN = exports.MERCADOPAGO_PUBLIC_KEY = exports.API_PORT = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.API_PORT = (_a = Number(process.env.API_PORT)) !== null && _a !== void 0 ? _a : 8080;
exports.MERCADOPAGO_PUBLIC_KEY = (_b = process.env.MERCADOPAGO_PUBLIC_KEY) !== null && _b !== void 0 ? _b : "";
exports.MERCADOPAGO_ACCESS_TOKEN = (_c = process.env.MERCADOPAGO_ACCESS_TOKEN) !== null && _c !== void 0 ? _c : "";
exports.MERCADOPAGO_PAYMENT_BACKURLS = Boolean((_d = process.env.MERCADOPAGO_PAYMENT_BACKURLS) !== null && _d !== void 0 ? _d : false);
exports.MERCADOPAGO_SUCCESS_BACKURL = (_e = process.env.MERCADOPAGO_SUCCESS_BACKURL) !== null && _e !== void 0 ? _e : "";
exports.MERCADOPAGO_FAILURE_BACKURL = (_f = process.env.MERCADOPAGO_FAILURE_BACKURL) !== null && _f !== void 0 ? _f : "";
exports.MERCADOPAGO_PENDING_BACKURL = (_g = process.env.MERCADOPAGO_PENDING_BACKURL) !== null && _g !== void 0 ? _g : "";
exports.PG_HOST = (_h = process.env.PG_HOST) !== null && _h !== void 0 ? _h : "localhost";
exports.PG_PORT = Number((_j = process.env.PG_PORT) !== null && _j !== void 0 ? _j : 5432);
exports.PG_USER = (_k = process.env.PG_USER) !== null && _k !== void 0 ? _k : "root";
exports.PG_PASSWORD = (_l = process.env.PG_PASSWORD) !== null && _l !== void 0 ? _l : "";
exports.PG_DATABASE = (_m = process.env.PG_DATABASE) !== null && _m !== void 0 ? _m : "postgres";
exports.PG_IDLE_TIMEOUT = Number((_o = process.env.PG_IDLE_TIMEOUT) !== null && _o !== void 0 ? _o : 5000);
exports.PG_MAX_POOL_CONNECTIONS = Number((_p = process.env.PG_MAX_POOL_CONNECTIONS) !== null && _p !== void 0 ? _p : 10);
