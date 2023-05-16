export const getNonBilledUsersPlansSQL = 
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
    up.status = true
    AND NOT EXISTS (

        SELECT 1
        FROM public.users_invoices ui
        WHERE ui.created_at between $1 AND $2
        AND ui.user_id = up.user_id
        AND ui.plan_id = up.plan_id
    )
`;