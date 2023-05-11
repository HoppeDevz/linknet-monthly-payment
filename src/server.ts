import * as dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";

import { userRoutes } from "./routes/users.routes";
import { runMySQLMigrations } from './database/mysql/migrations/run';

runMySQLMigrations();

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.listen(process.env.API_PORT, () => {

    console.log(`[USERS-API] - Running at port: ${process.env.API_PORT}`)
});