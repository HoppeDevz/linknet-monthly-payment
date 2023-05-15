import { Router } from "express";
import { activateUserPlan, createUserPlan, desactivateUserPlan, getAllUserPlans } from "@/http/controllers/user-plans.controller";

export const userPlansRoutes = Router();

userPlansRoutes.get("/user-plans/all/:user_id", getAllUserPlans);
userPlansRoutes.post("/user-plans/create", createUserPlan);
userPlansRoutes.patch("/user-plans/activate/:id", activateUserPlan);
userPlansRoutes.patch("/user-plans/desactivate/:id", desactivateUserPlan);