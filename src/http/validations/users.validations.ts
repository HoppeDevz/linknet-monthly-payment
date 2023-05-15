import { z } from "zod";

export const getUserParams = z.object({
    user_id: z.coerce.number()
});

export const createUsersBodySchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    identificationDocumentType: z.string(),
    identificationDocument: z.string(),
    email: z.string().nullable(),
    phone: z.string()
});

export const updateUserBodySchema = z.object({
    user_id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    identification_document_type: z.string(),
    identification_document: z.string(),
    email: z.string().nullable(),
    phone: z.string(),
    created_at: z.string(),
    updated_at: z.string()
});

export const removeUserParamsSchema = z.object({
    user_id: z.coerce.number()
});
