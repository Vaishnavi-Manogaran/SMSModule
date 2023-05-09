import { Payload } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';

@Injectable()
export class AppService {
  getMessage(sms: any) {
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
      .then((message: any) =>
        console.log('sent message successfully... ', message.sid),
      )
      .catch((error: any) =>
        console.error('Oops error in sending message!!! ', error),
      );

    return sms;
  }
}
