export const deleteUserSQL = 
/* sql */`
DELETE FROM
    public.users u
WHERE
    u.user_id = $1
`;