import { query } from "../index";
import { paymentPlansMigration } from "./payment-plans.migration";
import { usersMigration } from "./users.migration";

export const runMySQLMigrations = async () => {

    try {

        await query(usersMigration);
        await query(paymentPlansMigration);

    } catch(err) {

        console.log("[MY-SQL] - Error while trying to run MYSQL migrations");
    }
    
}