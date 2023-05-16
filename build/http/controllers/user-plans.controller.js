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
exports.desactivateUserPlan = exports.activateUserPlan = exports.createUserPlan = exports.getAllUserPlans = void 0;
const http_status_codes_1 = require("../../enums/http-status-codes");
const internal_error_codes_1 = require("../../enums/internal-error-codes");
const internal_error_messages_1 = require("../../enums/internal-error-messages");
const custom_error_1 = require("../../errors/custom-error");
const user_plan_usecases_1 = require("../../useCases/user-plan.usecases");
const user_plans_validations_1 = require("../validations/user-plans.validations");
const http_status_messages_1 = require("../../enums/http-status-messages");
const getAllUserPlans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = user_plans_validations_1.getAllUserPlansParamsSchema.parse(req.params);
        const userPlans = user_plan_usecases_1.UserPlanUseCases.getUserPlans(params.user_id);
        res.status(http_status_codes_1.EHTTP.StatusOK).send(userPlans);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.getAllUserPlans = getAllUserPlans;
const createUserPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userPlan = user_plans_validations_1.createUserPlanBodySchema.parse(req.body);
        const createdUserPlan = yield user_plan_usecases_1.UserPlanUseCases.create(userPlan);
        res.status(http_status_codes_1.EHTTP.StatusOK).send(createdUserPlan);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.createUserPlan = createUserPlan;
const activateUserPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = user_plans_validations_1.toogleUserPlanParamsSchema.parse(req.params);
        yield user_plan_usecases_1.UserPlanUseCases.activate(params.id);
        res.status(http_status_codes_1.EHTTP.StatusOK).send(http_status_messages_1.EHTTPStatusMessages.StatusOK);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.activateUserPlan = activateUserPlan;
const desactivateUserPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = user_plans_validations_1.toogleUserPlanParamsSchema.parse(req.params);
        yield user_plan_usecases_1.UserPlanUseCases.desactivate(params.id);
        res.status(http_status_codes_1.EHTTP.StatusOK).send(http_status_messages_1.EHTTPStatusMessages.StatusOK);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.desactivateUserPlan = desactivateUserPlan;
