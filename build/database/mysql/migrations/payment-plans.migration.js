"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentPlansMigration = void 0;
exports.paymentPlansMigration = 
/* sql */ `
    id INT NOT NULL AUTO_INCREMENT,

    name VARCHAR(255) NOT NULL,

    download_byte_rate FLOAT NOT NULL,
    upload_byte_rate FLOAT NOT NULL,

    price FLOAT NOT NULL
`;