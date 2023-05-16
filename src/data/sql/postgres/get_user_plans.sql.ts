export const getUserPlansSQL =
/* sql */`
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