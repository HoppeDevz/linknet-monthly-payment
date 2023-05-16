"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPlansSQL = void 0;
exports.getUserPlansSQL = 
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
WHERE
    up.user_id = $1
`;
