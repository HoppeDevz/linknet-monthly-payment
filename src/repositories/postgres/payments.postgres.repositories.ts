import { Payment } from "@/entities/Payment";
import { IPaymentsRepository } from "@/domain/payments";

import { commitTransaction, openTransaction, rollbackTransaction } from "@/database/postgres";
import { createPaymentSQL } from "@/data/sql/postgres/create_payment.sql";


const create = async(payment: Payment) => {

    const poolClient = await openTransaction();

    try {

        const {rows} = await poolClient.query<Payment>(
            createPaymentSQL, 
            [
                payment.mp_payment_id, 
                payment.init_point
            ]
        );

        await commitTransaction(poolClient);
        return rows[0];

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

export const PaymentsRepository: IPaymentsRepository = {
    create
}