import { Pool, PoolClient, QueryResult, QueryResultRow } from "pg";

import { 
    PG_HOST,
    PG_PORT,
    PG_USER,
    PG_PASSWORD,
    PG_DATABASE,
    PG_IDLE_TIMEOUT,
    PG_MAX_POOL_CONNECTIONS
} from "../../constants";

import { usersMigration } from "./migrations/users.migration";
import { paymentPlansMigration } from "./migrations/payment-plans.migration";

const connectionPool = new Pool({
    host: PG_HOST,
    port: PG_PORT,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    idleTimeoutMillis: PG_IDLE_TIMEOUT,
    maxUses: PG_MAX_POOL_CONNECTIONS
});

export const runPgTransactions = async () => {

    try {

        await query(usersMigration);
        await query(paymentPlansMigration);

    } catch(err) {

        console.error(err);
        console.log("[POSTGRES] - Error while trying to run POSTGRES migrations");
    }
}

export const query = async <R extends QueryResultRow = any>(query: string, placeholder?: unknown[]): Promise<QueryResult<R>> => {

    try {

        return await connectionPool.query(query, placeholder) as QueryResult<R>;

    } catch(err) {

        throw err;
    }
}

export const openTransaction = async () => {

    try {

        const client = await connectionPool.connect();

        client.query("BEGIN");

        return client;

    } catch(err) {

        throw err;
    }
}

export const commitTransaction = async (client: PoolClient) => {

    try {

        client.query("COMMIT");
        client.release();

    } catch(err) {

        throw err;
    }
}

export const rollbackTransaction = async (client: PoolClient) => {

    try {

        client.query("ROLLBACK");
        client.release();

    } catch(err) {

        throw err;

    } finally {

        client.release();
    }
}