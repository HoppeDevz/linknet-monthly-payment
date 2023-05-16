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
const postgres_1 = require("../../postgres");
const users_migration_1 = require("./users.migration");
const payment_plans_migration_1 = require("./payment-plans.migration");
const users_plans_migration_1 = require("./users_plans.migration");
const whatsapp_session_migration_1 = require("./whatsapp_session.migration");
const payments_migration_1 = require("./payments.migration");
const users_invoices_migration_1 = require("./users_invoices.migration");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("[POSTGRES-MIGRATIONS] - usersMigration");
        yield (0, postgres_1.query)(users_migration_1.usersMigration);
        console.log("[POSTGRES-MIGRATIONS] - paymentPlansMigration");
        yield (0, postgres_1.query)(payment_plans_migration_1.paymentPlansMigration);
        console.log("[POSTGRES-MIGRATIONS] - usersPlansMigration");
        yield (0, postgres_1.query)(users_plans_migration_1.usersPlansMigration);
        console.log("[POSTGRES-MIGRATIONS] - whatsappMigration");
        yield (0, postgres_1.query)(whatsapp_session_migration_1.whatsappMigration);
        console.log("[POSTGRES-MIGRATIONS] - paymentsMigration");
        yield (0, postgres_1.query)(payments_migration_1.paymentsMigration);
        console.log("[POSTGRES-MIGRATIONS] - usersInvoicesMigration");
        yield (0, postgres_1.query)(users_invoices_migration_1.usersInvoicesMigration);
    }
    catch (err) {
        console.error(err);
        console.log("[POSTGRES] - Error while trying to run POSTGRES migrations");
    }
}))();
