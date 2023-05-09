import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices/client';
import { SMSdto } from './app.dto';

@Controller()
export class AppController implements OnModuleInit {
  constructor(@Inject('SMS-MODULE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    this.client.subscribeToResponseOf('Notification-SMS');
    await this.client.connect();
  }

  @Post()
  getMessage(@Body() sms: SMSdto) {
    return this.client.send('Notification-SMS', sms);
  }
}
