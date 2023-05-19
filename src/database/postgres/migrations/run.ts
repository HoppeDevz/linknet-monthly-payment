import { query } from "@/database/postgres";

import { usersMigration } from "./users.migration";
import { paymentPlansMigration } from "./payment-plans.migration";
import { usersPlansMigration } from "./users_plans.migration";
import { whatsappSessionsMigration } from "./whatsapp_session.migration";
import { paymentsMigration } from "./payments.migration";
import { usersInvoicesMigration } from "./users_invoices.migration";
import { whatsappMessagesMigration } from "./whatsapp-messages.migration";

(async () => {

    try {

        console.log("[POSTGRES-MIGRATIONS] - usersMigration");
        await query(usersMigration);

        console.log("[POSTGRES-MIGRATIONS] - paymentPlansMigration");
        await query(paymentPlansMigration);

        console.log("[POSTGRES-MIGRATIONS] - usersPlansMigration");
        await query(usersPlansMigration);

        console.log("[POSTGRES-MIGRATIONS] - whatsappSessionsMigration");
        await query(whatsappSessionsMigration);

        console.log("[POSTGRES-MIGRATIONS] - paymentsMigration");
        await query(paymentsMigration);

        console.log("[POSTGRES-MIGRATIONS] - usersInvoicesMigration");
        await query(usersInvoicesMigration);

        console.log("[POSTGRES-MIGRATIONS] - whatsappMessagesMigration");
        await query(whatsappMessagesMigration);

    } catch(err) {

        console.error(err);
        console.log("[POSTGRES] - Error while trying to run POSTGRES migrations");
    }

})();