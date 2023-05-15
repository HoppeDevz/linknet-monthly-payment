"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentPlanSQL = void 0;
exports.createPaymentPlanSQL = 
/* sql */ `
    INSERT INTO 
        public.payment_plans (name, download_byte_rate, upload_byte_rate, price)
    VALUES
        ($1, $2, $3, $4)
    RETURNING *;
`;
