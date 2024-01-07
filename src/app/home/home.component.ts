import { Component, signal } from '@angular/core';
import { NewGameCardComponent } from './ui/new-game-card/new-game-card.component';
import { AddNewGameModalComponent } from './ui/add-new-game-modal/add-new-game-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewGameCardComponent, AddNewGameModalComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  isAdding = signal<boolean>(false);

  setAdding(bool: boolean) {
    this.isAdding.set(bool);
  }
}
