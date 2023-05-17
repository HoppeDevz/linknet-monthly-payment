import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { CronJob } from "cron";

import whatsapp from "@/adapters/messages/whatsapp";
import { createPayment } from "@/adapters/payments/mercadopago";

import { WhatsAppInvoiceMessage } from "@/data/template/whatsapp-message";

import { UserUseCases } from "@/useCases/users.usecases";
import { PaymentsUseCases } from "@/useCases/payments.usecases";
import { UserInvoiceUseCases } from "@/useCases/user-invoice.usecases";
import { UserPlanUseCases } from "@/useCases/user-plan.usecases";
import { PaymentPlansUseCases } from "@/useCases/payment-plans.usecases";

export const InvoiceTask = new CronJob(
    '0 12 * * * *',
    async function() {

        console.log("[Invoice-Task] - Running task...");

        const usersPlans = await UserPlanUseCases.getNonBilledPlans();

        for (const userPlan of usersPlans) {

            const currentDate = dayjs();
            const payday = dayjs()
                .set("D", userPlan.payday)
                .set("hours", 0)
                .set("minutes", 0)
                .set("seconds", 0);

            if (currentDate.valueOf() > payday.valueOf()) {

                const paymentPlan = await PaymentPlansUseCases.findById(userPlan.plan_id);
                const user = await UserUseCases.findById(userPlan.user_id);

                if (user === undefined) {

                    throw new Error(`[Invoice-Task] - User not found (ID: ${userPlan.user_id})`)
                }

                if (paymentPlan === undefined) {

                    throw new Error(`[Invoice-Task] - Payment plan not found (ID: ${userPlan.plan_id})`)
                }

                console.log("[Invoice-Task] - Creating payment...");

                const paymentReference = uuidv4();
                const payment = await createPayment(`Plano LinkNet ${paymentPlan.name}`, paymentPlan.price, paymentReference);

                console.log("[Invoice-Task] - Inserting payment into database...", payment.response.id, payment.response.init_point);
                const createdPayment = await PaymentsUseCases.create({
                    reference: paymentReference,
                    preference_id: payment.response.id,
                    init_point: payment.response.init_point
                });

                console.log("[Invoice-Task] - Inserting invoice into database...");
                await UserInvoiceUseCases.create({
                    user_id: userPlan.user_id,
                    plan_id: userPlan.plan_id,
                    payment_id: createdPayment.id as number
                });

                console.log("[Invoice-Task] - Sending whatsapp message...");
                const phone = user.phone;
                const message = WhatsAppInvoiceMessage(
                    user.first_name,
                    user.last_name,
                    payday.format("DD/MM/YYYY"),
                    (paymentPlan.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }),
                    createdPayment.init_point
                );

                console.log("[Invoice-Task] - Success!");
                whatsapp.sendMessage(phone, message);
            }
        }
    },
    /* onEnd */ null,
    /* startNow */ true
);