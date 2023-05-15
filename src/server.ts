require("express-async-errors");
import * as dotenv from 'dotenv'; dotenv.config();

import express from "express";
import cors from "cors";

import { userRoutes } from "@/routes/users.routes";
import { paymentPlansRoutes } from '@/routes/payment-plans.routes';

import { ErrorHandler } from '@/http/middlewares/error-handler';

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(paymentPlansRoutes)

app.use(ErrorHandler);
app.listen(process.env.API_PORT, () => {

    console.log(`[USERS-API] - Running at port: ${process.env.API_PORT}`)
});