import { Router } from "express";
import { 
    createPaymentPlan, 
    deletePaymentPlan, 
    getAllPaymentPlans, 
    updatePaymentPlan
} from "@/http/controllers/payment-plans.controller";

export const paymentPlansRoutes = Router();

paymentPlansRoutes.get("/payment-plans/all", getAllPaymentPlans);

paymentPlansRoutes.post("/payment-plans", createPaymentPlan);
paymentPlansRoutes.patch("/payment-plans", updatePaymentPlan);
paymentPlansRoutes.delete("/payment-plans/:id", deletePaymentPlan);
