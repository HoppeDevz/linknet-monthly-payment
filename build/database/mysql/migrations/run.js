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
exports.runMySQLMigrations = void 0;
const index_1 = require("../index");
const payment_plans_migration_1 = require("./payment-plans.migration");
const users_migration_1 = require("./users.migration");
const runMySQLMigrations = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, index_1.query)(users_migration_1.usersMigration);
    yield (0, index_1.query)(payment_plans_migration_1.paymentPlansMigration);
});
exports.runMySQLMigrations = runMySQLMigrations;
