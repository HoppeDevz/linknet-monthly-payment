import qrCode from "qrcode-terminal";

import type { ClientSession, Message } from "whatsapp-web.js";
import type { WhatsAppClient } from "./@types";

export const qrCodeEvent = (client: WhatsAppClient) => (qr: string) => {

    qrCode.generate(qr, { small: true });
}

export const clientReadyEvent = (client: WhatsAppClient) => () => {

    console.log('[WHATSAPP-BOT] - Client is ready!');

    client.on("message", clientMessageEvent(client));
}

export const clientAuthenticated = (client: WhatsAppClient) => (session: ClientSession) => {

    console.log('[WHATSAPP-BOT] - Client is authenticated!');
    client.autheticated = true;
}

export const clientMessageEvent = (client: WhatsAppClient) => (message: Message) => {

    console.log(`[WHATSAPP-BOT] - Received message (${message.deviceType}) (${message.from}): ${message.body}`);
}