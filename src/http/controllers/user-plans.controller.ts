import { Request, Response } from "express";

import { EHTTP } from "@/enums/http-status-codes";
import { internalErrorCodes } from "@/enums/internal-error-codes";
import { getInternalErrorMessageByErrorCode } from "@/enums/internal-error-messages";
import { CustomError } from "@/errors/custom-error";
import { UserPlanUseCases } from "@/useCases/user-plan.usecases";
import { createUserPlanBodySchema, getAllUserPlansParamsSchema, toogleUserPlanParamsSchema } from "../validations/user-plans.validations";
import { EHTTPStatusMessages } from "@/enums/http-status-messages";


export const getAllUserPlans = async(req: Request, res: Response) => {

    try {

        const params = getAllUserPlansParamsSchema.parse(req.params);

        const userPlans = UserPlanUseCases.getUserPlans(params.user_id);

        res.status(EHTTP.StatusOK).send(userPlans);

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

export const createUserPlan = async(req: Request, res: Response) => {

    try {

        const userPlan = createUserPlanBodySchema.parse(req.body);

        const createdUserPlan = await UserPlanUseCases.create(userPlan);

        res.status(EHTTP.StatusOK).send(createdUserPlan);

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

export const activateUserPlan = async(req: Request, res: Response) => {
    
    try {

        const params = toogleUserPlanParamsSchema.parse(req.params);

        await UserPlanUseCases.activate(params.id);

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

export const desactivateUserPlan = async(req: Request, res: Response) => {
    
    try {

        const params = toogleUserPlanParamsSchema.parse(req.params);

        await UserPlanUseCases.desactivate(params.id);

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
