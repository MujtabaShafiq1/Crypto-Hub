export class AppService {
  constructor() {}

  async getHello(): Promise<string> {
    return 'Hello World!';
  }
}
