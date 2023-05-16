import type { Payment } from "../entities/Payment";

export interface IPaymentsRepository {
    create: (payment: Payment) => Promise<Payment> 
}

export interface IPaymentsUseCases {
    create: (payment: Payment) => Promise<Payment> 
}