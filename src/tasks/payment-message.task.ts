import dayjs from "dayjs";
import whatsapp from "@/adapters/messages/whatsapp";

import { CronJob } from "cron";

import { PaymentsUseCases } from "@/useCases/payments.usecases";
import { UserInvoiceUseCases } from "@/useCases/user-invoice.usecases";
import { UserUseCases } from "@/useCases/users.usecases";
import { PaymentSuccessfullMessage } from "@/data/template/whatsapp-message";


export const PaymentsMessageTask = new CronJob(
    '0 16 * * * *',
    async function() {

        const approvedPayments = await PaymentsUseCases.getAllApprovedWithoutMessageSended();
        
        for (const approvedPayment of approvedPayments) {

            console.log(`[PAYMENT-MESSAGE-TASK] - Verifying ${approvedPayment.id}`);

            try {

                if (!approvedPayment.id) continue;

                const userInvoice = await UserInvoiceUseCases.findByPaymentId(approvedPayment.id);

                if (!userInvoice) continue;

                const user = await UserUseCases.findById(userInvoice.user_id);

                if (!user) continue;

                console.log(`[PAYMENT-MESSAGE-TASK] - Sending message to ${user.phone}!`);
                
                const phone = user.phone;
                const message = PaymentSuccessfullMessage(
                    user.first_name, 
                    user.last_name, 
                    dayjs(approvedPayment.created_at).format("DD/MM/YYYY")
                );

                await whatsapp.sendMessage(phone, message);
                await PaymentsUseCases.updateMessageSendedStatus(approvedPayment.id);

            } catch(err) {

                console.log("[PAYMENT-MESSAGE-TASK] - Error", err);
            }
        }
    },
    /* onEnd */ null,
    /* startNow */ true
)