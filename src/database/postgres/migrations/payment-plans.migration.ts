
export const paymentPlansMigration = 
/* sql */`
CREATE TABLE IF NOT EXISTS payment_plans(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    download_byte_rate FLOAT NOT NULL,
    upload_byte_rate FLOAT NOT NULL,
    price FLOAT NOT NULL
)
`;
