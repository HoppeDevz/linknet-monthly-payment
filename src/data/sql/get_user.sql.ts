
export const getUserSQL = 
/* sql */`
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
    linknet.users u
WHERE
    u.user_id = ?
`;