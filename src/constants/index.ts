
export const PG_HOST = process.env.PG_HOST ?? "localhost"
export const PG_PORT = Number(process.env.PG_PORT) ?? 5432
export const PG_USER = process.env.PG_USER ?? "root"
export const PG_PASSWORD = process.env.PG_PASSWORD ?? ""
export const PG_DATABASE = process.env.PG_DATABASE ?? "postgres"
export const PG_IDLE_TIMEOUT = Number(process.env.PG_IDLE_TIMEOUT) ?? 5000;
export const PG_MAX_POOL_CONNECTIONS = Number(process.env.PG_MAX_POOL_CONNECTIONS) ?? 10