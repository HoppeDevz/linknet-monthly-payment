import { Request, Response } from 'express';
import { EHTTP } from '../../enums/http-status-codes';
import { UserUseCases } from '../../useCases/users.usecases';
import { createUsersBodySchema, getUserParams } from '../validations/users.validations';

export const createUser = async(req: Request, res: Response) => {

    try {

        const createUserBody = createUsersBodySchema.parse(req.body);

        const createdUser = await UserUseCases.createUser(
            createUserBody.firstName, 
            createUserBody.lastName, 
            createUserBody.identificationDocumentType, 
            createUserBody.identificationDocument,
            createUserBody.email,
            createUserBody.phone
        );

        res.status(200).send(createdUser);

    } catch(err) {

        console.error(err);
        res.status(EHTTP.StatusInternalServerError).send("Unexpected Error");
    }
};

export const getUser = async(req: Request, res: Response) => {
    
    try {

        const params = getUserParams.parse({...req.params, user_id: Number(req.params.user_id) });
        const fetchedUser = await UserUseCases.getUser(params.user_id);

        if (fetchedUser) {

            res.status(200).send(fetchedUser);

        } else {

            res.status(404).send("User not found!");
        }
        

    } catch(err) {

        console.error(err);
        res.status(EHTTP.StatusInternalServerError).send("Unexpected Error");
    }
}
