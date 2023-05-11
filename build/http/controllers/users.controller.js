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
exports.getUser = exports.createUser = void 0;
const http_status_codes_1 = require("../../enums/http-status-codes");
const users_usecases_1 = require("../../useCases/users.usecases");
const users_validations_1 = require("../validations/users.validations");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createUserBody = users_validations_1.createUsersBodySchema.parse(req.body);
        const createdUser = yield users_usecases_1.UserUseCases.createUser(createUserBody.firstName, createUserBody.lastName, createUserBody.identificationDocumentType, createUserBody.identificationDocument, createUserBody.email, createUserBody.phone);
        res.status(200).send(createdUser);
    }
    catch (err) {
        console.error(err);
        res.status(http_status_codes_1.EHTTP.StatusInternalServerError).send("Unexpected Error");
    }
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = users_validations_1.getUserParams.parse(Object.assign(Object.assign({}, req.params), { user_id: Number(req.params.user_id) }));
        const fetchedUser = yield users_usecases_1.UserUseCases.getUser(params.user_id);
        if (fetchedUser) {
            res.status(200).send(fetchedUser);
        }
        else {
            res.status(404).send("User not found!");
        }
    }
    catch (err) {
        console.error(err);
        res.status(http_status_codes_1.EHTTP.StatusInternalServerError).send("Unexpected Error");
    }
});
exports.getUser = getUser;
