import { IWhatsppMessagesUseCases } from "@/domain/whatsapp-messages";
import { WhatsappMessagesRepository } from "@/repositories/postgres/whatsapp-messages.postgres.repositories";

const create = async(phone: string, message: string) => {
    
    try {

        const createdMessage = await WhatsappMessagesRepository.create(phone, message);

        return createdMessage;

    } catch(err) {

        throw err;
    }
}

export const WhatsappMessagesUsecases: IWhatsppMessagesUseCases = {
    create
}