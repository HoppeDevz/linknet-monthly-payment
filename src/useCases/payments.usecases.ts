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

export const PaymentsUseCases: IPaymentsUseCases = {
    create
}