import { IUserPlanUseCases, UserPlan } from "@/domain/user-plans";
import { User } from "@/domain/users";
import { UserPlanRepository } from "@/repositories/postgres/user-plan.postgres.repositories";

const getUserPlans = async(userId: number) => {

    try {

        const userPlans = UserPlanRepository.getUserPlans(userId);

        return userPlans;

    } catch(err) {

        throw err;
    }
}

const create = async(userPlan: UserPlan) => {

    try {

        const createdUserPlan = UserPlanRepository.create(userPlan);

        return createdUserPlan;

    } catch(err) {

        throw err;
    }
}

const activate = async(userPlanId: number) => {

    try {

        await UserPlanRepository.activate(userPlanId);

    } catch(err) {

        throw err;
    }
}

const desactivate = async(userPlanId: number) => {

    try {

        await UserPlanRepository.desactivate(userPlanId);

    } catch(err) {

        throw err;
    }
}

export const UserPlanUseCases: IUserPlanUseCases = {
    getUserPlans,
    create,
    activate,
    desactivate
}