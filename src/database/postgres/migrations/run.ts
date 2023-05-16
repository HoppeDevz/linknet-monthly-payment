import { query } from "@/database/postgres";

import { usersMigration } from "./users.migration";
import { paymentPlansMigration } from "./payment-plans.migration";
import { usersPlansMigration } from "./users_plans.migration";
import { whatsappMigration } from "./whatsapp_session.migration";
import { paymentsMigration } from "./payments.migration";
import { usersInvoicesMigration } from "./users_invoices.migration";

(async () => {

    try {

        console.log("[POSTGRES-MIGRATIONS] - usersMigration");
        await query(usersMigration);

        console.log("[POSTGRES-MIGRATIONS] - paymentPlansMigration");
        await query(paymentPlansMigration);

        console.log("[POSTGRES-MIGRATIONS] - usersPlansMigration");
        await query(usersPlansMigration);

        console.log("[POSTGRES-MIGRATIONS] - whatsappMigration");
        await query(whatsappMigration);

        console.log("[POSTGRES-MIGRATIONS] - paymentsMigration");
        await query(paymentsMigration);

        console.log("[POSTGRES-MIGRATIONS] - usersInvoicesMigration");
        await query(usersInvoicesMigration);

    } catch(err) {

        console.error(err);
        console.log("[POSTGRES] - Error while trying to run POSTGRES migrations");
    }

})();