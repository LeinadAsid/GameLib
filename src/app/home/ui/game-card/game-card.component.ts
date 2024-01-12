import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GameInfo } from '../../interfaces/GameInfo';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'game-card',
  standalone: true,
  imports: [CommonModule, StarsComponent],
  templateUrl: './game-card.component.html',
})
export class GameCardComponent implements OnInit {
  @Input() game: Partial<GameInfo> | null = null;

  defaultValues: GameInfo = {
    image: 'assets/defaults/image-not-found.jpg',
    rate: 1,
    title: 'Not Found',
    review: '',
  };

  ngOnInit() {
    this.game = { ...this.defaultValues, ...this.game };
  }
}
