import { Payment } from "@/entities/Payment";
import { IPaymentsRepository } from "@/domain/payments";

import { commitTransaction, openTransaction, query, rollbackTransaction } from "@/database/postgres";
import { createPaymentSQL } from "@/data/sql/postgres/create_payment.sql";
import { getAllPaymentsSQL } from "@/data/sql/postgres/get_all_payments.sql";
import { updatePaymentStatusSQL } from "@/data/sql/postgres/update_payment_id.sql";
import { getAllPendingPaymentsSQL } from "@/data/sql/postgres/get_all_pending_payments.sql";

const create = async(payment: Payment) => {

    const poolClient = await openTransaction();

    try {

        const {rows} = await poolClient.query<Payment>(
            createPaymentSQL, 
            [
                payment.reference,
                payment.preference_id, 
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

const updatePaymentStatus = async(id: number, paymentId: string, status: string) => {

    const poolClient = await openTransaction();

    try {

        await poolClient.query(updatePaymentStatusSQL, [id, paymentId, status]);

        await commitTransaction(poolClient);

    } catch(err) {

        console.log(err);

        await rollbackTransaction(poolClient);
        throw err;
    }
}

const getAll = async() => {

    try {

        const {rows} = await query<Payment>(getAllPaymentsSQL);

        return rows;

    } catch(err) {

        throw err;
    }
}

export const getAllPending = async() => {

    try {

        const {rows} = await query<Payment>(getAllPendingPaymentsSQL);

        return rows;

    } catch(err) {

        throw err;
    }
}

export const PaymentsRepository: IPaymentsRepository = {
    create,
    updatePaymentStatus,
    getAll,
    getAllPending
}