"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalErrorMessagesEnum = exports.getInternalErrorMessageByErrorCode = void 0;
const isKeyOfInternalErrorMessagesEnum = (key) => {
    return key in exports.internalErrorMessagesEnum;
};
const getInternalErrorMessageByErrorCode = (errorCode) => {
    if (isKeyOfInternalErrorMessagesEnum(errorCode)) {
        return exports.internalErrorMessagesEnum[errorCode];
    }
    return "Unexpected Error";
};
exports.getInternalErrorMessageByErrorCode = getInternalErrorMessageByErrorCode;
exports.internalErrorMessagesEnum = {
    ["ISE"]: "Internal server error",
    ["UAE"]: "User already exists"
};
