import { Injectable } from '@nestjs/common';
import { Item } from './models/item.model';

@Injectable()
export class AppService {

  listItem: Item[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  async getItems(): Promise<Array<Item>> {
    this.listItem = [
      { id: 1, name: 'QWERTY1', quantity: 10, status: true },
      { id: 2, name: 'QWERTY2', quantity: 20, status: false },
      { id: 3, name: 'QWERTY3', quantity: 30, status: true },
      { id: 4, name: 'QWERTY4', quantity: 40, status: false },
      { id: 5, name: 'QWERTY5', quantity: 50, status: true }
    ]

    return await this.listItem;
  }
}