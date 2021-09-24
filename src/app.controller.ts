import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Item } from './models/item.model';

@Controller('item')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('items')
  async getItems(): Promise<Array<Item>> {
    return await this.appService.getItems();
  }
}
