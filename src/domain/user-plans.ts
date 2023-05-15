import { User } from "./users"

export type UserPlan = {
    id?: number,
    user_id: number,
    plan_id: number,
    status: boolean,
    created_at?: string
    updated_at?: string
}

export interface IUserPlanUseCases {
    getUserPlans: (userId: number) => Promise<UserPlan[]>
    create: (userPlan: UserPlan) => Promise<UserPlan>
    activate: (userPlanId: number) => Promise<void>
    desactivate: (userPlanId: number) => Promise<void>
}

export interface IUserPlanRepository {
    getUserPlans: (userId: number) => Promise<UserPlan[]>
    create: (userPlan: UserPlan) => Promise<UserPlan>
    activate: (userPlanId: number) => Promise<void>
    desactivate: (userPlanId: number) => Promise<void>
}
