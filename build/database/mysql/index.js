"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTransaction = exports.query = exports.connectionQuery = void 0;
const mysql_1 = __importDefault(require("mysql"));
const mysqlPool = mysql_1.default.createPool({
    host: (_a = process.env.MYSQL_HOST) !== null && _a !== void 0 ? _a : "localhost",
    port: (_b = Number(process.env.MYSQL_PORT)) !== null && _b !== void 0 ? _b : 3306,
    user: (_c = process.env.MYSQL_USER) !== null && _c !== void 0 ? _c : "root",
    password: (_d = process.env.MYSQL_PASSWORD) !== null && _d !== void 0 ? _d : "",
    database: (_e = process.env.MYSQL_DATABASE) !== null && _e !== void 0 ? _e : "linknet",
    connectionLimit: (_f = Number(process.env.MYSQL_MAX_POOL_CONNECTIONS)) !== null && _f !== void 0 ? _f : 10
});
const connectionQuery = (connection, query, placeholder) => {
    return new Promise((resolve, reject) => {
        connection.query(query, placeholder, (err, rows, fields) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};
exports.connectionQuery = connectionQuery;
const query = (query, placeholder) => {
    return new Promise((resolve, reject) => {
        mysqlPool.query(query, placeholder, (error, results, fields) => {
            if (error)
                return reject(error);
            resolve(results);
        });
    });
};
exports.query = query;
const runTransaction = (thread) => {
    return new Promise((resolve, reject) => {
        mysqlPool.getConnection((err, connection) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                reject(new Error("Error while trying to open pool connection!"));
                return;
            }
            ;
            try {
                yield (0, exports.connectionQuery)(connection, "BEGIN");
                const callbackValue = yield thread(connection);
                yield (0, exports.connectionQuery)(connection, "COMMIT");
                resolve(callbackValue);
            }
            catch (err) {
                reject(err);
            }
            finally {
                yield (0, exports.connectionQuery)(connection, "ROLLBACK");
                connection.release();
            }
        }));
    });
};
exports.runTransaction = runTransaction;
