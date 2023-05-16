export const createPaymentSQL =
/* sql */`
INSERT INTO 
    payments (mp_payment_id, init_point)
VALUES
    ($1, $2)
RETURNING
    id,
    mp_payment_id,
    init_point,
    created_at
`;