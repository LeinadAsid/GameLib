import { Component, inject, signal } from '@angular/core';
import { NewGameCardComponent } from './ui/new-game-card/new-game-card.component';
import { AddNewGameModalComponent } from './ui/add-new-game-modal/add-new-game-modal.component';
import { GameInfo } from './interfaces/GameInfo';

import { db } from '../shared/dexie/db';
import { GamesService } from './data-access/games/games.service';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './ui/game-card/game-card.component';

import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  CdkDragPlaceholder,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';
import { lastValueFrom, take } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NewGameCardComponent,
    AddNewGameModalComponent,
    CommonModule,
    GameCardComponent,
    CdkDrag,
    CdkDropListGroup,
    CdkDropList,
    CdkDragPlaceholder,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.styles.scss',
})
export class HomeComponent {
  gamesService = inject(GamesService);

  isAdding = signal<boolean>(false);

  setAdding(bool: boolean) {
    this.isAdding.set(bool);
  }

  async saveGame(gameInfo: GameInfo) {
    await db.games.add(gameInfo);
  }

  async drop(event: CdkDragDrop<any>) {
    const games = await lastValueFrom(this.gamesService.games$.pipe(take(1)));

    moveItemInArray(
      games,
      event.previousContainer.data.index,
      event.container.data.index,
    );

    await this.gamesService.setGames(games);
  }
}
