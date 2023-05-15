export const createPaymentPlanSQL = 
/* sql */`
    INSERT INTO 
        public.payment_plans (name, download_byte_rate, upload_byte_rate, price)
    VALUES
        ($1, $2, $3, $4)
    RETURNING *;
`;