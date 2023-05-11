export const usersMigration = 
/* sql */`
CREATE TABLE IF NOT EXISTS users(
    
  user_id INT NOT NULL AUTO_INCREMENT,

  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,

  identification_document_type VARCHAR(255) NOT NULL,
  identification_document VARCHAR(255) NOT NULL,

  email VARCHAR(255),
  phone VARCHAR(255) NOT NULL,
  
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (user_id)
)
`