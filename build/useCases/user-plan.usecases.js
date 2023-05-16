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
exports.UserPlanUseCases = void 0;
const user_plan_postgres_repositories_1 = require("../repositories/postgres/user-plan.postgres.repositories");
const getUserPlans = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userPlans = user_plan_postgres_repositories_1.UserPlanRepository.getUserPlans(userId);
        return userPlans;
    }
    catch (err) {
        throw err;
    }
});
const create = (userPlan) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdUserPlan = user_plan_postgres_repositories_1.UserPlanRepository.create(userPlan);
        return createdUserPlan;
    }
    catch (err) {
        throw err;
    }
});
const activate = (userPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_plan_postgres_repositories_1.UserPlanRepository.activate(userPlanId);
    }
    catch (err) {
        throw err;
    }
});
const desactivate = (userPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_plan_postgres_repositories_1.UserPlanRepository.desactivate(userPlanId);
    }
    catch (err) {
        throw err;
    }
});
exports.UserPlanUseCases = {
    getUserPlans,
    create,
    activate,
    desactivate
};
