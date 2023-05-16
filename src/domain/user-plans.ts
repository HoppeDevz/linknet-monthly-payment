import type { UserPlan } from "@/entities/UserPlan"

export interface IUserPlanUseCases {
    getUserPlans: (userId: number) => Promise<UserPlan[]>
    getNonBilledPlans: () => Promise<UserPlan[]>
    create: (userPlan: UserPlan) => Promise<UserPlan>
    activate: (userPlanId: number) => Promise<void>
    desactivate: (userPlanId: number) => Promise<void>
}

export interface IUserPlanRepository {
    getUserPlans: (userId: number) => Promise<UserPlan[]>
    getNonBilledPlans: () => Promise<UserPlan[]>
    create: (userPlan: UserPlan) => Promise<UserPlan>
    activate: (userPlanId: number) => Promise<void>
    desactivate: (userPlanId: number) => Promise<void>
}
