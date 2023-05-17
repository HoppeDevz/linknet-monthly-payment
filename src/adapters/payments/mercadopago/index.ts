import mercadopago from "mercadopago";

import { 
    MERCADOPAGO_ACCESS_TOKEN, 
    MERCADOPAGO_PAYMENT_BACKURLS, 
    MERCADOPAGO_SUCCESS_BACKURL, 
    MERCADOPAGO_FAILURE_BACKURL, 
    MERCADOPAGO_PENDING_BACKURL 
} from "@/constants/index";

import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import axios from "axios";

mercadopago.configure({
    access_token: MERCADOPAGO_ACCESS_TOKEN
});

export const createPayment = async (title: string, price: number, paymentReference: string, amount = 1) => {

    const preferenceObject: CreatePreferencePayload = {
        items: [
            { title, unit_price: price, quantity: amount }
        ],

        external_reference: paymentReference
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

export const verifyPayment = async (reference: string) => {

    const response = await axios.get(`https://api.mercadopago.com/v1/payments/search?external_reference=${reference}`, { headers: { Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}` }})

    /*
      metadata: {},
      corporation_id: null,
      operation_type: 'regular_payment',
      point_of_interaction: [Object],
      fee_details: [Array],
      notification_url: null,
      date_approved: '2023-05-16T18:41:43.411-04:00',
      money_release_schema: null,
      payer: [Object],
      transaction_details: [Object],
      statement_descriptor: 'FIVEFPS',
      call_for_authorize_id: null,
      installments: 1,
      pos_id: null,
      external_reference: 'ref-ref',
      date_of_expiration: null,
      charges_details: [],
      id: 1312962374,
      payment_type_id: 'credit_card',
      payment_method: [Object],
      order: [Object],
      counter_currency: null,
      money_release_status: null,
      brand_id: null,
      status_detail: 'accredited',
      tags: null,
      differential_pricing_id: null,
      additional_info: [Object],
      live_mode: false,
      marketplace_owner: null,
      card: [Object],
      integrator_id: null,
      status: 'approved',
      accounts_info: null,
      transaction_amount_refunded: 0,
      transaction_amount: 120,
      description: 'testee',
      financing_group: null,
      money_release_date: '2023-05-16T18:41:43.411-04:00',
      merchant_number: null,
      refunds: [],
      authorization_code: null,
      captured: true,
      collector_id: 392378615,
      merchant_account_id: null,
      taxes_amount: 0,
      date_last_updated: '2023-05-16T18:41:43.411-04:00',
      coupon_amount: 0,
      store_id: null,
      build_version: '2.143.2',
      date_created: '2023-05-16T18:41:43.250-04:00',
      acquirer_reconciliation: [],
      sponsor_id: null,
      shipping_amount: 0,
      issuer_id: '24',
      payment_method_id: 'master',
      binary_mode: false,
      platform_id: null,
      deduction_schema: null,
      processing_mode: 'aggregator',
      currency_id: 'BRL',
      shipping_cost: 0
    */

    if (response.data.results.length === 0) return undefined;

    return response.data.results[0];
}