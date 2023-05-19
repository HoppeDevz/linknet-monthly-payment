require("express-async-errors");

import express from "express";
import cors from "cors";

import whatsapp from "./adapters/messages/whatsapp";

import { userRoutes } from "@/routes/users.routes";
import { paymentPlansRoutes } from '@/routes/payment-plans.routes';

import { ErrorHandler } from '@/http/middlewares/error-handler';

import { API_PORT } from "./constants";
import { userPlansRoutes } from "./routes/users-plans.routes";
import { InvoiceTask } from "./tasks/invoice.task";
import { PaymentsTask } from "./tasks/verifyPayment.task";
import { PaymentsMessageTask } from "./tasks/payment-message.task";


const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(paymentPlansRoutes);
app.use(userPlansRoutes);

app.use(ErrorHandler);

whatsapp.initialize();

InvoiceTask.start();
PaymentsTask.start();
PaymentsMessageTask.start();

app.listen(API_PORT, () => {

    console.log(`[USERS-API] - Running at port: ${API_PORT}`)
});

