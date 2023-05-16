export const whatsappMigration = 
/* sql */`
CREATE TABLE IF NOT EXISTS whatsapp_sessions(
    
    id SERIAL PRIMARY KEY,

    WABrowserId VARCHAR(255) NOT NULL,
    WASecretBundle VARCHAR(255) NOT NULL,
    WAToken1 VARCHAR(255) NOT NULL,
    WAToken2 VARCHAR(255) NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
`;