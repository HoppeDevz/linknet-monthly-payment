export const getAllPaymentsSQL = 
/* sql */`
SELECT 
    p.id,
    p.mp_payment_id,
    p.init_point,
    p.status,
    p.created_at
FROM
    public.payments p
`;