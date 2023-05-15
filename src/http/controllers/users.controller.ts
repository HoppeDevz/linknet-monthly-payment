import { Request, Response } from 'express';

import { UserUseCases } from '../../useCases/users.usecases';
import { createUsersBodySchema, getUserParams, removeUserParamsSchema, updateUserBodySchema } from '../validations/users.validations';

import { CustomError } from '@/errors/custom-error';

import { internalErrorCodes } from '@/enums/internal-error-codes';
import { getInternalErrorMessageByErrorCode } from '@/enums/internal-error-messages';
import { EHTTP } from '@/enums/http-status-codes';
import { EHTTPStatusMessages } from '@/enums/http-status-messages';

export const createUser = async(req: Request, res: Response) => {

    try {

        const createUserBody = createUsersBodySchema.parse(req.body);

        const createdUser = await UserUseCases.create({
            first_name: createUserBody.firstName, 
            last_name: createUserBody.lastName, 
            identification_document_type: createUserBody.identificationDocumentType, 
            identification_document: createUserBody.identificationDocument,
            email: createUserBody.email,
            phone: createUserBody.phone
        });

        res.status(EHTTP.StatusOK).send(createdUser);

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
};

export const updateUser = async(req: Request, res: Response) => {

    try {

        const toUpdateUser = updateUserBodySchema.parse(req.body);

        const updatedUser = await UserUseCases.update(toUpdateUser);

        res.status(EHTTP.StatusOK).send(updatedUser);

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

export const removeUser = async(req: Request, res: Response) => {

    try {

        const params = removeUserParamsSchema.parse(req.params);

        await UserUseCases.remove(params.user_id);

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

export const getUser = async(req: Request, res: Response) => {
    
    try {

        const params = getUserParams.parse(req.params);
        const fetchedUser = await UserUseCases.findById(params.user_id);

        if (fetchedUser) {

            res.status(EHTTP.StatusOK).send(fetchedUser);

        } else {

            res.status(EHTTP.StatusNotFound).send("User not found!");
        }
        

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
