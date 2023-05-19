import { createWhatsappMessageSQL } from "@/data/sql/postgres/create_whatsapp_message.sql";
import { openTransaction } from "@/database/postgres";
import { IWhatsppMessagesRepository } from "@/domain/whatsapp-messages";
import { WhatsappMessage } from "@/entities/WhatsappMessage";


const create = async (phone: string, message: string) => {

    const poolClient = await openTransaction();

    try {

        const {rows} = await poolClient.query<WhatsappMessage>(createWhatsappMessageSQL, [phone, message]);

        return rows[0];

    } catch(err) {

        throw err;
    }
}

export const WhatsappMessagesRepository: IWhatsppMessagesRepository = {
    create
}