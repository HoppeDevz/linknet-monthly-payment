import { PaymentPlan } from "@/entities/PaymentPlan";
import { PaymentPlansRepository } from "@/repositories/postgres/payment-plans.postgres.repositories";
import { IPaymentPlanUseCases } from "src/domain/payment-plans";

export const create = async(paymentPlan: PaymentPlan) => {

    try {

        const createdPaymentPlan = await PaymentPlansRepository.create(paymentPlan);

        return createdPaymentPlan;

    } catch(err) {

        throw err;
    }
}

export const update = async(paymentPlan: PaymentPlan) => {

    try {

        const updatedPaymentPlan = await PaymentPlansRepository.update(paymentPlan);

        return updatedPaymentPlan;

    } catch(err) {

        throw err;
    }
}

export const remove = async (paymentPlanId: number)  => {

    try {

        await PaymentPlansRepository.remove(paymentPlanId);

    } catch(err) {

        throw err;
    }
}

export const getAll = async() => {

    try {

        const paymentPlans = await PaymentPlansRepository.getAll();

        return paymentPlans;

    } catch(err) {

        throw err;
    }
} 

export const findById = async(paymentPlanId: number) => {

    try {

        const paymentPlan = await PaymentPlansRepository.findById(paymentPlanId);

        return paymentPlan;

    } catch(err) {

        throw err;
    }
}


export const PaymentPlansUseCases: IPaymentPlanUseCases = {
    create,
    update,
    remove,
    getAll,
    findById
}