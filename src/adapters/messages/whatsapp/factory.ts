import { Client, ClientOptions } from "whatsapp-web.js";
import { WhatsAppClient } from "./@types";
import { clientAuthenticated, clientReadyEvent, qrCodeEvent } from "./events";

export const createClient = async () => {

    const clientOptions: ClientOptions = {
        puppeteer: { 
            headless: true, 
            args: ["--no-sandbox"] 
        }
    };
    const client = new Client(clientOptions) as WhatsAppClient;

    client.autheticated = false;
    client.ready = false;

    client.on("qr", qrCodeEvent(client));
    client.on("authenticated", clientAuthenticated(client));
    client.on("ready", clientReadyEvent(client));

    return client;
}
