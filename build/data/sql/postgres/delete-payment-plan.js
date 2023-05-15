"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePaymentPlanSQL = void 0;
exports.deletePaymentPlanSQL = 
/* sql */ `
DELETE FROM
    public.payment_plans
WHERE
    id = $1
`;
