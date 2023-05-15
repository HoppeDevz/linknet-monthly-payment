export const updatePaymentPlanSQL = 
/* sql */`
UPDATE
    public.payment_plans
SET
    name = $1,
    download_byte_rate = $2,
    upload_byte_rate = $3,
    price = $4
WHERE
    id = $5
RETURNING
    id,
    name,
    download_byte_rate,
    upload_byte_rate,
    price
`;