import type { PaymentPlan } from "@/entities/PaymentPlan"

export interface IPaymentPlanRepository {
    create: (paymentPlan: PaymentPlan) => Promise<PaymentPlan>
    update: (paymentPlan: PaymentPlan) => Promise<PaymentPlan>
    remove: (paymentPlanId: number) => Promise<void> 
    getAll: () => Promise<PaymentPlan[]>
    findById: (paymentPlanId: number) => Promise<PaymentPlan | undefined>
}

export interface IPaymentPlanUseCases {
    create: (paymentPlan: PaymentPlan) => Promise<PaymentPlan>
    update: (paymentPlan: PaymentPlan) => Promise<PaymentPlan>
    remove: (paymentPlanId: number) => Promise<void> 
    getAll: () => Promise<PaymentPlan[]>
    findById: (paymentPlanId: number) => Promise<PaymentPlan | undefined>
}