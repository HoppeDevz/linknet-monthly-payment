import { IUserInvoiceUseCases } from "@/domain/users-invoices";
import { UserInvoice } from "@/entities/UserInvoice";
import { UserInvoiceRepository } from "@/repositories/postgres/users-invoices.postgres.repositories";

const create = async(userInvoice: UserInvoice) => {

    try {

        const createdUserInvoice = await UserInvoiceRepository.create(userInvoice);

        return createdUserInvoice;

    } catch(err) {

        throw err;
    }
}

const findByPaymentId = async(paymentId: number) => {

    try {

        const userInvoice = await UserInvoiceRepository.findByPaymentId(paymentId); 

        return userInvoice;

    } catch(err) {

        throw err;
    }
}

export const UserInvoiceUseCases: IUserInvoiceUseCases = {
    create,
    findByPaymentId
}