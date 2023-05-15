import { query } from "@/database/postgres";

import { usersMigration } from "./users.migration";
import { paymentPlansMigration } from "./payment-plans.migration";
import { usersPlansMigration } from "./users_plans.migration";

(async () => {

    try {

        console.log("[POSTGRES-MIGRATIONS] - usersMigration");
        await query(usersMigration);

        console.log("[POSTGRES-MIGRATIONS] - paymentPlansMigration");
        await query(paymentPlansMigration);

        console.log("[POSTGRES-MIGRATIONS] - usersPlansMigration");
        await query(usersPlansMigration);

    } catch(err) {

        console.error(err);
        console.log("[POSTGRES] - Error while trying to run POSTGRES migrations");
    }

})();