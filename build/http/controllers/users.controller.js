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
exports.getUser = exports.removeUser = exports.updateUser = exports.createUser = void 0;
const users_usecases_1 = require("../../useCases/users.usecases");
const users_validations_1 = require("../validations/users.validations");
const custom_error_1 = require("../../errors/custom-error");
const internal_error_codes_1 = require("../../enums/internal-error-codes");
const internal_error_messages_1 = require("../../enums/internal-error-messages");
const http_status_codes_1 = require("../../enums/http-status-codes");
const http_status_messages_1 = require("../../enums/http-status-messages");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createUserBody = users_validations_1.createUsersBodySchema.parse(req.body);
        const createdUser = yield users_usecases_1.UserUseCases.create({
            first_name: createUserBody.firstName,
            last_name: createUserBody.lastName,
            identification_document_type: createUserBody.identificationDocumentType,
            identification_document: createUserBody.identificationDocument,
            email: createUserBody.email,
            phone: createUserBody.phone
        });
        res.status(http_status_codes_1.EHTTP.StatusOK).send(createdUser);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const toUpdateUser = users_validations_1.updateUserBodySchema.parse(req.body);
        const updatedUser = yield users_usecases_1.UserUseCases.update(toUpdateUser);
        res.status(http_status_codes_1.EHTTP.StatusOK).send(updatedUser);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.updateUser = updateUser;
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = users_validations_1.removeUserParamsSchema.parse(req.params);
        yield users_usecases_1.UserUseCases.remove(params.user_id);
        res.status(http_status_codes_1.EHTTP.StatusOK).send(http_status_messages_1.EHTTPStatusMessages.StatusOK);
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.removeUser = removeUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = users_validations_1.getUserParams.parse(req.params);
        const fetchedUser = yield users_usecases_1.UserUseCases.findById(params.user_id);
        if (fetchedUser) {
            res.status(http_status_codes_1.EHTTP.StatusOK).send(fetchedUser);
        }
        else {
            res.status(http_status_codes_1.EHTTP.StatusNotFound).send("User not found!");
        }
    }
    catch (err) {
        if (err instanceof custom_error_1.CustomError) {
            throw err;
        }
        throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusInternalServerError, internal_error_codes_1.internalErrorCodes.InternalServerError, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.InternalServerError), err);
    }
});
exports.getUser = getUser;
