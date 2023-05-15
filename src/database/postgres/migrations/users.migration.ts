export const usersMigration = 
/* sql */`
CREATE TABLE IF NOT EXISTS users(
    
  user_id SERIAL PRIMARY KEY,

  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,

  identification_document_type VARCHAR(255) NOT NULL,
  identification_document VARCHAR(255) NOT NULL,

  email VARCHAR(255),
  phone VARCHAR(255) NOT NULL,
  
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users ADD CONSTRAINT IF NOT EXISTS unique_email UNIQUE (email);
ALTER TABLE users ADD CONSTRAINT IF NOT EXISTS unique_phone UNIQUE (phone);

CREATE OR REPLACE FUNCTION update_user_modified_time()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS user_modified
  ON public.users;

CREATE TRIGGER user_modified
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_user_modified_time();
`