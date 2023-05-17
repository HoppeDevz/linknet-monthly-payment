export const paymentsMigration = 
/* sql */`
CREATE TABLE IF NOT EXISTS payments(
    id SERIAL PRIMARY KEY,

    reference VARCHAR(255) NOT NULL,

    preference_id VARCHAR(255) NOT NULL,
    init_point VARCHAR(512) NOT NULL,

    payment_id VARCHAR(255),
    status VARCHAR(128),

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
`;