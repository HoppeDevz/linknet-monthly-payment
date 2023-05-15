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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PG_MAX_POOL_CONNECTIONS = exports.PG_IDLE_TIMEOUT = exports.PG_DATABASE = exports.PG_PASSWORD = exports.PG_USER = exports.PG_PORT = exports.PG_HOST = exports.API_PORT = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.API_PORT = (_a = Number(process.env.API_PORT)) !== null && _a !== void 0 ? _a : 8080;
exports.PG_HOST = (_b = process.env.PG_HOST) !== null && _b !== void 0 ? _b : "localhost";
exports.PG_PORT = (_c = Number(process.env.PG_PORT)) !== null && _c !== void 0 ? _c : 5432;
exports.PG_USER = (_d = process.env.PG_USER) !== null && _d !== void 0 ? _d : "root";
exports.PG_PASSWORD = (_e = process.env.PG_PASSWORD) !== null && _e !== void 0 ? _e : "";
exports.PG_DATABASE = (_f = process.env.PG_DATABASE) !== null && _f !== void 0 ? _f : "postgres";
exports.PG_IDLE_TIMEOUT = (_g = Number(process.env.PG_IDLE_TIMEOUT)) !== null && _g !== void 0 ? _g : 5000;
exports.PG_MAX_POOL_CONNECTIONS = (_h = Number(process.env.PG_MAX_POOL_CONNECTIONS)) !== null && _h !== void 0 ? _h : 10;
