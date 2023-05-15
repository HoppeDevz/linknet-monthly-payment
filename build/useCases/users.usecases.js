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
exports.UserUseCases = exports.findById = exports.findOverlapping = exports.remove = exports.update = exports.create = void 0;
const users_postgres_repositories_1 = require("../repositories/postgres/users.postgres.repositories");
const custom_error_1 = require("../errors/custom-error");
const http_status_codes_1 = require("../enums/http-status-codes");
const internal_error_codes_1 = require("../enums/internal-error-codes");
const internal_error_messages_1 = require("../enums/internal-error-messages");
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const someOverlappedUser = yield (0, exports.findOverlapping)({
            email: user.email,
            phone: user.phone
        });
        if (someOverlappedUser) {
            throw new custom_error_1.CustomError(http_status_codes_1.EHTTP.StatusBadRequest, internal_error_codes_1.internalErrorCodes.UserAlreadyExists, (0, internal_error_messages_1.getInternalErrorMessageByErrorCode)(internal_error_codes_1.internalErrorCodes.UserAlreadyExists));
        }
        const createdUser = yield users_postgres_repositories_1.UserRepository.create(user);
        return createdUser;
    }
    catch (err) {
        throw err;
    }
});
exports.create = create;
const update = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield users_postgres_repositories_1.UserRepository.update(user);
        return updatedUser;
    }
    catch (err) {
        throw err;
    }
});
exports.update = update;
const remove = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield users_postgres_repositories_1.UserRepository.remove(userId);
    }
    catch (err) {
        throw err;
    }
});
exports.remove = remove;
const findOverlapping = (uniqueFields) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const overlappedUsers = yield users_postgres_repositories_1.UserRepository.findByUniqueFields(uniqueFields);
        if (overlappedUsers.length === 0) {
            return undefined;
        }
        return overlappedUsers[0];
    }
    catch (err) {
        throw err;
    }
});
exports.findOverlapping = findOverlapping;
const findById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_postgres_repositories_1.UserRepository.findById(userId);
        return user;
    }
    catch (err) {
        throw err;
    }
});
exports.findById = findById;
exports.UserUseCases = {
    create: exports.create,
    update: exports.update,
    remove: exports.remove,
    findOverlapping: exports.findOverlapping,
    findById: exports.findById
};
