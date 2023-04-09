import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(username: string, token: string) {
    const url = `http://localhost:3000/confirmation/${token}`;

    await this.mailerService.sendMail({
      to: username,
      subject: 'Verify your Email on LocalHost',
      template: './verification', // Specify the path to the email template file
      context: {
        name: username,
        url,
      },
    });
  }
}
