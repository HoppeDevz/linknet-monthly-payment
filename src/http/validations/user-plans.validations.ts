import { z } from "zod";

export const getAllUserPlansParamsSchema = z.object({
    user_id: z.coerce.number()
});

export const createUserPlanBodySchema = z.object({
    id: z.number().optional(),
    user_id: z.number(),
    plan_id: z.number(),
    status: z.boolean(),
    created_at: z.string().optional(),
    updated_at: z.string().optional()
});

export const toogleUserPlanParamsSchema = z.object({
    id: z.coerce.number()
})
