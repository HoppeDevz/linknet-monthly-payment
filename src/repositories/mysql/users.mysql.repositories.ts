import { createUserSQL } from "../../data/sql/create_user.sql";
import { getLastInsertedUserSQL } from "../../data/sql/get_last_inserted_user.sql";
import { getUserSQL } from "../../data/sql/get_user.sql";
import { connectionQuery, query, runTransaction } from "../../database/mysql";

import type { IUsersRepository, User } from "../../domain/users";

const createUser = async (firstName: string, lastName: string, identificationNumberType: string, identificationDocument: string, email: string | null, phone: string) => {
    
    try {

        const [createdUser] = await runTransaction(async (poolConnection) => {

            await connectionQuery(poolConnection, createUserSQL, [firstName, lastName, identificationNumberType, identificationDocument, email, phone]);
            return await connectionQuery(poolConnection, getLastInsertedUserSQL) as User[];
        });

        return createdUser;

    } catch(err) {

        throw err;

    }
}

const getUser = async (userId: number) => {

    try {

        const [user] = await query<User>(getUserSQL, [userId]);

        return user;

    } catch(err) {

        throw err;
    }
}

export const UserRepository: IUsersRepository = {

    createUser,
    getUser
}