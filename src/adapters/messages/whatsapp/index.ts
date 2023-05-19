import { WhatsappMessagesUsecases } from "@/useCases/whatsapp-messages.usecases";
import { WhatsAppClient } from "./@types";
import { createClient } from "./factory";

let client: WhatsAppClient | undefined;

const initialize = async () => {

    try {

        client = await createClient();
        await client.initialize();

    } catch(err) {

        throw err;
    }
    
}

const sendMessage = async (number: string, message: string) => {

    if (!client) {

        throw new Error("[WHATSAPP-BOT] - Client not ready yet!");
    }

    try {

        await client.sendMessage(number + "@c.us", message);
        await WhatsappMessagesUsecases.create(number, message);

    } catch(err) {

        throw err;
    }
    
}

export default {
    client,
    initialize,
    sendMessage
}