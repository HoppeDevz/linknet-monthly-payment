export const createPaymentSQL =
/* sql */`
INSERT INTO 
    public.payments (reference, preference_id, init_point)
VALUES
    ($1, $2, $3)
RETURNING
    id,
    reference,
    preference_id,
    init_point,
    payment_id,
    status,
    created_at
`;