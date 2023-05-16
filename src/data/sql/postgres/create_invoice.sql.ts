export const createInvoiceSQL = 
/* sql */`
INSERT INTO
    users_invoices (user_id, plan_id, payment_id)
VALUES
    ($1, $2, $3)
RETURNING
    id,
    user_id,
    plan_id,
    payment_id,
    created_at
`;