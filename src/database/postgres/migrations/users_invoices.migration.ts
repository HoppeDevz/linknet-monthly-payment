export const usersInvoicesMigration = 
/* sql */`
CREATE TABLE IF NOT EXISTS users_invoices(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    plan_id INT REFERENCES payment_plans(id),
    payment_id INT REFERENCES payments(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
`;