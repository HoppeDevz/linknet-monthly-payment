import { createInvoiceSQL } from "@/data/sql/postgres/create_invoice.sql";
import { openTransaction, rollbackTransaction } from "@/database/postgres";
import { IUserInvoiceRepository } from "@/domain/users-invoices";
import { UserInvoice } from "@/entities/UserInvoice";

const create = async(userInvoice: UserInvoice) => {

    const poolClient = await openTransaction();

    try {

        const {rows} = await poolClient.query(createInvoiceSQL, [
            userInvoice.user_id, 
            userInvoice.plan_id, 
            userInvoice.payment_id
        ]);

        return rows[0];

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

export const UserInvoiceRepository: IUserInvoiceRepository = {
    create
}