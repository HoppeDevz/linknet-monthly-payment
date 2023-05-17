
export interface Payment {
    id?: number

    reference: string,

    preference_id: string
    init_point: string

    payment_id?: string
    status?: string
    created_at?: string
}