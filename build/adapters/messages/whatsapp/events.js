"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientMessageEvent = exports.clientAuthenticated = exports.clientReadyEvent = exports.qrCodeEvent = void 0;
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
const qrCodeEvent = (client) => (qr) => {
    qrcode_terminal_1.default.generate(qr, { small: true });
};
exports.qrCodeEvent = qrCodeEvent;
const clientReadyEvent = (client) => () => {
    console.log('[WHATSAPP-BOT] - Client is ready!');
    client.on("message", (0, exports.clientMessageEvent)(client));
};
exports.clientReadyEvent = clientReadyEvent;
const clientAuthenticated = (client) => (session) => {
    console.log({
        session
    });
};
exports.clientAuthenticated = clientAuthenticated;
const clientMessageEvent = (client) => (message) => {
    console.log(`[WHATSAPP-BOT] Received message: ${message.body}`);
};
exports.clientMessageEvent = clientMessageEvent;
