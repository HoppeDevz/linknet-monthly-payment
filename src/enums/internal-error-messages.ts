
const isKeyOfInternalErrorMessagesEnum = (key: string): key is keyof typeof internalErrorMessagesEnum => {

    return key in internalErrorMessagesEnum;
}

export const getInternalErrorMessageByErrorCode = (errorCode: string) => {

    if (isKeyOfInternalErrorMessagesEnum(errorCode)) {

        return internalErrorMessagesEnum[errorCode]
    }

    return "Unexpected Error";
}

export const internalErrorMessagesEnum = {

    ["ISE"]: "Internal server error",
    ["UAE"]: "User already exists"
};