"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPayment = void 0;
const index_1 = require("../../../constants/index");
const mercadopago_1 = __importDefault(require("mercadopago"));
mercadopago_1.default.configure({
    access_token: index_1.MERCADOPAGO_ACCESS_TOKEN
});
const createPayment = (title, price, amount = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const preferenceObject = {
        items: [
            { title, unit_price: price, quantity: amount }
        ]
    };
    if (index_1.MERCADOPAGO_PAYMENT_BACKURLS) {
        preferenceObject.back_urls = {
            "success": index_1.MERCADOPAGO_SUCCESS_BACKURL,
            "failure": index_1.MERCADOPAGO_FAILURE_BACKURL,
            "pending": index_1.MERCADOPAGO_PENDING_BACKURL
        };
        preferenceObject.auto_return = "approved";
    }
    const preference = yield mercadopago_1.default.preferences.create(preferenceObject);
    return preference;
});
exports.createPayment = createPayment;
