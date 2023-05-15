import { IUserUseCases, User } from "../domain/users";
import { UserRepository } from "../repositories/postgres/users.postgres.repositories";
import { CustomError } from "@/errors/custom-error";
import { EHTTP } from "@/enums/http-status-codes";
import { internalErrorCodes } from "@/enums/internal-error-codes";
import { getInternalErrorMessageByErrorCode } from "@/enums/internal-error-messages";


export const create = async (user: User) => {

    try {

        const someOverlappedUser = await findOverlapping({
            email: user.email, 
            phone: user.phone
        });

        if (someOverlappedUser) {

            throw new CustomError(
                EHTTP.StatusBadRequest, 
                internalErrorCodes.UserAlreadyExists, 
                getInternalErrorMessageByErrorCode(internalErrorCodes.UserAlreadyExists)
            );
        }

        const createdUser = await UserRepository.create(user);

        return createdUser;

    } catch(err) {

        throw err;
    }
}

export const update = async(user: User) => {

    try {

        const updatedUser = await UserRepository.update(user);

        return updatedUser;

    } catch(err) {

        throw err;
    }
}

export const remove = async(userId: number) => {

    try {

        await UserRepository.remove(userId);

    } catch(err) {

        throw err;
    }
}

export const findOverlapping = async (uniqueFields: Pick<User, "email" | "phone">) => {

    try {

        const overlappedUsers = await UserRepository.findByUniqueFields(uniqueFields);

        if (overlappedUsers.length === 0) {

            return undefined;
        }

        return overlappedUsers[0];

    } catch(err) {

        throw err;
    }
}

export const findById = async (userId: number) => {

    try {

        const user = await UserRepository.findById(userId);

        return user;

    } catch(err) {

        throw err;
    }
} 

export const UserUseCases: IUserUseCases = {
    create,
    update,
    remove,
    findOverlapping,
    findById
} 