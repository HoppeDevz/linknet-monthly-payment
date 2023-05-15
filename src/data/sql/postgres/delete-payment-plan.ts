export const deletePaymentPlanSQL = 
/* sql */`
DELETE FROM
    public.payment_plans
WHERE
    id = $1
`;