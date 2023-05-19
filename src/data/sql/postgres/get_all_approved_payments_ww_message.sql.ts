export const getAllApprovedPaymentsWithoutMessageSended =
/* sql */`
SELECT
    p.id,
    p.reference,
    p.preference_id,
    p.init_point,
    p.payment_id,
    p.status,
    p.created_at
FROM
    public.payments p
WHERE
    p.status = 'approved'
    AND p.sended_message = false
`;