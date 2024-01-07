import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'new-game-card',
  standalone: true,
  imports: [],
  templateUrl: './new-game-card.component.html',
})
export class NewGameCardComponent {
  @Output() addGame = new EventEmitter<void>();

  addNewGame() {
    this.addGame.emit();
  }
}
