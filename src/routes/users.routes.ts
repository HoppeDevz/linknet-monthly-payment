import { Router } from "express";
import { createUser, getUser, removeUser, updateUser } from "../http/controllers/users.controller";

export const userRoutes = Router();

userRoutes.get("/users/:user_id", getUser);

userRoutes.post("/users", createUser);
userRoutes.patch("/users", updateUser);
userRoutes.delete("/users/:user_id", removeUser);


