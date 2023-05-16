import { commitTransaction, openTransaction, rollbackTransaction } from "@/database/postgres";
import { createUserSQL } from "../../data/sql/postgres/create_user.sql";
import { getUserSQL } from "../../data/sql/postgres/get_user.sql";
import { query } from "../../database/postgres";

import type { IUsersRepository } from "../../domain/users";
import { getUserByUniqueFieldsSQL } from "@/data/sql/postgres/get_user_by_unique_fields";
import { deleteUserSQL } from "@/data/sql/postgres/delete_user.sql";
import { updateUserSQL } from "@/data/sql/postgres/update_user.sql";
import { User } from "@/entities/User";

const create = async (user: User) => {

    const transactionClient = await openTransaction();

    try {

        const {rows} = await transactionClient.query<User>(createUserSQL, [
            user.first_name,
            user.last_name,
            user.identification_document_type,
            user.identification_document,
            user.email,
            user.phone
        ]);

        await commitTransaction(transactionClient);
        return rows[0];

    } catch(err) {

        await rollbackTransaction(transactionClient);
        throw err;
    }
}

const update = async (user: User) => {

    const poolClient = await openTransaction();

    try {

        const {rows} = await poolClient.query<User>(updateUserSQL, [
            user.first_name,
            user.last_name,
            user.identification_document_type,
            user.identification_document,
            user.user_id
        ]);
        
        await commitTransaction(poolClient);
        return rows[0];

    } catch(err) {

        rollbackTransaction(poolClient);
        throw err;
    }
}

const remove = async (userId: number) => {

    const poolClient = await openTransaction();

    try {

        await poolClient.query(deleteUserSQL, [userId]);
        await commitTransaction(poolClient);

    } catch(err) {

        rollbackTransaction(poolClient);
        throw err;
    }
}

const findByUniqueFields = async (uniqueFields: Pick<User, "email" | "phone">) => {

    try {

        const {rows} = await query<User>(getUserByUniqueFieldsSQL, [uniqueFields.email, uniqueFields.phone]);

        return rows;

    } catch(err) {

        throw err;
    }
}

const findById = async (userId: number) => {

    try {

        const {rows} = await query<User>(getUserSQL, [userId]);

        return rows[0];

    } catch(err) {

        throw err;
    }
}

export const UserRepository: IUsersRepository = {

    create,
    update,
    remove,
    findByUniqueFields,
    findById
}