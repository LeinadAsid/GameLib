import { Component } from '@angular/core';
import { NewGameCardComponent } from './ui/new-game-card/new-game-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewGameCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
}
