import { createInvoiceSQL } from "@/data/sql/postgres/create_invoice.sql";
import { findUserInvoiceByPaymentId } from "@/data/sql/postgres/find_user_invoice_by_payment_id.sql";
import { commitTransaction, openTransaction, query, rollbackTransaction } from "@/database/postgres";
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

        await commitTransaction(poolClient);
        return rows[0];

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

const findByPaymentId = async(paymentId: number) => {

    try {

        const {rows} = await query(findUserInvoiceByPaymentId, [paymentId]); 

        if (rows.length === 0) return undefined;

        return rows[0];

    } catch(err) {

        throw err;
    }
}

export const UserInvoiceRepository: IUserInvoiceRepository = {
    create,
    findByPaymentId
}