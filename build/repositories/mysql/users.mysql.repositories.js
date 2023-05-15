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
const create_user_sql_1 = require("../../data/sql/mysql/create_user.sql");
const get_last_inserted_user_sql_1 = require("../../data/sql/mysql/get_last_inserted_user.sql");
const get_user_sql_1 = require("../../data/sql/mysql/get_user.sql");
const mysql_1 = require("../../database/mysql");
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [createdUser] = yield (0, mysql_1.runTransaction)((poolConnection) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, mysql_1.connectionQuery)(poolConnection, create_user_sql_1.createUserSQL, [
                user.first_name,
                user.last_name,
                user.identification_document_type,
                user.identification_document,
                user.email,
                user.phone
            ]);
            return yield (0, mysql_1.connectionQuery)(poolConnection, get_last_inserted_user_sql_1.getLastInsertedUserSQL);
        }));
        return createdUser;
    }
    catch (err) {
        throw err;
    }
});
const findById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [user] = yield (0, mysql_1.query)(get_user_sql_1.getUserSQL, [userId]);
        return user;
    }
    catch (err) {
        throw err;
    }
});
/*
export const UserRepository: IUsersRepository = {

    create,
    findById
}
*/ 
