"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(httpErrorStatusCode, internalErrorCode, internalErrorMessage, extendedError) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.httpErrorStatusCode = httpErrorStatusCode;
        this.internalErrorCode = internalErrorCode;
        this.internalErrorMessage = internalErrorMessage;
        this.extendedError = extendedError;
    }
    body() {
        return {
            internalErrorCode: this.internalErrorCode,
            internalErrorMessage: this.internalErrorMessage
        };
    }
}
exports.CustomError = CustomError;
