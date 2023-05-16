import mercadopago from "mercadopago";

import { 
    MERCADOPAGO_ACCESS_TOKEN, 
    MERCADOPAGO_PAYMENT_BACKURLS, 
    MERCADOPAGO_SUCCESS_BACKURL, 
    MERCADOPAGO_FAILURE_BACKURL, 
    MERCADOPAGO_PENDING_BACKURL 
} from "@/constants/index";

import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";

mercadopago.configure({
    access_token: MERCADOPAGO_ACCESS_TOKEN
});

export const createPayment = async (title: string, price: number, amount = 1) => {

    const preferenceObject: CreatePreferencePayload = {
        items: [
            { title, unit_price: price, quantity: amount }
        ]
    }

    if (MERCADOPAGO_PAYMENT_BACKURLS) {

        preferenceObject.back_urls = {
            "success": MERCADOPAGO_SUCCESS_BACKURL,
            "failure": MERCADOPAGO_FAILURE_BACKURL,
            "pending": MERCADOPAGO_PENDING_BACKURL
        }
        preferenceObject.auto_return = "approved";
    }

    const preference = await mercadopago.preferences.create(preferenceObject);

    return preference;
}