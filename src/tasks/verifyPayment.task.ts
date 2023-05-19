import dayjs from "dayjs";
import whatsapp from "@/adapters/messages/whatsapp";

import { verifyPayment } from "@/adapters/payments/mercadopago";
import { PaymentSuccessfullMessage } from "@/data/template/whatsapp-message";
import { PaymentsUseCases } from "@/useCases/payments.usecases";
import { UserInvoiceUseCases } from "@/useCases/user-invoice.usecases";
import { UserUseCases } from "@/useCases/users.usecases";
import { CronJob } from "cron";


export const PaymentsTask = new CronJob(
    '0 16 * * * *',
    async function() {

        const pendingPayments = await PaymentsUseCases.getAllPending();

        for (const pendingPayment of pendingPayments) {

            console.log(`[PAYMENT-TASK] - Verifying ${pendingPayment.reference}`);

            if (pendingPayment.id === undefined) continue;

            const payment = await verifyPayment(pendingPayment.reference);

            if (!payment) continue;

            const userInvoice = await UserInvoiceUseCases.findByPaymentId(pendingPayment.id);

            if (!userInvoice) continue;

            const user = await UserUseCases.findById(userInvoice.user_id);

            if (!user) continue;

            await PaymentsUseCases.updatePaymentStatus(pendingPayment.id, payment.id.toString(), payment.status);

            // if (payment.status === "approved") {

            //     console.log(`[PAYMENT-TASK] - ${pendingPayment.reference} approved!`);
            //     console.log(`[PAYMENT-TASK] - Sending message to ${user.phone}!`);
            //     // send whatsapp message
            //     const phone = user.phone;
            //     const message = PaymentSuccessfullMessage(
            //         user.first_name, 
            //         user.last_name, 
            //         dayjs(pendingPayment.created_at).format("DD/MM/YYYY")
            //     );

            //     whatsapp.sendMessage(phone, message);
            // }
        }

    },
    /* onEnd */ null,
    /* startNow */ true
);