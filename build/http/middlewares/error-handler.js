"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const custom_error_1 = require("../../errors/custom-error");
const http_status_codes_1 = require("../../enums/http-status-codes");
const http_status_messages_1 = require("../../enums/http-status-messages");
const ErrorHandler = (err, req, res, next) => {
    if (err instanceof custom_error_1.CustomError) {
        console.log(err.extendedError);
        res.status(err.httpErrorStatusCode).send(err.body());
        return;
    }
    console.log(err);
    res.status(http_status_codes_1.EHTTP.StatusInternalServerError).send(http_status_messages_1.EHTTPStatusMessages.StatusInternalServerError);
};
exports.ErrorHandler = ErrorHandler;
