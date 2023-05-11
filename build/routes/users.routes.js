"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const users_controller_1 = require("../http/controllers/users.controller");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.get("/users/:user_id", users_controller_1.getUser);
exports.userRoutes.post("/users/create", users_controller_1.createUser);
