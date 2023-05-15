
export type PaymentPlan = {
    id?: number
    name: string
    download_byte_rate: number
    upload_byte_rate: number
    price: number
}

export interface IPaymentPlanRepository {
    create: (paymentPlan: PaymentPlan) => Promise<PaymentPlan>
    update: (paymentPlan: PaymentPlan) => Promise<PaymentPlan>
    remove: (paymentPlanId: number) => Promise<void> 
    getAll: () => Promise<PaymentPlan[]>
}

export interface IPaymentPlanUseCases {
    create: (paymentPlan: PaymentPlan) => Promise<PaymentPlan>
    update: (paymentPlan: PaymentPlan) => Promise<PaymentPlan>
    remove: (paymentPlanId: number) => Promise<void> 
    getAll: () => Promise<PaymentPlan[]>
}