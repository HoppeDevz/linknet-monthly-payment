import { createWhatsappMessageSQL } from "@/data/sql/postgres/create_whatsapp_message.sql";
import { commitTransaction, openTransaction, rollbackTransaction } from "@/database/postgres";
import { IWhatsppMessagesRepository } from "@/domain/whatsapp-messages";
import { WhatsappMessage } from "@/entities/WhatsappMessage";


const create = async (phone: string, message: string) => {

    const poolClient = await openTransaction();

    try {

        const {rows} = await poolClient.query<WhatsappMessage>(createWhatsappMessageSQL, [phone, message]);

        await commitTransaction(poolClient);
        return rows[0];

    } catch(err) {

        await rollbackTransaction(poolClient);
        throw err;
    }
}

export const WhatsappMessagesRepository: IWhatsppMessagesRepository = {
    create
}