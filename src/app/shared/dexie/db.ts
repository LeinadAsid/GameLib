import Dexie, { Table } from 'dexie';
import { GameItem } from './interfacesDb';

export class AppDB extends Dexie {
  games!: Table<GameItem, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      games: '++id',
    });
  }
}

export const db = new AppDB();
