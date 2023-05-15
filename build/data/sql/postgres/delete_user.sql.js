"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSQL = void 0;
exports.deleteUserSQL = 
/* sql */ `
DELETE FROM
    public.users u
WHERE
    u.user_id = $1
`;
