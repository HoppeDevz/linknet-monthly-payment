import { Router } from "express";
import { createUser, getUser } from "../http/controllers/users.controller";

export const userRoutes = Router();

userRoutes.get("/users/:user_id", getUser);
userRoutes.post("/users/create", createUser);

