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
exports.UserPlanRepository = void 0;
const create_user_plan_sql_1 = require("../../data/sql/postgres/create_user_plan.sql");
const get_user_plans_sql_1 = require("../../data/sql/postgres/get_user_plans.sql");
const toogle_user_plan_sql_1 = require("../../data/sql/postgres/toogle_user_plan.sql");
const postgres_1 = require("../../database/postgres");
const getUserPlans = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield (0, postgres_1.query)(get_user_plans_sql_1.getUserPlansSQL, [userId]);
        return rows;
    }
    catch (err) {
        throw err;
    }
});
const create = (userPlan) => __awaiter(void 0, void 0, void 0, function* () {
    const poolClient = yield (0, postgres_1.openTransaction)();
    try {
        const { rows } = yield poolClient.query(create_user_plan_sql_1.createUserPlanSQL, [
            userPlan.user_id,
            userPlan.plan_id,
            userPlan.address,
            userPlan.payday,
            userPlan.status
        ]);
        yield (0, postgres_1.commitTransaction)(poolClient);
        return rows[0];
    }
    catch (err) {
        yield (0, postgres_1.rollbackTransaction)(poolClient);
        throw err;
    }
});
const activate = (userPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    const poolClient = yield (0, postgres_1.openTransaction)();
    try {
        yield poolClient.query(toogle_user_plan_sql_1.toogleUserPlanSQL, [userPlanId, true]);
        yield (0, postgres_1.commitTransaction)(poolClient);
    }
    catch (err) {
        yield (0, postgres_1.rollbackTransaction)(poolClient);
        throw err;
    }
});
const desactivate = (userPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    const poolClient = yield (0, postgres_1.openTransaction)();
    try {
        yield poolClient.query(toogle_user_plan_sql_1.toogleUserPlanSQL, [userPlanId, false]);
        yield (0, postgres_1.commitTransaction)(poolClient);
    }
    catch (err) {
        yield (0, postgres_1.rollbackTransaction)(poolClient);
        throw err;
    }
});
exports.UserPlanRepository = {
    getUserPlans,
    create,
    activate,
    desactivate
};
