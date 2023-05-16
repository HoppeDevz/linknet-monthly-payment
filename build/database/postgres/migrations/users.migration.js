"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersMigration = void 0;
exports.usersMigration = 
/* sql */ `
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

-- CONSTRAINTS
ALTER TABLE users DROP CONSTRAINT IF EXISTS unique_email;
ALTER TABLE users DROP CONSTRAINT IF EXISTS unique_phone;

ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);
ALTER TABLE users ADD CONSTRAINT unique_phone UNIQUE (phone);

-- TRIGGERS
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
`;
