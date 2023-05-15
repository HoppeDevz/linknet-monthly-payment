"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUniqueFieldsSQL = void 0;
exports.getUserByUniqueFieldsSQL = 
/* sql */ `
SELECT
    u.user_id,
    u.first_name,
    u.last_name,
    u.identification_document_type,
    u.identification_document,
    u.email,
    u.phone,
    u.created_at,
    u.updated_at
FROM
    public.users u
WHERE
    u.email = $1
    AND u.phone = $2
`;
