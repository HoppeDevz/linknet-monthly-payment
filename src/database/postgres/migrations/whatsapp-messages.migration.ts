export const whatsappMessagesMigration = 
/* sql */`
CREATE TABLE IF NOT EXISTS whatsapp_messages (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(32) NOT NULL,
    message VARCHAR(1024) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- TRIGGERS
CREATE OR REPLACE FUNCTION update_whatsapp_message_modified_time()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS whatsapp_messages_modified
  ON public.whatsapp_messages;

CREATE TRIGGER whatsapp_messages_modified
BEFORE UPDATE ON whatsapp_messages
FOR EACH ROW
EXECUTE FUNCTION update_whatsapp_message_modified_time();
`;