"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserPlanSQL = void 0;
exports.createUserPlanSQL = 
/* sql */ `
INSERT INTO
    public.users_plans (user_id, plan_id, address, payday, status)
VALUES
    ($1, $2, $3, $4, $5)
RETURNING
    id,
    user_id,
    plan_id,
    address,
    payday,
    status,
    created_at,
    updated_at
`;
