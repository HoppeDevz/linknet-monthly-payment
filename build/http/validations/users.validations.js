"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserParamsSchema = exports.updateUserBodySchema = exports.createUsersBodySchema = exports.getUserParams = void 0;
const zod_1 = require("zod");
exports.getUserParams = zod_1.z.object({
    user_id: zod_1.z.coerce.number()
});
exports.createUsersBodySchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    identificationDocumentType: zod_1.z.string(),
    identificationDocument: zod_1.z.string(),
    email: zod_1.z.string().nullable(),
    phone: zod_1.z.string()
});
exports.updateUserBodySchema = zod_1.z.object({
    user_id: zod_1.z.number(),
    first_name: zod_1.z.string(),
    last_name: zod_1.z.string(),
    identification_document_type: zod_1.z.string(),
    identification_document: zod_1.z.string(),
    email: zod_1.z.string().nullable(),
    phone: zod_1.z.string(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string()
});
exports.removeUserParamsSchema = zod_1.z.object({
    user_id: zod_1.z.coerce.number()
});
