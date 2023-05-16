import dayjs from "dayjs";

import { createUserPlanSQL } from "@/data/sql/postgres/create_user_plan.sql";
import { getNonBilledUsersPlansSQL } from "@/data/sql/postgres/get_non_billed_users_plans";
import { getUserPlansSQL } from "@/data/sql/postgres/get_user_plans.sql";
import { toogleUserPlanSQL } from "@/data/sql/postgres/toogle_user_plan.sql";
import { commitTransaction, openTransaction, query, rollbackTransaction } from "@/database/postgres";
import { IUserPlanRepository } from "@/domain/user-plans";
import { UserPlan } from "@/entities/UserPlan";

const getUserPlans = async(userId: number) => {

    try {

        const {rows} = await query<UserPlan>(getUserPlansSQL, [userId]);

        return rows;

    } catch(err) {

        throw err;
    }
}

export const getNonBilledPlans = async() => {

    try {

        const firstMonthDay = dayjs().startOf('month');
        const lastMonthDay = dayjs().endOf('month');

        const {rows} = await query<UserPlan>(getNonBilledUsersPlansSQL, [firstMonthDay, lastMonthDay]);

        return rows;

    } catch(err) {

        throw err;
    }
}

const create = async(userPlan: UserPlan) => {

    const poolClient = await openTransaction();

    try {

        const {rows} = await poolClient.query<UserPlan>(
            createUserPlanSQL, 
            [
                userPlan.user_id,
                userPlan.plan_id,
                userPlan.address,
                userPlan.payday,
                userPlan.status
            ]
        );

        await commitTransaction(poolClient);
        return rows[0];

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

const activate = async(userPlanId: number) => {

    const poolClient = await openTransaction();

    try {

        
        await poolClient.query(toogleUserPlanSQL, [userPlanId, true]);
        await commitTransaction(poolClient);

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

const desactivate = async(userPlanId: number) => {

    const poolClient = await openTransaction();

    try {

        
        await poolClient.query(toogleUserPlanSQL, [userPlanId, false]);
        await commitTransaction(poolClient);

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

export const UserPlanRepository: IUserPlanRepository = {
    getUserPlans,
    getNonBilledPlans,
    create,
    activate,
    desactivate
} 

