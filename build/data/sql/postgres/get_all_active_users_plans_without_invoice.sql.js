"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllActiveUsersPlansWithoutInvoiceInCurrentMonthSQL = void 0;
exports.getAllActiveUsersPlansWithoutInvoiceInCurrentMonthSQL = 
/* sql */ `
SELECT 
    up.id,
    up.user_id,
    up.plan_id,
    up.address,
    up.payday,
    up.status,
    up.created_at,
    up.updated_at
FROM
    public.users_plans up
    INNER JOIN public.payment_plans pp ON (up.plan_id = pp.id)
WHERE
    up.status = true

`;
