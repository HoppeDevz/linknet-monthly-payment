export const findUserInvoiceByPaymentId =
/* sql */`
SELECT
    ui.id,
    ui.user_id,
    ui.plan_id,
    ui.payment_id,
    ui.created_at
FROM
    public.users_invoices ui
WHERE
    ui.payment_id = $1
`;