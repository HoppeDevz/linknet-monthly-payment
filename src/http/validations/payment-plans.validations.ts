import { z } from "zod";


export const createPaymentPlanBodySchema = z.object({
    name: z.string(), 
    downloadRate: z.number(), 
    uploadRate: z.number(), 
    price: z.number()
});

export const updatePaymentPlanBodySchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    download_byte_rate: z.number(), 
    upload_byte_rate: z.number(), 
    price: z.number()
});

export const deletePaymentPlanParamsSchema = z.object({
    id: z.coerce.number()
});
