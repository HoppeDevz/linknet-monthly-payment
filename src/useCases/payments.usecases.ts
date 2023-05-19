import { IPaymentsUseCases } from "@/domain/payments";
import { Payment } from "@/entities/Payment";
import { PaymentsRepository } from "@/repositories/postgres/payments.postgres.repositories";

export const create = async(payment: Payment) => {

    try {

        const createdPayment = await PaymentsRepository.create(payment);

        return createdPayment;

    } catch(err) {

        throw err;
    }
}

export const updatePaymentStatus = async(id: number, paymentId: string, status: string) => {

    try {

        await PaymentsRepository.updatePaymentStatus(id, paymentId, status);

    } catch(err) {

        throw err;
    }
}

export const getAll = async() => {
    
    try {

        const payments = await PaymentsRepository.getAll();

        return payments;

    } catch(err) {

        throw err;
    }
}

export const getAllPending = async() => {

    try {

        const payments = await PaymentsRepository.getAllPending();

        return payments;

    } catch(err) {

        throw err;
    }
}

export const getAllApprovedWithoutMessageSended = async() => {

    try {

        const payments = await PaymentsRepository.getAllApprovedWithoutMessageSended();

        return payments;

    } catch(err) {

        throw err;
    }
}

export const updateMessageSendedStatus = async(id: number) => {

    try {

        await PaymentsRepository.updateMessageSendedStatus(id);

    } catch(err) {

        throw err;
    }
}

export const PaymentsUseCases: IPaymentsUseCases = {
    create,
    updatePaymentStatus,

    getAll,
    getAllPending,

    getAllApprovedWithoutMessageSended,
    updateMessageSendedStatus
}