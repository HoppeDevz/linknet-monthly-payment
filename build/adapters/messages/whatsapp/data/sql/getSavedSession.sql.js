"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSavedSessionSQL = void 0;
exports.getSavedSessionSQL = 
/* sql */ `
SELECT 
    ws.id,
    ws.wabrowserid,
    ws.wasecretbundle,
    ws.watoken1,
    ws.watoken2,
    ws.created_at
FROM
    whatsapp_sessions ws
ORDER BY
    ws.created_at DESC
LIMIT 1;
`;
