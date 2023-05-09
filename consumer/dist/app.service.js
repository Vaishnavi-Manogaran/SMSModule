"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const twilio = require("twilio");
let AppService = class AppService {
    getMessage(sms) {
        console.log('received message => ', sms);
        const accountSid = 'AC5953a4423164c588d8656cba10f67bb2';
        const authToken = 'afc3e736e42c1f29cf88268eab3d9e6f';
        const client = twilio(accountSid, authToken);
        client.messages
            .create({
            body: sms.TextBody,
            from: '+13203772398',
            to: '+919080720321',
        })
            .then((message) => console.log('sent message successfully... ', message.sid))
            .catch((error) => console.error('Oops error in sending message!!! ', error));
        return sms;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map