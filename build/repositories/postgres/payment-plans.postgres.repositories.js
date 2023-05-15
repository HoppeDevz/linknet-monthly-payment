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
exports.PaymentPlansRepository = exports.getAll = exports.remove = exports.update = exports.create = void 0;
const postgres_1 = require("../../database/postgres");
const create_payment_plan_1 = require("../../data/sql/postgres/create-payment-plan");
const delete_payment_plan_1 = require("../../data/sql/postgres/delete-payment-plan");
const get_all_payment_plans_1 = require("../../data/sql/postgres/get-all-payment-plans");
const update_payment_plan_sql_1 = require("../../data/sql/postgres/update_payment_plan.sql");
const create = (paymentPlan) => __awaiter(void 0, void 0, void 0, function* () {
    const poolClient = yield (0, postgres_1.openTransaction)();
    try {
        const { rows } = yield poolClient.query(create_payment_plan_1.createPaymentPlanSQL, [
            paymentPlan.name,
            paymentPlan.download_byte_rate,
            paymentPlan.upload_byte_rate,
            paymentPlan.price
        ]);
        yield (0, postgres_1.commitTransaction)(poolClient);
        return rows[0];
    }
    catch (err) {
        yield (0, postgres_1.rollbackTransaction)(poolClient);
        throw err;
    }
});
exports.create = create;
const update = (paymentPlan) => __awaiter(void 0, void 0, void 0, function* () {
    const poolClient = yield (0, postgres_1.openTransaction)();
    try {
        const { rows } = yield poolClient.query(update_payment_plan_sql_1.updatePaymentPlanSQL, [
            paymentPlan.name,
            paymentPlan.download_byte_rate,
            paymentPlan.upload_byte_rate,
            paymentPlan.price,
            paymentPlan.id
        ]);
        yield (0, postgres_1.commitTransaction)(poolClient);
        return rows[0];
    }
    catch (err) {
        yield (0, postgres_1.rollbackTransaction)(poolClient);
        throw err;
    }
});
exports.update = update;
const remove = (paymentPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    const poolClient = yield (0, postgres_1.openTransaction)();
    try {
        yield poolClient.query(delete_payment_plan_1.deletePaymentPlanSQL, [paymentPlanId]);
        yield (0, postgres_1.commitTransaction)(poolClient);
    }
    catch (err) {
        yield (0, postgres_1.rollbackTransaction)(poolClient);
        throw err;
    }
});
exports.remove = remove;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rowCount, rows } = yield (0, postgres_1.query)(get_all_payment_plans_1.getAllPaymentPlansSQL);
        return rows;
    }
    catch (err) {
        throw err;
    }
});
exports.getAll = getAll;
exports.PaymentPlansRepository = {
    create: exports.create,
    update: exports.update,
    remove: exports.remove,
    getAll: exports.getAll
};
