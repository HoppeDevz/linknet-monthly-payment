import { WhatsappMessage } from "@/entities/WhatsappMessage";


export interface IWhatsppMessagesRepository {
    create: (phone: string, message: string) => Promise<WhatsappMessage>
}

export interface IWhatsppMessagesUseCases {
    create: (phone: string, message: string) => Promise<WhatsappMessage>
}