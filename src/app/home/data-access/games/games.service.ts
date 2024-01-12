import { Injectable } from '@angular/core';

import { db } from '../../../shared/dexie/db';
import { liveQuery } from 'dexie';
import { from } from 'rxjs';
import { GameItem } from '../../../shared/dexie/interfacesDb';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  games$ = from(this.getAllGames());

  constructor() {}

  private getAllGames() {
    return liveQuery(async () => {
      return await db.games.toArray();
    });
  }

  async setGames(arr: GameItem[]) {
    await db.games.clear();

    const newArr = arr.map((val, index) => {
      val.id = index;
      return val;
    });

    await db.games.bulkAdd(newArr);
  }
}
