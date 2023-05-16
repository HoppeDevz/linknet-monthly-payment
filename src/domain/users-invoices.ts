import type { UserInvoice } from "@/entities/UserInvoice";

export interface IUserInvoiceRepository {
    create: (userInvoice: UserInvoice) => Promise<UserInvoice>
}

export interface IUserInvoiceUseCases {
    create: (userInvoice: UserInvoice) => Promise<UserInvoice>
}