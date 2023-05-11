import { z } from "zod";

export const getUserParams = z.object({
    user_id: z.number()
});

export const createUsersBodySchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    identificationDocumentType: z.string(),
    identificationDocument: z.string(),
    email: z.string().nullable(),
    phone: z.string()
});