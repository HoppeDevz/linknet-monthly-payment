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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const whatsapp_web_js_1 = require("whatsapp-web.js");
const events_1 = require("./events");
const postgres_1 = require("../../../database/postgres");
const getSavedSession_sql_1 = require("./data/sql/getSavedSession.sql");
const getSavedSession = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield (0, postgres_1.query)(getSavedSession_sql_1.getSavedSessionSQL, []);
        if (rows.length === 0) {
            return undefined;
        }
        const session = {
            WABrowserId: rows[0].wabrowserid,
            WASecretBundle: rows[0].wasecretbundle,
            WAToken1: rows[0].watoken1,
            WAToken2: rows[0].watoken2,
        };
        return session;
    }
    catch (err) {
        throw err;
    }
});
const createClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const clientOptions = {};
    const client = new whatsapp_web_js_1.Client(clientOptions);
    client.autheticated = false;
    client.on("qr", (0, events_1.qrCodeEvent)(client));
    client.on("authenticated", (0, events_1.clientAuthenticated)(client));
    client.on("ready", (0, events_1.clientReadyEvent)(client));
    return client;
});
exports.createClient = createClient;
