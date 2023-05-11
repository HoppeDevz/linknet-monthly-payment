import mysql, { PoolConnection } from "mysql";
import { usersMigration } from "./migrations/users.migration";

const mysqlPool = mysql.createPool({
    host: process.env.MYSQL_HOST ?? "localhost",
    port: Number(process.env.MYSQL_PORT) ?? 3306,
    user: process.env.MYSQL_USER ?? "root",
    password: process.env.MYSQL_PASSWORD ?? "",
    database: process.env.MYSQL_DATABASE ?? "linknet",
    connectionLimit: Number(process.env.MYSQL_MAX_POOL_CONNECTIONS) ?? 10
});

export const connectionQuery = <Data>(connection: PoolConnection, query: string, placeholder?: unknown[]): Promise<Data> => {

    return new Promise((resolve, reject) => {

        connection.query(query, placeholder, (err, rows, fields) => {

            if (err) {

                reject(err);
                return;
            }

            resolve(rows);
        });
    });
}

export const query = <Data>(query: string, placeholder?: unknown[]): Promise<Data[]> => {

    return new Promise((resolve, reject) => {

        mysqlPool.query(query, placeholder, (error, results, fields) => {

            if (error) return reject(error);

            resolve(results);

        });
    });    
}

export const runTransaction = <ThreadData>(thread: (client: PoolConnection) => Promise<ThreadData>): Promise<ThreadData> => {

    return new Promise((resolve, reject) => {

        mysqlPool.getConnection(async (err, connection) => {

            if (err) {

                reject(new Error("Error while trying to open pool connection!"));
                return;
            };
    
            try {
    
                await connectionQuery(connection, "BEGIN");
                const callbackValue = await thread(connection);
                await connectionQuery(connection, "COMMIT");
                
                resolve(callbackValue);

            } catch(err) {
                
                reject(err);
        
            } finally {
    
                await connectionQuery(connection, "ROLLBACK");
                connection.release();
            }
    
        });

    });

    
    
}
