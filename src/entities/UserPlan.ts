export type UserPlan = {
    id?: number,
    user_id: number,
    plan_id: number,
    address: string,
    payday: number
    status: boolean,
    created_at?: string
    updated_at?: string
}
