export const updatePaymentStatusSQL = 
/* sql */`
UPDATE 
    public.payments
SET
    payment_id = $2,
    status = $3
WHERE
    id = $1
`;