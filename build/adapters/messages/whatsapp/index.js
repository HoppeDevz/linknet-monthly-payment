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
const factory_1 = require("./factory");
let client;
const initialize = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, factory_1.createClient)();
        yield client.initialize();
    }
    catch (err) {
        throw err;
    }
});
const sendMessage = (number, message) => __awaiter(void 0, void 0, void 0, function* () {
    if (!client) {
        throw new Error("[WHATSAPP-BOT] - Client not ready yet!");
    }
    try {
        yield client.sendMessage(number, message);
    }
    catch (err) {
        throw err;
    }
});
exports.default = {
    client,
    initialize,
    sendMessage
};
