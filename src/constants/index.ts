import * as dotenv from 'dotenv'; dotenv.config();

export const API_PORT = Number(process.env.API_PORT) ?? 8080;

export const MERCADOPAGO_PUBLIC_KEY = process.env.MERCADOPAGO_PUBLIC_KEY ?? ""
export const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN ?? ""
export const MERCADOPAGO_PAYMENT_BACKURLS = process.env.MERCADOPAGO_PAYMENT_BACKURLS === "true"
export const MERCADOPAGO_SUCCESS_BACKURL = process.env.MERCADOPAGO_SUCCESS_BACKURL ?? "";
export const MERCADOPAGO_FAILURE_BACKURL = process.env.MERCADOPAGO_FAILURE_BACKURL ?? "";
export const MERCADOPAGO_PENDING_BACKURL = process.env.MERCADOPAGO_PENDING_BACKURL ?? "";

export const PIX_KEY = process.env.PIX_KEY ?? "";

export const PG_HOST = process.env.PG_HOST ?? "localhost"
export const PG_PORT = Number(process.env.PG_PORT ?? 5432)
export const PG_USER = process.env.PG_USER ?? "root"
export const PG_PASSWORD = process.env.PG_PASSWORD ?? ""
export const PG_DATABASE = process.env.PG_DATABASE ?? "postgres"
export const PG_IDLE_TIMEOUT = Number(process.env.PG_IDLE_TIMEOUT ?? 5000);
export const PG_MAX_POOL_CONNECTIONS = Number(process.env.PG_MAX_POOL_CONNECTIONS ?? 10)