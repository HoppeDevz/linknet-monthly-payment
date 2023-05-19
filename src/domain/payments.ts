import type { Payment } from "../entities/Payment";

export interface IPaymentsRepository {
    create: (payment: Payment) => Promise<Payment> 
    updatePaymentStatus: (id: number, paymentId: string, status: string) => Promise<void>
    getAll: () => Promise<Payment[]>
    getAllPending: () => Promise<Payment[]>
    getAllApprovedWithoutMessageSended: () => Promise<Payment[]>
}

export interface IPaymentsUseCases {
    create: (payment: Payment) => Promise<Payment>
    updatePaymentStatus: (id: number, paymentId: string, status: string) => Promise<void>
    getAll: () => Promise<Payment[]>
    getAllPending: () => Promise<Payment[]>
    getAllApprovedWithoutMessageSended: () => Promise<Payment[]>
}