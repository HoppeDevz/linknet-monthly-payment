"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_routes_1 = require("./routes/users.routes");
const payment_plans_routes_1 = require("./routes/payment-plans.routes");
const error_handler_1 = require("./http/middlewares/error-handler");
const constants_1 = require("./constants");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(users_routes_1.userRoutes);
app.use(payment_plans_routes_1.paymentPlansRoutes);
app.use(error_handler_1.ErrorHandler);
app.listen(constants_1.API_PORT, () => {
    console.log(`[USERS-API] - Running at port: ${constants_1.API_PORT}`);
});
