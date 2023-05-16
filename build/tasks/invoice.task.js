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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceTask = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const get_all_active_users_plans_without_invoice_sql_1 = require("../data/sql/postgres/get_all_active_users_plans_without_invoice.sql");
const postgres_1 = require("../database/postgres");
const cron_1 = require("cron");
exports.InvoiceTask = new cron_1.CronJob('* * * * * *', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("[Invoice-Task] - Running task...");
        const firstMonthDay = (0, dayjs_1.default)().startOf('month');
        const lastMontDay = (0, dayjs_1.default)().endOf('month');
        console.log(firstMonthDay.format("YYYY-MM-DD HH:mm:ss"), lastMontDay.format("YYYY-MM-DD HH:mm:ss"));
        const { rows: usersPlans } = yield (0, postgres_1.query)(get_all_active_users_plans_without_invoice_sql_1.getAllActiveUsersPlansWithoutInvoiceInCurrentMonthSQL);
        for (const userPlan of usersPlans) {
            const currentDate = (0, dayjs_1.default)();
            const payday = (0, dayjs_1.default)()
                .set("D", userPlan.payday)
                .set("hours", 0)
                .set("minutes", 0)
                .set("seconds", 0);
            if (currentDate.valueOf() > payday.valueOf()) {
                console.log("[Invoice-Task] - Creating payment...");
                // createPayment(`Plano LinkNet ${userPlan.plan_id}`);
                console.log("[Invoice-Task] - Creating invoice...");
                console.log(currentDate.format("YYYY-MM-DD HH:mm:ss"), payday.format("YYYY-MM-DD HH:mm:ss"));
            }
        }
    });
}, null, true);
