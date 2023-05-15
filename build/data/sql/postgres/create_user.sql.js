"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSQL = void 0;
exports.createUserSQL = 
/* sql */ `
    INSERT INTO public.users 
        (first_name, last_name, identification_document_type, identification_document, email, phone)
    VALUES 
        ($1, $2, $3, $4, $5, $6)
    RETURNING *;
`;
