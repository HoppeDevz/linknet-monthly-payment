export const toogleUserPlanSQL = 
/* sql */`
UPDATE 
    public.users_plans up
SET
    up.status = $2
WHERE
    up.id = $1
`;