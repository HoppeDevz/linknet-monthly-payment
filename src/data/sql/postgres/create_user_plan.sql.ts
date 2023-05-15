export const createUserPlanSQL = 
/* sql */`
INSERT INTO
    public.users_plans (user_id, plan_id, status)
VALUES
    ($1, $2, $3)
RETURNING
    id,
    user_id,
    plan_id,
    status,
    created_at,
    updated_at
`;