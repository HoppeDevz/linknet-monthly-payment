

export class CustomError extends Error {

    public httpErrorStatusCode: number;
    public internalErrorCode: string;
    public internalErrorMessage: string;
    public extendedError?: unknown;

    constructor(httpErrorStatusCode: number, internalErrorCode: string, internalErrorMessage: string, extendedError?: unknown) {

        super();
        Error.captureStackTrace(this, this.constructor);

        this.httpErrorStatusCode = httpErrorStatusCode;
        this.internalErrorCode = internalErrorCode;
        this.internalErrorMessage = internalErrorMessage;
        this.extendedError = extendedError;
    }

    public body() {

        return {
            internalErrorCode: this.internalErrorCode,
            internalErrorMessage: this.internalErrorMessage
        }
    }
}