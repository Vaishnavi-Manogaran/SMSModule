import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SMS-MODULE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'sms-vitasoft',
            brokers: ['192.168.10.166:9094'],
          },
          // consumer: {
          //   groupId: 'sms-module',
          // },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
