"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toogleUserPlanParamsSchema = exports.createUserPlanBodySchema = exports.getAllUserPlansParamsSchema = void 0;
const zod_1 = require("zod");
exports.getAllUserPlansParamsSchema = zod_1.z.object({
    user_id: zod_1.z.coerce.number()
});
exports.createUserPlanBodySchema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    user_id: zod_1.z.number(),
    plan_id: zod_1.z.number(),
    address: zod_1.z.string(),
    payday: zod_1.z.number().min(1).max(25),
    status: zod_1.z.boolean(),
    created_at: zod_1.z.string().optional(),
    updated_at: zod_1.z.string().optional()
});
exports.toogleUserPlanParamsSchema = zod_1.z.object({
    id: zod_1.z.coerce.number()
});
