export const createWhatsappMessageSQL = 
/* sql */`
INSERT INTO
    public.whatsapp_messages (phone, message)
VALUES
    ($1, $2)
RETURNING
    id,
    phone,
    message,
    created_at,
    updated_at
`;