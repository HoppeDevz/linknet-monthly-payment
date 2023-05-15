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
exports.UserRepository = void 0;
const postgres_1 = require("../../database/postgres");
const create_user_sql_1 = require("../../data/sql/postgres/create_user.sql");
const get_user_sql_1 = require("../../data/sql/postgres/get_user.sql");
const postgres_2 = require("../../database/postgres");
const get_user_by_unique_fields_1 = require("../../data/sql/postgres/get_user_by_unique_fields");
const delete_user_sql_1 = require("../../data/sql/postgres/delete_user.sql");
const update_user_sql_1 = require("../../data/sql/postgres/update_user.sql");
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionClient = yield (0, postgres_1.openTransaction)();
    try {
        const { rows } = yield transactionClient.query(create_user_sql_1.createUserSQL, [
            user.first_name,
            user.last_name,
            user.identification_document_type,
            user.identification_document,
            user.email,
            user.phone
        ]);
        yield (0, postgres_1.commitTransaction)(transactionClient);
        return rows[0];
    }
    catch (err) {
        yield (0, postgres_1.rollbackTransaction)(transactionClient);
        throw err;
    }
});
const update = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const poolClient = yield (0, postgres_1.openTransaction)();
    try {
        const { rows } = yield poolClient.query(update_user_sql_1.updateUserSQL, [
            user.first_name,
            user.last_name,
            user.identification_document_type,
            user.identification_document,
            user.user_id
        ]);
        yield (0, postgres_1.commitTransaction)(poolClient);
        return rows[0];
    }
    catch (err) {
        (0, postgres_1.rollbackTransaction)(poolClient);
        throw err;
    }
});
const remove = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const poolClient = yield (0, postgres_1.openTransaction)();
    try {
        yield poolClient.query(delete_user_sql_1.deleteUserSQL, [userId]);
        yield (0, postgres_1.commitTransaction)(poolClient);
    }
    catch (err) {
        (0, postgres_1.rollbackTransaction)(poolClient);
        throw err;
    }
});
const findByUniqueFields = (uniqueFields) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield (0, postgres_2.query)(get_user_by_unique_fields_1.getUserByUniqueFieldsSQL, [uniqueFields.email, uniqueFields.phone]);
        return rows;
    }
    catch (err) {
        throw err;
    }
});
const findById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield (0, postgres_2.query)(get_user_sql_1.getUserSQL, [userId]);
        return rows[0];
    }
    catch (err) {
        throw err;
    }
});
exports.UserRepository = {
    create,
    update,
    remove,
    findByUniqueFields,
    findById
};
