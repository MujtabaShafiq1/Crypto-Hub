import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Token } from 'src/tokens/token.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(username: string, token: Token): Promise<void> {
    const url = `http://localhost:3000/confirmation/${token}`;

    await this.mailerService.sendMail({
      to: username,
      subject: 'Verify your Email on LocalHost',
      template: './verification',
      context: {
        name: username,
        url,
      },
    });
  }

  async updatePassword(username: string, token: Token): Promise<void> {
    const url = `http://localhost:3000/reset/${token}`;

    await this.mailerService.sendMail({
      to: username,
      subject: 'Update Password on LocalHost',
      template: './password-reset',
      context: {
        name: username,
        url,
      },
    });
  }

  async accountCreation(username: string, name: string): Promise<void> {
    await this.mailerService.sendMail({
      to: username,
      subject: 'Account Creation on LocalHost',
      template: './account-creation',
      context: {
        name,
      },
    });
  }
}
