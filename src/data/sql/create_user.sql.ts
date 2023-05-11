
export const createUserSQL = 
/* sql */`
    INSERT INTO linknet.users 
        (first_name, last_name, identification_document_type, identification_document, email, phone)
    VALUES 
        (?, ?, ?, ?, ?, ?);
`;