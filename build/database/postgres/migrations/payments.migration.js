"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsMigration = void 0;
exports.paymentsMigration = 
/* sql */ `
CREATE TABLE IF NOT EXISTS payments(
    id SERIAL PRIMARY KEY,
    mp_payment_id varchar(255) NOT NULL,
    init_point varchar(512) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
`;
