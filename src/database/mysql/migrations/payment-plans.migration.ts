
export const paymentPlansMigration = 
/* sql */`
    id INT NOT NULL AUTO_INCREMENT,

    name VARCHAR(255) NOT NULL,

    download_byte_rate FLOAT NOT NULL,
    upload_byte_rate FLOAT NOT NULL,

    price FLOAT NOT NULL
`;
