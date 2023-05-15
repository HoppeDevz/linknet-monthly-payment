export const usersPlansMigration = 
/* sql */`
CREATE TABLE IF NOT EXISTS users_plans(

    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    plan_id INT REFERENCES payment_plans(id),
    status BOOLEAN NOT NULL DEFAULT true,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_user_plan_modified_time()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS user_plan_modified
  ON public.users_plans;

CREATE TRIGGER user_plan_modified
BEFORE UPDATE ON users_plans
FOR EACH ROW
EXECUTE FUNCTION update_user_plan_modified_time();
`;