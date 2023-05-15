import { ErrorRequestHandler } from "express";
import { CustomError } from "@/errors/custom-error";

import { EHTTP } from "@/enums/http-status-codes";
import { EHTTPStatusMessages } from "@/enums/http-status-messages";


export const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

    if (err instanceof CustomError) {

        console.log(err.extendedError);
        res.status(err.httpErrorStatusCode).send(err.body());
        return;
    }

    console.log(err);
    res.status(EHTTP.StatusInternalServerError).send(EHTTPStatusMessages.StatusInternalServerError);
}