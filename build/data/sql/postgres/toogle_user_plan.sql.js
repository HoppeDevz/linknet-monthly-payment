"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toogleUserPlanSQL = void 0;
exports.toogleUserPlanSQL = 
/* sql */ `
UPDATE 
    public.users_plans up
SET
    up.status = $2
WHERE
    up.id = $1
`;
