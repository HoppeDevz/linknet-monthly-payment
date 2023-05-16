import { commitTransaction, openTransaction, query, rollbackTransaction } from "@/database/postgres";

import { PaymentPlan } from "@/entities/PaymentPlan";

import { createPaymentPlanSQL } from "@/data/sql/postgres/create-payment-plan";
import { deletePaymentPlanSQL } from "@/data/sql/postgres/delete-payment-plan";

import { IPaymentPlanRepository } from "@/domain/payment-plans";
import { getAllPaymentPlansSQL } from "@/data/sql/postgres/get-all-payment-plans";
import { updatePaymentPlanSQL } from "@/data/sql/postgres/update_payment_plan.sql";
import { getPaymentPlanByIdSQL } from "@/data/sql/postgres/get_plan_by_id.sql";


export const create = async(paymentPlan: PaymentPlan): Promise<PaymentPlan> => {

    const poolClient = await openTransaction();

    try {

        const {rows} = await poolClient.query<PaymentPlan>(createPaymentPlanSQL, [
            paymentPlan.name,
            paymentPlan.download_byte_rate, 
            paymentPlan.upload_byte_rate, 
            paymentPlan.price
        ]);

        await commitTransaction(poolClient);
        return rows[0];

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

export const update = async(paymentPlan: PaymentPlan) => {

    const poolClient = await openTransaction();

    try {

        const {rows} = await poolClient.query<PaymentPlan>(updatePaymentPlanSQL, [
            paymentPlan.name,
            paymentPlan.download_byte_rate, 
            paymentPlan.upload_byte_rate, 
            paymentPlan.price,
            paymentPlan.id
        ]);

        await commitTransaction(poolClient);
        return rows[0];

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

export const remove = async(paymentPlanId: number): Promise<void>  => {

    const poolClient = await openTransaction();

    try {

        await poolClient.query<PaymentPlan>(deletePaymentPlanSQL, [paymentPlanId]);

        await commitTransaction(poolClient);

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

export const getAll = async(): Promise<PaymentPlan[]> => {

    try {

        const {rowCount, rows} = await query<PaymentPlan>(getAllPaymentPlansSQL);

        return rows;

    } catch(err) {

        throw err;
    }
}

export const findById = async(paymentPlanId: number) => {
    
    try {

        const {rows} = await query<PaymentPlan>(getPaymentPlanByIdSQL, [paymentPlanId])

        if (rows.length === 0) {

            return undefined;
        } 

        return rows[0];

    } catch(err) {

        throw err;
    }
}

export const PaymentPlansRepository: IPaymentPlanRepository = {
    create,
    update,
    remove,
    getAll,
    findById
}
