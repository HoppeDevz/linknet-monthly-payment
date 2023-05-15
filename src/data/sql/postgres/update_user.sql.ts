export const updateUserSQL = 
/* sql */`
UPDATE
    public.users
SET 
    first_name = $1,
    last_name = $2,
    identification_document_type = $3,
    identification_document = $4
WHERE
    user_id = $5
RETURNING 
    user_id,
    first_name,
    last_name,
    identification_document_type,
    identification_document,
    email,
    phone,
    created_at,
    updated_at
`;