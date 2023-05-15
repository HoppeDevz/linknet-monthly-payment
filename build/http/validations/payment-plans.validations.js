"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePaymentPlanParamsSchema = exports.updatePaymentPlanBodySchema = exports.createPaymentPlanBodySchema = void 0;
const zod_1 = require("zod");
exports.createPaymentPlanBodySchema = zod_1.z.object({
    name: zod_1.z.string(),
    downloadRate: zod_1.z.number(),
    uploadRate: zod_1.z.number(),
    price: zod_1.z.number()
});
exports.updatePaymentPlanBodySchema = zod_1.z.object({
    id: zod_1.z.coerce.number(),
    name: zod_1.z.string(),
    download_byte_rate: zod_1.z.number(),
    upload_byte_rate: zod_1.z.number(),
    price: zod_1.z.number()
});
exports.deletePaymentPlanParamsSchema = zod_1.z.object({
    id: zod_1.z.coerce.number()
});
