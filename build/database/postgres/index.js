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
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollbackTransaction = exports.commitTransaction = exports.openTransaction = exports.query = exports.runPgTransactions = void 0;
const pg_1 = require("pg");
const constants_1 = require("../../constants");
const users_migration_1 = require("./migrations/users.migration");
const payment_plans_migration_1 = require("./migrations/payment-plans.migration");
const connectionPool = new pg_1.Pool({
    host: constants_1.PG_HOST,
    port: constants_1.PG_PORT,
    user: constants_1.PG_USER,
    password: constants_1.PG_PASSWORD,
    database: constants_1.PG_DATABASE,
    idleTimeoutMillis: constants_1.PG_IDLE_TIMEOUT,
    maxUses: constants_1.PG_MAX_POOL_CONNECTIONS
});
const runPgTransactions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.query)(users_migration_1.usersMigration);
        yield (0, exports.query)(payment_plans_migration_1.paymentPlansMigration);
    }
    catch (err) {
        console.error(err);
        console.log("[POSTGRES] - Error while trying to run POSTGRES migrations");
    }
});
exports.runPgTransactions = runPgTransactions;
const query = (query, placeholder) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield connectionPool.query(query, placeholder);
    }
    catch (err) {
        throw err;
    }
});
exports.query = query;
const openTransaction = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield connectionPool.connect();
        client.query("BEGIN");
        return client;
    }
    catch (err) {
        throw err;
    }
});
exports.openTransaction = openTransaction;
const commitTransaction = (client) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        client.query("COMMIT");
        client.release();
    }
    catch (err) {
        throw err;
    }
});
exports.commitTransaction = commitTransaction;
const rollbackTransaction = (client) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        client.query("ROLLBACK");
        client.release();
    }
    catch (err) {
        throw err;
    }
    finally {
        client.release();
    }
});
exports.rollbackTransaction = rollbackTransaction;
