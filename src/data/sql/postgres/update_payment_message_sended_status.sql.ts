export const updatePaymentSendedMessageStatusSQL = 
/* sql */`
UPDATE
    public.payments
SET
    sended_message = true
WHERE
    id = $1
`;