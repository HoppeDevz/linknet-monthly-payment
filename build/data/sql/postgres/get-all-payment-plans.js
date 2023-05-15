"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPaymentPlansSQL = void 0;
exports.getAllPaymentPlansSQL = 
/* sql */ `
    SELECT
        pp.id,
        pp.name,
        pp.download_byte_rate,
        pp.upload_byte_rate,
        pp.price
    FROM
        public.payment_plans pp
`;
