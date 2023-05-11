import dayjs from "dayjs";

import { IUserUseCases } from "../domain/users";
import { UserRepository } from "../repositories/mysql/users.mysql.repositories";


export const createUser = async (firstName: string, lastName: string, identificationNumberType: string, identificationDocument: string, email: string | null, phone: string) => {

    try {

        const user = await UserRepository.createUser(firstName, lastName, identificationNumberType, identificationDocument, email, phone);

        return user;

    } catch(err) {

        throw err;

    }
}

export const getUser = async (userId: number) => {

    try {

        const user = await UserRepository.getUser(userId);

        return user;

    } catch(err) {

        throw err;
    }
} 

export const UserUseCases: IUserUseCases = {

    createUser,
    getUser
} 