import { createUserSQL } from "../../data/sql/mysql/create_user.sql";
import { getLastInsertedUserSQL } from "../../data/sql/mysql/get_last_inserted_user.sql";
import { getUserSQL } from "../../data/sql/mysql/get_user.sql";
import { connectionQuery, query, runTransaction } from "../../database/mysql";

import type { IUsersRepository, User } from "../../domain/users";

const create = async (user: User) => {
    
    try {

        const [createdUser] = await runTransaction(async (poolConnection) => {

            await connectionQuery(poolConnection, createUserSQL, [
                user.first_name, 
                user.last_name, 
                user.identification_document_type, 
                user.identification_document, 
                user.email, 
                user.phone
            ]);

            return await connectionQuery(poolConnection, getLastInsertedUserSQL) as User[];
        });

        return createdUser;

    } catch(err) {

        throw err;

    }
}

const findById = async (userId: number) => {

    try {

        const [user] = await query<User>(getUserSQL, [userId]);

        return user;

    } catch(err) {

        throw err;
    }
}

/*
export const UserRepository: IUsersRepository = {

    create,
    findById
}
*/