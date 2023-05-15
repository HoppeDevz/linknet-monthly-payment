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
exports.getAllPaymentPlans = exports.deletePaymentPlan = exports.updatePaymentPlan = exports.createPaymentPlan = void 0;
const custom_error_1 = require("../../errors/custom-error");
const http_status_codes_1 = require("../../enums/http-status-codes");
const internal_error_codes_1 = require("../../enums/internal-error-codes");
const internal_error_messages_1 = require("../../enums/internal-error-messages");
const payment_plans_usecases_1 = require("../../useCases/payment-plans.usecases");
const payment_plans_validations_1 = require("../validations/payment-plans.validations");
const http_status_messages_1 = require("../../enums/http-status-messages");
const createPaymentPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = payment_plans_validations_1.createPaymentPlanBodySchema.parse(req.body);
        const createdPaymentPlan = yield payment_plans_usecases_1.PaymentPlansUseCases.create({
            name: body.name,
            download_byte_rate: body.downloadRate,
            upload_byte_rate: body.uploadRate,
            price: body.price
        });
        res.status(http_status_codes_1.EHTTP.StatusOK).send(createdPaymentPlan);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.createPaymentPlan = createPaymentPlan;
const updatePaymentPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = payment_plans_validations_1.updatePaymentPlanBodySchema.parse(req.body);
        const updatedPaymentPlan = yield payment_plans_usecases_1.PaymentPlansUseCases.update(body);
        res.status(http_status_codes_1.EHTTP.StatusOK).send(updatedPaymentPlan);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.updatePaymentPlan = updatePaymentPlan;
const deletePaymentPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = payment_plans_validations_1.deletePaymentPlanParamsSchema.parse(req.params);
        yield payment_plans_usecases_1.PaymentPlansUseCases.remove(params.id);
        res.status(http_status_codes_1.EHTTP.StatusOK).send(http_status_messages_1.EHTTPStatusMessages.StatusOK);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.deletePaymentPlan = deletePaymentPlan;
const getAllPaymentPlans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentPlans = yield payment_plans_usecases_1.PaymentPlansUseCases.getAll();
        res.status(http_status_codes_1.EHTTP.StatusOK).send(paymentPlans);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.getAllPaymentPlans = getAllPaymentPlans;
