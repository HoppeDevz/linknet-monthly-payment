import type { Client } from "whatsapp-web.js";

export interface WhatsAppClient extends Client {
    
    autheticated: boolean
}