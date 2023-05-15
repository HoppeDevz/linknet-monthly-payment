import { Request, Response } from "express";

import { CustomError } from "@/errors/custom-error";

import { EHTTP } from "@/enums/http-status-codes";
import { internalErrorCodes } from "@/enums/internal-error-codes";
import { getInternalErrorMessageByErrorCode } from "@/enums/internal-error-messages";
import { PaymentPlansUseCases } from "@/useCases/payment-plans.usecases";
import { deletePaymentPlanParamsSchema, createPaymentPlanBodySchema, updatePaymentPlanBodySchema } from "../validations/payment-plans.validations";
import { EHTTPStatusMessages } from "@/enums/http-status-messages";

export const createPaymentPlan = async(req: Request, res: Response) => {

    try {

        const body = createPaymentPlanBodySchema.parse(req.body);

        const createdPaymentPlan = await PaymentPlansUseCases.create({
            name: body.name,
            download_byte_rate: body.downloadRate,
            upload_byte_rate: body.uploadRate,
            price: body.price
        });

        res.status(EHTTP.StatusOK).send(createdPaymentPlan);

    } catch(err) {

        if (err instanceof CustomError) {

            throw err;
        }

        throw new CustomError(
            EHTTP.StatusInternalServerError, 
            internalErrorCodes.InternalServerError, 
            getInternalErrorMessageByErrorCode(internalErrorCodes.InternalServerError),
            err
        )
    }
}

export const updatePaymentPlan = async(req: Request, res: Response) => {

    try {

        const body = updatePaymentPlanBodySchema.parse(req.body);

        const updatedPaymentPlan = await PaymentPlansUseCases.update(body);

        res.status(EHTTP.StatusOK).send(updatedPaymentPlan);

    } catch(err) {

        if (err instanceof CustomError) {

            throw err;
        }

        throw new CustomError(
            EHTTP.StatusInternalServerError, 
            internalErrorCodes.InternalServerError, 
            getInternalErrorMessageByErrorCode(internalErrorCodes.InternalServerError),
            err
        )
    }
}

export const deletePaymentPlan = async(req: Request, res: Response) => {

    try {

        const params = deletePaymentPlanParamsSchema.parse(req.params);

        await PaymentPlansUseCases.remove(params.id);

        res.status(EHTTP.StatusOK).send(EHTTPStatusMessages.StatusOK);

    } catch(err) {

        if (err instanceof CustomError) {

            throw err;
        }

        throw new CustomError(
            EHTTP.StatusInternalServerError, 
            internalErrorCodes.InternalServerError, 
            getInternalErrorMessageByErrorCode(internalErrorCodes.InternalServerError),
            err
        )
    }
}

export const getAllPaymentPlans = async (req: Request, res: Response) => {

    try {

        const paymentPlans = await PaymentPlansUseCases.getAll();

        res.status(EHTTP.StatusOK).send(paymentPlans);

    } catch(err) {

        if (err instanceof CustomError) {

            throw err;
        }

        throw new CustomError(
            EHTTP.StatusInternalServerError, 
            internalErrorCodes.InternalServerError, 
            getInternalErrorMessageByErrorCode(internalErrorCodes.InternalServerError),
            err
        )
    }
} 