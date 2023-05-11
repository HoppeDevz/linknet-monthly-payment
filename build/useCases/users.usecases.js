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
exports.UserUseCases = exports.getUser = exports.createUser = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const users_mysql_repositories_1 = require("../repositories/mysql/users.mysql.repositories");
const createUser = (firstName, lastName, identificationNumberType, identificationDocument, email, phone) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdAt = (0, dayjs_1.default)().unix();
        const updatedAt = (0, dayjs_1.default)().unix();
        const user = yield users_mysql_repositories_1.UserRepository.createUser(firstName, lastName, identificationNumberType, identificationDocument, email, phone);
        return user;
    }
    catch (err) {
        throw err;
    }
});
exports.createUser = createUser;
const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_mysql_repositories_1.UserRepository.getUser(userId);
        return user;
    }
    catch (err) {
        throw err;
    }
});
exports.getUser = getUser;
exports.UserUseCases = {
    createUser: exports.createUser,
    getUser: exports.getUser
};
