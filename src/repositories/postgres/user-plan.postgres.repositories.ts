import { createUserPlanSQL } from "@/data/sql/postgres/create_user_plan.sql";
import { getUserPlansSQL } from "@/data/sql/postgres/get_user_plans.sql";
import { toogleUserPlanSQL } from "@/data/sql/postgres/toogle_user_plan.sql";
import { commitTransaction, openTransaction, query, rollbackTransaction } from "@/database/postgres";
import { IUserPlanRepository, UserPlan } from "@/domain/user-plans";
import { User } from "@/domain/users";

const getUserPlans = async(userId: number) => {

    try {

        const {rows} = await query<UserPlan>(getUserPlansSQL, [userId]);

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
                userPlan.plan_id
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
    create,
    activate,
    desactivate
} 

