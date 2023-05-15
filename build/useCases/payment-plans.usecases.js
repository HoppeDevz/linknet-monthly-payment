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
exports.PaymentPlansUseCases = exports.getAll = exports.remove = exports.update = exports.create = void 0;
const payment_plans_postgres_repositories_1 = require("../repositories/postgres/payment-plans.postgres.repositories");
const create = (paymentPlan) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdPaymentPlan = yield payment_plans_postgres_repositories_1.PaymentPlansRepository.create(paymentPlan);
        return createdPaymentPlan;
    }
    catch (err) {
        throw err;
    }
});
exports.create = create;
const update = (paymentPlan) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedPaymentPlan = yield payment_plans_postgres_repositories_1.PaymentPlansRepository.update(paymentPlan);
        return updatedPaymentPlan;
    }
    catch (err) {
        throw err;
    }
});
exports.update = update;
const remove = (paymentPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield payment_plans_postgres_repositories_1.PaymentPlansRepository.remove(paymentPlanId);
    }
    catch (err) {
        throw err;
    }
});
exports.remove = remove;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentPlans = yield payment_plans_postgres_repositories_1.PaymentPlansRepository.getAll();
        return paymentPlans;
    }
    catch (err) {
        throw err;
    }
});
exports.getAll = getAll;
exports.PaymentPlansUseCases = {
    create: exports.create,
    update: exports.update,
    remove: exports.remove,
    getAll: exports.getAll
};
