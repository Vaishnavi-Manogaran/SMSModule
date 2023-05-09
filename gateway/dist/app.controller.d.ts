import { OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices/client';
import { SMSdto } from './app.dto';
export declare class AppController implements OnModuleInit {
    private readonly client;
    constructor(client: ClientKafka);
    onModuleInit(): Promise<void>;
    getMessage(sms: SMSdto): import("rxjs").Observable<any>;
}
